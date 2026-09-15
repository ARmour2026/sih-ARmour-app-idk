import React from 'react';
import { ScreenId, UserRole, AppLanguage } from '../types';
import {
  SimRoleSelection,
  SimLanguageSelection,
  SimWorkerLogin,
  SimAdminLogin,
  SimRegistration,
  SimForgotPassword,
  SimWorkerDashboard,
  SimWorkerModules,
  SimDrillResult,
  SimWorkerCertificates,
  SimWorkerSettings,
  SimAdminDashboard,
  SimAdminTrainees,
  SimAdminTraineeDetail,
  SimAdminModules,
  SimAdminCertificates
} from './screens/SimScreens';
import {
  LayoutDashboard,
  View,
  Award,
  Settings,
  Users,
  Wifi,
  BatteryMedium,
  Smartphone,
  ChevronDown
} from 'lucide-react';

interface AndroidSimulatorProps {
  currentScreen: ScreenId;
  setCurrentScreen: (screen: ScreenId) => void;
  language: AppLanguage;
  setLanguage: (lang: AppLanguage) => void;
  role: UserRole;
  setRole: (role: UserRole) => void;
}

export const AndroidSimulator: React.FC<AndroidSimulatorProps> = ({
  currentScreen,
  setCurrentScreen,
  language,
  setLanguage,
  role,
  setRole
}) => {
  // Determine if bottom navigation should be visible
  const isWorkerBottomNav = [
    'worker_dashboard',
    'worker_modules',
    'worker_certificates',
    'worker_settings',
    'drill_result'
  ].includes(currentScreen);

  const isAdminBottomNav = [
    'admin_dashboard',
    'admin_trainees',
    'admin_trainee_detail',
    'admin_modules',
    'admin_certificates'
  ].includes(currentScreen);

  const renderScreen = () => {
    const props = {
      onNavigate: setCurrentScreen,
      language,
      setLanguage,
      role,
      setRole
    };

    switch (currentScreen) {
      case 'role_selection':
        return <SimRoleSelection {...props} />;
      case 'language_selection':
        return <SimLanguageSelection {...props} />;
      case 'worker_login':
        return <SimWorkerLogin {...props} />;
      case 'admin_login':
        return <SimAdminLogin {...props} />;
      case 'registration':
        return <SimRegistration {...props} />;
      case 'forgot_password':
        return <SimForgotPassword {...props} />;
      case 'worker_dashboard':
        return <SimWorkerDashboard {...props} />;
      case 'worker_modules':
        return <SimWorkerModules {...props} />;
      case 'drill_result':
        return <SimDrillResult {...props} />;
      case 'worker_certificates':
        return <SimWorkerCertificates {...props} />;
      case 'worker_settings':
        return <SimWorkerSettings {...props} />;
      case 'admin_dashboard':
        return <SimAdminDashboard {...props} />;
      case 'admin_trainees':
        return <SimAdminTrainees {...props} />;
      case 'admin_trainee_detail':
        return <SimAdminTraineeDetail {...props} />;
      case 'admin_modules':
        return <SimAdminModules {...props} />;
      case 'admin_certificates':
        return <SimAdminCertificates {...props} />;
      default:
        return <SimRoleSelection {...props} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 lg:p-6 w-full">
      {/* Device Frame */}
      <div className="w-full max-w-[390px] h-[780px] bg-[#1a1c1e] rounded-[44px] p-3 shadow-2xl border-4 border-[#2f3033] relative flex flex-col">
        {/* Hardware Notch / Camera */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#1a1c1e] rounded-full z-40 flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0b]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#1e2022]"></div>
        </div>

        {/* Screen Container */}
        <div className="w-full h-full bg-[#f8f9ff] rounded-[34px] overflow-hidden flex flex-col relative">
          {/* Android Status Bar */}
          <div className="h-9 px-6 bg-transparent text-[#0d1c2f] flex justify-between items-center text-xs font-mono select-none z-30 pt-1">
            <span className="font-semibold text-[11px]">09:41</span>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold">5G</span>
              <BatteryMedium className="w-4 h-4" />
            </div>
          </div>

          {/* Screen Content Viewport */}
          <div className="flex-1 overflow-hidden relative">{renderScreen()}</div>

          {/* Android Bottom App Navigation Bar */}
          {isWorkerBottomNav && (
            <div className="absolute bottom-4 left-0 right-0 h-14 bg-white border-t border-gray-200/80 flex items-center justify-around px-2 z-20 shadow-lg">
              <button
                onClick={() => setCurrentScreen('worker_dashboard')}
                className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                  currentScreen === 'worker_dashboard'
                    ? 'text-[#fe932c] font-bold'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-[10px] mt-0.5">Overview</span>
              </button>

              <button
                onClick={() => setCurrentScreen('worker_modules')}
                className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                  currentScreen === 'worker_modules'
                    ? 'text-[#fe932c] font-bold'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <View className="w-4 h-4" />
                <span className="text-[10px] mt-0.5">Modules</span>
              </button>

              <button
                onClick={() => setCurrentScreen('worker_certificates')}
                className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                  currentScreen === 'worker_certificates'
                    ? 'text-[#fe932c] font-bold'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Award className="w-4 h-4" />
                <span className="text-[10px] mt-0.5">Certificates</span>
              </button>

              <button
                onClick={() => setCurrentScreen('worker_settings')}
                className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                  currentScreen === 'worker_settings'
                    ? 'text-[#fe932c] font-bold'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span className="text-[10px] mt-0.5">Settings</span>
              </button>
            </div>
          )}

          {isAdminBottomNav && (
            <div className="absolute bottom-4 left-0 right-0 h-14 bg-white border-t border-gray-200/80 flex items-center justify-around px-2 z-20 shadow-lg">
              <button
                onClick={() => setCurrentScreen('admin_dashboard')}
                className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                  currentScreen === 'admin_dashboard'
                    ? 'text-[#131b2e] font-bold'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="text-[10px] mt-0.5">Dashboard</span>
              </button>

              <button
                onClick={() => setCurrentScreen('admin_trainees')}
                className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                  currentScreen === 'admin_trainees' || currentScreen === 'admin_trainee_detail'
                    ? 'text-[#131b2e] font-bold'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Users className="w-4 h-4" />
                <span className="text-[10px] mt-0.5">Trainees</span>
              </button>

              <button
                onClick={() => setCurrentScreen('admin_modules')}
                className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                  currentScreen === 'admin_modules'
                    ? 'text-[#131b2e] font-bold'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <View className="w-4 h-4" />
                <span className="text-[10px] mt-0.5">Modules</span>
              </button>

              <button
                onClick={() => setCurrentScreen('admin_certificates')}
                className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                  currentScreen === 'admin_certificates'
                    ? 'text-[#131b2e] font-bold'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Award className="w-4 h-4" />
                <span className="text-[10px] mt-0.5">Audit Ledger</span>
              </button>
            </div>
          )}

          {/* Android Gesture Bar */}
          <div className="h-4 w-full bg-white flex items-center justify-center select-none z-30">
            <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
