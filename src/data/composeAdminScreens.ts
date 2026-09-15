export const ADMIN_DASHBOARD_COMPOSE = `package com.armour.safety.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage

/**
 * Screen 11: Admin Dashboard Screen
 */
@Composable
fun AdminDashboardScreen(
    onViewAuditLogClick: () -> Unit,
    onTraineeClick: (traineeId: String) -> Unit,
    modifier: Modifier = Modifier
) {
    var selectedPeriod by remember { mutableStateOf("all") }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Column {
                Text(
                    text = "Admin Dashboard",
                    style = MaterialTheme.typography.headlineMedium,
                    fontWeight = FontWeight.Bold
                )
                Text(
                    text = "Vocational AR safety training & compliance overview",
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }

        // Period Filter Chips
        item {
            Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                listOf("All Time" to "all", "Last 30 Days" to "30d", "This Week" to "7d").forEach { (label, key) ->
                    val isSelected = selectedPeriod == key
                    FilterChip(
                        selected = isSelected,
                        onClick = { selectedPeriod = key },
                        label = { Text(label, fontWeight = FontWeight.Bold) },
                        colors = FilterChipDefaults.filterChipColors(
                            selectedContainerColor = MaterialTheme.colorScheme.primary,
                            selectedLabelColor = MaterialTheme.colorScheme.onPrimary
                        )
                    )
                }
            }
        }

        // 2x2 Primary KPI Grid
        item {
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    KpiCard(
                        title = "Total Trainees",
                        value = "1,248",
                        subtext = "▲ +12% vs mth",
                        icon = Icons.Default.Group,
                        modifier = Modifier.weight(1f)
                    )
                    KpiCard(
                        title = "Completed",
                        value = "3,890",
                        subtext = "⚡ AR Sessions",
                        icon = Icons.Default.FactCheck,
                        modifier = Modifier.weight(1f)
                    )
                }
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    KpiCard(
                        title = "Avg Pass Rate",
                        value = "76.2%",
                        subtext = "● Req: >75.0%",
                        icon = Icons.Default.Rule,
                        modifier = Modifier.weight(1f)
                    )
                    KpiCard(
                        title = "Certificates",
                        value = "942",
                        subtext = "Issued & Logged",
                        icon = Icons.Default.Verified,
                        isAccent = true,
                        modifier = Modifier.weight(1f)
                    )
                }
            }
        }

        // Module Performance
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(Icons.Default.ViewInAr, contentDescription = null, tint = MaterialTheme.colorScheme.secondary)
                    Spacer(modifier = Modifier.width(6.dp))
                    Text("Module Performance", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                }
                Text("2 ACTIVE", style = MaterialTheme.typography.labelSmall, fontWeight = FontWeight.Bold)
            }
        }

        item {
            ModuleProgressCard(
                code = "MOD-01",
                title = "Fire & Explosion Safety",
                avgScore = "78.4",
                passRate = "81.2% Pass",
                syllabusPercent = 84,
                imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBmAbWa6kzYa36x2XfwQLY8E3Nwhkmhx4pDO8SmkklRRhoBtrNswhzN2fUzYBonTDasgGIZnD6HGJffSfLSc0PAz8XqtbtN0h0vVEGICmBJ4uLlAhcaYwWrnC3SR6gPItb72gA_6FMQ_hatv4UdpUxHeMBbCE88cGvuhXwYY0RLgLDtyvjpl1WBdNTP8IWnCL-gagXJYka1EZMPxVrVmWenaLEC_P-xxBQ8Bp-Ya69OiVVD6tlmz0dYZA"
            )
        }

        item {
            ModuleProgressCard(
                code = "MOD-02",
                title = "Gas Leak & Confined Space",
                avgScore = "69.1",
                passRate = "71.5% Pass",
                syllabusPercent = 68,
                imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBYz8SRXp3XVLdxd3fGkdfNxIliBSTOSmGg1ID1BcsRMeR8CdXgTghoIkcaKoyY096hOsIdvku116YWgTuCzJGDS6To2xrvVgukqTwi_6_Wx4LeKVuc3HpDGtvjT-oZw-iLqmg5fDPQmLcqJYIwdWhCPb5PDdmLGVP8VMHzb9NTafG24pDCpP2AlWqi26djRebzqgsBHu48rnuLB54YZ8j2jLax2cxpApL7ppAM8oevXoWWh0RMYxgK4A"
            )
        }

        // Recent Training Attempts
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(Icons.Default.HistoryEdu, contentDescription = null, tint = MaterialTheme.colorScheme.secondary)
                    Spacer(modifier = Modifier.width(6.dp))
                    Text("Recent Training Attempts", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                }
                TextButton(onClick = onViewAuditLogClick) {
                    Text("VIEW AUDIT LOG", style = MaterialTheme.typography.labelSmall, fontWeight = FontWeight.Bold)
                }
            }
        }

        item {
            RecentAttemptItem(
                initials = "MS",
                name = "Manoj Soren",
                module = "Fire & Explosion Safety",
                time = "Today, 09:42",
                score = "92%",
                isPassed = true,
                onClick = { onTraineeClick("t-1") }
            )
        }

        item {
            RecentAttemptItem(
                initials = "AM",
                name = "Amit Kumar Mahto",
                module = "Gas Safety Module",
                time = "Today, 08:15",
                score = "58%",
                isPassed = false,
                onClick = { onTraineeClick("t-2") }
            )
        }
    }
}

@Composable
fun KpiCard(
    title: String,
    value: String,
    subtext: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    modifier: Modifier = Modifier,
    isAccent: Boolean = false
) {
    Card(
        modifier = modifier,
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        elevation = CardDefaults.cardElevation(1.dp)
    ) {
        Column(modifier = Modifier.padding(14.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(title, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                Surface(
                    shape = RoundedCornerShape(6.dp),
                    color = if (isAccent) MaterialTheme.colorScheme.secondaryContainer else MaterialTheme.colorScheme.surfaceVariant,
                    modifier = Modifier.size(32.dp)
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Icon(icon, contentDescription = null, modifier = Modifier.size(18.dp))
                    }
                }
            }
            Text(value, style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
            Text(subtext, style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

@Composable
fun ModuleProgressCard(
    code: String,
    title: String,
    avgScore: String,
    passRate: String,
    syllabusPercent: Int,
    imageUrl: String,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        elevation = CardDefaults.cardElevation(1.dp)
    ) {
        Column(modifier = Modifier.padding(14.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
            Row(horizontalArrangement = Arrangement.spacedBy(12.dp), verticalAlignment = Alignment.CenterVertically) {
                AsyncImage(
                    model = imageUrl,
                    contentDescription = title,
                    modifier = Modifier.size(54.dp).clip(RoundedCornerShape(8.dp))
                )
                Column(modifier = Modifier.weight(1f)) {
                    Text(code, style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                    Text(title, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                    Text("Avg Score: $avgScore • $passRate", style = MaterialTheme.typography.bodySmall)
                }
            }
            Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
                    Text("Syllabus Completion", style = MaterialTheme.typography.labelSmall)
                    Text("$syllabusPercent%", style = MaterialTheme.typography.labelSmall, fontWeight = FontWeight.Bold)
                }
                LinearProgressIndicator(
                    progress = { syllabusPercent / 100f },
                    modifier = Modifier.fillMaxWidth().height(6.dp).clip(RoundedCornerShape(3.dp)),
                    color = MaterialTheme.colorScheme.primary,
                    trackColor = MaterialTheme.colorScheme.surfaceVariant
                )
            }
        }
    }
}

@Composable
fun RecentAttemptItem(
    initials: String,
    name: String,
    module: String,
    time: String,
    score: String,
    isPassed: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        onClick = onClick,
        modifier = modifier.fillMaxWidth(),
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Column(modifier = Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(horizontalArrangement = Arrangement.spacedBy(10.dp), verticalAlignment = Alignment.CenterVertically) {
                    Surface(
                        shape = RoundedCornerShape(20.dp),
                        color = MaterialTheme.colorScheme.primary,
                        modifier = Modifier.size(38.dp)
                    ) {
                        Box(contentAlignment = Alignment.Center) {
                            Text(initials, color = Color.White, fontWeight = FontWeight.Bold, fontSize = 13.sp)
                        }
                    }
                    Column {
                        Text(name, fontWeight = FontWeight.Bold, style = MaterialTheme.typography.bodyLarge)
                        Text(module, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                    }
                }

                Surface(
                    shape = RoundedCornerShape(4.dp),
                    color = if (isPassed) Color(0xFFECFDF5) else Color(0xFFFFDAD6)
                ) {
                    Text(
                        text = if (isPassed) "PASSED" else "RE-ASSESS",
                        color = if (isPassed) Color(0xFF069669) else Color(0xFFBA1A1A),
                        fontWeight = FontWeight.Bold,
                        style = MaterialTheme.typography.labelSmall,
                        modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                    )
                }
            }

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(time, style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                Text("Score: $score", fontWeight = FontWeight.Bold, style = MaterialTheme.typography.labelSmall)
            }
        }
    }
}
`;

export const ADMIN_TRAINEES_COMPOSE = `package com.armour.safety.ui.screens

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

/**
 * Screen 12: Admin Trainees Directory Screen
 */
@Composable
fun AdminTraineesScreen(
    onSelectTrainee: (traineeId: String) -> Unit,
    onAddTraineeClick: () -> Unit,
    onLoadMoreClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    var searchQuery by remember { mutableStateOf("") }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(14.dp)
    ) {
        item {
            Column {
                Text("Trainees", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
                Text("Registered vocational training participants", style = MaterialTheme.typography.bodyMedium, color = MaterialTheme.colorScheme.onSurfaceVariant)
            }
        }

        // Summary Metric Strips
        item {
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                TraineeMetricMiniCard(title = "TOTAL ENROLLED", value = "1,248", icon = Icons.Default.Group, modifier = Modifier.weight(1f))
                TraineeMetricMiniCard(title = "CERTIFIED", value = "942", icon = Icons.Default.Verified, color = Color(0xFF069669), modifier = Modifier.weight(1f))
                TraineeMetricMiniCard(title = "ACTION REQ.", value = "12", icon = Icons.Default.Warning, color = Color(0xFFBA1A1A), modifier = Modifier.weight(1f))
            }
        }

        // Search and Add Trainee
        item {
            Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                OutlinedTextField(
                    value = searchQuery,
                    onValueChange = { searchQuery = it },
                    placeholder = { Text("Search trainee name or ID...") },
                    leadingIcon = { Icon(Icons.Default.Search, contentDescription = null) },
                    modifier = Modifier.weight(1f),
                    shape = RoundedCornerShape(10.dp)
                )
                IconButton(
                    onClick = onAddTraineeClick,
                    modifier = Modifier.size(54.dp)
                ) {
                    Surface(
                        shape = RoundedCornerShape(10.dp),
                        color = MaterialTheme.colorScheme.primary,
                        modifier = Modifier.fillMaxSize()
                    ) {
                        Box(contentAlignment = Alignment.Center) {
                            Icon(Icons.Default.PersonAdd, contentDescription = "Add Trainee", tint = Color.White)
                        }
                    }
                }
            }
        }

        // Trainee Card 1: Manoj Soren
        item {
            TraineeCard(
                name = "Manoj Soren",
                id = "JH-MN-4029",
                language = "SANTALI",
                avgScore = "92.0%",
                certs = "2/2",
                lastActive = "Today 09:14",
                status = "CERTIFIED",
                statusColor = Color(0xFF069669),
                onClick = { onSelectTrainee("t-1") }
            )
        }

        // Trainee Card 2: Amit Kumar Mahto
        item {
            TraineeCard(
                name = "Amit Kumar Mahto",
                id = "JH-BK-1102",
                language = "HINDI",
                avgScore = "58.0%",
                certs = "None",
                lastActive = "Today 07:45",
                status = "RE-ASSESS REQ.",
                statusColor = Color(0xFFBA1A1A),
                onClick = { onSelectTrainee("t-2") }
            )
        }

        // Trainee Card 3: Sunita Hansda
        item {
            TraineeCard(
                name = "Sunita Hansda",
                id = "JH-DH-8821",
                language = "SANTALI",
                avgScore = "76.0%",
                certs = "2/2",
                lastActive = "Yesterday",
                status = "CERTIFIED",
                statusColor = Color(0xFF069669),
                onClick = { onSelectTrainee("t-3") }
            )
        }

        // Load More Records Button
        item {
            Button(
                onClick = onLoadMoreClick,
                modifier = Modifier.fillMaxWidth().height(48.dp),
                shape = RoundedCornerShape(10.dp),
                colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.surfaceVariant)
            ) {
                Text("Load More Records", color = MaterialTheme.colorScheme.onSurface, fontWeight = FontWeight.Bold)
            }
        }
    }
}

@Composable
fun TraineeMetricMiniCard(
    title: String,
    value: String,
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
                Icon(icon, contentDescription = null, tint = if (color != Color.Unspecified) color else MaterialTheme.colorScheme.onSurfaceVariant, modifier = Modifier.size(14.dp))
            }
            Text(value, fontWeight = FontWeight.Bold, fontSize = 20.sp, color = if (color != Color.Unspecified) color else MaterialTheme.colorScheme.onSurface)
        }
    }
}

@Composable
fun TraineeCard(
    name: String,
    id: String,
    language: String,
    avgScore: String,
    certs: String,
    lastActive: String,
    status: String,
    statusColor: Color,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        onClick = onClick,
        modifier = modifier.fillMaxWidth(),
        shape = RoundedCornerShape(14.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        elevation = CardDefaults.cardElevation(1.dp)
    ) {
        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(name, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                    Text("$id • $language", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
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
                        modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                    )
                }
            }

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Column {
                    Text("AVG SCORE", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                    Text(avgScore, fontWeight = FontWeight.Bold, color = statusColor)
                }
                Column {
                    Text("CERTIFICATES", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                    Text(certs, fontWeight = FontWeight.Bold)
                }
                Column {
                    Text("LAST ACTIVE", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                    Text(lastActive, style = MaterialTheme.typography.bodySmall)
                }
            }
        }
    }
}
`;

export const ADMIN_TRAINEE_DETAIL_COMPOSE = `package com.armour.safety.ui.screens

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
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import coil.compose.AsyncImage

/**
 * Screen 13: Admin Trainee Detail Screen
 */
@Composable
fun AdminTraineeDetailScreen(
    traineeId: String,
    onBackClick: () -> Unit,
    onViewAttemptClick: (attemptId: String) -> Unit,
    modifier: Modifier = Modifier
) {
    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Row(verticalAlignment = Alignment.CenterVertically) {
                IconButton(onClick = onBackClick) {
                    Icon(Icons.Default.ArrowBack, contentDescription = "Back")
                }
                Text("Trainee Profile", style = MaterialTheme.typography.headlineSmall, fontWeight = FontWeight.Bold)
            }
        }

        // Profile Header
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
            ) {
                Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(14.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        AsyncImage(
                            model = "https://lh3.googleusercontent.com/aida-public/AB6AXuCgiqZIv0vAYl6Ng-Hznjtu-UnJQ8u5GJoyfSQAg4v3rRTpY753rVMmWd-dM7RwJaUaO9UpRDmDc7rr6wKZ6xcjI4tA-IyIvQ34c4p4CL5YO-zhHNdf4zf2hVNeJWRvkqByZhIwMQ5yV8g2wFUmtcNSEMfFPRmkcvCHedfnFvj541NB27S91B_YrPUxjhCOktc7Wk9U8Iak9qcG1-wNQ1ZGPRUw1SfCyWU4ywVFcy0wIoNl5CRex4ENew",
                            contentDescription = "Manoj Soren",
                            modifier = Modifier.size(72.dp).clip(RoundedCornerShape(12.dp))
                        )
                        Column(modifier = Modifier.weight(1f)) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween
                            ) {
                                Text("Manoj Soren", style = MaterialTheme.typography.titleLarge, fontWeight = FontWeight.Bold)
                                Surface(
                                    shape = RoundedCornerShape(4.dp),
                                    color = Color(0xFF85F8C4)
                                ) {
                                    Text("CERTIFIED", fontWeight = FontWeight.Bold, color = Color(0xFF002114), style = MaterialTheme.typography.labelSmall, modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp))
                                }
                            }
                            Text("ID: JH-MN-4029", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                            Text("🌐 Santali (ᱥᱟᱱᱛᱟᱲᱤ)", style = MaterialTheme.typography.bodySmall)
                        }
                    }

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        Surface(
                            modifier = Modifier.weight(1f),
                            shape = RoundedCornerShape(8.dp),
                            color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                        ) {
                            Column(modifier = Modifier.padding(10.dp)) {
                                Text("Overall Avg Score", style = MaterialTheme.typography.bodySmall)
                                Text("92.0% PASS", fontWeight = FontWeight.Bold, fontSize = 18.sp, color = Color(0xFF069669))
                            }
                        }
                        Surface(
                            modifier = Modifier.weight(1f),
                            shape = RoundedCornerShape(8.dp),
                            color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                        ) {
                            Column(modifier = Modifier.padding(10.dp)) {
                                Text("Compliance Status", style = MaterialTheme.typography.bodySmall)
                                Text("Certified", fontWeight = FontWeight.Bold, fontSize = 18.sp)
                            }
                        }
                    }
                }
            }
        }

        // Decision Competency Index
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
            ) {
                Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    Text("Decision Competency", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
                    Text("Scenario-based telemetry index", style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)

                    CompetencyBar(title = "Hazard Identification", score = "Strong 95%", progress = 0.95f)
                    CompetencyBar(title = "PPE Selection", score = "Strong 90%", progress = 0.90f)
                    CompetencyBar(title = "Emergency Response", score = "Competent 88%", progress = 0.88f)
                    CompetencyBar(title = "Evacuation Procedure", score = "Strong 94%", progress = 0.94f)
                }
            }
        }

        // Attempt History
        item {
            Text("Attempt History", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
        }

        item {
            AttemptHistoryCard(
                attemptTitle = "Attempt #2",
                status = "PASSED",
                statusColor = Color(0xFF069669),
                module = "Gas Safety • Score: 84%",
                date = "24 Oct 2024 • 14:32 IST",
                onViewClick = { onViewAttemptClick("att-2") }
            )
        }

        item {
            AttemptHistoryCard(
                attemptTitle = "Attempt #1",
                status = "NEEDS RE-ASSESSMENT",
                statusColor = Color(0xFFBA1A1A),
                module = "Gas Safety • Score: 68%",
                date = "24 Oct 2024 • 10:15 IST",
                onViewClick = { onViewAttemptClick("att-1") }
            )
        }
    }
}

@Composable
fun AttemptHistoryCard(
    attemptTitle: String,
    status: String,
    statusColor: Color,
    module: String,
    date: String,
    onViewClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.fillMaxWidth(),
        shape = RoundedCornerShape(12.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Row(
            modifier = Modifier.padding(14.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(attemptTitle, fontWeight = FontWeight.Bold)
                    Spacer(modifier = Modifier.width(6.dp))
                    Surface(shape = RoundedCornerShape(4.dp), color = statusColor.copy(alpha = 0.15f)) {
                        Text(status, color = statusColor, style = MaterialTheme.typography.labelSmall, fontWeight = FontWeight.Bold, modifier = Modifier.padding(horizontal = 4.dp, vertical = 2.dp))
                    }
                }
                Text(module, style = MaterialTheme.typography.bodySmall)
                Text(date, style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
            }

            Button(
                onClick = onViewClick,
                shape = RoundedCornerShape(8.dp),
                colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary)
            ) {
                Text("View Attempt")
            }
        }
    }
}
`;
