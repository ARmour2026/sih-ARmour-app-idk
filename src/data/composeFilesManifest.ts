import { ComposeFile } from '../types';
import { COMPOSE_THEME_CODE } from './composeTheme';
import { APP_LANGUAGE_COMPOSE } from './composeLocalization';
import { FORGOT_PASSWORD_COMPOSE, LANGUAGE_SELECTION_COMPOSE, ROLE_SELECTION_COMPOSE } from './composeAuthScreens';
import { ADMIN_LOGIN_COMPOSE, REGISTRATION_COMPOSE, WORKER_LOGIN_COMPOSE } from './composeLoginScreens';
import { DRILL_RESULT_COMPOSE, WORKER_DASHBOARD_COMPOSE, WORKER_MODULES_COMPOSE } from './composeWorkerScreens';
import { WORKER_CERTIFICATES_COMPOSE, WORKER_SETTINGS_COMPOSE } from './composeWorkerCertScreens';
import { ADMIN_DASHBOARD_COMPOSE, ADMIN_TRAINEE_DETAIL_COMPOSE, ADMIN_TRAINEES_COMPOSE } from './composeAdminScreens';
import { ADMIN_CERTIFICATES_COMPOSE, ADMIN_MODULES_COMPOSE } from './composeAdminModulesCerts';
import { BUILD_GRADLE_COMPOSE, MAIN_ACTIVITY_COMPOSE, NAV_GRAPH_COMPOSE } from './composeNavAndGradle';
import { STRINGS_EN_XML, STRINGS_HI_XML, STRINGS_SAT_XML } from './stringResources';

export const ALL_COMPOSE_FILES: ComposeFile[] = [
  {
    id: 'app_language',
    name: 'AppLanguage.kt',
    category: 'component',
    packagePath: 'com.armour.safety.ui.localization.AppLanguage.kt',
    description: 'Global Multilingual State, LocalAppLanguage CompositionLocal, & Dynamic Translation Dictionary (English, Hindi, Santhali)',
    code: APP_LANGUAGE_COMPOSE
  },
  {
    id: 'strings_en',
    name: 'strings.xml (English)',
    category: 'res',
    packagePath: 'res/values/strings.xml',
    description: 'Default English String Resources for all 16 screens, dialogues, and accessibility labels',
    code: STRINGS_EN_XML
  },
  {
    id: 'strings_hi',
    name: 'strings.xml (Hindi - हिन्दी)',
    category: 'res',
    packagePath: 'res/values-hi/strings.xml',
    description: 'Complete Devanagari Hindi localization for all training screens, navigation, and audit alerts',
    code: STRINGS_HI_XML
  },
  {
    id: 'strings_sat',
    name: 'strings.xml (Santali - ᱥᱟᱱᱛᱟᱲᱤ)',
    category: 'res',
    packagePath: 'res/values-sat/strings.xml',
    description: 'Complete Santali (Ol Chiki ᱥᱟᱱᱛᱟᱲᱤ script) localization for tribal vocational safety training',
    code: STRINGS_SAT_XML
  },
  {
    id: 'theme',
    name: 'Theme.kt',
    category: 'theme',
    packagePath: 'ui/theme/Theme.kt',
    description: 'Material 3 industrial color palette, typography hierarchy, and ARmourTheme composable definition',
    code: COMPOSE_THEME_CODE
  },
  {
    id: 'main_activity',
    name: 'MainActivity.kt',
    category: 'component',
    packagePath: 'MainActivity.kt',
    description: 'Android ComponentActivity entry point with edge-to-edge support and Compose content',
    code: MAIN_ACTIVITY_COMPOSE
  },
  {
    id: 'nav_graph',
    name: 'ARmourNavGraph.kt',
    category: 'navigation',
    packagePath: 'ui/navigation/ARmourNavGraph.kt',
    description: 'Jetpack Compose NavHost wiring initial LanguageSelection -> RoleSelection -> Login -> Workflows',
    code: NAV_GRAPH_COMPOSE
  },
  {
    id: 'language_selection',
    name: 'LanguageSelectionScreen.kt',
    category: 'screen',
    screenId: 'language_selection',
    packagePath: 'ui/screens/LanguageSelectionScreen.kt',
    description: 'Screen 1: First screen upon app launch for dialect onboarding (English, हिन्दी, ᱥᱟᱱᱛᱟᱲᱤ)',
    code: LANGUAGE_SELECTION_COMPOSE
  },
  {
    id: 'role_selection',
    name: 'RoleSelectionScreen.kt',
    category: 'screen',
    screenId: 'role_selection',
    packagePath: 'ui/screens/RoleSelectionScreen.kt',
    description: 'Screen 2: Role Selection between Worker (Interactive AR) and Admin (Authentication Required)',
    code: ROLE_SELECTION_COMPOSE
  },
  {
    id: 'worker_login',
    name: 'WorkerLoginScreen.kt',
    category: 'screen',
    screenId: 'worker_login',
    packagePath: 'ui/screens/WorkerLoginScreen.kt',
    description: 'Screen 3: Field worker credential entry with PIN visibility toggle and rapid quick-fill',
    code: WORKER_LOGIN_COMPOSE
  },
  {
    id: 'admin_login',
    name: 'AdminLoginScreen.kt',
    category: 'screen',
    screenId: 'admin_login',
    packagePath: 'ui/screens/AdminLoginScreen.kt',
    description: 'Screen 4: High-contrast supervisory authentication portal for mining sector inspectors',
    code: ADMIN_LOGIN_COMPOSE
  },
  {
    id: 'registration',
    name: 'RegistrationScreen.kt',
    category: 'screen',
    screenId: 'registration',
    packagePath: 'ui/screens/RegistrationScreen.kt',
    description: 'Screen 5: New candidate registration form with division dropdown and credential assignment',
    code: REGISTRATION_COMPOSE
  },
  {
    id: 'forgot_password',
    name: 'ForgotPasswordScreen.kt',
    category: 'screen',
    screenId: 'forgot_password',
    packagePath: 'ui/screens/ForgotPasswordScreen.kt',
    description: 'Screen 6: Recovery screen for forgotten field credentials or supervisory tokens',
    code: FORGOT_PASSWORD_COMPOSE
  },
  {
    id: 'worker_dashboard',
    name: 'WorkerDashboardScreen.kt',
    category: 'screen',
    screenId: 'worker_dashboard',
    packagePath: 'ui/screens/WorkerDashboardScreen.kt',
    description: 'Screen 7: Trainee telemetry center, hero AR drill trigger, 3-metric strip & module status',
    code: WORKER_DASHBOARD_COMPOSE
  },
  {
    id: 'worker_modules',
    name: 'WorkerModulesScreen.kt',
    category: 'screen',
    screenId: 'worker_modules',
    packagePath: 'ui/screens/WorkerModulesScreen.kt',
    description: 'Screen 8: Scenario catalog (MOD-01 Fire Safety & MOD-02 Gas Leak) with Coil AsyncImage',
    code: WORKER_MODULES_COMPOSE
  },
  {
    id: 'drill_result',
    name: 'DrillResultScreen.kt',
    category: 'screen',
    screenId: 'drill_result',
    packagePath: 'ui/screens/DrillResultScreen.kt',
    description: 'Screen 9: Post-simulation audit score (92/100), hazard detection & PPE compliance breakdown',
    code: DRILL_RESULT_COMPOSE
  },
  {
    id: 'worker_certificates',
    name: 'WorkerCertificatesScreen.kt',
    category: 'screen',
    screenId: 'worker_certificates',
    packagePath: 'ui/screens/WorkerCertificatesScreen.kt',
    description: 'Screen 10: Issued vocational safety credentials with Print/PDF and QR Code inspection hooks',
    code: WORKER_CERTIFICATES_COMPOSE
  },
  {
    id: 'worker_settings',
    name: 'WorkerSettingsScreen.kt',
    category: 'screen',
    screenId: 'worker_settings',
    packagePath: 'ui/screens/WorkerSettingsScreen.kt',
    description: 'Screen 11: Worker profile card, training progress indicator, language preferences & logout',
    code: WORKER_SETTINGS_COMPOSE
  },
  {
    id: 'admin_dashboard',
    name: 'AdminDashboardScreen.kt',
    category: 'screen',
    screenId: 'admin_dashboard',
    packagePath: 'ui/screens/AdminDashboardScreen.kt',
    description: 'Screen 12: High-density 2x2 KPI matrix, period filters, module completion and recent attempts',
    code: ADMIN_DASHBOARD_COMPOSE
  },
  {
    id: 'admin_trainees',
    name: 'AdminTraineesScreen.kt',
    category: 'screen',
    screenId: 'admin_trainees',
    packagePath: 'ui/screens/AdminTraineesScreen.kt',
    description: 'Screen 13: Trainee directory with search, status filters, compliance tags and pagination',
    code: ADMIN_TRAINEES_COMPOSE
  },
  {
    id: 'admin_trainee_detail',
    name: 'AdminTraineeDetailScreen.kt',
    category: 'screen',
    screenId: 'admin_trainee_detail',
    packagePath: 'ui/screens/AdminTraineeDetailScreen.kt',
    description: 'Screen 14: Comprehensive individual worker dossier, decision competency index & attempt history',
    code: ADMIN_TRAINEE_DETAIL_COMPOSE
  },
  {
    id: 'admin_modules',
    name: 'AdminModulesScreen.kt',
    category: 'screen',
    screenId: 'admin_modules',
    packagePath: 'ui/screens/AdminModulesScreen.kt',
    description: 'Screen 15: Operational module health cards with mandatory checkpoints and syllabus analytics',
    code: ADMIN_MODULES_COMPOSE
  },
  {
    id: 'admin_certificates',
    name: 'AdminCertificatesScreen.kt',
    category: 'screen',
    screenId: 'admin_certificates',
    packagePath: 'ui/screens/AdminCertificatesScreen.kt',
    description: 'Screen 16: Regulatory credential ledger with search, state tags and cryptographic QR modal dialog',
    code: ADMIN_CERTIFICATES_COMPOSE
  },
  {
    id: 'build_gradle',
    name: 'build.gradle.kts',
    category: 'gradle',
    packagePath: 'app/build.gradle.kts',
    description: 'Gradle configuration with Compose BOM, Material3, Coil 2.7.0, and Navigation Compose',
    code: BUILD_GRADLE_COMPOSE
  }
];
