export const APP_LANGUAGE_COMPOSE = `package com.armour.safety.ui.localization

import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable

/**
 * 1. Global Multilingual / Localization State
 * Defines the supported languages for the industrial safety training application.
 */
enum class AppLanguage(
    val code: String,
    val displayName: String,
    val nativeScript: String,
    val flagEmoji: String
) {
    ENGLISH(
        code = "en",
        displayName = "English",
        nativeScript = "Universal Industrial English",
        flagEmoji = "🇬🇧"
    ),
    HINDI(
        code = "hi",
        displayName = "हिन्दी",
        nativeScript = "Hindi (Devanagari)",
        flagEmoji = "🇮🇳"
    ),
    SANTHALI(
        code = "sat",
        displayName = "Santali",
        nativeScript = "ᱥᱟᱱᱛᱟᱲᱤ (Ol Chiki Script)",
        flagEmoji = "⛏️"
    )
}

/**
 * 2. Dummy Translation Dictionary
 * Comprehensive in-memory dynamic dictionary providing immediate String resolution
 * for all 3 languages (English, Hindi, Santhali in Ol Chiki script).
 * 
 * Includes key UI strings:
 * - "Select Role"
 * - "Student"
 * - "Teacher"
 * - "Next"
 * - "Open AR View"
 * - "Submit"
 */
object AppStrings {
    private val dictionary: Map<AppLanguage, Map<String, String>> = mapOf(
        AppLanguage.ENGLISH to mapOf(
            "select_role" to "Select Role",
            "student" to "Student / Trainee",
            "student_desc" to "Interactive AR safety training, machinery pre-flight checks, and hazard drills.",
            "teacher" to "Teacher / Supervisor",
            "teacher_desc" to "Review trainee performance, inspection telemetry, and issue certified vocational credentials.",
            "next" to "Next",
            "open_ar_view" to "Open AR View",
            "submit" to "Submit",
            "choose_language" to "Choose Your Language",
            "choose_language_sub" to "Select your preferred dialect for safety drills and audio guidance.",
            "continue_btn" to "Continue",
            "back" to "Back",
            "change_language" to "Change Language",
            "main_home_title" to "Main Home Screen",
            "welcome_trainee" to "Welcome, Trainee Manoj",
            "active_shift" to "Shift Active • Zone 4B",
            "safety_training" to "Safety Training Modules",
            "safety_training_desc" to "Practice emergency industrial situations in interactive safe AR.",
            "recommended_drill" to "RECOMMENDED AR DRILL",
            "gas_leak_title" to "Gas Leak Containment AR",
            "gas_leak_sub" to "Estimated Duration: 8 mins • Spatial Mesh Ready",
            "drills" to "DRILLS",
            "score" to "SCORE",
            "badges" to "BADGES",
            "passing_status" to "Passing",
            "assigned_modules" to "Assigned Modules",
            "drill_evaluation" to "AR Drill Evaluation",
            "passed_certified" to "PASSED - CERTIFIED",
            "retry_drill" to "Retry AR Drill",
            "view_certificate" to "View Certificate",
            "sign_out" to "Sign Out"
        ),
        AppLanguage.HINDI to mapOf(
            "select_role" to "भूमिका चुनें",
            "student" to "विद्यार्थी / प्रशिक्षु",
            "student_desc" to "इंटरैक्टिव एआर सुरक्षा अभ्यास, मशीनरी निरीक्षण और खतरनाक स्थितियों के सिमुलेशन।",
            "teacher" to "शिक्षक / पर्यवेक्षक",
            "teacher_desc" to "प्रशिक्षु प्रदर्शन की समीक्षा करें, निरीक्षण लॉग देखें और प्रमाणित बैज जारी करें।",
            "next" to "आगे बढ़ें",
            "open_ar_view" to "एआर दृश्य खोलें",
            "submit" to "जमा करें",
            "choose_language" to "अपनी भाषा चुनें",
            "choose_language_sub" to "सुरक्षा अभ्यास और ऑडियो मार्गदर्शन के लिए अपनी पसंदीदा भाषा चुनें।",
            "continue_btn" to "जारी रखें",
            "back" to "वापस",
            "change_language" to "भाषा बदलें",
            "main_home_title" to "मुख्य होम स्क्रीन",
            "welcome_trainee" to "स्वागत है, प्रशिक्षु मनोज",
            "active_shift" to "सक्रिय शिफ्ट • ज़ोन 4B",
            "safety_training" to "सुरक्षा प्रशिक्षण मॉड्यूल",
            "safety_training_desc" to "इंटरैक्टिव सुरक्षित एआर में आपातकालीन स्थितियों का अभ्यास करें।",
            "recommended_drill" to "अनुशंसित एआर ड्रिल",
            "gas_leak_title" to "गैस रिसाव रोकथाम एआर",
            "gas_leak_sub" to "अनुमानित समय: 8 मिनट • स्थानिक मेश तैयार",
            "drills" to "ड्रिल",
            "score" to "स्कोर",
            "badges" to "बैज",
            "passing_status" to "उत्तीर्ण",
            "assigned_modules" to "आवंटित मॉड्यूल",
            "drill_evaluation" to "एआर ड्रिल मूल्यांकन",
            "passed_certified" to "उत्तीर्ण - प्रमाणित",
            "retry_drill" to "एआर ड्रिल पुनः प्रयास करें",
            "view_certificate" to "प्रमाणपत्र देखें",
            "sign_out" to "साइन आउट"
        ),
        AppLanguage.SANTHALI to mapOf(
            "select_role" to "ᱠᱟᱹᱢᱤ ᱦᱟᱹᱴᱤᱧ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
            "student" to "ᱯᱟᱹᱴᱷᱩᱣᱟᱹ / ᱥᱮᱪᱮᱫᱤᱭᱟᱹ",
            "student_desc" to "ᱤᱱᱴᱟᱨᱮᱠᱴᱤᱵᱷ ᱮ.ᱟᱨ. ᱨᱩᱠᱷᱤᱭᱟᱹ ᱰᱨᱤᱞ, ᱢᱤᱥᱤᱱ ᱡᱟᱸᱪ ᱟᱨ ᱵᱤᱯᱚᱫᱽ ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱾",
            "teacher" to "ᱜᱟᱞᱚᱪᱤᱭᱟᱹ / ᱥᱟᱥᱚᱱᱤᱭᱟᱹ",
            "teacher_desc" to "ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱠᱟᱹᱢᱤ ᱧᱮᱞ, ᱚᱰᱤᱴ ᱞᱚᱜᱽ ᱟᱨ ᱯᱚᱨᱢᱟᱬ ᱵᱮᱡᱽ ᱮᱢ ᱢᱮ ᱾",
            "next" to "ᱞᱟᱦᱟᱭ ᱢᱮ",
            "open_ar_view" to "ᱮ.ᱟᱨ. ᱧᱮᱞ ᱠᱷᱩᱞᱟᱹᱭ ᱢᱮ",
            "submit" to "ᱡᱚᱢᱟᱭ ᱢᱮ",
            "choose_language" to "ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ",
            "choose_language_sub" to "ᱨᱩᱠᱷᱤᱭᱟᱹ ᱰᱨᱤᱞ ᱟᱨ ᱟᱲᱟᱝ ᱥᱮᱪᱮᱫ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱟᱜ ᱠᱩᱥᱤ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ ᱾",
            "continue_btn" to "ᱞᱟᱦᱟᱭ ᱢᱮ",
            "back" to "ᱨᱩᱣᱟᱹᱲ",
            "change_language" to "ᱯᱟᱹᱨᱥᱤ ᱵᱚᱫᱚᱞ ᱢᱮ",
            "main_home_title" to "ᱢᱩᱬᱩᱛ ᱚᱲᱟᱜ ᱥᱠᱨᱤᱱ",
            "welcome_trainee" to "ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ, ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱢᱚᱱᱳᱡᱽ",
            "active_shift" to "ᱥᱟᱹᱠᱨᱤᱭᱟᱹ ᱥᱤᱯᱷᱴ • ᱡᱳᱱ 4B",
            "safety_training" to "ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ ᱢᱚᱰᱩᱞ",
            "safety_training_desc" to "ᱨᱩᱠᱷᱤᱭᱟᱹ ᱮ.ᱟᱨ. ᱨᱮ ᱟᱹᱰᱤ ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱦᱟᱞᱚᱛ ᱨᱮᱭᱟᱜ ᱵᱤᱰᱟᱹᱣ ᱢᱮ ᱾",
            "recommended_drill" to "ᱥᱩᱯᱟᱨᱤᱥ ᱮ.ᱟᱨ. ᱰᱨᱤᱞ",
            "gas_leak_title" to "ᱜᱮᱥ ᱞᱤᱠ ᱟᱴᱠᱟᱣ ᱮ.ᱟᱨ.",
            "gas_leak_sub" to "ᱟᱢᱫᱟᱡᱽ ᱚᱠᱛᱚ: 8 ᱴᱤᱲᱤᱡ • ᱮᱥᱯᱮᱥᱤᱭᱟᱞ ᱢᱮᱥ ᱛᱮᱭᱟᱨ",
            "drills" to "ᱰᱨᱤᱞ",
            "score" to "ᱥᱠᱳᱨ",
            "badges" to "ᱵᱮᱡᱽ",
            "passing_status" to "ᱯᱟᱥ",
            "assigned_modules" to "ᱮᱢ ᱟᱠᱟᱱ ᱢᱚᱰᱩᱞ",
            "drill_evaluation" to "ᱮ.ᱟᱨ. ᱰᱨᱤᱞ ᱢᱩᱞᱭᱟᱝᱠᱚᱱ",
            "passed_certified" to "ᱯᱟᱥ ᱮᱱᱟ - ᱯᱚᱨᱢᱟᱬᱤᱛ",
            "retry_drill" to "ᱟᱨᱦᱚᱸ ᱰᱨᱤᱞ ᱢᱮ",
            "view_certificate" to "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱮᱞ ᱢᱮ",
            "sign_out" to "ᱚᱰᱚᱠᱚᱜ ᱢᱮ"
        )
    )

    /**
     * Resolves a translated string key dynamically given the target language
     */
    fun getString(key: String, language: AppLanguage): String {
        return dictionary[language]?.get(key)
            ?: dictionary[AppLanguage.ENGLISH]?.get(key)
            ?: key
    }
}

/**
 * 3. CompositionLocal for Global Multilingual State
 * Allows any Composable in the hierarchy to read the active language or subscribe to changes.
 */
val LocalAppLanguage = staticCompositionLocalOf { AppLanguage.ENGLISH }

/**
 * Composable dynamic string resolver convenience function.
 * Example:
 *   Text(text = appString("select_role"))
 */
@Composable
fun appString(key: String): String {
    val currentLanguage = LocalAppLanguage.current
    return AppStrings.getString(key, currentLanguage)
}
`;
