export const COMPOSE_THEME_CODE = `package com.armour.safety.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Typography
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp

// ARmour Industrial Safety Palette
val PrimaryDark = Color(0xFF0F172A)
val SafetyAmber = Color(0xFFFE932C)
val SafetyAmberDeep = Color(0xFF904D00)
val CompliantGreen = Color(0xFF069669)
val CompliantGreenBg = Color(0xFF85F8C4)
val HazardRed = Color(0xFFBA1A1A)
val HazardRedBg = Color(0xFFFFDAD6)
val SurfaceCanvas = Color(0xFFF8F9FF)
val SurfaceCard = Color(0xFFFFFFFF)
val SurfaceContainerLow = Color(0xFFEFF4FF)
val SurfaceContainerHigh = Color(0xFFDDE9FF)
val OnSurfaceText = Color(0xFF0D1C2F)
val OnSurfaceVariant = Color(0xFF45464D)

private val LightColorScheme = lightColorScheme(
    primary = PrimaryDark,
    onPrimary = Color.White,
    primaryContainer = Color(0xFF131B2E),
    onPrimaryContainer = Color(0xFF7C839B),
    secondary = SafetyAmberDeep,
    secondaryContainer = SafetyAmber,
    onSecondaryContainer = Color(0xFF663500),
    surface = SurfaceCanvas,
    onSurface = OnSurfaceText,
    surfaceVariant = SurfaceContainerHigh,
    onSurfaceVariant = OnSurfaceVariant,
    error = HazardRed,
    errorContainer = HazardRedBg,
    onErrorContainer = Color(0xFF93000A)
)

val AppTypography = Typography(
    headlineLarge = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Bold,
        fontSize = 30.sp,
        lineHeight = 38.sp
    ),
    headlineMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 24.sp,
        lineHeight = 32.sp
    ),
    headlineSmall = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 20.sp,
        lineHeight = 28.sp
    ),
    titleMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 16.sp,
        lineHeight = 24.sp
    ),
    titleSmall = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.SemiBold,
        fontSize = 14.sp,
        lineHeight = 20.sp
    ),
    bodyMedium = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 14.sp,
        lineHeight = 20.sp
    ),
    bodySmall = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 12.sp,
        lineHeight = 16.sp
    ),
    labelSmall = TextStyle(
        fontFamily = FontFamily.Monospace,
        fontWeight = FontWeight.Medium,
        fontSize = 11.sp,
        lineHeight = 14.sp
    )
)

@Composable
fun ARmourTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = LightColorScheme,
        typography = AppTypography,
        content = content
    )
}
`;
