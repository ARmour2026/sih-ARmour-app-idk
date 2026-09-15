/**
 * Android Localization String Resources
 * Supporting 3 Languages:
 * 1. English (Default) -> res/values/strings.xml
 * 2. Hindi (हिन्दी) -> res/values-hi/strings.xml
 * 3. Santali (ᱥᱟᱱᱛᱟᱲᱤ in Ol Chiki script) -> res/values-sat/strings.xml
 */

import { AppLanguage } from '../types';

export const STRINGS_EN_XML = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- Application & General -->
    <string name="app_name">ARmour Safety</string>
    <string name="app_full_title">AR-Based Vocational Safety Training</string>
    <string name="app_tagline">Industrial Safety Simulation &amp; Competency Assessment</string>
    <string name="sih_prototype_tag">SIH 2026 Prototype • Industrial Compliance</string>
    <string name="offline_pack_loaded">Offline language pack loaded</string>
    <string name="btn_continue">Continue</string>
    <string name="btn_back">Back</string>
    <string name="btn_close">Close</string>
    <string name="btn_submit">Submit</string>
    <string name="btn_cancel">Cancel</string>
    <string name="btn_save">Save Changes</string>
    <string name="loading">Loading...</string>
    <string name="change_language">Change Language</string>

    <!-- 1. Language Selection Screen -->
    <string name="title_language_selection">Choose Your Language</string>
    <string name="subtitle_language_selection">Select the language you are most comfortable with for safety drills and audio narration.</string>
    <string name="lang_en_name">English</string>
    <string name="lang_en_sub">Universal</string>
    <string name="lang_hi_name">हिन्दी</string>
    <string name="lang_hi_sub">Hindi</string>
    <string name="lang_sat_name">Santali</string>
    <string name="lang_sat_sub">ᱥᱟᱱᱛᱟᱲᱤ (Ol Chiki)</string>
    <string name="lang_selected_badge">Default Audio Dialect</string>

    <!-- 2. Role Selection Screen -->
    <string name="title_role_selection">Select Access Role</string>
    <string name="subtitle_role_selection">Choose your operational terminal role to continue industrial protocol.</string>
    <string name="role_worker_title">WORKER</string>
    <string name="role_worker_badge">INTERACTIVE AR</string>
    <string name="role_worker_desc">Start safety training, machinery pre-flight checks, and immersive hazard AR simulations.</string>
    <string name="role_worker_modules_tag">MODULES: FIRE SAFETY / GAS SAFETY</string>
    <string name="role_admin_title">ADMIN / SUPERVISOR</string>
    <string name="role_admin_badge">AUTHENTICATION REQUIRED</string>
    <string name="role_admin_desc">Manage trainees, review audit logs, issue certified vocational credentials, and configure zones.</string>
    <string name="btn_enter_worker_role">Enter Trainee Simulator</string>
    <string name="btn_enter_admin_role">Proceed to Admin Portal</string>

    <!-- 3. Worker Login Screen -->
    <string name="title_worker_login">Worker Terminal Login</string>
    <string name="subtitle_worker_login">Enter your industrial employee identification and security PIN.</string>
    <string name="label_worker_id">Worker ID</string>
    <string name="hint_worker_id">e.g. WRK-4029</string>
    <string name="label_security_pin">Security PIN</string>
    <string name="hint_security_pin">6-digit industrial PIN</string>
    <string name="btn_enter_terminal">Enter Terminal</string>
    <string name="btn_register_new_worker">Register New Worker</string>
    <string name="btn_forgot_pin">Forgot PIN / Reset Credentials?</string>

    <!-- 4. Admin Login Screen -->
    <string name="title_admin_login">Admin Portal Access</string>
    <string name="subtitle_admin_login">Restricted to authorized safety officers and DGMS compliance auditors.</string>
    <string name="label_admin_email">Official Email ID</string>
    <string name="hint_admin_email">supervisor@factory.gov.in</string>
    <string name="label_admin_password">Password</string>
    <string name="hint_admin_password">Enter master key</string>
    <string name="btn_sign_in_admin">Sign In as Admin</string>
    <string name="admin_compliance_notice">DGMS Regulatory Audit Vault • End-to-End Encrypted</string>

    <!-- 5. Registration Screen -->
    <string name="title_registration">New Trainee Registration</string>
    <string name="subtitle_registration">Create a certified profile for vocational industrial training.</string>
    <string name="label_full_name">Full Name</string>
    <string name="hint_full_name">e.g. Rajesh Soren</string>
    <string name="label_plant_division">Plant Division</string>
    <string name="hint_plant_division">e.g. Blast Furnace / Zone 4B</string>
    <string name="label_preferred_language">Preferred Language</string>
    <string name="btn_create_profile">Register &amp; Create Profile</string>
    <string name="already_have_account">Already registered? Log in</string>

    <!-- 6. Forgot Password Screen -->
    <string name="title_forgot_password">Credential Recovery</string>
    <string name="subtitle_forgot_password">Enter your registered ID or email to receive recovery instructions.</string>
    <string name="btn_send_recovery_code">Send Recovery Code</string>
    <string name="btn_back_to_login">Return to Terminal Login</string>

    <!-- Bottom Navigation -->
    <string name="nav_overview">Overview</string>
    <string name="nav_modules">Modules</string>
    <string name="nav_certificates">Certificates</string>
    <string name="nav_settings">Settings</string>
    <string name="nav_dashboard">Dashboard</string>
    <string name="nav_trainees">Trainees</string>
    <string name="nav_ledger">Ledger</string>

    <!-- 7. Worker Dashboard -->
    <string name="worker_welcome">Welcome back, %1$s</string>
    <string name="worker_active_shift">Shift Active • Zone 4B</string>
    <string name="kpi_overall_score">Overall Score</string>
    <string name="kpi_modules_completed">Modules Passed</string>
    <string name="kpi_drills_taken">Drills Taken</string>
    <string name="hero_mandatory_drill">Mandatory AR Drill Required</string>
    <string name="hero_drill_title">Fire Extinguisher PASS Protocol</string>
    <string name="hero_drill_desc">Extinguish chemical electrical flare-up in Zone 3 High-Voltage Substation.</string>
    <string name="btn_launch_ar_drill">Launch AR Training Drill</string>
    <string name="section_assigned_modules">My Assigned Modules</string>
    <string name="btn_view_all">View All</string>
    <string name="status_completed">Completed</string>
    <string name="status_in_progress">In Progress</string>
    <string name="status_not_started">Not Started</string>

    <!-- 8. Worker Modules Catalog -->
    <string name="title_modules_catalog">Safety Training Catalog</string>
    <string name="subtitle_modules_catalog">Interactive AR simulations designed for heavy industrial environments.</string>
    <string name="filter_all">All</string>
    <string name="filter_fire">Fire Safety</string>
    <string name="filter_gas">Gas Safety</string>
    <string name="filter_electrical">Electrical</string>
    <string name="btn_start_simulation">Start AR Simulation</string>
    <string name="btn_review_module">Review Module</string>
    <string name="module_checkpoints">%1$d Mandatory Checkpoints</string>
    <string name="module_duration">%1$d Mins</string>

    <!-- 9. AR Drill Result -->
    <string name="title_drill_result">AR Drill Evaluation</string>
    <string name="subtitle_drill_result">Fire Extinguisher PASS Protocol Simulation</string>
    <string name="status_passed">PASSED - CERTIFIED</string>
    <string name="status_failed">NEEDS REASSESSMENT</string>
    <string name="score_achieved">Achieved: %1$d/100</string>
    <string name="breakdown_ppe">PPE Gear Compliance</string>
    <string name="breakdown_hazard">Hazard Detection Speed</string>
    <string name="breakdown_protocol">Extinguisher PASS Protocol</string>
    <string name="breakdown_evacuation">Safe Evacuation Route</string>
    <string name="btn_view_certificate">View / Download Certificate</string>
    <string name="btn_retry_drill">Retry AR Drill</string>

    <!-- 10. Worker Certificates -->
    <string name="title_worker_certificates">My Verified Credentials</string>
    <string name="subtitle_worker_certificates">DGMS and National Safety Council accredited qualifications.</string>
    <string name="cert_id_label">Credential ID: %1$s</string>
    <string name="cert_issued_on">Issued on: %1$s</string>
    <string name="cert_valid_until">Valid until: %1$s</string>
    <string name="btn_inspect_qr">Inspect QR</string>
    <string name="btn_download_pdf">Download PDF</string>
    <string name="cert_status_valid">Valid &amp; Verified</string>

    <!-- 11. Worker Settings -->
    <string name="title_worker_settings">Worker Profile &amp; Preferences</string>
    <string name="section_profile">Profile Information</string>
    <string name="section_language_audio">Language &amp; Audio Dialect</string>
    <string name="section_ar_camera">AR Camera &amp; Sensor Calibration</string>
    <string name="btn_sign_out">Sign Out of Terminal</string>

    <!-- 12. Admin Dashboard -->
    <string name="title_admin_dashboard">Safety Supervisory Dashboard</string>
    <string name="kpi_total_trainees">Total Trainees</string>
    <string name="kpi_compliance_rate">Compliance Rate</string>
    <string name="kpi_average_score">Avg Score</string>
    <string name="kpi_pending_certs">Pending Certs</string>
    <string name="btn_export_csv">Export CSV Report</string>
    <string name="recent_drills_ledger">Recent Field Drills Ledger</string>

    <!-- 13. Admin Trainees -->
    <string name="title_admin_trainees">Trainee Safety Directory</string>
    <string name="search_trainees_hint">Search trainee name or ID...</string>
    <string name="filter_certified">Certified</string>
    <string name="filter_in_training">In Training</string>
    <string name="filter_reassess">Needs Reassess</string>

    <!-- 14. Admin Trainee Detail -->
    <string name="title_trainee_detail">Trainee Compliance Dossier</string>
    <string name="competency_breakdown">Competency Breakdown</string>
    <string name="decision_latency">Decision Latency: %1$s sec</string>

    <!-- 15. Admin Modules -->
    <string name="title_admin_modules">Safety Curriculum Telemetry</string>
    <string name="module_completion_rate">Completion Rate</string>
    <string name="module_pass_rate">Pass Rate</string>

    <!-- 16. Admin Certificates Ledger -->
    <string name="title_admin_certificates">Regulatory Credential Ledger</string>
    <string name="btn_verify_blockchain">Verify Cryptographic Hash</string>
    <string name="qr_modal_title">Credential Cryptographic Verification</string>
    <string name="qr_modal_desc">Scan this QR code with any DGMS auditor terminal for on-site compliance verification.</string>
</resources>
`;

export const STRINGS_HI_XML = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- Application & General -->
    <string name="app_name">आर्मर सुरक्षा (ARmour)</string>
    <string name="app_full_title">एआर-आधारित व्यावसायिक सुरक्षा प्रशिक्षण</string>
    <string name="app_tagline">औद्योगिक सुरक्षा सिमुलेशन और दक्षता मूल्यांकन</string>
    <string name="sih_prototype_tag">एसआईएच 2026 प्रोटोटाइप • औद्योगिक अनुपालन</string>
    <string name="offline_pack_loaded">ऑफ़लाइन भाषा पैक लोड हो गया है</string>
    <string name="btn_continue">जारी रखें</string>
    <string name="btn_back">वापस</string>
    <string name="btn_close">बंद करें</string>
    <string name="btn_submit">जमा करें</string>
    <string name="btn_cancel">रद्द करें</string>
    <string name="btn_save">परिवर्तन सहेजें</string>
    <string name="loading">लोड हो रहा है...</string>
    <string name="change_language">भाषा बदलें</string>

    <!-- 1. Language Selection Screen -->
    <string name="title_language_selection">अपनी भाषा चुनें</string>
    <string name="subtitle_language_selection">सुरक्षा अभ्यासों और ऑडियो विवरण के लिए वह भाषा चुनें जिसमें आप सबसे अधिक सहज महसूस करते हैं।</string>
    <string name="lang_en_name">English</string>
    <string name="lang_en_sub">सार्वभौमिक</string>
    <string name="lang_hi_name">हिन्दी</string>
    <string name="lang_hi_sub">हिन्दी (Hindi)</string>
    <string name="lang_sat_name">संथाली</string>
    <string name="lang_sat_sub">ᱥᱟᱱᱛᱟᱲᱤ (ओल चिकी)</string>
    <string name="lang_selected_badge">डिफ़ॉल्ट ऑडियो बोली</string>

    <!-- 2. Role Selection Screen -->
    <string name="title_role_selection">पहुंच भूमिका चुनें</string>
    <string name="subtitle_role_selection">औद्योगिक निरीक्षण प्रोटोकॉल जारी रखने के लिए अपनी परिचालन भूमिका चुनें।</string>
    <string name="role_worker_title">कार्यकर्ता (WORKER)</string>
    <string name="role_worker_badge">इंटरैक्टिव एआर</string>
    <string name="role_worker_desc">सुरक्षा प्रशिक्षण, मशीनरी प्री-फ्लाइट जांच और खतरों के एआर सिमुलेशन शुरू करें।</string>
    <string name="role_worker_modules_tag">मॉड्यूल: अग्नि सुरक्षा / गैस सुरक्षा</string>
    <string name="role_admin_title">व्यवस्थापक / पर्यवेक्षक</string>
    <string name="role_admin_badge">प्रमाणीकरण आवश्यक</string>
    <string name="role_admin_desc">प्रशिक्षुओं का प्रबंधन करें, ऑडिट लॉग देखें, प्रमाणपत्र जारी करें और क्षेत्र कॉन्फ़िगर करें।</string>
    <string name="btn_enter_worker_role">प्रशिक्षु सिम्युलेटर में प्रवेश करें</string>
    <string name="btn_enter_admin_role">व्यवस्थापक पोर्टल पर आगे बढ़ें</string>

    <!-- 3. Worker Login Screen -->
    <string name="title_worker_login">कार्यकर्ता टर्मिनल लॉगिन</string>
    <string name="subtitle_worker_login">अपनी औद्योगिक कर्मचारी पहचान (ID) और सुरक्षा पिन दर्ज करें।</string>
    <string name="label_worker_id">कार्यकर्ता आईडी</string>
    <string name="hint_worker_id">उदा. WRK-4029</string>
    <string name="label_security_pin">सुरक्षा पिन</string>
    <string name="hint_security_pin">6-अंकों का औद्योगिक पिन</string>
    <string name="btn_enter_terminal">टर्मिनल में प्रवेश करें</string>
    <string name="btn_register_new_worker">नया कार्यकर्ता पंजीकृत करें</string>
    <string name="btn_forgot_pin">पिन भूल गए? क्रेडेंशियल रीसेट करें</string>

    <!-- 4. Admin Login Screen -->
    <string name="title_admin_login">व्यवस्थापक पोर्टल लॉगिन</string>
    <string name="subtitle_admin_login">अधिकृत सुरक्षा अधिकारियों और डीजीएमएस अनुपालन लेखापरीक्षकों के लिए सीमित।</string>
    <string name="label_admin_email">आधिकारिक ईमेल आईडी</string>
    <string name="hint_admin_email">supervisor@factory.gov.in</string>
    <string name="label_admin_password">पासवर्ड</string>
    <string name="hint_admin_password">मास्टर पासवर्ड दर्ज करें</string>
    <string name="btn_sign_in_admin">व्यवस्थापक के रूप में साइन इन करें</string>
    <string name="admin_compliance_notice">डीजीएमएस विनियामक ऑडिट वॉल्ट • एंड-टू-एंड एन्क्रिप्टेड</string>

    <!-- 5. Registration Screen -->
    <string name="title_registration">नया प्रशिक्षु पंजीकरण</string>
    <string name="subtitle_registration">व्यावसायिक औद्योगिक प्रशिक्षण के लिए एक प्रमाणित प्रोफ़ाइल बनाएं।</string>
    <string name="label_full_name">पूरा नाम</string>
    <string name="hint_full_name">उदा. राजेश सोरेन</string>
    <string name="label_plant_division">संयंत्र प्रभाग</string>
    <string name="hint_plant_division">उदा. ब्लास्ट फर्नेस / ज़ोन 4B</string>
    <string name="label_preferred_language">पसंदीदा भाषा</string>
    <string name="btn_create_profile">पंजीकरण करें और प्रोफ़ाइल बनाएं</string>
    <string name="already_have_account">पहले से पंजीकृत हैं? लॉगिन करें</string>

    <!-- 6. Forgot Password Screen -->
    <string name="title_forgot_password">क्रेडेंशियल पुनर्प्राप्ति</string>
    <string name="subtitle_forgot_password">रीसेट निर्देश प्राप्त करने के लिए अपनी पंजीकृत आईडी या ईमेल दर्ज करें।</string>
    <string name="btn_send_recovery_code">रिकवरी कोड भेजें</string>
    <string name="btn_back_to_login">टर्मिनल लॉगिन पर वापस जाएं</string>

    <!-- Bottom Navigation -->
    <string name="nav_overview">अवलोकन</string>
    <string name="nav_modules">मॉड्यूल</string>
    <string name="nav_certificates">प्रमाणपत्र</string>
    <string name="nav_settings">सेटिंग्स</string>
    <string name="nav_dashboard">डैशबोर्ड</string>
    <string name="nav_trainees">प्रशिक्षु</string>
    <string name="nav_ledger">बहीखाता</string>

    <!-- 7. Worker Dashboard -->
    <string name="worker_welcome">वापसी पर स्वागत है, %1$s</string>
    <string name="worker_active_shift">सक्रिय शिफ्ट • ज़ोन 4B</string>
    <string name="kpi_overall_score">कुल स्कोर</string>
    <string name="kpi_modules_completed">पूर्ण मॉड्यूल</string>
    <string name="kpi_drills_taken">किए गए ड्रिल</string>
    <string name="hero_mandatory_drill">अनिवार्य एआर ड्रिल आवश्यक</string>
    <string name="hero_drill_title">अग्निशामक PASS प्रोटोकॉल</string>
    <string name="hero_drill_desc">ज़ोन 3 हाई-वोल्टेज सबस्टेशन में रासायनिक विद्युत आग बुझाने का अभ्यास करें।</string>
    <string name="btn_launch_ar_drill">एआर प्रशिक्षण ड्रिल शुरू करें</string>
    <string name="section_assigned_modules">मेरे आवंटित मॉड्यूल</string>
    <string name="btn_view_all">सभी देखें</string>
    <string name="status_completed">पूर्ण हुआ</string>
    <string name="status_in_progress">प्रगति में</string>
    <string name="status_not_started">शुरू नहीं हुआ</string>

    <!-- 8. Worker Modules Catalog -->
    <string name="title_modules_catalog">सुरक्षा प्रशिक्षण कैटलॉग</string>
    <string name="subtitle_modules_catalog">भारी औद्योगिक वातावरण के लिए डिज़ाइन किए गए इंटरैक्टिव एआर सिमुलेशन।</string>
    <string name="filter_all">सभी</string>
    <string name="filter_fire">अग्नि सुरक्षा</string>
    <string name="filter_gas">गैस सुरक्षा</string>
    <string name="filter_electrical">विद्युत सुरक्षा</string>
    <string name="btn_start_simulation">एआर सिमुलेशन शुरू करें</string>
    <string name="btn_review_module">मॉड्यूल की समीक्षा करें</string>
    <string name="module_checkpoints">%1$d अनिवार्य चेकपॉइंट्स</string>
    <string name="module_duration">%1$d मिनट</string>

    <!-- 9. AR Drill Result -->
    <string name="title_drill_result">एआर ड्रिल मूल्यांकन</string>
    <string name="subtitle_drill_result">अग्निशामक PASS प्रोटोकॉल सिमुलेशन</string>
    <string name="status_passed">उत्तीर्ण - प्रमाणित</string>
    <string name="status_failed">पुनर्मूल्यांकन आवश्यक</string>
    <string name="score_achieved">प्राप्त अंक: %1$d/100</string>
    <string name="breakdown_ppe">पीपीई गियर अनुपालन</string>
    <string name="breakdown_hazard">खतरा पहचानने की गति</string>
    <string name="breakdown_protocol">PASS प्रोटोकॉल सटीकता</string>
    <string name="breakdown_evacuation">सुरक्षित निकास मार्ग</string>
    <string name="btn_view_certificate">प्रमाणपत्र देखें / डाउनलोड करें</string>
    <string name="btn_retry_drill">एआर ड्रिल पुनः प्रयास करें</string>

    <!-- 10. Worker Certificates -->
    <string name="title_worker_certificates">मेरे सत्यापित प्रमाणपत्र</string>
    <string name="subtitle_worker_certificates">डीजीएमएस और राष्ट्रीय सुरक्षा परिषद द्वारा मान्यता प्राप्त योग्यताएं।</string>
    <string name="cert_id_label">प्रमाणपत्र आईडी: %1$s</string>
    <string name="cert_issued_on">जारी किया गया: %1$s</string>
    <string name="cert_valid_until">वैधता तक: %1$s</string>
    <string name="btn_inspect_qr">क्यूआर देखें</string>
    <string name="btn_download_pdf">पीडीएफ डाउनलोड करें</string>
    <string name="cert_status_valid">वैध और सत्यापित</string>

    <!-- 11. Worker Settings -->
    <string name="title_worker_settings">कार्यकर्ता प्रोफ़ाइल और प्राथमिकताएं</string>
    <string name="section_profile">प्रोफ़ाइल जानकारी</string>
    <string name="section_language_audio">भाषा और ऑडियो बोली</string>
    <string name="section_ar_camera">एआर कैमरा और सेंसर कैलिब्रेशन</string>
    <string name="btn_sign_out">टर्मिनल से साइन आउट करें</string>

    <!-- 12. Admin Dashboard -->
    <string name="title_admin_dashboard">सुरक्षा पर्यवेक्षी डैशबोर्ड</string>
    <string name="kpi_total_trainees">कुल प्रशिक्षु</string>
    <string name="kpi_compliance_rate">अनुपालन दर</string>
    <string name="kpi_average_score">औसत स्कोर</string>
    <string name="kpi_pending_certs">लंबित प्रमाणपत्र</string>
    <string name="btn_export_csv">सीएसवी रिपोर्ट निर्यात करें</string>
    <string name="recent_drills_ledger">हाल के सुरक्षा ड्रिल की सूची</string>

    <!-- 13. Admin Trainees -->
    <string name="title_admin_trainees">प्रशिक्षु सुरक्षा निर्देशिका</string>
    <string name="search_trainees_hint">प्रशिक्षु का नाम या आईडी खोजें...</string>
    <string name="filter_certified">प्रमाणित</string>
    <string name="filter_in_training">प्रशिक्षण में</string>
    <string name="filter_reassess">पुनर्मूल्यांकन आवश्यक</string>

    <!-- 14. Admin Trainee Detail -->
    <string name="title_trainee_detail">प्रशिक्षु अनुपालन डोजियर</string>
    <string name="competency_breakdown">दक्षता विवरण</string>
    <string name="decision_latency">निर्णय विलंबता: %1$s सेकंड</string>

    <!-- 15. Admin Modules -->
    <string name="title_admin_modules">सुरक्षा पाठ्यक्रम टेलीमेट्री</string>
    <string name="module_completion_rate">पूर्णता दर</string>
    <string name="module_pass_rate">उत्तीर्ण दर</string>

    <!-- 16. Admin Certificates Ledger -->
    <string name="title_admin_certificates">नियामक क्रेडेंशियल बहीखाता</string>
    <string name="btn_verify_blockchain">क्रिप्टोग्राफ़िक हैश सत्यापित करें</string>
    <string name="qr_modal_title">क्रेडेंशियल क्रिप्टोग्राफ़िक सत्यापन</string>
    <string name="qr_modal_desc">ऑन-साइट अनुपालन सत्यापन के लिए किसी भी डीजीएमएस ऑडिटर टर्मिनल से इस क्यूआर कोड को स्कैन करें।</string>
</resources>
`;

export const STRINGS_SAT_XML = `<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- Application & General -->
    <string name="app_name">ARmour ᱨᱩᱠᱷᱤᱭᱟᱹ</string>
    <string name="app_full_title">ᱮ.ᱟᱨ. ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ</string>
    <string name="app_tagline">ᱠᱟᱹᱨᱜᱟᱲ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱟᱨ ᱡᱟᱸᱪ ᱵᱤᱰᱟᱹᱣ</string>
    <string name="sih_prototype_tag">SIH ᱒᱐᱒᱖ ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ • ᱠᱟᱹᱨᱜᱟᱲ ᱱᱤᱭᱚᱢ</string>
    <string name="offline_pack_loaded">ᱚᱯᱷᱞᱟᱭᱤᱱ ᱯᱟᱹᱨᱥᱤ ᱯᱮᱠ ᱞᱟᱫᱮ ᱮᱱᱟ</string>
    <string name="btn_continue">ᱞᱟᱦᱟᱭ ᱢᱮ</string>
    <string name="btn_back">ᱨᱩᱣᱟᱹᱲ</string>
    <string name="btn_close">ᱵᱚᱸᱫᱽ ᱢᱮ</string>
    <string name="btn_submit">ᱡᱚᱢᱟᱭ ᱢᱮ</string>
    <string name="btn_cancel">ᱵᱟᱹᱛᱤᱞ ᱢᱮ</string>
    <string name="btn_save">ᱵᱚᱫᱚᱞ ᱥᱟᱸᱪᱟᱣ ᱢᱮ</string>
    <string name="loading">ᱞᱟᱫᱮᱜ ᱠᱟᱱᱟ...</string>
    <string name="change_language">ᱯᱟᱹᱨᱥᱤ ᱵᱚᱫᱚᱞ ᱢᱮ</string>

    <!-- 1. Language Selection Screen -->
    <string name="title_language_selection">ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ</string>
    <string name="subtitle_language_selection">ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ ᱟᱨ ᱟᱲᱟᱝ ᱞᱟᱹᱜᱤᱫ ᱡᱟᱦᱟᱸ ᱯᱟᱹᱨᱥᱤ ᱛᱮ ᱟᱢ ᱥᱩᱵᱤᱫᱷᱟᱢ ᱵᱩᱡᱷᱟᱹᱣ ᱚᱱᱟ ᱵᱟᱪᱷᱟᱣ ᱢᱮ ᱾</string>
    <string name="lang_en_name">English</string>
    <string name="lang_en_sub">ᱡᱟᱜᱟᱛᱤᱠ</string>
    <string name="lang_hi_name">हिन्दी</string>
    <string name="lang_hi_sub">ᱦᱤᱱᱫᱤ</string>
    <string name="lang_sat_name">ᱥᱟᱱᱛᱟᱲᱤ</string>
    <string name="lang_sat_sub">ᱥᱟᱱᱛᱟᱲᱤ (ᱚᱞ ᱪᱤᱠᱤ)</string>
    <string name="lang_selected_badge">ᱢᱩᱬᱩᱛ ᱟᱲᱟᱝ ᱯᱟᱹᱨᱥᱤ</string>

    <!-- 2. Role Selection Screen -->
    <string name="title_role_selection">ᱠᱟᱹᱢᱤ ᱦᱟᱹᱴᱤᱧ ᱵᱟᱪᱷᱟᱣ ᱢᱮ</string>
    <string name="subtitle_role_selection">ᱠᱟᱹᱨᱜᱟᱲ ᱧᱮᱞ-ᱛᱚᱨᱟᱣ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱟᱜ ᱠᱟᱹᱢᱤ ᱵᱟᱪᱷᱟᱣ ᱠᱟᱛᱮ ᱞᱟᱦᱟᱜ ᱢᱮ ᱾</string>
    <string name="role_worker_title">ᱠᱟᱹᱢᱤᱭᱟᱹ (WORKER)</string>
    <string name="role_worker_badge">ᱤᱱᱴᱟᱨᱮᱠᱴᱤᱵᱷ ᱮ.ᱟᱨ.</string>
    <string name="role_worker_desc">ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ, ᱢᱤᱥᱤᱱ ᱡᱟᱸᱪ ᱟᱨ ᱵᱤᱯᱚᱫᱽ ᱨᱮᱭᱟᱜ ᱮ.ᱟᱨ. ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱮᱛᱚᱦᱚᱵ ᱢᱮ ᱾</string>
    <string name="role_worker_modules_tag">ᱢᱚᱰᱩᱞ: ᱥᱮᱸᱜᱮᱞ ᱨᱩᱠᱷᱤᱭᱟᱹ / ᱜᱮᱥ ᱨᱩᱠᱷᱤᱭᱟᱹ</string>
    <string name="role_admin_title">ᱥᱟᱥᱚᱱᱤᱭᱟᱹ / ᱟᱭᱩᱨᱤᱭᱟᱹ</string>
    <string name="role_admin_badge">ᱯᱚᱨᱢᱟᱬ ᱞᱟᱹᱠᱛᱤ</string>
    <string name="role_admin_desc">ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱠᱚ ᱥᱟᱢᱵᱽᱲᱟᱣ, ᱚᱰᱤᱴ ᱧᱮᱞ, ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱮᱢ ᱟᱨ ᱡᱳᱱ ᱥᱟᱡᱟᱣ ᱢᱮ ᱾</string>
    <string name="btn_enter_worker_role">ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱤᱢᱩᱞᱮᱴᱚᱨ ᱵᱚᱞᱚᱱ ᱢᱮ</string>
    <string name="btn_enter_admin_role">ᱥᱟᱥᱚᱱᱤᱭᱟᱹ ᱯᱚᱨᱴᱟᱞ ᱞᱟᱦᱟᱭ ᱢᱮ</string>

    <!-- 3. Worker Login Screen -->
    <string name="title_worker_login">ᱠᱟᱹᱢᱤᱭᱟᱹ ᱴᱟᱨᱢᱤᱱᱟᱞ ᱞᱚᱜᱤᱱ</string>
    <string name="subtitle_worker_login">ᱟᱢᱟᱜ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱟᱭᱰᱤ (ID) ᱟᱨ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱯᱤᱱ (PIN) ᱚᱞ ᱢᱮ ᱾</string>
    <string name="label_worker_id">ᱠᱟᱹᱢᱤᱭᱟᱹ ᱟᱭᱰᱤ</string>
    <string name="hint_worker_id">ᱡᱮᱞᱮᱠᱟ WRK-4029</string>
    <string name="label_security_pin">ᱨᱩᱠᱷᱤᱭᱟᱹ ᱯᱤᱱ</string>
    <string name="hint_security_pin">᱖ ᱞᱮᱠᱷᱟ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱯᱤᱱ</string>
    <string name="btn_enter_terminal">ᱴᱟᱨᱢᱤᱱᱟᱞ ᱵᱚᱞᱚᱱ ᱢᱮ</string>
    <string name="btn_register_new_worker">ᱱᱟᱣᱟ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱨᱮᱡᱤᱥᱴᱟᱨ</string>
    <string name="btn_forgot_pin">ᱯᱤᱱ ᱦᱤᱲᱤᱧ ᱮᱱᱟ? ᱱᱟᱣᱟ ᱛᱮᱭᱟᱨ</string>

    <!-- 4. Admin Login Screen -->
    <string name="title_admin_login">ᱥᱟᱥᱚᱱᱤᱭᱟᱹ ᱯᱚᱨᱴᱟᱞ ᱵᱚᱞᱚᱱ</string>
    <string name="subtitle_admin_login">ᱠᱷᱟᱹᱞᱤ ᱢᱟᱱᱚᱛ ᱧᱟᱢ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱚᱯᱷᱤᱥᱚᱨ ᱟᱨ DGMS ᱚᱰᱤᱴᱚᱨ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱾</string>
    <string name="label_admin_email">ᱚᱯᱷᱤᱥᱤᱭᱟᱞ ᱤᱢᱮᱞ ᱟᱭᱰᱤ</string>
    <string name="hint_admin_email">supervisor@factory.gov.in</string>
    <string name="label_admin_password">ᱯᱟᱥᱣᱟᱨᱰ</string>
    <string name="hint_admin_password">ᱢᱩᱬᱩᱛ ᱯᱟᱥᱣᱟᱨᱰ ᱚᱞ ᱢᱮ</string>
    <string name="btn_sign_in_admin">ᱥᱟᱥᱚᱱᱤᱭᱟᱹ ᱞᱮᱠᱟᱛᱮ ᱵᱚᱞᱚᱱ ᱢᱮ</string>
    <string name="admin_compliance_notice">DGMS ᱱᱤᱭᱚᱢ ᱚᱰᱤᱴ ᱵᱷᱳᱞᱴ • ᱨᱩᱠᱷᱤᱭᱟᱹ ᱛᱮ ᱥᱟᱸᱪᱟᱣ</string>

    <!-- 5. Registration Screen -->
    <string name="title_registration">ᱱᱟᱣᱟ ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱨᱮᱡᱤᱥᱴᱟᱨ</string>
    <string name="subtitle_registration">ᱠᱟᱹᱨᱜᱟᱲ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱟᱜ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱵᱮᱱᱟᱣ ᱢᱮ ᱾</string>
    <string name="label_full_name">ᱯᱩᱨᱟᱹ ᱧᱩᱛᱩᱢ</string>
    <string name="hint_full_name">ᱡᱮᱞᱮᱠᱟ ᱨᱟᱡᱮᱥ ᱥᱚᱨᱮᱱ</string>
    <string name="label_plant_division">ᱯᱞᱟᱱᱴ ᱦᱟᱹᱴᱤᱧ</string>
    <string name="hint_plant_division">ᱡᱮᱞᱮᱠᱟ ᱵᱞᱟᱥᱴ ᱯᱷᱟᱨᱱᱮᱥ / ᱡᱳᱱ 4B</string>
    <string name="label_preferred_language">ᱠᱩᱥᱤᱭᱟᱜ ᱯᱟᱹᱨᱥᱤ</string>
    <string name="btn_create_profile">ᱨᱮᱡᱤᱥᱴᱟᱨ ᱟᱨ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱵᱮᱱᱟᱣ</string>
    <string name="already_have_account">ᱢᱟᱲᱟᱝ ᱠᱷᱚᱱ ᱨᱮᱡᱤᱥᱴᱟᱨ ᱢᱮᱱᱟᱜ ᱛᱟᱢᱟ? ᱞᱚᱜᱤᱱ ᱢᱮ</string>

    <!-- 6. Forgot Password Screen -->
    <string name="title_forgot_password">ᱯᱟᱥᱣᱟᱨᱰ ᱟᱹᱨᱩ</string>
    <string name="subtitle_forgot_password">ᱱᱟᱣᱟ ᱯᱤᱱ ᱧᱟᱢ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱟᱜ ᱟᱭᱰᱤ ᱥᱮ ᱤᱢᱮᱞ ᱚᱞ ᱢᱮ ᱾</string>
    <string name="btn_send_recovery_code">ᱨᱤᱠᱚᱵᱷᱚᱨᱤ ᱠᱳᱰ ᱠᱩᱞ ᱢᱮ</string>
    <string name="btn_back_to_login">ᱴᱟᱨᱢᱤᱱᱟᱞ ᱞᱚᱜᱤᱱ ᱛᱮ ᱨᱩᱣᱟᱹᱲ ᱢᱮ</string>

    <!-- Bottom Navigation -->
    <string name="nav_overview">ᱧᱮᱞ ᱯᱩᱨᱟᱹᱣ</string>
    <string name="nav_modules">ᱢᱚᱰᱩᱞ</string>
    <string name="nav_certificates">ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ</string>
    <string name="nav_settings">ᱥᱟᱡᱟᱣ</string>
    <string name="nav_dashboard">ᱰᱮᱥᱵᱳᱨᱰ</string>
    <string name="nav_trainees">ᱥᱮᱪᱮᱫᱤᱭᱟᱹ</string>
    <string name="nav_ledger">ᱞᱮᱡᱚᱨ</string>

    <!-- 7. Worker Dashboard -->
    <string name="worker_welcome">ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ, %1$s</string>
    <string name="worker_active_shift">ᱥᱟᱹᱠᱨᱤᱭᱟᱹ ᱥᱤᱯᱷᱴ • ᱡᱳᱱ 4B</string>
    <string name="kpi_overall_score">ᱢᱩᱴ ᱥᱠᱳᱨ</string>
    <string name="kpi_modules_completed">ᱯᱩᱨᱟᱹᱣ ᱢᱚᱰᱩᱞ</string>
    <string name="kpi_drills_taken">ᱮᱢ ᱟᱠᱟᱱ ᱰᱨᱤᱞ</string>
    <string name="hero_mandatory_drill">ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱮ.ᱟᱨ. ᱰᱨᱤᱞ</string>
    <string name="hero_drill_title">ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ PASS ᱱᱤᱭᱚᱢ</string>
    <string name="hero_drill_desc">ᱡᱳᱱ ᱓ ᱦᱟᱭ-ᱵᱷᱳᱞᱴᱮᱡᱽ ᱥᱟᱵᱽᱥᱴᱮᱥᱚᱱ ᱨᱮ ᱠᱮᱢᱤᱠᱟᱞ ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ ᱢᱮ ᱾</string>
    <string name="btn_launch_ar_drill">ᱮ.ᱟᱨ. ᱰᱨᱤᱞ ᱮᱦᱚᱵ ᱢᱮ</string>
    <string name="section_assigned_modules">ᱤᱧᱟᱜ ᱮᱢ ᱟᱠᱟᱱ ᱢᱚᱰᱩᱞ</string>
    <string name="btn_view_all">ᱡᱚᱛᱚ ᱧᱮᱞ ᱢᱮ</string>
    <string name="status_completed">ᱯᱩᱨᱟᱹᱣ ᱮᱱᱟ</string>
    <string name="status_in_progress">ᱪᱟᱞᱟᱜ ᱠᱟᱱᱟ</string>
    <string name="status_not_started">ᱵᱟᱝ ᱮᱦᱚᱵ ᱟᱠᱟᱱᱟ</string>

    <!-- 8. Worker Modules Catalog -->
    <string name="title_modules_catalog">ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ ᱛᱟᱹᱞᱠᱟᱹ</string>
    <string name="subtitle_modules_catalog">ᱠᱟᱹᱨᱜᱟᱲ ᱞᱟᱹᱜᱤᱫ ᱵᱮᱱᱟᱣ ᱟᱠᱟᱱ ᱤᱱᱴᱟᱨᱮᱠᱴᱤᱵᱷ ᱮ.ᱟᱨ. ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱾</string>
    <string name="filter_all">ᱡᱚᱛᱚ</string>
    <string name="filter_fire">ᱥᱮᱸᱜᱮᱞ ᱨᱩᱠᱷᱤᱭᱟᱹ</string>
    <string name="filter_gas">ᱜᱮᱥ ᱨᱩᱠᱷᱤᱭᱟᱹ</string>
    <string name="filter_electrical">ᱵᱤᱡᱽᱞᱤ ᱨᱩᱠᱷᱤᱭᱟᱹ</string>
    <string name="btn_start_simulation">ᱮ.ᱟᱨ. ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱮᱦᱚᱵ ᱢᱮ</string>
    <string name="btn_review_module">ᱢᱚᱰᱩᱞ ᱧᱮᱞ ᱢᱮ</string>
    <string name="module_checkpoints">%1$d ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱪᱮᱠᱯᱚᱭᱮᱱᱴ</string>
    <string name="module_duration">%1$d ᱴᱤᱲᱤᱡ</string>

    <!-- 9. AR Drill Result -->
    <string name="title_drill_result">ᱮ.ᱟᱨ. ᱰᱨᱤᱞ ᱢᱩᱞᱭᱟᱝᱠᱚᱱ</string>
    <string name="subtitle_drill_result">ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ PASS ᱱᱤᱭᱚᱢ ᱥᱤᱢᱩᱞᱮᱥᱚᱱ</string>
    <string name="status_passed">ᱯᱟᱥ ᱮᱱᱟ - ᱯᱚᱨᱢᱟᱬᱤᱛ</string>
    <string name="status_failed">ᱫᱚᱦᱲᱟ ᱯᱩᱨᱟᱹᱣ ᱢᱮ</string>
    <string name="score_achieved">ᱧᱟᱢ ᱟᱠᱟᱱ: %1$d/100</string>
    <string name="breakdown_ppe">PPE ᱦᱚᱨᱚᱜ ᱡᱟᱸᱪ</string>
    <string name="breakdown_hazard">ᱵᱤᱯᱚᱫᱽ ᱧᱟᱢ ᱞᱚᱜᱚᱱ</string>
    <string name="breakdown_protocol">PASS ᱱᱤᱭᱚᱢ ᱥᱩᱦᱤ</string>
    <string name="breakdown_evacuation">ᱨᱩᱠᱷᱤᱭᱟᱹ ᱚᱰᱚᱠ ᱦᱚᱨ</string>
    <string name="btn_view_certificate">ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱮᱞ / ᱰᱟᱩᱱᱞᱳᱰ</string>
    <string name="btn_retry_drill">ᱟᱨᱦᱚᱸ ᱰᱨᱤᱞ ᱢᱮ</string>

    <!-- 10. Worker Certificates -->
    <string name="title_worker_certificates">ᱤᱧᱟᱜ ᱯᱚᱨᱢᱟᱬ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ</string>
    <string name="subtitle_worker_certificates">DGMS ᱟᱨ ᱡᱟᱹᱛᱤᱭᱟᱹᱨᱤ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱠᱟᱣᱩᱱᱥᱤᱞ ᱢᱟᱱᱚᱛ ᱧᱟᱢ ᱾</string>
    <string name="cert_id_label">ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱟᱭᱰᱤ: %1$s</string>
    <string name="cert_issued_on">ᱮᱢ ᱟᱠᱟᱱ ᱢᱟᱹᱦᱤᱛ: %1$s</string>
    <string name="cert_valid_until">ᱪᱟᱵᱟᱜ ᱢᱟᱹᱦᱤᱛ: %1$s</string>
    <string name="btn_inspect_qr">QR ᱧᱮᱞ ᱢᱮ</string>
    <string name="btn_download_pdf">PDF ᱰᱟᱩᱱᱞᱳᱰ ᱢᱮ</string>
    <string name="cert_status_valid">ᱥᱩᱦᱤ ᱟᱨ ᱯᱚᱨᱢᱟᱬᱤᱛ</string>

    <!-- 11. Worker Settings -->
    <string name="title_worker_settings">ᱠᱟᱹᱢᱤᱭᱟᱹ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱟᱨ ᱥᱟᱡᱟᱣ</string>
    <string name="section_profile">ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱵᱟᱰᱟᱭ</string>
    <string name="section_language_audio">ᱯᱟᱹᱨᱥᱤ ᱟᱨ ᱟᱲᱟᱝ</string>
    <string name="section_ar_camera">ᱮ.ᱟᱨ. ᱠᱮᱢᱮᱨᱟ ᱟᱨ ᱥᱮᱱᱥᱚᱨ ᱥᱟᱡᱟᱣ</string>
    <string name="btn_sign_out">ᱴᱟᱨᱢᱤᱱᱟᱞ ᱠᱷᱚᱱ ᱚᱰᱚᱠᱚᱜ ᱢᱮ</string>

    <!-- 12. Admin Dashboard -->
    <string name="title_admin_dashboard">ᱨᱩᱠᱷᱤᱭᱟᱹ ᱧᱮᱞ-ᱛᱚᱨᱟᱣ ᱰᱮᱥᱵᱳᱨᱰ</string>
    <string name="kpi_total_trainees">ᱜᱩᱴ ᱥᱮᱪᱮᱫᱤᱭᱟᱹ</string>
    <string name="kpi_compliance_rate">ᱯᱟᱥ ᱦᱟᱹᱴᱤᱧ</string>
    <string name="kpi_average_score">ᱜᱩᱴ ᱥᱠᱳᱨ</string>
    <string name="kpi_pending_certs">ᱵᱟᱹᱠᱤ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ</string>
    <string name="btn_export_csv">CSV ᱨᱤᱯᱳᱨᱴ ᱚᱰᱚᱠ ᱢᱮ</string>
    <string name="recent_drills_ledger">ᱱᱤᱛᱚᱜᱟᱜ ᱰᱨᱤᱞ ᱛᱟᱹᱞᱠᱟᱹ</string>

    <!-- 13. Admin Trainees -->
    <string name="title_admin_trainees">ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱛᱟᱹᱞᱠᱟᱹ</string>
    <string name="search_trainees_hint">ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱧᱩᱛᱩᱢ ᱥᱮ ᱟᱭᱰᱤ ᱥᱮᱸᱫᱽᱨᱟᱭ ᱢᱮ...</string>
    <string name="filter_certified">ᱯᱟᱥ ᱟᱠᱟᱱ</string>
    <string name="filter_in_training">ᱥᱮᱪᱮᱫ ᱨᱮ</string>
    <string name="filter_reassess">ᱫᱚᱦᱲᱟ ᱵᱤᱰᱟᱹᱣ</string>

    <!-- 14. Admin Trainee Detail -->
    <string name="title_trainee_detail">ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱵᱟᱰᱟᱭ</string>
    <string name="competency_breakdown">ᱫᱟᱲᱮ ᱦᱟᱹᱴᱤᱧ</string>
    <string name="decision_latency">ᱜᱚᱴᱟ ᱚᱠᱛᱚ: %1$s ᱴᱤᱲᱤᱡ</string>

    <!-- 15. Admin Modules -->
    <string name="title_admin_modules">ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ ᱴᱮᱞᱤᱢᱤᱴᱨᱤ</string>
    <string name="module_completion_rate">ᱯᱩᱨᱟᱹᱣ ᱦᱟᱹᱴᱤᱧ</string>
    <string name="module_pass_rate">ᱯᱟᱥ ᱦᱟᱹᱴᱤᱧ</string>

    <!-- 16. Admin Certificates Ledger -->
    <string name="title_admin_certificates">ᱱᱤᱭᱚᱢ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱞᱮᱡᱚᱨ</string>
    <string name="btn_verify_blockchain">ᱦᱮᱥ ᱯᱚᱨᱢᱟᱬ ᱢᱮ</string>
    <string name="qr_modal_title">ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱯᱚᱨᱢᱟᱬ</string>
    <string name="qr_modal_desc">DGMS ᱚᱰᱤᱴᱚᱨ ᱴᱟᱨᱢᱤᱱᱟᱞ ᱛᱮ ᱱᱚᱣᱟ QR ᱠᱳᱰ ᱥᱠᱮᱱ ᱢᱮ ᱾</string>
</resources>
`;

/**
 * Runtime translation mapping for live interactive Web Simulator
 * Covers all 3 languages (English, Hindi, Santhali in Ol Chiki)
 * Specifically includes dummy translation dictionary for:
 * - "Select Role"
 * - "Student"
 * - "Teacher"
 * - "Next"
 * - "Open AR View"
 * - "Submit"
 */
export const I18N_STRINGS: Record<string, Record<string, string>> = {
  en: {
    // Explicit User-Requested Dictionary Keys
    select_role: 'Select Role',
    student: 'Student / Trainee',
    student_desc: 'Interactive AR safety training, machinery pre-flight checks, and hazard drills.',
    teacher: 'Teacher / Supervisor',
    teacher_desc: 'Review trainee performance, inspection telemetry, and issue certified vocational credentials.',
    next: 'Next',
    open_ar_view: 'Open AR View',
    submit: 'Submit',

    // General Application & Onboarding
    app_name: 'ARmour Safety',
    app_full_title: 'AR-Based Vocational Safety Training',
    app_subtitle: 'Industrial Safety Simulation & Competency Assessment',
    choose_language: 'Choose Your Language',
    choose_language_sub: 'Select the language you are most comfortable with for safety drills.',
    btn_continue: 'Continue',
    btn_back: 'Back',
    change_language: 'Change Language',
    offline_pack_loaded: 'SIH 2026 Prototype • Offline language pack loaded',
    role_selection_title: 'Select Access Role',
    role_selection_desc: 'Choose your operational role to proceed to Main Home Screen.',
    role_worker: 'WORKER / STUDENT',
    role_worker_badge: 'INTERACTIVE AR',
    role_worker_desc: 'Start safety training, machinery pre-flight checks, and immersive hazard AR simulations.',
    role_worker_modules_tag: 'MODULES: FIRE SAFETY / GAS SAFETY',
    role_admin: 'ADMIN / TEACHER',
    role_admin_badge: 'AUTHENTICATION REQUIRED',
    role_admin_desc: 'Manage trainees, review audit logs, issue certified vocational credentials, and configure zones.',
    btn_enter_worker: 'Enter Trainee Simulator',
    btn_enter_admin: 'Proceed to Admin Portal',
    worker_login_title: 'Worker Terminal Login',
    worker_login_subtitle: 'Enter your industrial identification and security PIN.',
    label_worker_id: 'Worker ID',
    label_security_pin: 'Security PIN',
    btn_enter_terminal: 'Enter Terminal',
    btn_register_worker: 'Register New Worker',
    btn_forgot_pin: 'Forgot PIN / Reset Credentials?',
    admin_login_title: 'Admin Portal Access',
    admin_login_subtitle: 'Authorized supervisory personnel and DGMS compliance auditors.',
    label_admin_email: 'Official Email ID',
    label_password: 'Password',
    btn_admin_signin: 'Sign In as Admin',
    welcome_back: 'Welcome back,',
    active_shift: 'Shift Active • Zone 4B',
    kpi_overall_score: 'Overall Score',
    kpi_modules_completed: 'Modules Done',
    kpi_drills_taken: 'Drills Taken',
    hero_mandatory_drill: 'Mandatory AR Drill',
    drill_hero_title: 'Fire Extinguisher PASS Protocol',
    drill_hero_desc: 'Extinguish chemical electrical fire in Zone 3 High-Voltage Substation.',
    btn_start_ar_drill: 'Open AR View',
    section_assigned_modules: 'My Assigned Modules',
    btn_view_all: 'View All',
    drill_result_title: 'AR Drill Evaluation',
    status_passed: 'PASSED - CERTIFIED',
    btn_view_certificate: 'View / Download Certificate',
    btn_retry_drill: 'Retry AR Drill',
    title_certificates: 'My Verified Credentials',
    title_settings: 'Worker Profile & Preferences',
    btn_sign_out: 'Sign Out of Terminal',
    admin_dash_title: 'Safety Supervisory Dashboard',
    kpi_total_trainees: 'Total Trainees',
    kpi_compliance_rate: 'Compliance Rate',
    kpi_average_score: 'Avg Score',
    kpi_pending_certs: 'Pending Certs',
    btn_export_report: 'Export CSV Report',
    main_home_title: 'Main Home Screen',
    welcome_trainee: 'Welcome, Trainee Manoj',
    safety_training: 'Safety Training',
    safety_training_desc: 'Practice emergency industrial situations in an interactive, safe AR environment.',
    drills: 'Drills',
    score: 'Score',
    badges: 'Badges',
    passing_status: 'Passing',
    nav_overview: 'Overview',
    nav_modules: 'Modules',
    nav_certificates: 'Certificates',
    nav_settings: 'Settings',
    nav_dashboard: 'Dashboard',
    nav_trainees: 'Trainees',
    nav_ledger: 'Ledger'
  },
  hi: {
    // Explicit User-Requested Dictionary Keys
    select_role: 'भूमिका चुनें',
    student: 'विद्यार्थी / प्रशिक्षु',
    student_desc: 'इंटरैक्टिव एआर सुरक्षा अभ्यास, मशीनरी निरीक्षण और खतरनाक स्थितियों के सिमुलेशन।',
    teacher: 'शिक्षक / पर्यवेक्षक',
    teacher_desc: 'प्रशिक्षु प्रदर्शन की समीक्षा करें, निरीक्षण लॉग देखें और प्रमाणित बैज जारी करें।',
    next: 'आगे बढ़ें',
    open_ar_view: 'एआर दृश्य खोलें',
    submit: 'जमा करें',

    // General Application & Onboarding
    app_name: 'आर्मर सुरक्षा (ARmour)',
    app_full_title: 'एआर-आधारित व्यावसायिक सुरक्षा प्रशिक्षण',
    app_subtitle: 'औद्योगिक सुरक्षा सिमुलेशन और दक्षता मूल्यांकन',
    choose_language: 'अपनी भाषा चुनें',
    choose_language_sub: 'सुरक्षा अभ्यास और ऑडियो मार्गदर्शन के लिए अपनी पसंदीदा भाषा चुनें।',
    btn_continue: 'जारी रखें',
    btn_back: 'वापस',
    change_language: 'भाषा बदलें',
    offline_pack_loaded: 'एसआईएच 2026 प्रोटोटाइप • ऑफ़लाइन भाषा पैक लोड',
    role_selection_title: 'प्रवेश भूमिका चुनें',
    role_selection_desc: 'मुख्य होम स्क्रीन पर आगे बढ़ने के लिए अपनी भूमिका चुनें।',
    role_worker: 'कार्यकर्ता / विद्यार्थी',
    role_worker_badge: 'इंटरैक्टिव एआर',
    role_worker_desc: 'सुरक्षा प्रशिक्षण, मशीनरी जांच और खतरनाक स्थितियों के एआर सिमुलेशन शुरू करें।',
    role_worker_modules_tag: 'मॉड्यूल: अग्नि सुरक्षा / गैस सुरक्षा',
    role_admin: 'व्यवस्थापक / शिक्षक',
    role_admin_badge: 'प्रमाणीकरण आवश्यक',
    role_admin_desc: 'प्रशिक्षुओं का प्रबंधन करें, ऑडिट लॉग देखें, प्रमाणपत्र जारी करें और क्षेत्र कॉन्फ़िगर करें।',
    btn_enter_worker: 'प्रशिक्षु सिम्युलेटर में प्रवेश करें',
    btn_enter_admin: 'व्यवस्थापक पोर्टल पर आगे बढ़ें',
    worker_login_title: 'कार्यकर्ता टर्मिनल लॉगिन',
    worker_login_subtitle: 'अपनी औद्योगिक कर्मचारी पहचान और सुरक्षा पिन दर्ज करें।',
    label_worker_id: 'कार्यकर्ता आईडी',
    label_security_pin: 'सुरक्षा पिन',
    btn_enter_terminal: 'टर्मिनल में प्रवेश करें',
    btn_register_worker: 'नया कार्यकर्ता पंजीकृत करें',
    btn_forgot_pin: 'पिन भूल गए? क्रेडेंशियल रीसेट करें',
    admin_login_title: 'व्यवस्थापक पोर्टल लॉगिन',
    admin_login_subtitle: 'अधिकृत सुरक्षा अधिकारियों और डीजीएमएस लेखापरीक्षकों के लिए सीमित।',
    label_admin_email: 'आधिकारिक ईमेल आईडी',
    label_password: 'पासवर्ड',
    btn_admin_signin: 'व्यवस्थापक के रूप में साइन इन करें',
    welcome_back: 'वापसी पर स्वागत है,',
    active_shift: 'सक्रिय शिफ्ट • ज़ोन 4B',
    kpi_overall_score: 'कुल स्कोर',
    kpi_modules_completed: 'पूर्ण मॉड्यूल',
    kpi_drills_taken: 'किए गए ड्रिल',
    hero_mandatory_drill: 'अनिवार्य एआर ड्रिल',
    drill_hero_title: 'अग्निशामक PASS प्रोटोकॉल',
    drill_hero_desc: 'ज़ोन 3 हाई-वोल्टेज सबस्टेशन में रासायनिक विद्युत आग बुझाने का अभ्यास करें।',
    btn_start_ar_drill: 'एआर दृश्य खोलें',
    section_assigned_modules: 'मेरे आवंटित मॉड्यूल',
    btn_view_all: 'सभी देखें',
    drill_result_title: 'एआर ड्रिल मूल्यांकन',
    status_passed: 'उत्तीर्ण - प्रमाणित',
    btn_view_certificate: 'प्रमाणपत्र देखें / डाउनलोड करें',
    btn_retry_drill: 'एआर ड्रिल पुनः प्रयास करें',
    title_certificates: 'मेरे सत्यापित प्रमाणपत्र',
    title_settings: 'कार्यकर्ता प्रोफ़ाइल और प्राथमिकताएं',
    btn_sign_out: 'टर्मिनल से साइन आउट करें',
    admin_dash_title: 'सुरक्षा पर्यवेक्षी डैशबोर्ड',
    kpi_total_trainees: 'कुल प्रशिक्षु',
    kpi_compliance_rate: 'अनुपालन दर',
    kpi_average_score: 'औसत स्कोर',
    kpi_pending_certs: 'लंबित प्रमाणपत्र',
    btn_export_report: 'सीएसवी रिपोर्ट निर्यात करें',
    main_home_title: 'मुख्य होम स्क्रीन',
    welcome_trainee: 'स्वागत है, प्रशिक्षु मनोज',
    safety_training: 'सुरक्षा प्रशिक्षण',
    safety_training_desc: 'इंटरैक्टिव सुरक्षित एआर में आपातकालीन स्थितियों का अभ्यास करें।',
    drills: 'ड्रिल',
    score: 'स्कोर',
    badges: 'बैज',
    passing_status: 'उत्तीर्ण',
    nav_overview: 'अवलोकन',
    nav_modules: 'मॉड्यूल',
    nav_certificates: 'प्रमाणपत्र',
    nav_settings: 'सेटिंग्स',
    nav_dashboard: 'डैशबोर्ड',
    nav_trainees: 'प्रशिक्षु',
    nav_ledger: 'लेजर'
  },
  sat: {
    // Explicit User-Requested Dictionary Keys
    select_role: 'ᱠᱟᱹᱢᱤ ᱦᱟᱹᱴᱤᱧ ᱵᱟᱪᱷᱟᱣ ᱢᱮ',
    student: 'ᱯᱟᱹᱴᱷᱩᱣᱟᱹ / ᱥᱮᱪᱮᱫᱤᱭᱟᱹ',
    student_desc: 'ᱤᱱᱴᱟᱨᱮᱠᱴᱤᱵᱷ ᱮ.ᱟᱨ. ᱨᱩᱠᱷᱤᱭᱟᱹ ᱰᱨᱤᱞ, ᱢᱤᱥᱤᱱ ᱡᱟᱸᱪ ᱟᱨ ᱵᱤᱯᱚᱫᱽ ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱾',
    teacher: 'ᱜᱟᱞᱚᱪᱤᱭᱟᱹ / ᱥᱟᱥᱚᱱᱤᱭᱟᱹ',
    teacher_desc: 'ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱠᱟᱹᱢᱤ ᱧᱮᱞ, ᱚᱰᱤᱴ ᱞᱚᱜᱽ ᱟᱨ ᱯᱚᱨᱢᱟᱬ ᱵᱮᱡᱽ ᱮᱢ ᱢᱮ ᱾',
    next: 'ᱞᱟᱦᱟᱭ ᱢᱮ',
    open_ar_view: 'ᱮ.ᱟᱨ. ᱧᱮᱞ ᱠᱷᱩᱞᱟᱹᱭ ᱢᱮ',
    submit: 'ᱡᱚᱢᱟᱭ ᱢᱮ',

    // General Application & Onboarding
    app_name: 'ARmour ᱨᱩᱠᱷᱤᱭᱟᱹ',
    app_full_title: 'ᱮ.ᱟᱨ. ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ ᱠᱟᱹᱢᱤᱦᱚᱨᱟ',
    app_subtitle: 'ᱠᱟᱹᱨᱜᱟᱲ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱟᱨ ᱡᱟᱸᱪ ᱵᱤᱰᱟᱹᱣ',
    choose_language: 'ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ',
    choose_language_sub: 'ᱨᱩᱠᱷᱤᱭᱟᱹ ᱰᱨᱤᱞ ᱟᱨ ᱟᱲᱟᱝ ᱥᱮᱪᱮᱫ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱟᱜ ᱠᱩᱥᱤ ᱯᱟᱹᱨᱥᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ ᱾',
    btn_continue: 'ᱞᱟᱦᱟᱭ ᱢᱮ',
    btn_back: 'ᱨᱩᱣᱟᱹᱲ',
    change_language: 'ᱯᱟᱹᱨᱥᱤ ᱵᱚᱫᱚᱞ ᱢᱮ',
    offline_pack_loaded: 'SIH ᱒᱐᱒᱖ ᱯᱨᱳᱴᱳᱴᱟᱭᱤᱯ • ᱚᱯᱷᱞᱟᱭᱤᱱ ᱯᱟᱹᱨᱥᱤ ᱯᱮᱠ ᱞᱟᱫᱮ',
    role_selection_title: 'ᱵᱚᱞᱚᱱ ᱦᱟᱹᱴᱤᱧ ᱵᱟᱪᱷᱟᱣ ᱢᱮ',
    role_selection_desc: 'ᱢᱩᱬᱩᱛ ᱚᱲᱟᱜ ᱥᱠᱨᱤᱱ ᱞᱟᱦᱟᱜ ᱞᱟᱹᱜᱤᱫ ᱟᱢᱟᱜ ᱠᱟᱹᱢᱤ ᱵᱟᱪᱷᱟᱣ ᱢᱮ ᱾',
    role_worker: 'ᱠᱟᱹᱢᱤᱭᱟᱹ / ᱯᱟᱹᱴᱷᱩᱣᱟᱹ',
    role_worker_badge: 'ᱤᱱᱴᱟᱨᱮᱠᱴᱤᱵᱷ ᱮ.ᱟᱨ.',
    role_worker_desc: 'ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ, ᱢᱤᱥᱤᱱ ᱡᱟᱸᱪ ᱟᱨ ᱵᱤᱯᱚᱫᱽ ᱨᱮᱭᱟᱜ ᱮ.ᱟᱨ. ᱥᱤᱢᱩᱞᱮᱥᱚᱱ ᱮᱛᱚᱦᱚᱵ ᱢᱮ ᱾',
    role_worker_modules_tag: 'ᱢᱚᱰᱩᱞ: ᱥᱮᱸᱜᱮᱞ ᱨᱩᱠᱷᱤᱭᱟᱹ / ᱜᱮᱥ ᱨᱩᱠᱷᱤᱭᱟᱹ',
    role_admin: 'ᱥᱟᱥᱚᱱᱤᱭᱟᱹ / ᱜᱟᱞᱚᱪᱤᱭᱟᱹ',
    role_admin_badge: 'ᱯᱚᱨᱢᱟᱬ ᱞᱟᱹᱠᱛᱤ',
    role_admin_desc: 'ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱠᱚ ᱥᱟᱢᱵᱽᱲᱟᱣ, ᱚᱰᱤᱴ ᱧᱮᱞ, ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱮᱢ ᱟᱨ ᱡᱳᱱ ᱥᱟᱡᱟᱣ ᱢᱮ ᱾',
    btn_enter_worker: 'ᱠᱟᱹᱢᱤᱭᱟᱹ ᱥᱤᱢᱩᱞᱮᱴᱚᱨ ᱵᱚᱞᱚᱱ ᱢᱮ',
    btn_enter_admin: 'ᱥᱟᱥᱚᱱᱤᱭᱟᱹ ᱯᱚᱨᱴᱟᱞ ᱞᱟᱦᱟᱭ ᱢᱮ',
    worker_login_title: 'ᱠᱟᱹᱢᱤᱭᱟᱹ ᱴᱟᱨᱢᱤᱱᱟᱞ ᱞᱚᱜᱤᱱ',
    worker_login_subtitle: 'ᱟᱢᱟᱜ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱟᱭᱰᱤ ᱟᱨ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱯᱤᱱ ᱚᱞ ᱢᱮ ᱾',
    label_worker_id: 'ᱠᱟᱹᱢᱤᱭᱟᱹ ᱟᱭᱰᱤ',
    label_security_pin: 'ᱨᱩᱠᱷᱤᱭᱟᱹ ᱯᱤᱱ',
    btn_enter_terminal: 'ᱴᱟᱨᱢᱤᱱᱟᱞ ᱵᱚᱞᱚᱱ ᱢᱮ',
    btn_register_worker: 'ᱱᱟᱣᱟ ᱠᱟᱹᱢᱤᱭᱟᱹ ᱨᱮᱡᱤᱥᱴᱟᱨ',
    btn_forgot_pin: 'ᱯᱤᱱ ᱦᱤᱲᱤᱧ ᱮᱱᱟ? ᱱᱟᱣᱟ ᱛᱮᱭᱟᱨ',
    admin_login_title: 'ᱥᱟᱥᱚᱱᱤᱭᱟᱹ ᱯᱚᱨᱴᱟᱞ ᱵᱚᱞᱚᱱ',
    admin_login_subtitle: 'ᱠᱷᱟᱹᱞᱤ ᱢᱟᱱᱚᱛ ᱧᱟᱢ ᱨᱩᱠᱷᱤᱭᱟᱹ ᱚᱯᱷᱤᱥᱚᱨ ᱟᱨ DGMS ᱚᱰᱤᱴᱚᱨ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱾',
    label_admin_email: 'ᱚᱯᱷᱤᱥᱤᱭᱟᱞ ᱤᱢᱮᱞ ᱟᱭᱰᱤ',
    label_password: 'ᱯᱟᱥᱣᱟᱨᱰ',
    btn_admin_signin: 'ᱥᱟᱥᱚᱱᱤᱭᱟᱹ ᱞᱮᱠᱟᱛᱮ ᱵᱚᱞᱚᱱ ᱢᱮ',
    welcome_back: 'ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ,',
    active_shift: 'ᱥᱟᱹᱠᱨᱤᱭᱟᱹ ᱥᱤᱯᱷᱴ • ᱡᱳᱱ 4B',
    kpi_overall_score: 'ᱢᱩᱴ ᱥᱠᱳᱨ',
    kpi_modules_completed: 'ᱯᱩᱨᱟᱹᱣ ᱢᱚᱰᱩᱞ',
    kpi_drills_taken: 'ᱮᱢ ᱟᱠᱟᱱ ᱰᱨᱤᱞ',
    hero_mandatory_drill: 'ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱮ.ᱟᱨ. ᱰᱨᱤᱞ',
    drill_hero_title: 'ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ PASS ᱱᱤᱭᱚᱢ',
    drill_hero_desc: 'ᱡᱳᱱ ᱓ ᱦᱟᱭ-ᱵᱷᱳᱞᱴᱮᱡᱽ ᱥᱟᱵᱽᱥᱴᱮᱥᱚᱱ ᱨᱮ ᱠᱮᱢᱤᱠᱟᱞ ᱥᱮᱸᱜᱮᱞ ᱤᱬᱤᱡ ᱢᱮ ᱾',
    btn_start_ar_drill: 'ᱮ.ᱟᱨ. ᱧᱮᱞ ᱠᱷᱩᱞᱟᱹᱭ ᱢᱮ',
    section_assigned_modules: 'ᱤᱧᱟᱜ ᱮᱢ ᱟᱠᱟᱱ ᱢᱚᱰᱩᱞ',
    btn_view_all: 'ᱡᱚᱛᱚ ᱧᱮᱞ ᱢᱮ',
    drill_result_title: 'ᱮ.ᱟᱨ. ᱰᱨᱤᱞ ᱢᱩᱞᱭᱟᱝᱠᱚᱱ',
    status_passed: 'ᱯᱟᱥ ᱮᱱᱟ - ᱯᱚᱨᱢᱟᱬᱤᱛ',
    btn_view_certificate: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱧᱮᱞ / ᱰᱟᱩᱱᱞᱳᱰ',
    btn_retry_drill: 'ᱟᱨᱦᱚᱸ ᱰᱨᱤᱞ ᱢᱮ',
    title_certificates: 'ᱤᱧᱟᱜ ᱯᱚᱨᱢᱟᱬ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
    title_settings: 'ᱠᱟᱹᱢᱤᱭᱟᱹ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱟᱨ ᱥᱟᱡᱟᱣ',
    btn_sign_out: 'ᱴᱟᱨᱢᱤᱱᱟᱞ ᱠᱷᱚᱱ ᱚᱰᱚᱠᱚᱜ ᱢᱮ',
    admin_dash_title: 'ᱨᱩᱠᱷᱤᱭᱟᱹ ᱧᱮᱞ-ᱛᱚᱨᱟᱣ ᱰᱮᱥᱵᱳᱨᱰ',
    kpi_total_trainees: 'ᱜᱩᱴ ᱥᱮᱪᱮᱫᱤᱭᱟᱹ',
    kpi_compliance_rate: 'ᱯᱟᱥ ᱦᱟᱹᱴᱤᱧ',
    kpi_average_score: 'ᱜᱩᱴ ᱥᱠᱳᱨ',
    kpi_pending_certs: 'ᱵᱟᱹᱠᱤ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
    btn_export_report: 'CSV ᱨᱤᱯᱳᱨᱴ ᱚᱰᱚᱠ ᱢᱮ',
    main_home_title: 'ᱢᱩᱬᱩᱛ ᱚᱲᱟᱜ ᱥᱠᱨᱤᱱ',
    welcome_trainee: 'ᱥᱟᱹᱜᱩᱱ ᱫᱟᱨᱟᱢ, ᱥᱮᱪᱮᱫᱤᱭᱟᱹ ᱢᱚᱱᱳᱡᱽ',
    safety_training: 'ᱨᱩᱠᱷᱤᱭᱟᱹ ᱥᱮᱪᱮᱫ',
    safety_training_desc: 'ᱨᱩᱠᱷᱤᱭᱟᱹ ᱮ.ᱟᱨ. ᱨᱮ ᱟᱹᱰᱤ ᱞᱟᱹᱠᱛᱤᱭᱟᱱ ᱦᱟᱞᱚᱛ ᱨᱮᱭᱟᱜ ᱵᱤᱰᱟᱹᱣ ᱢᱮ ᱾',
    drills: 'ᱰᱨᱤᱞ',
    score: 'ᱥᱠᱳᱨ',
    badges: 'ᱵᱮᱡᱽ',
    passing_status: 'ᱯᱟᱥ',
    nav_overview: 'ᱧᱮᱞ',
    nav_modules: 'ᱢᱚᱰᱩᱞ',
    nav_certificates: 'ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ',
    nav_settings: 'ᱥᱟᱡᱟᱣ',
    nav_dashboard: 'ᱰᱮᱥᱵᱳᱨᱰ',
    nav_trainees: 'ᱥᱮᱪᱮᱫᱤᱭᱟᱹ',
    nav_ledger: 'ᱞᱮᱡᱚᱨ'
  }
};

/**
 * Dynamic string resolver for interactive UI
 */
export function getAppTranslation(key: string, lang: AppLanguage): string {
  return I18N_STRINGS[lang]?.[key] || I18N_STRINGS['en']?.[key] || key;
}

