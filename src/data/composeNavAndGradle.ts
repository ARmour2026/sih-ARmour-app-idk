export const MAIN_ACTIVITY_COMPOSE = `package com.armour.safety

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import com.armour.safety.ui.localization.AppLanguage
import com.armour.safety.ui.localization.LocalAppLanguage
import com.armour.safety.ui.navigation.ARmourNavGraph
import com.armour.safety.ui.theme.ARmourTheme

/**
 * Main Activity
 * Hosts the central multilingual state (English, Hindi, Santhali)
 * and distributes it via LocalAppLanguage CompositionLocal.
 */
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            // Global Multilingual / Localization State
            var currentLanguage by rememberSaveable { mutableStateOf(AppLanguage.ENGLISH) }

            CompositionLocalProvider(LocalAppLanguage provides currentLanguage) {
                ARmourTheme {
                    ARmourNavGraph(
                        currentLanguage = currentLanguage,
                        onLanguageSelected = { selectedLanguage ->
                            currentLanguage = selectedLanguage
                        }
                    )
                }
            }
        }
    }
}
`;

export const NAV_GRAPH_COMPOSE = `package com.armour.safety.ui.navigation

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.armour.safety.ui.localization.AppLanguage
import com.armour.safety.ui.screens.*

sealed class Screen(val route: String, val title: String, val icon: androidx.compose.ui.graphics.vector.ImageVector? = null) {
    // 1. Initial Launch Destination
    object LanguageSelection : Screen("language_selection", "Language")
    
    // 2. Role Selection Destination
    object RoleSelection : Screen("role_selection", "Role Selection")
    
    object WorkerLogin : Screen("worker_login", "Worker Login")
    object AdminLogin : Screen("admin_login", "Admin Login")
    object Registration : Screen("registration", "Registration")
    object ForgotPassword : Screen("forgot_password", "Forgot Password")
    
    // 3. Main Home Destinations
    object WorkerDashboard : Screen("worker_dashboard", "Overview", Icons.Default.Dashboard)
    object WorkerModules : Screen("worker_modules", "Modules", Icons.Default.ViewInAr)
    object DrillResult : Screen("drill_result", "Drill Result")
    object WorkerCertificates : Screen("worker_certificates", "Certificates", Icons.Default.Verified)
    object WorkerSettings : Screen("worker_settings", "Settings", Icons.Default.Settings)

    // Admin / Supervisor destinations
    object AdminDashboard : Screen("admin_dashboard", "Dashboard", Icons.Default.Dashboard)
    object AdminTrainees : Screen("admin_trainees", "Trainees", Icons.Default.Group)
    object AdminTraineeDetail : Screen("admin_trainee_detail/{traineeId}", "Trainee Detail")
    object AdminModules : Screen("admin_modules", "Modules", Icons.Default.ViewInAr)
    object AdminCertificates : Screen("admin_certificates", "Certs", Icons.Default.Verified)
}

/**
 * Central Navigation Graph with direct screen flow:
 * Flow: Language Selection Screen -> Role Selection Screen -> Main Home Screen
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ARmourNavGraph(
    currentLanguage: AppLanguage,
    onLanguageSelected: (AppLanguage) -> Unit,
    navController: NavHostController = rememberNavController()
) {
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    val isWorkerScreen = currentRoute in listOf(
        Screen.WorkerDashboard.route,
        Screen.WorkerModules.route,
        Screen.WorkerCertificates.route,
        Screen.WorkerSettings.route
    )

    val isAdminScreen = currentRoute in listOf(
        Screen.AdminDashboard.route,
        Screen.AdminTrainees.route,
        Screen.AdminModules.route,
        Screen.AdminCertificates.route
    )

    Scaffold(
        bottomBar = {
            if (isWorkerScreen) {
                NavigationBar {
                    listOf(
                        Screen.WorkerDashboard,
                        Screen.WorkerModules,
                        Screen.WorkerCertificates,
                        Screen.WorkerSettings
                    ).forEach { screen ->
                        NavigationBarItem(
                            selected = currentRoute == screen.route,
                            onClick = { navController.navigate(screen.route) },
                            icon = { Icon(screen.icon!!, contentDescription = screen.title) },
                            label = { Text(screen.title) }
                        )
                    }
                }
            } else if (isAdminScreen) {
                NavigationBar {
                    listOf(
                        Screen.AdminDashboard,
                        Screen.AdminTrainees,
                        Screen.AdminModules,
                        Screen.AdminCertificates
                    ).forEach { screen ->
                        NavigationBarItem(
                            selected = currentRoute == screen.route,
                            onClick = { navController.navigate(screen.route) },
                            icon = { Icon(screen.icon!!, contentDescription = screen.title) },
                            label = { Text(screen.title) }
                        )
                    }
                }
            }
        }
    ) { innerPadding ->
        NavHost(
            navController = navController,
            startDestination = Screen.LanguageSelection.route,
            modifier = Modifier.padding(innerPadding)
        ) {
            // STEP 1: Language Selection Screen (First / Launch Screen)
            composable(Screen.LanguageSelection.route) {
                LanguageSelectionScreen(
                    currentLanguage = currentLanguage,
                    onLanguageSelected = { lang ->
                        onLanguageSelected(lang)
                    },
                    onNext = {
                        navController.navigate(Screen.RoleSelection.route)
                    }
                )
            }

            // STEP 2: Role Selection Screen (Student vs Teacher)
            composable(Screen.RoleSelection.route) {
                RoleSelectionScreen(
                    onRoleSelected = { role ->
                        // Callback for role selected
                    },
                    onNext = { selectedRole ->
                        // Direct navigation flow to Main Home Screen!
                        if (selectedRole.contains("admin", ignoreCase = true) || 
                            selectedRole.contains("teacher", ignoreCase = true)) {
                            navController.navigate(Screen.AdminDashboard.route)
                        } else {
                            navController.navigate(Screen.WorkerDashboard.route)
                        }
                    },
                    onBack = {
                        navController.navigate(Screen.LanguageSelection.route)
                    }
                )
            }

            composable(Screen.WorkerLogin.route) {
                WorkerLoginScreen(
                    onEnterTerminalClick = { _, _ -> navController.navigate(Screen.WorkerDashboard.route) },
                    onRegisterWorkerClick = { navController.navigate(Screen.Registration.route) },
                    onForgotPasswordClick = { navController.navigate(Screen.ForgotPassword.route) }
                )
            }

            composable(Screen.AdminLogin.route) {
                AdminLoginScreen(
                    onSignInClick = { _, _ -> navController.navigate(Screen.AdminDashboard.route) },
                    onRegisterAdminClick = { navController.navigate(Screen.Registration.route) },
                    onForgotPasswordClick = { navController.navigate(Screen.ForgotPassword.route) }
                )
            }

            composable(Screen.Registration.route) {
                RegistrationScreen(
                    onCreateProfileClick = { _, _, _, _ -> navController.navigate(Screen.RoleSelection.route) },
                    onBackClick = { navController.popBackStack() }
                )
            }

            composable(Screen.ForgotPassword.route) {
                ForgotPasswordScreen(
                    onContinueClick = { navController.popBackStack() },
                    onBackToLoginClick = { navController.popBackStack() }
                )
            }

            // STEP 3: Main Home Screen (Worker / Student Dashboard)
            composable(Screen.WorkerDashboard.route) {
                WorkerDashboardScreen(
                    onOpenArView = { navController.navigate(Screen.DrillResult.route) },
                    onResumeModuleClick = { navController.navigate(Screen.WorkerModules.route) },
                    onReviewModuleClick = { navController.navigate(Screen.DrillResult.route) }
                )
            }

            composable(Screen.WorkerModules.route) {
                WorkerModulesScreen(
                    onPracticeModuleClick = { navController.navigate(Screen.DrillResult.route) },
                    onBackClick = { navController.popBackStack() }
                )
            }

            composable(Screen.DrillResult.route) {
                DrillResultScreen(
                    onSubmit = { navController.navigate(Screen.WorkerCertificates.route) },
                    onRetry = { navController.navigate(Screen.WorkerDashboard.route) },
                    onReturnToModulesClick = { navController.navigate(Screen.WorkerModules.route) },
                    onRetakeDrillClick = { /* Launch AR simulation */ }
                )
            }

            composable(Screen.WorkerCertificates.route) {
                WorkerCertificatesScreen(
                    onPrintPdfClick = { /* Generate and share PDF */ },
                    onShareCertClick = { /* Android Share Intent */ },
                    onViewQrClick = { /* Display QR Modal */ }
                )
            }

            composable(Screen.WorkerSettings.route) {
                WorkerSettingsScreen(
                    onLanguageChange = { navController.navigate(Screen.LanguageSelection.route) },
                    onLogoutClick = { navController.navigate(Screen.LanguageSelection.route) }
                )
            }

            // Admin / Teacher Main Home Flow
            composable(Screen.AdminDashboard.route) {
                AdminDashboardScreen(
                    onViewAuditLogClick = { navController.navigate(Screen.AdminCertificates.route) },
                    onTraineeClick = { traineeId -> navController.navigate("admin_trainee_detail/$traineeId") }
                )
            }

            composable(Screen.AdminTrainees.route) {
                AdminTraineesScreen(
                    onSelectTrainee = { traineeId -> navController.navigate("admin_trainee_detail/$traineeId") },

            composable(Screen.WorkerLogin.route) {
                WorkerLoginScreen(
                    onEnterTerminalClick = { _, _ -> navController.navigate(Screen.WorkerDashboard.route) },
                    onRegisterWorkerClick = { navController.navigate(Screen.Registration.route) },
                    onForgotPasswordClick = { navController.navigate(Screen.ForgotPassword.route) }
                )
            }

            composable(Screen.AdminLogin.route) {
                AdminLoginScreen(
                    onSignInClick = { _, _ -> navController.navigate(Screen.AdminDashboard.route) },
                    onRegisterAdminClick = { navController.navigate(Screen.Registration.route) },
                    onForgotPasswordClick = { navController.navigate(Screen.ForgotPassword.route) }
                )
            }

            composable(Screen.Registration.route) {
                RegistrationScreen(
                    onCreateProfileClick = { _, _, _, _ -> navController.navigate(Screen.RoleSelection.route) },
                    onBackClick = { navController.popBackStack() }
                )
            }

            composable(Screen.ForgotPassword.route) {
                ForgotPasswordScreen(
                    onContinueClick = { navController.popBackStack() },
                    onBackToLoginClick = { navController.popBackStack() }
                )
            }

            // Worker Flow
            composable(Screen.WorkerDashboard.route) {
                WorkerDashboardScreen(
                    onStartTrainingClick = { navController.navigate(Screen.DrillResult.route) },
                    onResumeModuleClick = { navController.navigate(Screen.WorkerModules.route) },
                    onReviewModuleClick = { navController.navigate(Screen.DrillResult.route) }
                )
            }

            composable(Screen.WorkerModules.route) {
                WorkerModulesScreen(
                    onPracticeModuleClick = { navController.navigate(Screen.DrillResult.route) },
                    onBackClick = { navController.popBackStack() }
                )
            }

            composable(Screen.DrillResult.route) {
                DrillResultScreen(
                    onReturnToModulesClick = { navController.navigate(Screen.WorkerModules.route) },
                    onRetakeDrillClick = { /* Launch AR camera simulation */ }
                )
            }

            composable(Screen.WorkerCertificates.route) {
                WorkerCertificatesScreen(
                    onPrintPdfClick = { /* Generate and share PDF */ },
                    onShareCertClick = { /* Android Share Intent */ },
                    onViewQrClick = { /* Display QR Modal */ }
                )
            }

            composable(Screen.WorkerSettings.route) {
                WorkerSettingsScreen(
                    onLanguageChange = { /* Update Locale */ },
                    onLogoutClick = { navController.navigate(Screen.RoleSelection.route) }
                )
            }

            // Admin Flow
            composable(Screen.AdminDashboard.route) {
                AdminDashboardScreen(
                    onViewAuditLogClick = { navController.navigate(Screen.AdminCertificates.route) },
                    onTraineeClick = { traineeId -> navController.navigate("admin_trainee_detail/$traineeId") }
                )
            }

            composable(Screen.AdminTrainees.route) {
                AdminTraineesScreen(
                    onSelectTrainee = { traineeId -> navController.navigate("admin_trainee_detail/$traineeId") },
                    onAddTraineeClick = { navController.navigate(Screen.Registration.route) },
                    onLoadMoreClick = { /* Paginate */ }
                )
            }

            composable(Screen.AdminTraineeDetail.route) { backStackEntry ->
                val traineeId = backStackEntry.arguments?.getString("traineeId") ?: "t-1"
                AdminTraineeDetailScreen(
                    traineeId = traineeId,
                    onBackClick = { navController.popBackStack() },
                    onViewAttemptClick = { navController.navigate(Screen.DrillResult.route) }
                )
            }

            composable(Screen.AdminModules.route) {
                AdminModulesScreen(
                    onInspectModuleClick = { /* Filter telemetry */ }
                )
            }

            composable(Screen.AdminCertificates.route) {
                AdminCertificatesScreen(
                    onViewCertQr = { /* Show QR code inspection dialog */ }
                )
            }
        }
    }
}
`;

export const BUILD_GRADLE_COMPOSE = `plugins {
    alias(libs.plugins.android.application)
    alias(libs.plugins.kotlin.android)
    alias(libs.plugins.kotlin.compose)
}

android {
    namespace = "com.armour.safety"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.armour.safety"
        minSdk = 24
        targetSdk = 35
        versionCode = 1
        versionName = "1.0.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildFeatures {
        compose = true
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    kotlinOptions {
        jvmTarget = "17"
    }
}

dependencies {
    // Jetpack Compose BOM
    val composeBom = platform("androidx.compose:compose-bom:2024.09.02")
    implementation(composeBom)
    androidTestImplementation(composeBom)

    // Material 3 & Compose Core
    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-graphics")
    implementation("androidx.compose.ui:ui-tooling-preview")
    debugImplementation("androidx.compose.ui:ui-tooling")

    // Material Icons Extended
    implementation("androidx.compose.material:material-icons-extended")

    // Navigation Compose
    implementation("androidx.navigation:navigation-compose:2.8.1")

    // Coil for AsyncImage loading (Hotlinked images)
    implementation("io.coil-kt:coil-compose:2.7.0")

    // AndroidX Activity & Lifecycle
    implementation("androidx.activity:activity-compose:1.9.2")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.8.6")
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.6")
}
`;
