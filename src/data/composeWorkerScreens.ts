export const WORKER_DASHBOARD_COMPOSE = `package com.armour.safety.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
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
 * Screen 6: Worker Dashboard (Safety Training Overview)
 */
@Composable
fun WorkerDashboardScreen(
    onStartTrainingClick: () -> Unit,
    onResumeModuleClick: (String) -> Unit,
    onReviewModuleClick: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .padding(horizontal = 16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            // User Header Profile Banner
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 8.dp),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primary)
            ) {
                Row(
                    modifier = Modifier.padding(16.dp),
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(14.dp)
                ) {
                    Box {
                        AsyncImage(
                            model = "https://lh3.googleusercontent.com/aida-public/AB6AXuBrPBngwKtn8QALWIueki_9N6loIgNFmjYLYgXpxZ4pBM51xDorybqoc0RA_64vdpDQwRXe1T0gs7ExWHCnFsP3JnPEWg9pM0E-bGb6t2j07XAxVevBcywSeps21H9C3RhZisxRXqiiGuCK9rAGAyb-QNsJOnCmau-Dl8Pj5l7qpmuw5pfO9x6AZb4xwMkSUHSzJk0_nUT5MZTc3hwzF0P6AAXyl5UTYI9Jn50uYPpx2m-uh36mY6wliQ",
                            contentDescription = "Manoj Soren",
                            modifier = Modifier
                                .size(54.dp)
                                .clip(CircleShape),
                            contentScale = ContentScale.Crop
                        )
                        Surface(
                            shape = CircleShape,
                            color = Color(0xFF10B981),
                            modifier = Modifier
                                .size(14.dp)
                                .align(Alignment.BottomEnd)
                        ) {}
                    }

                    Column(modifier = Modifier.weight(1f)) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Text(
                                text = "Welcome, Manoj",
                                style = MaterialTheme.typography.titleMedium,
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.onPrimary
                            )
                            Spacer(modifier = Modifier.width(4.dp))
                            Icon(
                                imageVector = Icons.Default.Verified,
                                contentDescription = "Certified",
                                tint = MaterialTheme.colorScheme.secondaryContainer,
                                modifier = Modifier.size(16.dp)
                            )
                        }

                        Row(
                            horizontalArrangement = Arrangement.spacedBy(8.dp),
                            modifier = Modifier.padding(top = 4.dp)
                        ) {
                            Surface(
                                shape = RoundedCornerShape(4.dp),
                                color = MaterialTheme.colorScheme.onPrimary.copy(alpha = 0.15f)
                            ) {
                                Text(
                                    text = "ID: WRK-4029",
                                    style = MaterialTheme.typography.labelSmall,
                                    color = MaterialTheme.colorScheme.onPrimary,
                                    modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                )
                            }
                            Surface(
                                shape = RoundedCornerShape(4.dp),
                                color = MaterialTheme.colorScheme.onPrimary.copy(alpha = 0.15f)
                            ) {
                                Text(
                                    text = "🌐 English",
                                    style = MaterialTheme.typography.labelSmall,
                                    color = MaterialTheme.colorScheme.secondaryContainer,
                                    modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                )
                            }
                        }
                    }
                }
            }
        }

        // Section Title
        item {
            Column {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        imageVector = Icons.Default.ViewInAr,
                        contentDescription = null,
                        tint = MaterialTheme.colorScheme.secondary,
                        modifier = Modifier.size(24.dp)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = "Safety Training",
                        style = MaterialTheme.typography.headlineSmall,
                        fontWeight = FontWeight.Bold
                    )
                }
                Text(
                    text = "Practice emergency industrial situations in an interactive, safe AR environment.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }

        // Recommended Drill Session Hero Card
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.secondaryContainer.copy(alpha = 0.35f))
            ) {
                Column(
                    modifier = Modifier.padding(16.dp),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.Top
                    ) {
                        Column {
                            Text(
                                text = "RECOMMENDED DRILL SESSION",
                                style = MaterialTheme.typography.labelSmall,
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.secondary
                            )
                            Text(
                                text = "Gas Leak Containment AR",
                                style = MaterialTheme.typography.titleLarge,
                                fontWeight = FontWeight.Bold
                            )
                            Text(
                                text = "Estimated Duration: 8 mins • Spatial Mesh Ready",
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                        Icon(
                            imageVector = Icons.Default.Sensors,
                            contentDescription = null,
                            tint = MaterialTheme.colorScheme.secondary,
                            modifier = Modifier.size(28.dp)
                        )
                    }

                    Button(
                        onClick = onStartTrainingClick,
                        modifier = Modifier
                            .fillMaxWidth()
                            .height(52.dp),
                        shape = RoundedCornerShape(10.dp),
                        colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary)
                    ) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(
                                Icons.Default.PlayCircle,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.secondaryContainer
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Text(
                                text = "START TRAINING NOW",
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.onPrimary
                            )
                            Spacer(modifier = Modifier.width(8.dp))
                            Icon(
                                Icons.Default.ArrowForward,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.onPrimary
                            )
                        }
                    }
                }
            }
        }

        // 3-Metric Cards Row
        item {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                // Drills
                Card(
                    modifier = Modifier.weight(1f),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
                ) {
                    Column(modifier = Modifier.padding(12.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("DRILLS", style = MaterialTheme.typography.labelSmall)
                            Icon(Icons.Default.Checklist, contentDescription = null, modifier = Modifier.size(16.dp))
                        }
                        Text("2/4", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
                        LinearProgressIndicator(
                            progress = { 0.5f },
                            modifier = Modifier
                                .fillMaxWidth()
                                .height(6.dp)
                                .clip(RoundedCornerShape(3.dp)),
                            color = MaterialTheme.colorScheme.primary,
                            trackColor = MaterialTheme.colorScheme.surfaceVariant
                        )
                    }
                }

                // Score
                Card(
                    modifier = Modifier.weight(1f),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
                ) {
                    Column(modifier = Modifier.padding(12.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("SCORE", style = MaterialTheme.typography.labelSmall)
                            Icon(Icons.Default.Analytics, contentDescription = null, modifier = Modifier.size(16.dp))
                        }
                        Text("82%", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
                        Text("✔ Passing", style = MaterialTheme.typography.labelSmall, color = Color(0xFF069669), fontWeight = FontWeight.Bold)
                    }
                }

                // Badges
                Card(
                    modifier = Modifier.weight(1f),
                    shape = RoundedCornerShape(12.dp),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
                ) {
                    Column(modifier = Modifier.padding(12.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Text("BADGES", style = MaterialTheme.typography.labelSmall)
                            Icon(Icons.Default.Verified, contentDescription = null, modifier = Modifier.size(16.dp))
                        }
                        Text("2", style = MaterialTheme.typography.headlineMedium, fontWeight = FontWeight.Bold)
                        Text("Issued", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                    }
                }
            }
        }

        // Assigned Modules
        item {
            Text(
                text = "Assigned Modules",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold
            )
        }

        // Module Gas Leak
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(14.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
            ) {
                Column(modifier = Modifier.padding(14.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(12.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        AsyncImage(
                            model = "https://lh3.googleusercontent.com/aida-public/AB6AXuBYz8SRXp3XVLdxd3fGkdfNxIliBSTOSmGg1ID1BcsRMeR8CdXgTghoIkcaKoyY096hOsIdvku116YWgTuCzJGDS6To2xrvVgukqTwi_6_Wx4LeKVuc3HpDGtvjT-oZw-iLqmg5fDPQmLcqJYIwdWhCPb5PDdmLGVP8VMHzb9NTafG24pDCpP2AlWqi26djRebzqgsBHu48rnuLB54YZ8j2jLax2cxpApL7ppAM8oevXoWWh0RMYxgK4A",
                            contentDescription = "Gas Leak Module",
                            modifier = Modifier
                                .size(56.dp)
                                .clip(RoundedCornerShape(8.dp)),
                            contentScale = ContentScale.Crop
                        )
                        Column(modifier = Modifier.weight(1f)) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween
                            ) {
                                Text("MOD-02", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                                Surface(
                                    shape = RoundedCornerShape(4.dp),
                                    color = MaterialTheme.colorScheme.secondaryContainer.copy(alpha = 0.3f)
                                ) {
                                    Text(
                                        text = "IN PROGRESS",
                                        style = MaterialTheme.typography.labelSmall,
                                        fontWeight = FontWeight.Bold,
                                        color = MaterialTheme.colorScheme.secondary,
                                        modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                    )
                                }
                            }
                            Text("Gas Leak", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.SemiBold)
                        }
                    }

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.End
                    ) {
                        Button(
                            onClick = { onResumeModuleClick("MOD-02") },
                            shape = RoundedCornerShape(8.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary)
                        ) {
                            Text("RESUME", fontWeight = FontWeight.Bold)
                            Icon(Icons.Default.ChevronRight, contentDescription = null)
                        }
                    }
                }
            }
        }

        // Module Fire Safety
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(14.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
            ) {
                Column(modifier = Modifier.padding(14.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(12.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        AsyncImage(
                            model = "https://lh3.googleusercontent.com/aida-public/AB6AXuBmAbWa6kzYa36x2XfwQLY8E3Nwhkmhx4pDO8SmkklRRhoBtrNswhzN2fUzYBonTDasgGIZnD6HGJffSfLSc0PAz8XqtbtN0h0vVEGICmBJ4uLlAhcaYwWrnC3SR6gPItb72gA_6FMQ_hatv4UdpUxHeMBbCE88cGvuhXwYY0RLgLDtyvjpl1WBdNTP8IWnCL-gagXJYka1EZMPxVrVmWenaLEC_P-xxBQ8Bp-Ya69OiVVD6tlmz0dYZA",
                            contentDescription = "Fire Safety Module",
                            modifier = Modifier
                                .size(56.dp)
                                .clip(RoundedCornerShape(8.dp)),
                            contentScale = ContentScale.Crop
                        )
                        Column(modifier = Modifier.weight(1f)) {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween
                            ) {
                                Text("MOD-01", style = MaterialTheme.typography.labelSmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
                                Surface(
                                    shape = RoundedCornerShape(4.dp),
                                    color = Color(0xFFECFDF5)
                                ) {
                                    Text(
                                        text = "COMPLETED",
                                        style = MaterialTheme.typography.labelSmall,
                                        fontWeight = FontWeight.Bold,
                                        color = Color(0xFF069669),
                                        modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                                    )
                                }
                            }
                            Text("Fire & Explosion Safety", style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.SemiBold)
                        }
                    }

                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Text(
                            text = "✔ Certified Score: 92%",
                            style = MaterialTheme.typography.bodyMedium,
                            fontWeight = FontWeight.Bold,
                            color = Color(0xFF069669)
                        )
                        OutlinedButton(
                            onClick = { onReviewModuleClick("MOD-01") },
                            shape = RoundedCornerShape(8.dp)
                        ) {
                            Text("REVIEW")
                            Spacer(modifier = Modifier.width(4.dp))
                            Icon(Icons.Default.Visibility, contentDescription = null, modifier = Modifier.size(16.dp))
                        }
                    }
                }
            }
        }

        item { Spacer(modifier = Modifier.height(24.dp)) }
    }
}
`;

export const WORKER_MODULES_COMPOSE = `package com.armour.safety.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.LocalFireDepartment
import androidx.compose.material.icons.filled.Masks
import androidx.compose.material.icons.filled.ViewInAr
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
 * Screen 7: Worker Modules Screen (Choose a Training Module)
 */
@Composable
fun WorkerModulesScreen(
    onPracticeModuleClick: (moduleId: String) -> Unit,
    onBackClick: () -> Unit,
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
                Column {
                    Text(
                        text = "CERTIFICATION TRACK • BOKARO DEEP PIT",
                        style = MaterialTheme.typography.labelSmall,
                        color = MaterialTheme.colorScheme.secondary,
                        fontWeight = FontWeight.Bold
                    )
                    Text(
                        text = "Choose a Training Module",
                        style = MaterialTheme.typography.headlineSmall,
                        fontWeight = FontWeight.Bold
                    )
                }
            }
            Text(
                text = "Select a safety scenario to practice in augmented reality.",
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                modifier = Modifier.padding(start = 48.dp)
            )
        }

        // Module 1 Card: Fire & Explosion Safety
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                elevation = CardDefaults.cardElevation(2.dp)
            ) {
                Column {
                    Box(modifier = Modifier.height(160.dp).fillMaxWidth()) {
                        AsyncImage(
                            model = "https://lh3.googleusercontent.com/aida-public/AB6AXuBmAbWa6kzYa36x2XfwQLY8E3Nwhkmhx4pDO8SmkklRRhoBtrNswhzN2fUzYBonTDasgGIZnD6HGJffSfLSc0PAz8XqtbtN0h0vVEGICmBJ4uLlAhcaYwWrnC3SR6gPItb72gA_6FMQ_hatv4UdpUxHeMBbCE88cGvuhXwYY0RLgLDtyvjpl1WBdNTP8IWnCL-gagXJYka1EZMPxVrVmWenaLEC_P-xxBQ8Bp-Ya69OiVVD6tlmz0dYZA",
                            contentDescription = "Fire Module",
                            modifier = Modifier.fillMaxSize(),
                            contentScale = ContentScale.Crop
                        )
                        Surface(
                            shape = RoundedCornerShape(4.dp),
                            color = Color(0xFF069669),
                            modifier = Modifier
                                .align(Alignment.TopEnd)
                                .padding(12.dp)
                        ) {
                            Text(
                                text = "✔ COMPLETED • 92%",
                                style = MaterialTheme.typography.labelSmall,
                                fontWeight = FontWeight.Bold,
                                color = Color.White,
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                            )
                        }
                    }

                    Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(Icons.Default.LocalFireDepartment, contentDescription = null, tint = MaterialTheme.colorScheme.secondary)
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(
                                text = "MODULE 01: Fire & Explosion Safety",
                                style = MaterialTheme.typography.titleMedium,
                                fontWeight = FontWeight.Bold
                            )
                        }

                        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                            Text("⏱ 15 Minutes", style = MaterialTheme.typography.bodySmall)
                            Text("🛡 Basic Difficulty", style = MaterialTheme.typography.bodySmall)
                            Text("🏅 3 Recert Badges", style = MaterialTheme.typography.bodySmall)
                        }

                        Text(
                            text = "Practice identifying rapid fire hazards, selecting compliant class-appropriate PPE, initiating water-mist sequence, and guiding mine teams via safe pressurized egress routes.",
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )

                        Button(
                            onClick = { onPracticeModuleClick("MOD-01") },
                            modifier = Modifier.fillMaxWidth().height(48.dp),
                            shape = RoundedCornerShape(10.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary)
                        ) {
                            Icon(Icons.Default.ViewInAr, contentDescription = null)
                            Spacer(modifier = Modifier.width(8.dp))
                            Text("Practice Module", fontWeight = FontWeight.Bold)
                        }
                    }
                }
            }
        }

        // Module 2 Card: Gas Leak & Confined Space
        item {
            Card(
                modifier = Modifier.fillMaxWidth(),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                elevation = CardDefaults.cardElevation(2.dp)
            ) {
                Column {
                    Box(modifier = Modifier.height(160.dp).fillMaxWidth()) {
                        AsyncImage(
                            model = "https://lh3.googleusercontent.com/aida-public/AB6AXuBYz8SRXp3XVLdxd3fGkdfNxIliBSTOSmGg1ID1BcsRMeR8CdXgTghoIkcaKoyY096hOsIdvku116YWgTuCzJGDS6To2xrvVgukqTwi_6_Wx4LeKVuc3HpDGtvjT-oZw-iLqmg5fDPQmLcqJYIwdWhCPb5PDdmLGVP8VMHzb9NTafG24pDCpP2AlWqi26djRebzqgsBHu48rnuLB54YZ8j2jLax2cxpApL7ppAM8oevXoWWh0RMYxgK4A",
                            contentDescription = "Gas Leak Module",
                            modifier = Modifier.fillMaxSize(),
                            contentScale = ContentScale.Crop
                        )
                        Surface(
                            shape = RoundedCornerShape(4.dp),
                            color = MaterialTheme.colorScheme.secondaryContainer,
                            modifier = Modifier
                                .align(Alignment.TopEnd)
                                .padding(12.dp)
                        ) {
                            Text(
                                text = "IN PROGRESS",
                                style = MaterialTheme.typography.labelSmall,
                                fontWeight = FontWeight.Bold,
                                color = MaterialTheme.colorScheme.onSecondaryContainer,
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                            )
                        }
                    }

                    Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(Icons.Default.Masks, contentDescription = null, tint = MaterialTheme.colorScheme.secondary)
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(
                                text = "MODULE 02: Gas Leak & Confined Space",
                                style = MaterialTheme.typography.titleMedium,
                                fontWeight = FontWeight.Bold
                            )
                        }

                        Row(horizontalArrangement = Arrangement.spacedBy(12.dp)) {
                            Text("⏱ 18 Minutes", style = MaterialTheme.typography.bodySmall)
                            Text("🛡 Basic Difficulty", style = MaterialTheme.typography.bodySmall)
                            Text("⚠ Mandatory", style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.secondary)
                        }

                        Text(
                            text = "Practice multi-sensor gas detection, positive-pressure breathing apparatus deployment, lock-out/tag-out isolation, and coordinated emergency retrieval in restricted airshaft chambers.",
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )

                        Button(
                            onClick = { onPracticeModuleClick("MOD-02") },
                            modifier = Modifier.fillMaxWidth().height(48.dp),
                            shape = RoundedCornerShape(10.dp),
                            colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary)
                        ) {
                            Icon(Icons.Default.ViewInAr, contentDescription = null)
                            Spacer(modifier = Modifier.width(8.dp))
                            Text("Practice Module", fontWeight = FontWeight.Bold)
                        }
                    }
                }
            }
        }
    }
}
`;

export const DRILL_RESULT_COMPOSE = `package com.armour.safety.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
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

/**
 * Screen 8: Drill Performance & Assessment Result
 */
@Composable
fun DrillResultScreen(
    onReturnToModulesClick: () -> Unit,
    onRetakeDrillClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        // Top Header Banner
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(16.dp),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = "Fire Safety",
                        style = MaterialTheme.typography.headlineMedium,
                        fontWeight = FontWeight.Bold
                    )
                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        Text("⏱ 06m 42s", style = MaterialTheme.typography.bodySmall)
                        Text("🔄 Attempt #2 (Passed)", style = MaterialTheme.typography.bodySmall, fontWeight = FontWeight.Bold)
                    }
                }
                Surface(
                    shape = RoundedCornerShape(12.dp),
                    color = Color(0xFF85F8C4),
                    modifier = Modifier.size(44.dp)
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Icon(
                            imageVector = Icons.Default.Verified,
                            contentDescription = "Passed",
                            tint = Color(0xFF002114),
                            modifier = Modifier.size(24.dp)
                        )
                    }
                }
            }
        }

        // Performance Score Card
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(16.dp),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer)
        ) {
            Column(modifier = Modifier.padding(20.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
                Text(
                    text = "PERFORMANCE SCORE",
                    style = MaterialTheme.typography.labelSmall,
                    color = Color(0xFF68DBA9),
                    fontWeight = FontWeight.Bold
                )
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.Bottom
                ) {
                    Row(verticalAlignment = Alignment.Bottom) {
                        Text(
                            text = "92",
                            fontSize = 44.sp,
                            fontWeight = FontWeight.Bold,
                            color = Color.White
                        )
                        Text(
                            text = " /100",
                            fontSize = 18.sp,
                            color = Color(0xFFBEC6E0),
                            modifier = Modifier.padding(bottom = 6.dp)
                        )
                    }
                    Text(
                        text = "✔ Fully Compliant",
                        color = Color(0xFF85F8C4),
                        fontWeight = FontWeight.Bold
                    )
                }
                Text(
                    text = "Min. Passing: 75%",
                    style = MaterialTheme.typography.bodySmall,
                    color = Color(0xFFBEC6E0)
                )
            }
        }

        // Audited Safety Breakdown
        Card(
            modifier = Modifier.fillMaxWidth(),
            shape = RoundedCornerShape(16.dp),
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
        ) {
            Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(14.dp)) {
                Text(
                    text = "AUDITED SAFETY BREAKDOWN",
                    style = MaterialTheme.typography.labelSmall,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )

                // Hazard Detection
                CompetencyBar(title = "Hazard Detection Accuracy", score = "95% (19/20)", progress = 0.95f)

                // PPE Protocol
                CompetencyBar(title = "PPE Protocol Adherence", score = "100%", progress = 1.0f)

                // Reaction & Evacuation Speed
                CompetencyBar(title = "Reaction & Evacuation Speed", score = "88% (<45s)", progress = 0.88f)
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        // Action Buttons
        Button(
            onClick = onReturnToModulesClick,
            modifier = Modifier
                .fillMaxWidth()
                .height(50.dp),
            shape = RoundedCornerShape(10.dp),
            colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary)
        ) {
            Icon(Icons.Default.GridView, contentDescription = null)
            Spacer(modifier = Modifier.width(8.dp))
            Text("Return to Modules", fontWeight = FontWeight.Bold)
        }

        OutlinedButton(
            onClick = onRetakeDrillClick,
            modifier = Modifier
                .fillMaxWidth()
                .height(48.dp),
            shape = RoundedCornerShape(10.dp)
        ) {
            Icon(Icons.Default.Replay, contentDescription = null)
            Spacer(modifier = Modifier.width(8.dp))
            Text("Retake Simulation Drill", fontWeight = FontWeight.SemiBold)
        }
    }
}

@Composable
fun CompetencyBar(
    title: String,
    score: String,
    progress: Float,
    modifier: Modifier = Modifier
) {
    Column(modifier = modifier.fillMaxWidth(), verticalArrangement = Arrangement.spacedBy(4.dp)) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(text = title, style = MaterialTheme.typography.bodyMedium, fontWeight = FontWeight.Medium)
            Text(text = score, style = MaterialTheme.typography.bodyMedium, fontWeight = FontWeight.Bold)
        }
        LinearProgressIndicator(
            progress = { progress },
            modifier = Modifier
                .fillMaxWidth()
                .height(8.dp)
                .clip(RoundedCornerShape(4.dp)),
            color = if (progress >= 0.75f) Color(0xFF069669) else MaterialTheme.colorScheme.secondary,
            trackColor = MaterialTheme.colorScheme.surfaceVariant
        )
    }
}
`;
