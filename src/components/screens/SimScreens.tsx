import React, { useState } from 'react';
import {
  ScreenId,
  AppLanguage,
  UserRole,
  TraineeRecord,
  ModuleRecord,
  CertificateRecord
} from '../../types';
import { ASSET_IMAGES, MOCK_TRAINEES, MOCK_MODULES, MOCK_CERTIFICATES } from '../../data/mockData';
import { getAppTranslation } from '../../data/stringResources';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  HardHat,
  Search,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  QrCode,
  FileText,
  Share2,
  Eye,
  EyeOff,
  LogOut,
  X,
  UserCheck,
  Flame,
  Wind,
  Check,
  Building,
  Lock,
  Globe,
  Plus
} from 'lucide-react';

interface ScreenProps {
  onNavigate: (screen: ScreenId) => void;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
}

// 1. Role Selection Screen (Directly follows Language Selection Screen)
export const SimRoleSelection: React.FC<ScreenProps> = ({
  onNavigate,
  setRole,
  language
}) => {
  const [selected, setSelected] = useState<'worker' | 'admin'>('worker');

  const handleProceed = () => {
    setRole(selected);
    // Direct navigation flow to Main Home Screen!
    if (selected === 'worker') {
      onNavigate('worker_dashboard');
    } else {
      onNavigate('admin_dashboard');
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] p-4 text-[#0d1c2f] overflow-y-auto">
      {/* Top Bar with Change Language */}
      <div className="flex items-center justify-between py-1">
        <button
          onClick={() => onNavigate('language_selection')}
          className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-100 shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{getAppTranslation('change_language', language)}</span>
        </button>
        <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase">
          {language === 'sat' ? 'ᱥᱟᱱᱛᱟᱲᱤ' : language === 'hi' ? 'हिन्दी' : 'English'}
        </span>
      </div>

      <div className="flex justify-center my-2">
        <img src={ASSET_IMAGES.logo} alt="ARmour Logo" className="h-8 object-contain" />
      </div>

      <div className="text-center my-1">
        <h1 className="text-xl font-bold font-['Work_Sans'] tracking-tight">
          {getAppTranslation('select_role', language)}
        </h1>
        <p className="text-xs text-[#45464d] mt-1">
          {getAppTranslation('role_selection_desc', language)}
        </p>
      </div>

      <div className="flex flex-col gap-3 my-3">
        {/* Student / Trainee Role Card */}
        <div
          onClick={() => setSelected('worker')}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            selected === 'worker'
              ? 'bg-white border-[#fe932c] shadow-md ring-2 ring-[#fe932c]/30'
              : 'bg-white/80 border-[#d5e3fd] opacity-80'
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="w-11 h-11 rounded-lg bg-[#fe932c]/20 flex items-center justify-center text-[#904d00]">
              <HardHat className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#ffdcc3] text-[#6e3900]">
              {getAppTranslation('open_ar_view', language)}
            </span>
          </div>
          <div className="mt-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-base tracking-wide">
                {getAppTranslation('student', language)}
              </span>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                  selected === 'worker' ? 'bg-[#fe932c] border-[#fe932c]' : 'border-gray-300'
                }`}
              >
                {selected === 'worker' && <Check className="w-3 h-3 text-white stroke-[3]" />}
              </div>
            </div>
            <p className="text-xs text-[#45464d] mt-1 leading-relaxed">
              {getAppTranslation('student_desc', language)}
            </p>
            <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between items-center text-[11px] text-[#45464d] font-mono">
              <span>{getAppTranslation('assigned_modules', language)}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Teacher / Supervisor Role Card */}
        <div
          onClick={() => setSelected('admin')}
          className={`p-4 rounded-xl border transition-all cursor-pointer ${
            selected === 'admin'
              ? 'bg-white border-[#131b2e] shadow-md ring-2 ring-[#131b2e]/30'
              : 'bg-white/80 border-[#d5e3fd] opacity-80'
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="w-11 h-11 rounded-lg bg-[#131b2e] flex items-center justify-center text-white">
              <Shield className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#d5e3fd] text-[#0d1c2f]">
              SUPERVISOR / AUDIT
            </span>
          </div>
          <div className="mt-3">
            <div className="flex justify-between items-center">
              <span className="font-bold text-base tracking-wide">
                {getAppTranslation('teacher', language)}
              </span>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                  selected === 'admin' ? 'bg-[#131b2e] border-[#131b2e]' : 'border-gray-300'
                }`}
              >
                {selected === 'admin' && <Check className="w-3 h-3 text-white stroke-[3]" />}
              </div>
            </div>
            <p className="text-xs text-[#45464d] mt-1 leading-relaxed">
              {getAppTranslation('teacher_desc', language)}
            </p>
            <div className="mt-3 pt-2 border-t border-gray-100 flex justify-end text-[#45464d]">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-2">
        {/* Next Button - Direct navigation to Main Home Screen! */}
        <button
          onClick={handleProceed}
          className="w-full h-12 bg-[#fe932c] hover:bg-[#e68324] text-[#663500] font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
        >
          <span className="text-sm uppercase tracking-wide font-bold">
            {getAppTranslation('next', language)}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <p className="text-center text-[10px] text-gray-400 mt-2 font-mono">SIH 2026 Prototype • Direct Home Flow</p>
      </div>
    </div>
  );
};

// 2. Language Selection Screen (FIRST / LAUNCH SCREEN)
export const SimLanguageSelection: React.FC<ScreenProps> = ({
  onNavigate,
  language,
  setLanguage
}) => {
  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] p-4 text-[#0d1c2f] overflow-y-auto">
      <div className="flex items-center justify-between py-2">
        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
          START / LAUNCH
        </span>
        <img src={ASSET_IMAGES.logo} alt="Logo" className="h-6 object-contain" />
        <div className="w-6" />
      </div>

      <div className="my-3">
        <h1 className="text-xl font-bold font-['Work_Sans']">
          {getAppTranslation('choose_language', language)}
        </h1>
        <p className="text-xs text-[#45464d] mt-1">
          {getAppTranslation('choose_language_sub', language)}
        </p>
      </div>

      <div className="flex flex-col gap-3 my-2">
        {[
          { id: 'en', code: 'EN', title: 'English', sub: 'Universal Industrial English' },
          { id: 'hi', code: 'हि', title: 'हिन्दी', sub: 'Hindi (Devanagari)' },
          { id: 'sat', code: 'ᱥ', title: 'Santali', sub: 'ᱥᱟᱱᱛᱟᱲᱤ (Ol Chiki Script)' }
        ].map((item) => {
          const isSelected = language === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setLanguage(item.id as AppLanguage)}
              className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                isSelected
                  ? 'bg-[#dde9ff] border-[#0d1c2f] shadow-sm ring-2 ring-[#0d1c2f]/20'
                  : 'bg-white border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg ${
                    isSelected ? 'bg-[#ffdcc3] text-[#904d00]' : 'bg-[#eff4ff] text-[#0d1c2f]'
                  }`}
                >
                  {item.code}
                </div>
                <div>
                  <div className="font-semibold text-sm flex items-center gap-2">
                    <span>{item.title}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-mono">
                      {item.sub}
                    </span>
                  </div>
                </div>
              </div>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                  isSelected ? 'bg-[#fe932c] border-[#fe932c]' : 'border-gray-300'
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-auto pt-4">
        {/* Navigates directly to Role Selection Screen */}
        <button
          onClick={() => onNavigate('role_selection')}
          className="w-full h-12 bg-[#fe932c] hover:bg-[#e68324] text-[#663500] font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
        >
          <span className="text-sm font-bold uppercase tracking-wider">
            {getAppTranslation('next', language)}
          </span>
          <ArrowRight className="w-4 h-4" />
        </button>
        <div className="flex items-center justify-center gap-1.5 mt-3 text-[11px] text-gray-500 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>SIH 2026 Prototype • Multilingual Engine Active</span>
        </div>
      </div>
    </div>
  );
};

// 3. Worker Login Screen
export const SimWorkerLogin: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [workerId, setWorkerId] = useState('WRK-4029');
  const [pin, setPin] = useState('849201');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] p-4 text-[#0d1c2f] overflow-y-auto">
      <div className="flex justify-between items-center py-2">
        <button onClick={() => onNavigate('role_selection')} className="p-1 rounded hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <img src={ASSET_IMAGES.logo} alt="Logo" className="h-6 object-contain" />
        <div className="w-8 h-8 rounded-full bg-[#000000] flex items-center justify-center text-white text-xs">
          W
        </div>
      </div>

      {/* Hero card */}
      <div className="p-4 rounded-xl bg-[#000000] text-white shadow-md my-2">
        <h2 className="text-xl font-bold font-['Work_Sans']">Worker Login</h2>
        <p className="text-xs text-gray-300 mt-0.5">Sign in to continue your safety training</p>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col gap-3 my-2">
        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>Worker ID</span>
            <span className="text-[10px] text-gray-400 font-mono">FORMAT: WRK-XXXX</span>
          </div>
          <div className="relative">
            <HardHat className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              value={workerId}
              onChange={(e) => setWorkerId(e.target.value.toUpperCase())}
              className="w-full h-11 pl-9 pr-3 rounded-lg bg-[#eff4ff] text-sm font-mono border-none focus:ring-1 focus:ring-[#fe932c] outline-none"
              placeholder="e.g. WRK-4029"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>Access PIN / Password</span>
            <button
              onClick={() => onNavigate('forgot_password')}
              className="text-[#904d00] hover:underline"
            >
              Forgot PIN?
            </button>
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full h-11 pl-9 pr-10 rounded-lg bg-[#eff4ff] text-sm font-mono border-none focus:ring-1 focus:ring-[#fe932c] outline-none"
              placeholder="Enter PIN"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          onClick={() => onNavigate('worker_dashboard')}
          className="w-full h-11 mt-2 bg-[#fe932c] hover:bg-[#e68324] text-[#663500] font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm uppercase text-xs tracking-wider"
        >
          <ArrowRight className="w-4 h-4" />
          <span>Enter Training Terminal</span>
        </button>

        <div className="flex items-center gap-2 my-1">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-[10px] text-gray-400 uppercase font-mono">or new to armour?</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button
          onClick={() => onNavigate('registration')}
          className="w-full h-11 rounded-lg border border-gray-200 text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4 text-[#904d00]" />
          <span>Register as New Worker</span>
        </button>
      </div>

      <div className="mt-auto text-center">
        <p className="text-[11px] text-gray-400 font-mono">DGMS Industrial Safety Compliance</p>
      </div>
    </div>
  );
};

// 4. Admin Login Screen
export const SimAdminLogin: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('admin@safetytrain.org');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] p-4 text-[#0d1c2f] overflow-y-auto">
      <div className="flex justify-between items-center py-2">
        <button onClick={() => onNavigate('role_selection')} className="p-1 rounded hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <img src={ASSET_IMAGES.logo} alt="Logo" className="h-7 object-contain" />
        <div className="w-6" />
      </div>

      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col gap-4 my-auto">
        <div>
          <h1 className="text-xl font-bold font-['Work_Sans']">Admin Login</h1>
          <p className="text-xs text-[#45464d] mt-1">
            Sign in to manage trainee training and safety assessments.
          </p>
        </div>

        <div>
          <label className="text-xs font-semibold block mb-1">Official Email / Admin ID</label>
          <div className="relative">
            <Building className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 pl-9 pr-3 rounded-lg bg-[#eff4ff] text-sm border-none focus:ring-1 focus:ring-[#131b2e] outline-none"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>Password</span>
            <button
              onClick={() => onNavigate('forgot_password')}
              className="text-[#904d00] hover:underline text-[11px]"
            >
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 absolute left-3 top-3.5 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-11 pl-9 pr-10 rounded-lg bg-[#eff4ff] text-sm font-mono border-none focus:ring-1 focus:ring-[#131b2e] outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <button
          onClick={() => onNavigate('admin_dashboard')}
          className="w-full h-12 bg-[#fe932c] hover:bg-[#e68324] text-[#663500] font-bold rounded-xl flex items-center justify-center gap-2 shadow-md uppercase text-sm tracking-wider"
        >
          <span>SIGN IN</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="pt-2 border-t border-gray-100 text-center text-xs">
          <span className="text-gray-500">New to ARmour? </span>
          <button
            onClick={() => onNavigate('registration')}
            className="text-[#904d00] font-semibold hover:underline"
          >
            Register as Admin
          </button>
        </div>
      </div>

      <p className="text-center text-[10px] text-gray-400 font-mono mt-auto py-2">
        SIH 2026 Prototype
      </p>
    </div>
  );
};

// 5. New User Registration Screen
export const SimRegistration: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [firstName, setFirstName] = useState('Manoj');
  const [surname, setSurname] = useState('Soren');
  const [workerId, setWorkerId] = useState('JH-MN-4029');
  const [division, setDivision] = useState('Jharia Collieries — Seam 9 & 10 (Zone V)');

  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] p-4 text-[#0d1c2f] overflow-y-auto">
      <div className="flex items-center gap-2 py-1">
        <button onClick={() => onNavigate('role_selection')} className="p-1 rounded hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <img src={ASSET_IMAGES.logo} alt="Logo" className="h-6 object-contain" />
      </div>

      <div className="my-2">
        <h1 className="text-xl font-bold font-['Work_Sans']">New User Registration</h1>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col gap-3 my-1">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-xs font-semibold block mb-1">First Name *</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full h-10 px-3 rounded-lg bg-[#eff4ff] text-sm border-none outline-none"
            />
          </div>
          <div>
            <label className="text-xs font-semibold block mb-1">Surname *</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              className="w-full h-10 px-3 rounded-lg bg-[#eff4ff] text-sm border-none outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold block mb-1">Worker ID / Admin ID *</label>
          <input
            type="text"
            value={workerId}
            onChange={(e) => setWorkerId(e.target.value.toUpperCase())}
            className="w-full h-10 px-3 rounded-lg bg-[#eff4ff] text-sm font-mono uppercase border-none outline-none"
          />
        </div>

        <div>
          <label className="text-xs font-semibold block mb-1">Assigned Operational Division *</label>
          <select
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            className="w-full h-10 px-3 rounded-lg bg-[#eff4ff] text-xs border-none outline-none"
          >
            <option>Jharia Collieries — Seam 9 & 10 (Zone V)</option>
            <option>Raniganj Deep Incline — Shaft 4</option>
            <option>Singrauli Surface Pit — Haulage Sector 2</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold block mb-1">Terminal Password *</label>
          <input
            type="password"
            defaultValue="••••••••"
            className="w-full h-10 px-3 rounded-lg bg-[#eff4ff] text-sm border-none outline-none"
          />
        </div>

        <div>
          <label className="text-xs font-semibold block mb-1">Confirm Terminal Password *</label>
          <input
            type="password"
            defaultValue="••••••••"
            className="w-full h-10 px-3 rounded-lg bg-[#eff4ff] text-sm border-none outline-none"
          />
        </div>

        <button
          onClick={() => onNavigate('worker_dashboard')}
          className="w-full h-12 mt-2 bg-[#fe932c] hover:bg-[#e68324] text-[#663500] font-bold rounded-xl flex items-center justify-center gap-2 shadow-md text-sm"
        >
          <span>Create Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// 6. Forgot Password Screen
export const SimForgotPassword: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] p-4 text-[#0d1c2f] overflow-y-auto">
      <div className="py-2">
        <button onClick={() => onNavigate('worker_login')} className="p-1 rounded hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 my-auto">
        <div className="w-16 h-16 rounded-2xl bg-[#ffdcc3] flex items-center justify-center text-[#904d00]">
          <Lock className="w-8 h-8" />
        </div>

        <div>
          <h1 className="text-xl font-bold font-['Work_Sans']">Forgot Password?</h1>
          <p className="text-xs text-[#45464d] mt-1 max-w-xs">
            Enter your registered email or user ID and we'll help you reset your password.
          </p>
        </div>

        <div className="w-full text-left">
          <label className="text-xs font-semibold block mb-1">Email or User ID *</label>
          <input
            type="text"
            defaultValue="WRK-8921"
            className="w-full h-11 px-3 rounded-lg bg-[#eff4ff] text-sm font-mono border-none outline-none"
          />
        </div>

        <button
          onClick={() => onNavigate('worker_login')}
          className="w-full h-11 bg-black hover:bg-gray-800 text-white font-bold rounded-lg flex items-center justify-center gap-2 text-sm"
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigate('worker_login')}
          className="text-xs text-[#45464d] hover:underline flex items-center gap-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Login</span>
        </button>
      </div>
    </div>
  );
};

// 7. Worker Dashboard Screen (Main Home Screen for Trainee / Student)
export const SimWorkerDashboard: React.FC<ScreenProps> = ({ onNavigate, language }) => {
  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] text-[#0d1c2f] overflow-y-auto pb-16">
      {/* Top Header */}
      <div className="bg-[#131b2e] text-white p-4 rounded-b-2xl shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={ASSET_IMAGES.manojAvatar}
                alt="Manoj"
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-400"
              />
              <span className="w-3 h-3 rounded-full bg-emerald-400 absolute bottom-0 right-0 border-2 border-[#131b2e]"></span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <h2 className="font-bold text-base">{getAppTranslation('welcome_trainee', language)}</h2>
                <CheckCircle2 className="w-4 h-4 text-[#fe932c]" />
              </div>
              <div className="flex items-center gap-2 text-[11px] text-gray-300 mt-0.5">
                <span className="bg-white/10 px-1.5 py-0.5 rounded font-mono">ID: WRK-4029</span>
                <button
                  onClick={() => onNavigate('language_selection')}
                  className="bg-white/15 hover:bg-white/25 px-2 py-0.5 rounded flex items-center gap-1 font-mono transition-colors text-amber-300"
                >
                  <Globe className="w-3 h-3 text-[#fe932c]" />
                  <span>{language === 'sat' ? 'ᱥᱟᱱᱛᱟᱲᱤ' : language === 'hi' ? 'हिन्दी' : 'English'}</span>
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => onNavigate('role_selection')}
            className="text-[11px] px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-gray-300"
          >
            Role
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-4">
        {/* Safety Training Header */}
        <div>
          <div className="flex items-center gap-1.5 text-base font-bold font-['Work_Sans']">
            <span className="w-2 h-2 rounded-full bg-[#fe932c]"></span>
            <h2>{getAppTranslation('safety_training', language)}</h2>
          </div>
          <p className="text-xs text-[#45464d] mt-0.5">
            {getAppTranslation('safety_training_desc', language)}
          </p>
        </div>

        {/* Recommended Drill Card */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-[#ffdcc3] to-[#ffeada] border border-[#fe932c]/30 shadow-sm flex flex-col gap-3">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[10px] font-bold text-[#904d00] tracking-wider uppercase font-mono">
                {getAppTranslation('recommended_drill', language)}
              </span>
              <h3 className="font-bold text-base mt-0.5 text-[#0d1c2f]">
                {getAppTranslation('gas_leak_title', language)}
              </h3>
              <p className="text-xs text-[#6e3900]">{getAppTranslation('gas_leak_sub', language)}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#904d00] shadow-sm">
              <Wind className="w-4 h-4" />
            </div>
          </div>

          <button
            onClick={() => onNavigate('drill_result')}
            className="w-full h-12 bg-black hover:bg-gray-900 text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow text-xs tracking-wider uppercase"
          >
            <Play className="w-4 h-4 text-[#fe932c] fill-[#fe932c]" />
            <span>{getAppTranslation('open_ar_view', language)}</span>
            <ArrowRight className="w-4 h-4 text-[#fe932c]" />
          </button>
        </div>

        {/* 3 Metric cards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-[10px] text-gray-400 font-bold uppercase font-mono">
              {getAppTranslation('drills', language)}
            </div>
            <div className="text-xl font-bold font-mono my-1">
              2<span className="text-xs text-gray-400">/4</span>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-black h-full w-1/2"></div>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-[10px] text-gray-400 font-bold uppercase font-mono">
              {getAppTranslation('score', language)}
            </div>
            <div className="text-xl font-bold font-mono my-1 text-emerald-600">82%</div>
            <span className="text-[10px] text-emerald-600 font-bold">✔ {getAppTranslation('passing_status', language)}</span>
          </div>

          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-[10px] text-gray-400 font-bold uppercase font-mono">
              {getAppTranslation('badges', language)}
            </div>
            <div className="text-xl font-bold font-mono my-1">2</div>
            <span className="text-[10px] text-amber-600 font-bold">🏅 Level 1</span>
          </div>
        </div>

        {/* Section: Assigned Modules */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-sm text-[#0d1c2f] font-mono uppercase">
              {getAppTranslation('assigned_modules', language)}
            </h3>
            <button
              onClick={() => onNavigate('worker_modules')}
              className="text-xs font-semibold text-[#904d00] hover:underline"
            >
              {getAppTranslation('btn_view_all', language)}
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {MOCK_MODULES.slice(0, 2).map((mod) => (
              <div
                key={mod.id}
                onClick={() => onNavigate('drill_result')}
                className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between cursor-pointer hover:border-gray-300 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs">{mod.title}</h4>
                    <p className="text-[11px] text-gray-500 font-mono">
                      {mod.durationMins}m • {mod.difficulty}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                    {mod.status}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// 8. Worker Modules Screen
export const SimWorkerModules: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] text-[#0d1c2f] overflow-y-auto pb-16 p-4">
      <div className="flex items-center gap-2 py-1">
        <button onClick={() => onNavigate('worker_dashboard')} className="p-1 rounded hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <span className="text-[10px] font-bold text-[#904d00] tracking-wider uppercase font-mono">
            CERTIFICATION TRACK • BOKARO DEEP PIT
          </span>
          <h1 className="text-lg font-bold font-['Work_Sans']">Choose a Training Module</h1>
        </div>
      </div>
      <p className="text-xs text-[#45464d] ml-7 mb-3">
        Select a safety scenario to practice in augmented reality.
      </p>

      <div className="flex flex-col gap-4">
        {/* Module 1 */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="relative h-36">
            <img src={ASSET_IMAGES.fireSafety} alt="Fire Safety" className="w-full h-full object-cover" />
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold font-mono">
              ✔ COMPLETED • 92%
            </span>
          </div>
          <div className="p-4 flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#fe932c]" />
              <h2 className="font-bold text-sm">MODULE 01: Fire & Explosion Safety</h2>
            </div>
            <div className="flex gap-3 text-[11px] text-gray-500 font-mono">
              <span>⏱ 15 Minutes</span>
              <span>🛡 Basic</span>
              <span>🏅 3 Badges</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Practice identifying rapid fire hazards, selecting compliant PPE, and guiding mine teams safely.
            </p>
            <button
              onClick={() => onNavigate('drill_result')}
              className="w-full h-10 bg-black text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 mt-1"
            >
              <span>Practice Module</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Module 2 */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="relative h-36">
            <img src={ASSET_IMAGES.gasSafety} alt="Gas Safety" className="w-full h-full object-cover" />
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#fe932c] text-[#663500] text-[10px] font-bold font-mono">
              IN PROGRESS
            </span>
          </div>
          <div className="p-4 flex flex-col gap-2.5">
            <div className="flex items-center gap-1.5">
              <Wind className="w-4 h-4 text-[#fe932c]" />
              <h2 className="font-bold text-sm">MODULE 02: Gas Leak & Confined Space</h2>
            </div>
            <div className="flex gap-3 text-[11px] text-gray-500 font-mono">
              <span>⏱ 18 Minutes</span>
              <span>🛡 Basic</span>
              <span className="text-[#904d00] font-bold">⚠ Mandatory</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Practice multi-sensor gas detection, breathing apparatus deployment, and coordinated extraction.
            </p>
            <button
              onClick={() => onNavigate('drill_result')}
              className="w-full h-10 bg-black text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 mt-1"
            >
              <span>Practice Module</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 9. Drill Result Screen (AR Evaluation & Submission)
export const SimDrillResult: React.FC<ScreenProps> = ({ onNavigate, language }) => {
  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] text-[#0d1c2f] overflow-y-auto pb-16 p-4">
      <div className="flex items-center justify-between py-1">
        <button onClick={() => onNavigate('worker_dashboard')} className="p-1 rounded hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-bold font-mono text-gray-500 uppercase">
          {getAppTranslation('drill_evaluation', language)}
        </span>
        <img src={ASSET_IMAGES.logo} alt="Logo" className="h-6 object-contain" />
      </div>

      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm my-2 flex justify-between items-center">
        <div>
          <h1 className="text-lg font-bold font-['Work_Sans']">
            {getAppTranslation('gas_leak_title', language)}
          </h1>
          <div className="flex gap-2 text-xs text-gray-500 mt-0.5">
            <span>⏱ 06m 42s</span>
            <span className="font-semibold text-emerald-600">
              {getAppTranslation('passed_certified', language)}
            </span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
          <CheckCircle2 className="w-6 h-6" />
        </div>
      </div>

      {/* Performance Score */}
      <div className="p-5 rounded-xl bg-[#131b2e] text-white my-2">
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider font-mono">
          {getAppTranslation('score', language)}: 92/100
        </span>
        <div className="flex justify-between items-baseline my-1">
          <div>
            <span className="text-4xl font-bold font-mono">92</span>
            <span className="text-sm text-gray-400 font-mono"> /100</span>
          </div>
          <span className="text-xs text-emerald-400 font-bold">✔ {getAppTranslation('passing_status', language)}</span>
        </div>
        <p className="text-xs text-gray-400">Min. Passing: 75% • Spatial Mesh Certified</p>
      </div>

      {/* Breakdown */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm my-2 flex flex-col gap-3">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono">
          AUDITED SAFETY BREAKDOWN
        </span>

        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>Hazard Detection Accuracy</span>
            <span className="font-mono">95% (19/20)</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-black h-full w-[95%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>PPE Protocol Adherence</span>
            <span className="font-mono text-emerald-600">100%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-emerald-600 h-full w-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>Reaction & Evacuation Speed</span>
            <span className="font-mono text-[#fe932c]">88% (&lt;45s)</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-[#fe932c] h-full w-[88%]"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {/* Submit / View Certificate Action */}
        <button
          onClick={() => onNavigate('worker_certificates')}
          className="w-full h-11 bg-[#fe932c] hover:bg-[#e68324] text-[#663500] font-bold rounded-lg text-xs tracking-wider flex items-center justify-center gap-2 uppercase shadow-sm"
        >
          <span>{getAppTranslation('submit', language)} &amp; {getAppTranslation('view_certificate', language)}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
        {/* Retry Drill Action */}
        <button
          onClick={() => onNavigate('worker_dashboard')}
          className="w-full h-11 border border-gray-200 text-xs font-semibold rounded-lg hover:bg-gray-50 flex items-center justify-center gap-1.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{getAppTranslation('retry_drill', language)}</span>
        </button>
      </div>
    </div>
  );
};

// 10. Worker Certificates Screen
export const SimWorkerCertificates: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] text-[#0d1c2f] overflow-y-auto pb-16 p-4">
      {/* Header */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center my-1">
        <div>
          <span className="text-[10px] text-gray-400 font-mono uppercase font-bold">TRAINEE PERSONNEL</span>
          <h2 className="font-bold text-base">Manoj Soren</h2>
          <p className="text-xs text-gray-500">Jharia Collieries — Seam 9 & 10 (Zone V)</p>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-gray-400 font-mono uppercase font-bold">CERTIFICATIONS</span>
          <div className="text-2xl font-bold font-mono">02</div>
        </div>
      </div>

      <div className="flex justify-between items-center my-2">
        <h3 className="font-bold text-sm">Issued Certificates</h3>
        <span className="text-[10px] px-2 py-0.5 rounded bg-gray-200 font-mono font-bold">2 Active</span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Cert 1 */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
              ACCREDITED / PASSED
            </span>
            <div className="text-right">
              <span className="text-[9px] text-gray-400 block font-mono">AR SCORE</span>
              <span className="text-sm font-bold font-mono text-emerald-600">92%</span>
            </div>
          </div>
          <h4 className="font-bold text-sm">Fire Safety & Hazard Containment</h4>
          <span className="text-[11px] font-mono text-gray-500">REG ID: CERT-FS-2024-8831</span>

          <div className="flex justify-between text-xs text-gray-600 pt-1 border-t border-gray-100">
            <div>
              <span className="text-[10px] text-gray-400 block">ISSUE DATE</span>
              <span>12 Oct 2024</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 block">VALID UNTIL</span>
              <span>12 Oct 2025</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => alert('Exporting PDF audit credential...')}
              className="flex-1 h-9 bg-black text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={() => alert('Sharing certificate...')}
              className="w-9 h-9 border rounded-lg flex items-center justify-center text-gray-600"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('admin_certificates')}
              className="w-9 h-9 border rounded-lg flex items-center justify-center text-gray-600"
            >
              <QrCode className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cert 2 */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2.5">
          <div className="flex justify-between items-center">
            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
              ACCREDITED / PASSED
            </span>
            <div className="text-right">
              <span className="text-[9px] text-gray-400 block font-mono">AR SCORE</span>
              <span className="text-sm font-bold font-mono text-emerald-600">84%</span>
            </div>
          </div>
          <h4 className="font-bold text-sm">Gas Leak & Confined Space Safety</h4>
          <span className="text-[11px] font-mono text-gray-500">REG ID: CERT-GL-2024-9104</span>

          <div className="flex justify-between text-xs text-gray-600 pt-1 border-t border-gray-100">
            <div>
              <span className="text-[10px] text-gray-400 block">ISSUE DATE</span>
              <span>24 Oct 2024</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 block">VALID UNTIL</span>
              <span>24 Oct 2025</span>
            </div>
          </div>

          <div className="flex gap-2 pt-2">
            <button
              onClick={() => alert('Exporting PDF audit credential...')}
              className="flex-1 h-9 bg-black text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={() => alert('Sharing certificate...')}
              className="w-9 h-9 border rounded-lg flex items-center justify-center text-gray-600"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('admin_certificates')}
              className="w-9 h-9 border rounded-lg flex items-center justify-center text-gray-600"
            >
              <QrCode className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 11. Worker Settings Screen
export const SimWorkerSettings: React.FC<ScreenProps> = ({ onNavigate, language, setLanguage }) => {
  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] text-[#0d1c2f] overflow-y-auto pb-16 p-4">
      {/* Profile Card */}
      <div className="bg-[#131b2e] text-white p-4 rounded-xl shadow-sm flex items-center gap-3 my-1">
        <img
          src={ASSET_IMAGES.manojAvatar}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-[#fe932c]"
        />
        <div>
          <h2 className="font-bold text-base">Manoj Soren</h2>
          <span className="text-xs text-gray-400 font-mono">ID: WRK-1042</span>
          <span className="block text-[10px] font-bold px-2 py-0.5 rounded bg-[#fe932c] text-[#663500] w-fit mt-1">
            WORKER / TRAINEE
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm my-2">
        <div className="flex justify-between items-center mb-1 text-xs">
          <span className="font-bold">Training Progress</span>
          <span className="text-emerald-600 font-bold">65% Completed</span>
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mb-3">
          <div className="bg-emerald-600 h-full w-[65%]"></div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-50 p-2.5 rounded-lg text-center">
            <span className="text-base font-bold font-mono">2 / 3</span>
            <span className="block text-[11px] text-gray-500">Modules Done</span>
          </div>
          <div className="bg-gray-50 p-2.5 rounded-lg text-center">
            <span className="text-base font-bold font-mono">1</span>
            <span className="block text-[11px] text-gray-500">Earned Certificate</span>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm my-1 flex flex-col gap-2">
        <span className="text-xs font-bold text-gray-500 uppercase font-mono">APP PREFERENCES</span>
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold">Training Language</span>
          <span className="text-[11px] text-gray-400">Select preferred</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mt-1">
          {[
            { id: 'en', label: 'English' },
            { id: 'hi', label: 'हिन्दी' },
            { id: 'sat', label: 'ᱥᱟᱱᱛᱟᱲᱤ' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setLanguage(item.id as AppLanguage)}
              className={`h-9 rounded-lg text-xs font-medium border ${
                language === item.id
                  ? 'bg-[#131b2e] text-white border-[#131b2e]'
                  : 'bg-white text-gray-700 border-gray-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="mt-auto pt-4">
        <button
          onClick={() => onNavigate('role_selection')}
          className="w-full h-11 bg-red-50 text-red-700 hover:bg-red-100 font-bold rounded-lg flex items-center justify-center gap-2 text-xs"
        >
          <LogOut className="w-4 h-4" />
          <span>LOG OUT</span>
        </button>
      </div>
    </div>
  );
};

// 12. Admin Dashboard Screen
export const SimAdminDashboard: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [period, setPeriod] = useState('all');

  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] text-[#0d1c2f] overflow-y-auto pb-16 p-4">
      {/* Admin Title */}
      <div>
        <h1 className="text-xl font-bold font-['Work_Sans']">Admin Dashboard</h1>
        <p className="text-xs text-[#45464d]">Vocational AR safety training & compliance overview</p>
      </div>

      {/* Chips */}
      <div className="flex gap-2 my-3">
        {[
          { id: 'all', label: 'All Time' },
          { id: '30d', label: 'Last 30 Days' },
          { id: '7d', label: 'This Week' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setPeriod(item.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
              period === item.id ? 'bg-black text-white' : 'bg-white text-gray-600 border'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-2 my-1">
        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-[10px] text-gray-400 font-bold uppercase font-mono">TOTAL TRAINEES</div>
          <div className="text-2xl font-bold font-mono my-1">1,248</div>
          <span className="text-[10px] text-emerald-600 font-bold">▲ +12% vs mth</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-[10px] text-gray-400 font-bold uppercase font-mono">COMPLETED</div>
          <div className="text-2xl font-bold font-mono my-1">3,890</div>
          <span className="text-[10px] text-gray-500 font-mono">⚡ AR Sessions</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-[10px] text-gray-400 font-bold uppercase font-mono">AVG PASS RATE</div>
          <div className="text-2xl font-bold font-mono my-1">76.2%</div>
          <span className="text-[10px] text-[#904d00]">● Req: &gt;75.0%</span>
        </div>

        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm">
          <div className="text-[10px] text-gray-400 font-bold uppercase font-mono">CERTIFICATES</div>
          <div className="text-2xl font-bold font-mono my-1">942</div>
          <span className="text-[10px] text-emerald-600">Issued & Valid</span>
        </div>
      </div>

      {/* Module Performance */}
      <div className="my-3 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-sm">Module Performance</h2>
          <span className="text-[10px] font-mono font-bold text-gray-400">2 ACTIVE</span>
        </div>

        {/* Mod 1 */}
        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <img src={ASSET_IMAGES.fireSafety} alt="" className="w-12 h-12 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-mono text-gray-400 font-bold">MOD-01</span>
              <h3 className="font-bold text-sm truncate">Fire & Explosion Safety</h3>
              <p className="text-xs text-gray-500">Avg Score: 78.4 • 81.2% Pass</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[11px] font-mono text-gray-500 mb-1">
              <span>Syllabus Completion</span>
              <span className="font-bold">84%</span>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-black h-full w-[84%]"></div>
            </div>
          </div>
        </div>

        {/* Mod 2 */}
        <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <img src={ASSET_IMAGES.gasSafety} alt="" className="w-12 h-12 rounded-lg object-cover" />
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-mono text-gray-400 font-bold">MOD-02</span>
              <h3 className="font-bold text-sm truncate">Gas Leak Safety</h3>
              <p className="text-xs text-gray-500">Avg Score: 69.1 • 71.5% Pass</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[11px] font-mono text-gray-500 mb-1">
              <span>Syllabus Completion</span>
              <span className="font-bold">68%</span>
            </div>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#fe932c] h-full w-[68%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Attempts */}
      <div className="flex justify-between items-center my-1">
        <h2 className="font-bold text-sm">Recent Training Attempts</h2>
        <button
          onClick={() => onNavigate('admin_certificates')}
          className="text-xs text-[#904d00] font-bold font-mono underline"
        >
          VIEW AUDIT LOG
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <div
          onClick={() => onNavigate('admin_trainee_detail')}
          className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:bg-gray-50"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                MS
              </div>
              <div>
                <h4 className="font-bold text-xs">Manoj Soren</h4>
                <p className="text-[11px] text-gray-400">Fire & Explosion Safety</p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">
              PASSED 92%
            </span>
          </div>
        </div>

        <div
          onClick={() => onNavigate('admin_trainee_detail')}
          className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:bg-gray-50"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#fe932c] text-white flex items-center justify-center font-bold text-xs">
                AM
              </div>
              <div>
                <h4 className="font-bold text-xs">Amit Kumar Mahto</h4>
                <p className="text-[11px] text-gray-400">Gas Safety Module</p>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-100 text-red-700">
              RE-ASSESS 58%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 13. Admin Trainees Directory
export const SimAdminTrainees: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [search, setSearch] = useState('');

  const filtered = MOCK_TRAINEES.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.workerId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] text-[#0d1c2f] overflow-y-auto pb-16 p-4">
      <div>
        <h1 className="text-xl font-bold font-['Work_Sans']">Trainees</h1>
        <p className="text-xs text-[#45464d]">Registered vocational training participants</p>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3">
        <div className="bg-white p-2.5 rounded-xl border border-gray-100 text-center">
          <span className="text-[9px] text-gray-400 block font-mono font-bold">ENROLLED</span>
          <span className="text-lg font-bold font-mono">1,248</span>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-gray-100 text-center">
          <span className="text-[9px] text-emerald-600 block font-mono font-bold">CERTIFIED</span>
          <span className="text-lg font-bold font-mono text-emerald-600">942</span>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-gray-100 text-center">
          <span className="text-[9px] text-red-600 block font-mono font-bold">ACTION REQ.</span>
          <span className="text-lg font-bold font-mono text-red-600">12</span>
        </div>
      </div>

      {/* Search */}
      <div className="relative my-1">
        <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search trainee name or ID..."
          className="w-full h-10 pl-9 pr-3 rounded-lg bg-white border border-gray-200 text-xs outline-none"
        />
      </div>

      {/* Trainee Cards */}
      <div className="flex flex-col gap-2.5 my-2">
        {filtered.map((t) => (
          <div
            key={t.id}
            onClick={() => onNavigate('admin_trainee_detail')}
            className="p-3.5 bg-white rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:bg-gray-50 flex flex-col gap-2"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-sm">{t.name}</h3>
                <span className="text-[11px] font-mono text-gray-400">
                  {t.workerId} • {t.language}
                </span>
              </div>
              <span
                className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono ${
                  t.status === 'certified'
                    ? 'bg-emerald-100 text-emerald-700'
                    : t.status === 'reassess'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {t.status.toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between text-xs pt-1 border-t border-gray-100">
              <div>
                <span className="text-[10px] text-gray-400 block">AVG SCORE</span>
                <span className="font-bold font-mono">{t.avgScore}%</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block">CERTIFICATES</span>
                <span className="font-bold font-mono">{t.certCount}/2</span>
              </div>
              <div>
                <span className="text-[10px] text-gray-400 block">LAST ACTIVE</span>
                <span className="text-gray-600">{t.lastActive}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 14. Admin Trainee Detail
export const SimAdminTraineeDetail: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] text-[#0d1c2f] overflow-y-auto pb-16 p-4">
      <div className="flex items-center gap-2 py-1">
        <button onClick={() => onNavigate('admin_trainees')} className="p-1 rounded hover:bg-gray-100">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold font-['Work_Sans']">Trainee Profile</h1>
      </div>

      {/* Trainee Banner */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm my-2 flex flex-col gap-3">
        <div className="flex gap-3 items-center">
          <img
            src={ASSET_IMAGES.manojSoren}
            alt="Manoj"
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-base">Manoj Soren</h2>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
                CERTIFIED
              </span>
            </div>
            <span className="text-xs font-mono text-gray-400">ID: JH-MN-4029</span>
            <p className="text-xs text-gray-500 mt-0.5">🌐 Santali (ᱥᱟᱱᱛᱟᱲᱤ)</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-gray-100">
          <div className="bg-gray-50 p-2.5 rounded-lg">
            <span className="text-[10px] text-gray-400 block">Overall Avg Score</span>
            <span className="text-base font-bold font-mono text-emerald-600">92.0% PASS</span>
          </div>
          <div className="bg-gray-50 p-2.5 rounded-lg">
            <span className="text-[10px] text-gray-400 block">Compliance Status</span>
            <span className="text-base font-bold">Certified</span>
          </div>
        </div>
      </div>

      {/* Decision Competency */}
      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm my-1 flex flex-col gap-2.5">
        <h3 className="font-bold text-sm">Decision Competency</h3>
        <p className="text-xs text-gray-400">Scenario-based telemetry index</p>

        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>Hazard Identification</span>
            <span className="font-mono text-emerald-600">Strong 95%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-black h-full w-[95%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>PPE Selection</span>
            <span className="font-mono text-emerald-600">Strong 90%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-black h-full w-[90%]"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span>Emergency Response</span>
            <span className="font-mono text-[#904d00]">Competent 88%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-[#fe932c] h-full w-[88%]"></div>
          </div>
        </div>
      </div>

      {/* Attempt History */}
      <h3 className="font-bold text-sm mt-3 mb-1">Attempt History</h3>
      <div className="flex flex-col gap-2">
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex justify-between items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs">Attempt #2</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700">
                PASSED
              </span>
            </div>
            <p className="text-xs text-gray-600">Gas Safety • Score: 84%</p>
            <span className="text-[10px] text-gray-400 font-mono">24 Oct 2024 • 14:32 IST</span>
          </div>
          <button
            onClick={() => onNavigate('drill_result')}
            className="px-3 py-1.5 bg-black text-white text-xs font-bold rounded-lg"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

// 15. Admin Modules Overview
export const SimAdminModules: React.FC<ScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] text-[#0d1c2f] overflow-y-auto pb-16 p-4">
      <div>
        <h1 className="text-xl font-bold font-['Work_Sans']">Safety Modules</h1>
        <p className="text-xs text-[#45464d]">Operational training module health & compliance</p>
      </div>

      <div className="flex flex-col gap-4 my-3">
        {/* Module 1 */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="relative h-36">
            <img src={ASSET_IMAGES.fireSafety} alt="" className="w-full h-full object-cover" />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#904d00] text-white text-[10px] font-mono font-bold">
              MOD-01
            </span>
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-white text-gray-700 text-[10px] font-mono font-bold">
              ACTIVE MVP
            </span>
            <h2 className="absolute bottom-2 left-2 text-white font-bold text-base drop-shadow">
              Module 1: Fire Safety
            </h2>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#eff4ff] p-2.5 rounded-lg">
                <span className="text-[9px] text-gray-400 font-mono block">TRAINEES ENROLLED</span>
                <span className="text-lg font-bold font-mono">1,248</span>
              </div>
              <div className="bg-[#eff4ff] p-2.5 rounded-lg">
                <span className="text-[9px] text-gray-400 font-mono block">COMPLETION RATE</span>
                <span className="text-lg font-bold font-mono text-emerald-600">84%</span>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono text-gray-400 font-bold block mb-1">
                CHECKPOINTS: 4/4 ACTIVE
              </span>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <span className="flex items-center gap-1 text-emerald-700">✔ Hazard ID</span>
                <span className="flex items-center gap-1 text-emerald-700">✔ PPE Select</span>
                <span className="flex items-center gap-1 text-emerald-700">✔ Extinguisher</span>
                <span className="flex items-center gap-1 text-emerald-700">✔ Evac Route</span>
              </div>
            </div>
          </div>
        </div>

        {/* Module 2 */}
        <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="relative h-36">
            <img src={ASSET_IMAGES.gasSafety} alt="" className="w-full h-full object-cover" />
            <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#fe932c] text-black text-[10px] font-mono font-bold">
              MOD-02
            </span>
            <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-white text-gray-700 text-[10px] font-mono font-bold">
              ACTIVE MVP
            </span>
            <h2 className="absolute bottom-2 left-2 text-white font-bold text-base drop-shadow">
              Module 2: Gas Leak Safety
            </h2>
          </div>
          <div className="p-4 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#eff4ff] p-2.5 rounded-lg">
                <span className="text-[9px] text-gray-400 font-mono block">TRAINEES ENROLLED</span>
                <span className="text-lg font-bold font-mono">1,120</span>
              </div>
              <div className="bg-[#eff4ff] p-2.5 rounded-lg">
                <span className="text-[9px] text-gray-400 font-mono block">COMPLETION RATE</span>
                <span className="text-lg font-bold font-mono text-[#904d00]">68%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 16. Admin Certificates & Audit Ledger Screen
export const SimAdminCertificates: React.FC<ScreenProps> = ({ onNavigate }) => {
  const [showQr, setShowQr] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-full bg-[#f8f9ff] text-[#0d1c2f] overflow-y-auto pb-16 p-4">
      <div>
        <h1 className="text-xl font-bold font-['Work_Sans']">Certificates</h1>
        <p className="text-xs text-[#45464d]">Issued vocational safety credentials</p>
      </div>

      <div className="grid grid-cols-3 gap-2 my-3">
        <div className="bg-white p-2.5 rounded-xl border border-gray-100 text-center">
          <span className="text-[9px] text-gray-400 block font-mono font-bold">TOTAL</span>
          <span className="text-lg font-bold font-mono">942</span>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-gray-100 text-center">
          <span className="text-[9px] text-emerald-600 block font-mono font-bold">VALID</span>
          <span className="text-lg font-bold font-mono text-emerald-600">918</span>
        </div>
        <div className="bg-white p-2.5 rounded-xl border border-gray-100 text-center">
          <span className="text-[9px] text-[#904d00] block font-mono font-bold">RE-ASSESS</span>
          <span className="text-lg font-bold font-mono text-[#904d00]">24</span>
        </div>
      </div>

      {/* Cert list */}
      <div className="flex flex-col gap-2.5 my-1">
        {MOCK_CERTIFICATES.map((c) => (
          <div
            key={c.id}
            className="p-3.5 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-gray-400 font-bold">{c.certNumber}</span>
                <h3 className="font-bold text-sm">{c.traineeName}</h3>
                <span className="text-xs text-gray-500">ID: {c.traineeId}</span>
              </div>
              <span
                className={`text-[9px] font-bold px-2 py-0.5 rounded font-mono ${
                  c.status === 'valid'
                    ? 'bg-emerald-100 text-emerald-700'
                    : c.status === 'pending'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {c.status.toUpperCase()}
              </span>
            </div>

            <div className="bg-[#eff4ff] p-2 rounded-lg flex justify-between text-xs">
              <div>
                <span className="text-[9px] text-gray-400 block font-mono">MODULE</span>
                <span className="font-semibold">{c.moduleName}</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-gray-400 block font-mono">FINAL SCORE</span>
                <span className="font-bold font-mono">{c.finalScore}%</span>
              </div>
            </div>

            <div className="flex justify-end pt-1">
              <button
                onClick={() => setShowQr(c.certNumber)}
                className="px-3 py-1 border rounded-lg text-xs font-semibold flex items-center gap-1 hover:bg-gray-50"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Verify Ledger</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal dialog */}
      {showQr && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-5 max-w-xs w-full shadow-2xl flex flex-col items-center gap-3 text-center">
            <div className="w-full flex justify-between items-center">
              <h3 className="font-bold text-sm">Cryptographic Credential</h3>
              <button onClick={() => setShowQr(null)} className="p-1 rounded-full hover:bg-gray-100">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 my-1">
              <QrCode className="w-32 h-32 text-black" />
            </div>
            <span className="font-mono font-bold text-sm">{showQr}</span>
            <p className="text-xs text-gray-500 leading-relaxed">
              Scan using DGMS Handheld Inspector terminal to verify authentic state ledger hash.
            </p>
            <div className="flex gap-2 w-full mt-2">
              <button
                onClick={() => setShowQr(null)}
                className="flex-1 h-9 rounded-lg border text-xs font-semibold"
              >
                Dismiss
              </button>
              <button
                onClick={() => {
                  alert('Exporting verified audit certificate...');
                  setShowQr(null);
                }}
                className="flex-1 h-9 rounded-lg bg-black text-white text-xs font-bold"
              >
                Export PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
