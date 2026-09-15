export const WORKER_LOGIN_COMPOSE = `package com.armour.safety.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage

/**
 * Screen 3: Worker Login Screen
 */
@Composable
fun WorkerLoginScreen(
    onEnterTerminalClick: (workerId: String, pin: String) -> Unit,
    onRegisterWorkerClick: () -> Unit,
    onForgotPasswordClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    var workerId by remember { mutableStateOf("WRK-4029") }
    var password by remember { mutableStateOf("849201") }
    var isPasswordVisible by remember { mutableStateOf(false) }

    Column(
        modifier = modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // App Top Bar / Logo
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            AsyncImage(
                model = "https://lh3.googleusercontent.com/aida-public/AB6AXuD5vwQiOmhcSGHUJFrWSYOP6sB9BpXEklbX71RauZ6KYnsqcbNnaN_-JcxmCoSqrj_siSLKe0jrdC0zdh6JywtEqVYjvmuiB5_fwZWo9xbQfAsvUSKGJcSh20lTCLvmPYvfuTpKUTqjrFehnT7U1fI4KjcaTHumPq_ZmVsp8Rn1h3ZdCeGufa8vvtuwyu4puhAle1VpDdTknKw570FC-BW_Io2YiTrbuWC5z560R0e6M97nYGpzbcbPa-_1YGlPHPx9SBY",
                contentDescription = "Logo",
                modifier = Modifier.height(30.dp)
            )
            Icon(
                imageVector = Icons.Default.AccountCircle,
                contentDescription = "User",
                modifier = Modifier.size(32.dp)
            )
        }

        // Hero Heading Card
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(14.dp),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primary)
        ) {
            Column(modifier = Modifier.padding(20.dp)) {
                Text(
                    text = "Worker Login",
                    style = MaterialTheme.typography.headlineMedium,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.onPrimary
                )
                Text(
                    text = "Sign in to continue your safety training",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onPrimary.copy(alpha = 0.8f)
                )
            }
        }

        // Form Card
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(16.dp),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
        ) {
            Column(
                modifier = Modifier.padding(16.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                // Worker ID Input
                Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween
                    ) {
                        Text("Worker ID", style = MaterialTheme.typography.titleSmall)
                        Text(
                            "FORMAT: WRK-XXXX",
                            style = MaterialTheme.typography.labelSmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                    OutlinedTextField(
                        value = workerId,
                        onValueChange = { workerId = it.uppercase() },
                        leadingIcon = {
                            Icon(Icons.Default.Engineering, contentDescription = null)
                        },
                        placeholder = { Text("e.g. WRK-4029") },
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(10.dp)
                    )
                }

                // Password Input
                Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text("Access PIN / Password", style = MaterialTheme.typography.titleSmall)
                        TextButton(
                            onClick = onForgotPasswordClick,
                            contentPadding = PaddingValues(0.dp)
                        ) {
                            Text("Forgot PIN?", style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.secondary)
                        }
                    }
                    OutlinedTextField(
                        value = password,
                        onValueChange = { password = it },
                        leadingIcon = {
                            Icon(Icons.Default.Lock, contentDescription = null)
                        },
                        trailingIcon = {
                            IconButton(onClick = { isPasswordVisible = !isPasswordVisible }) {
                                Icon(
                                    imageVector = if (isPasswordVisible) Icons.Default.Visibility else Icons.Default.VisibilityOff,
                                    contentDescription = "Toggle password"
                                )
                            }
                        },
                        visualTransformation = if (isPasswordVisible) VisualTransformation.None else PasswordVisualTransformation(),
                        keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password),
                        placeholder = { Text("Enter 6-digit PIN or password") },
                        modifier = Modifier.fillMaxWidth(),
                        shape = RoundedCornerShape(10.dp)
                    )
                }

                // Enter Training Terminal Button
                Button(
                    onClick = { onEnterTerminalClick(workerId, password) },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.dp),
                    shape = RoundedCornerShape(10.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.secondaryContainer)
                ) {
                    Icon(
                        imageVector = Icons.Default.Login,
                        contentDescription = null,
                        tint = MaterialTheme.colorScheme.onSecondaryContainer
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = "ENTER TRAINING TERMINAL",
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.onSecondaryContainer
                    )
                }

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    HorizontalDivider(modifier = Modifier.weight(1f))
                    Text(
                        text = "  OR NEW TO ARMOUR?  ",
                        style = MaterialTheme.typography.labelSmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    HorizontalDivider(modifier = Modifier.weight(1f))
                }

                OutlinedButton(
                    onClick = onRegisterWorkerClick,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(48.dp),
                    shape = RoundedCornerShape(10.dp)
                ) {
                    Icon(Icons.Default.PersonAdd, contentDescription = null)
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("Register as New Worker", fontWeight = FontWeight.SemiBold)
                }
            }
        }
    }
}
`;

export const ADMIN_LOGIN_COMPOSE = `package com.armour.safety.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage

/**
 * Screen 4: Admin Login Screen
 */
@Composable
fun AdminLoginScreen(
    onSignInClick: (email: String, pass: String) -> Unit,
    onRegisterAdminClick: () -> Unit,
    onForgotPasswordClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    var adminEmail by remember { mutableStateOf("admin@safetytrain.org") }
    var adminPassword by remember { mutableStateOf("••••••••••••") }
    var isPasswordVisible by remember { mutableStateOf(false) }

    Column(
        modifier = modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        Spacer(modifier = Modifier.height(16.dp))

        AsyncImage(
            model = "https://lh3.googleusercontent.com/aida-public/AB6AXuD5vwQiOmhcSGHUJFrWSYOP6sB9BpXEklbX71RauZ6KYnsqcbNnaN_-JcxmCoSqrj_siSLKe0jrdC0zdh6JywtEqVYjvmuiB5_fwZWo9xbQfAsvUSKGJcSh20lTCLvmPYvfuTpKUTqjrFehnT7U1fI4KjcaTHumPq_ZmVsp8Rn1h3ZdCeGufa8vvtuwyu4puhAle1VpDdTknKw570FC-BW_Io2YiTrbuWC5z560R0e6M97nYGpzbcbPa-_1YGlPHPx9SBY",
            contentDescription = "Logo",
            modifier = Modifier.height(34.dp)
        )

        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(16.dp),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
            elevation = CardDefaults.cardElevation(defaultElevation = 2.dp)
        ) {
            Column(
                modifier = Modifier.padding(20.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                Column {
                    Text(
                        text = "Admin Login",
                        style = MaterialTheme.typography.headlineSmall,
                        fontWeight = FontWeight.Bold
                    )
                    Text(
                        text = "Sign in to manage trainee training and safety assessments.",
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }

                OutlinedTextField(
                    value = adminEmail,
                    onValueChange = { adminEmail = it },
                    label = { Text("Official Email / Admin ID") },
                    leadingIcon = { Icon(Icons.Default.Badge, contentDescription = null) },
                    placeholder = { Text("admin@safetytrain.org") },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(10.dp)
                )

                OutlinedTextField(
                    value = adminPassword,
                    onValueChange = { adminPassword = it },
                    label = { Text("Password") },
                    leadingIcon = { Icon(Icons.Default.Lock, contentDescription = null) },
                    trailingIcon = {
                        IconButton(onClick = { isPasswordVisible = !isPasswordVisible }) {
                            Icon(
                                imageVector = if (isPasswordVisible) Icons.Default.Visibility else Icons.Default.VisibilityOff,
                                contentDescription = "Toggle password"
                            )
                        }
                    },
                    visualTransformation = if (isPasswordVisible) VisualTransformation.None else PasswordVisualTransformation(),
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(10.dp)
                )

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.End
                ) {
                    TextButton(onClick = onForgotPasswordClick) {
                        Text("Forgot password?", color = MaterialTheme.colorScheme.secondary, fontWeight = FontWeight.SemiBold)
                    }
                }

                Button(
                    onClick = { onSignInClick(adminEmail, adminPassword) },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(52.dp),
                    shape = RoundedCornerShape(12.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.secondaryContainer)
                ) {
                    Row(verticalAlignment = Alignment.CenterVertically) {
                        Text(
                            "SIGN IN",
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.onSecondaryContainer,
                            fontSize = 16.sp
                        )
                        Spacer(modifier = Modifier.width(8.dp))
                        Icon(
                            Icons.Default.ArrowForward,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.onSecondaryContainer
                        )
                    }
                }

                HorizontalDivider()

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text("New to ARmour?", style = MaterialTheme.typography.bodyMedium)
                    Spacer(modifier = Modifier.width(4.dp))
                    TextButton(onClick = onRegisterAdminClick) {
                        Text("Register as Admin", color = MaterialTheme.colorScheme.secondary, fontWeight = FontWeight.Bold)
                    }
                }
            }
        }

        Text(
            text = "SIH 2026 Prototype",
            style = MaterialTheme.typography.labelSmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
    }
}
`;

export const REGISTRATION_COMPOSE = `package com.armour.safety.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.PasswordVisualTransformation
import androidx.compose.ui.text.input.VisualTransformation
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage

/**
 * Screen 5: New User Registration Screen
 */
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun RegistrationScreen(
    onCreateProfileClick: (firstName: String, surname: String, id: String, division: String) -> Unit,
    onBackClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    var firstName by remember { mutableStateOf("Manoj") }
    var surname by remember { mutableStateOf("Soren") }
    var workerOrAdminId by remember { mutableStateOf("JH-MN-4029") }
    var selectedDivision by remember { mutableStateOf("Jharia Collieries — Seam 9 & 10 (Zone V)") }
    var password by remember { mutableStateOf("••••••••") }
    var confirmPassword by remember { mutableStateOf("••••••••") }
    var isExpanded by remember { mutableStateOf(false) }

    val divisions = listOf(
        "Jharia Collieries — Seam 9 & 10 (Zone V)",
        "Raniganj Deep Incline — Shaft 4",
        "Singrauli Surface Pit — Haulage Sector 2",
        "Korba West Complex — Section B",
        "Godavari Basin Adit — Drift 12"
    )

    Column(
        modifier = modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp)
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically
        ) {
            IconButton(onClick = onBackClick) {
                Icon(Icons.Default.ArrowBack, contentDescription = "Back")
            }
            AsyncImage(
                model = "https://lh3.googleusercontent.com/aida-public/AB6AXuD5vwQiOmhcSGHUJFrWSYOP6sB9BpXEklbX71RauZ6KYnsqcbNnaN_-JcxmCoSqrj_siSLKe0jrdC0zdh6JywtEqVYjvmuiB5_fwZWo9xbQfAsvUSKGJcSh20lTCLvmPYvfuTpKUTqjrFehnT7U1fI4KjcaTHumPq_ZmVsp8Rn1h3ZdCeGufa8vvtuwyu4puhAle1VpDdTknKw570FC-BW_Io2YiTrbuWC5z560R0e6M97nYGpzbcbPa-_1YGlPHPx9SBY",
                contentDescription = "Logo",
                modifier = Modifier.height(26.dp)
            )
        }

        Text(
            text = "New User Registration",
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.Bold
        )

        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(12.dp),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
        ) {
            Column(
                modifier = Modifier.padding(16.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                // Name Row
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    OutlinedTextField(
                        value = firstName,
                        onValueChange = { firstName = it },
                        label = { Text("First Name *") },
                        modifier = Modifier.weight(1f),
                        shape = RoundedCornerShape(8.dp)
                    )
                    OutlinedTextField(
                        value = surname,
                        onValueChange = { surname = it },
                        label = { Text("Surname *") },
                        modifier = Modifier.weight(1f),
                        shape = RoundedCornerShape(8.dp)
                    )
                }

                // Worker ID
                OutlinedTextField(
                    value = workerOrAdminId,
                    onValueChange = { workerOrAdminId = it.uppercase() },
                    label = { Text("Worker ID / Admin ID *") },
                    leadingIcon = { Icon(Icons.Default.Badge, contentDescription = null) },
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(8.dp)
                )

                // Division Dropdown
                ExposedDropdownMenuBox(
                    expanded = isExpanded,
                    onExpandedChange = { isExpanded = !isExpanded }
                ) {
                    OutlinedTextField(
                        value = selectedDivision,
                        onValueChange = {},
                        readOnly = true,
                        label = { Text("Assigned Operational Division *") },
                        leadingIcon = { Icon(Icons.Default.PrecisionManufacturing, contentDescription = null) },
                        trailingIcon = { ExposedDropdownMenuDefaults.TrailingIcon(expanded = isExpanded) },
                        modifier = Modifier
                            .fillMaxWidth()
                            .menuAnchor(),
                        shape = RoundedCornerShape(8.dp)
                    )
                    ExposedDropdownMenu(
                        expanded = isExpanded,
                        onDismissRequest = { isExpanded = false }
                    ) {
                        divisions.forEach { div ->
                            DropdownMenuItem(
                                text = { Text(div) },
                                onClick = {
                                    selectedDivision = div
                                    isExpanded = false
                                }
                            )
                        }
                    }
                }

                // Passwords
                OutlinedTextField(
                    value = password,
                    onValueChange = { password = it },
                    label = { Text("Terminal Password *") },
                    leadingIcon = { Icon(Icons.Default.Lock, contentDescription = null) },
                    visualTransformation = PasswordVisualTransformation(),
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(8.dp)
                )

                OutlinedTextField(
                    value = confirmPassword,
                    onValueChange = { confirmPassword = it },
                    label = { Text("Confirm Terminal Password *") },
                    leadingIcon = { Icon(Icons.Default.LockClock, contentDescription = null) },
                    visualTransformation = PasswordVisualTransformation(),
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(8.dp)
                )

                Spacer(modifier = Modifier.height(6.dp))

                Button(
                    onClick = {
                        onCreateProfileClick(firstName, surname, workerOrAdminId, selectedDivision)
                    },
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(50.dp),
                    shape = RoundedCornerShape(8.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.secondaryContainer)
                ) {
                    Text(
                        "Create Profile",
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.onSecondaryContainer,
                        fontSize = 15.sp
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Icon(
                        Icons.Default.ArrowForward,
                        contentDescription = null,
                        tint = MaterialTheme.colorScheme.onSecondaryContainer
                    )
                }
            }
        }
    }
}
`;
