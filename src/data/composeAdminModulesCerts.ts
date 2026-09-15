export const ADMIN_MODULES_COMPOSE = `package com.armour.safety.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage

/**
 * Screen 14: Admin Modules Overview Screen
 */
@Composable
fun AdminModulesScreen(
    onInspectModuleClick: (moduleId: String) -> Unit,
    modifier: Modifier = Modifier
) {
    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Column {
                Text("Safety Modules Telemetry", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
                Text("Operational training module health & compliance rate", style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }

        // Module 1: Fire Safety
        item {
            AdminModuleDetailCard(
                modCode = "MOD-01",
                title = "Module 1: Fire Safety",
                imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBmAbWa6kzYa36x2XfwQLY8E3Nwhkmhx4pDO8SmkklRRhoBtrNswhzN2fUzYBonTDasgGIZnD6HGJffSfLSc0PAz8XqtbtN0h0vVEGICmBJ4uLlAhcaYwWrnC3SR6gPItb72gA_6FMQ_hatv4UdpUxHeMBbCE88cGvuhXwYY0RLgLDtyvjpl1WBdNTP8IWnCL-gagXJYka1EZMPxVrVmWenaLEC_P-xxBQ8Bp-Ya69OiVVD6tlmz0dYZA",
                trainees = "1,248",
                cohort = "Mining Ops Cohort",
                completion = "84%",
                completionDelta = "+4.2%",
                avgScore = "78.4%",
                threshold = "Threshold: 75.0%",
                passRate = "81.2%",
                passStatus = "Compliant",
                checkpoints = listOf("Hazard Identification", "PPE Selection", "Extinguisher Action", "Evacuation Route"),
                onInspectClick = { onInspectModuleClick("MOD-01") }
            )
        }

        // Module 2: Gas Leak Safety
        item {
            AdminModuleDetailCard(
                modCode = "MOD-02",
                title = "Module 2: Gas Leak Safety",
                imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBYz8SRXp3XVLdxd3fGkdfNxIliBSTOSmGg1ID1BcsRMeR8CdXgTghoIkcaKoyY096hOsIdvku116YWgTuCzJGDS6To2xrvVgukqTwi_6_Wx4LeKVuc3HpDGtvjT-oZw-iLqmg5fDPQmLcqJYIwdWhCPb5PDdmLGVP8VMHzb9NTafG24pDCpP2AlWqi26djRebzqgsBHu48rnuLB54YZ8j2jLax2cxpApL7ppAM8oevXoWWh0RMYxgK4A",
                trainees = "1,120",
                cohort = "Heavy Extraction Unit",
                completion = "68%",
                completionDelta = "In-Flight",
                avgScore = "69.1%",
                threshold = "Target: 75.0%",
                passRate = "71.5%",
                passStatus = "Re-test active",
                checkpoints = listOf("Gas Leak Detection", "Danger Zone Demarcation", "SCBA Donning", "Buddy Protocol"),
                onInspectClick = { onInspectModuleClick("MOD-02") }
            )
        }
    }
}

@Composable
fun AdminModuleDetailCard(
    modCode: String,
    title: String,
    imageUrl: String,
    trainees: String,
    cohort: String,
    completion: String,
    completionDelta: String,
    avgScore: String,
    threshold: String,
    passRate: String,
    passStatus: String,
    checkpoints: List<String>,
    onInspectClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        elevation = CardDefaults.cardElevation(2.dp)
    ) {
        Column {
            Box(modifier = Modifier.height(170.dp).fillMaxWidth()) {
                AsyncImage(
                    model = imageUrl,
                    contentDescription = title,
                    modifier = Modifier.fillMaxSize(),
                    contentScale = ContentScale.Crop
                )
                Surface(
                    shape = RoundedCornerShape(4.dp),
                    color = MaterialTheme.colorScheme.secondary,
                    modifier = Modifier.align(Alignment.TopStart).padding(12.dp)
                ) {
                    Text(
                        text = modCode,
                        color = Color.White,
                        fontWeight = FontWeight.Bold,
                        style = MaterialTheme.typography.labelSmall,
                        modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                    )
                }
                Surface(
                    shape = RoundedCornerShape(4.dp),
                    color = MaterialTheme.colorScheme.surface,
                    modifier = Modifier.align(Alignment.TopEnd).padding(12.dp)
                ) {
                    Text(
                        text = "ACTIVE MVP",
                        fontWeight = FontWeight.Bold,
                        style = MaterialTheme.typography.labelSmall,
                        modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                    )
                }
                Text(
                    text = title,
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold,
                    color = Color.White,
                    modifier = Modifier.align(Alignment.BottomStart).padding(12.dp)
                )
            }

            Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                // 2x2 Telemetry Grid
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        MetricBox(label = "TRAINEES ENROLLED", value = trainees, sub = cohort, modifier = Modifier.weight(1f))
                        MetricBox(label = "COMPLETION RATE", value = completion, sub = completionDelta, modifier = Modifier.weight(1f))
                    }
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        MetricBox(label = "AVERAGE SCORE", value = avgScore, sub = threshold, modifier = Modifier.weight(1f))
                        MetricBox(label = "PASS RATE", value = passRate, sub = passStatus, modifier = Modifier.weight(1f))
                    }
                }

                // Checkpoints
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                    Text("MANDATORY CHECKPOINTS", style = MaterialTheme.typography.labelSmall, fontWeight = FontWeight.Bold)
                    Text("4 / 4 Active", style = MaterialTheme.typography.labelSmall, color = Color(0xFF069669), fontWeight = FontWeight.Bold)
                }

                Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
                    checkpoints.chunked(2).forEach { rowItems ->
                        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                            rowItems.forEach { item ->
                                Surface(
                                    modifier = Modifier.weight(1f),
                                    shape = RoundedCornerShape(6.dp),
                                    color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                                ) {
                                    Row(
                                        modifier = Modifier.padding(8.dp),
                                        verticalAlignment = Alignment.CenterVertically,
                                        horizontalArrangement = Arrangement.spacedBy(6.dp)
                                    ) {
                                        Icon(Icons.Default.CheckCircle, contentDescription = null, tint = Color(0xFF069669), modifier = Modifier.size(16.dp))
                                        Text(item, style = MaterialTheme.typography.bodySmall, maxLines = 1)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun MetricBox(label: String, value: String, sub: String, modifier: Modifier = Modifier) {
    Surface(
        modifier = modifier,
        shape = RoundedCornerShape(8.dp),
        color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.4f)
    ) {
        Column(modifier = Modifier.padding(10.dp)) {
            Text(label, style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
            Text(value, fontWeight = FontWeight.Bold, fontSize = 20.sp)
            Text(sub, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}
`;

export const ADMIN_CERTIFICATES_COMPOSE = `package com.armour.safety.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog

/**
 * Screen 15: Admin Certificates / Regulatory Audit Ledger
 */
@Composable
fun AdminCertificatesScreen(
    onViewCertQr: (certId: String) -> Unit,
    modifier: Modifier = Modifier
) {
    var searchQuery by remember { mutableStateOf("") }
    var showQrModalForCert by remember { mutableStateOf<String?>("CERT-2025-0841") }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp)
    ) {
        item {
            Column {
                Text("Certificates", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
                Text("Issued vocational safety credentials", style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }

        // Summary 3-Column Metrics
        item {
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                CertSummaryCard(title = "TOTAL", count = "942", sub = "All logged", icon = Icons.Default.FolderSpecial, modifier = Modifier.weight(1f))
                CertSummaryCard(title = "VALID ACTIVE", count = "918", sub = "97.4% Rate", icon = Icons.Default.CheckCircle, color = Color(0xFF069669), modifier = Modifier.weight(1f))
                CertSummaryCard(title = "RE-ASSESS", count = "24", sub = "Requires sign-off", icon = Icons.Default.PendingActions, color = Color(0xFF904D00), modifier = Modifier.weight(1f))
            }
        }

        // Search Box
        item {
            OutlinedTextField(
                value = searchQuery,
                onValueChange = { searchQuery = it },
                placeholder = { Text("Search Certificate ID or Miner ID") },
                leadingIcon = { Icon(Icons.Default.Search, contentDescription = null) },
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(10.dp)
            )
        }

        // Certificate 1: Manoj Soren (Valid)
        item {
            AdminCertLedgerCard(
                certId = "#CERT-2025-0841",
                name = "Manoj Soren",
                minerId = "JH-MN-4029",
                module = "Fire Safety",
                score = "92.0%",
                date = "14 Oct 2025",
                status = "VALID",
                statusColor = Color(0xFF069669),
                onQrClick = { showQrModalForCert = "#CERT-2025-0841" }
            )
        }

        // Certificate 2: Sunita Hansda (Valid)
        item {
            AdminCertLedgerCard(
                certId = "#CERT-2025-0840",
                name = "Sunita Hansda",
                minerId = "JH-DH-8821",
                module = "Fire Safety",
                score = "82.5%",
                date = "12 Oct 2025",
                status = "VALID",
                statusColor = Color(0xFF069669),
                onQrClick = { showQrModalForCert = "#CERT-2025-0840" }
            )
        }

        // Certificate 3: Bikram Roy (Pending)
        item {
            AdminCertLedgerCard(
                certId = "#CERT-2025-0839",
                name = "Bikram Roy",
                minerId = "JH-BK-3301",
                module = "Gas Leak Safety",
                score = "68.0% (Min 70%)",
                date = "Pending Proctor",
                status = "PENDING",
                statusColor = Color(0xFF904D00),
                onQrClick = { showQrModalForCert = "#CERT-2025-0839" }
            )
        }

        // Certificate 4: Pravin Hembram (Revoked)
        item {
            AdminCertLedgerCard(
                certId = "#CERT-2024-0719",
                name = "Pravin Hembram",
                minerId = "JH-MN-1108",
                module = "Gas Leak Safety",
                score = "51.0% FAIL",
                date = "Violated Protocol",
                status = "REVOKED",
                statusColor = Color(0xFFBA1A1A),
                onQrClick = { showQrModalForCert = "#CERT-2024-0719" }
            )
        }
    }

    // Modal Dialog for Cryptographic Credential
    showQrModalForCert?.let { certNumber ->
        CredentialQrDialog(
            certNumber = certNumber,
            onDismiss = { showQrModalForCert = null },
            onExportPdf = {
                // Trigger PDF export action
                showQrModalForCert = null
            }
        )
    }
}

@Composable
fun CertSummaryCard(
    title: String,
    count: String,
    sub: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    modifier: Modifier = Modifier,
    color: Color = Color.Unspecified
) {
    Card(
        modifier = modifier,
        shape = RoundedCornerShape(10.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Column(modifier = Modifier.padding(10.dp)) {
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                Text(title, style = MaterialTheme.typography.labelSmall)
                Icon(icon, contentDescription = null, modifier = Modifier.size(16.dp), tint = if (color != Color.Unspecified) color else MaterialTheme.colorScheme.onSurfaceVariant)
            }
            Text(count, fontWeight = FontWeight.Bold, fontSize = 22.sp, color = if (color != Color.Unspecified) color else MaterialTheme.colorScheme.onSurface)
            Text(sub, style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

@Composable
fun AdminCertLedgerCard(
    certId: String,
    name: String,
    minerId: String,
    module: String,
    score: String,
    date: String,
    status: String,
    statusColor: Color,
    onQrClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(certId, style = MaterialTheme.typography.labelSmall, fontWeight = FontWeight.Bold, color = MaterialTheme.colorScheme.onSurfaceVariant)
                    Text(name, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                    Text("ID: $minerId", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                }

                Surface(
                    shape = RoundedCornerShape(4.dp),
                    color = statusColor.copy(alpha = 0.15f)
                ) {
                    Text(
                        text = status,
                        color = statusColor,
                        fontWeight = FontWeight.Bold,
                        style = MaterialTheme.typography.labelSmall,
                        modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                    )
                }
            }

            Surface(
                shape = RoundedCornerShape(8.dp),
                color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.4f),
                modifier = Modifier.fillMaxWidth()
            ) {
                Row(
                    modifier = Modifier.padding(10.dp),
                    horizontalArrangement = Arrangement.SpaceBetween
                ) {
                    Column {
                        Text("MODULE", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                        Text(module, style = MaterialTheme.typography.bodyMedium, fontWeight = FontWeight.SemiBold)
                        Text("Issued: $date", style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                    }
                    Column(horizontalAlignment = Alignment.End) {
                        Text("FINAL SCORE", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                        Text(score, fontWeight = FontWeight.Bold, color = statusColor, fontSize = 16.sp)
                    }
                }
            }

            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.End) {
                OutlinedButton(onClick = onQrClick, shape = RoundedCornerShape(8.dp)) {
                    Icon(Icons.Default.QrCode2, contentDescription = null, modifier = Modifier.size(18.dp))
                    Spacer(modifier = Modifier.width(6.dp))
                    Text("Verify Ledger")
                }
            }
        }
    }
}

@Composable
fun CredentialQrDialog(
    certNumber: String,
    onDismiss: () -> Unit,
    onExportPdf: () -> Unit
) {
    Dialog(onDismissRequest = onDismiss) {
        Card(
            shape = RoundedCornerShape(16.dp),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
            modifier = Modifier.fillMaxWidth().padding(16.dp)
        ) {
            Column(
                modifier = Modifier.padding(20.dp),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween, verticalAlignment = Alignment.CenterVertically) {
                    Text("Cryptographic Credential", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                    IconButton(onClick = onDismiss) {
                        Icon(Icons.Default.Close, contentDescription = "Close")
                    }
                }

                Surface(
                    shape = RoundedCornerShape(12.dp),
                    color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f),
                    modifier = Modifier.size(180.dp)
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Icon(
                            imageVector = Icons.Default.QrCode2,
                            contentDescription = "QR",
                            modifier = Modifier.size(140.dp),
                            tint = MaterialTheme.colorScheme.primary
                        )
                    }
                }

                Text(certNumber, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                Text(
                    text = "Scan using DGMS Handheld Inspector terminal to verify authentic state ledger hash.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )

                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    OutlinedButton(onClick = onDismiss, modifier = Modifier.weight(1f)) {
                        Text("Dismiss")
                    }
                    Button(onClick = onExportPdf, modifier = Modifier.weight(1f), colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary)) {
                        Text("Export PDF")
                    }
                }
            }
        }
    }
}
`;
