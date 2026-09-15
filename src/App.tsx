/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ScreenId, UserRole, AppLanguage } from './types';
import { AndroidSimulator } from './components/AndroidSimulator';
import { CodeInspector } from './components/CodeInspector';
import { ALL_COMPOSE_FILES } from './data/composeFilesManifest';
import {
  Smartphone,
  Code2,
  Columns,
  Download,
  Copy,
  Check,
  HardHat,
  Shield,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  MonitorCheck
} from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('language_selection');
  const [role, setRole] = useState<UserRole>('worker');
  const [language, setLanguage] = useState<AppLanguage>('en');
  const [viewMode, setViewMode] = useState<'split' | 'phone' | 'code'>('split');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleCopyCurrentScreenCode = () => {
    const file = ALL_COMPOSE_FILES.find((f) => f.screenId === currentScreen);
    if (file) {
      navigator.clipboard.writeText(file.code);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2000);
    }
  };

  const screensList: { id: ScreenId; label: string; group: string }[] = [
    // Auth & Setup
    { id: 'language_selection', label: '1. Language Selection', group: 'Auth & Onboarding' },
    { id: 'role_selection', label: '2. Role Selection', group: 'Auth & Onboarding' },
    { id: 'worker_login', label: '3. Worker Login', group: 'Auth & Onboarding' },
    { id: 'admin_login', label: '4. Admin Login', group: 'Auth & Onboarding' },
    { id: 'registration', label: '5. New User Register', group: 'Auth & Onboarding' },
    { id: 'forgot_password', label: '6. Forgot Password', group: 'Auth & Onboarding' },

    // Worker Trainee Flow
    { id: 'worker_dashboard', label: '7. Worker Dashboard', group: 'Worker (Trainee)' },
    { id: 'worker_modules', label: '8. Worker Modules', group: 'Worker (Trainee)' },
    { id: 'drill_result', label: '9. AR Drill Result', group: 'Worker (Trainee)' },
    { id: 'worker_certificates', label: '10. Worker Certificates', group: 'Worker (Trainee)' },
    { id: 'worker_settings', label: '11. Worker Settings', group: 'Worker (Trainee)' },

    // Admin Supervisory Flow
    { id: 'admin_dashboard', label: '12. Admin Dashboard', group: 'Admin (Supervisory)' },
    { id: 'admin_trainees', label: '13. Trainee Directory', group: 'Admin (Supervisory)' },
    { id: 'admin_trainee_detail', label: '14. Trainee Dossier', group: 'Admin (Supervisory)' },
    { id: 'admin_modules', label: '15. Modules Telemetry', group: 'Admin (Supervisory)' },
    { id: 'admin_certificates', label: '16. Regulatory Ledger', group: 'Admin (Supervisory)' }
  ];

  return (
    <div className="flex flex-col h-screen w-screen bg-[#090c10] text-[#e6edf3] overflow-hidden font-sans">
      {/* Global Top Navbar */}
      <header className="h-14 bg-[#161b22] border-b border-[#30363d] px-4 flex items-center justify-between z-30 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#fe932c] to-[#ffb266] flex items-center justify-center text-[#401f00] font-black shadow-md">
            <HardHat className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold tracking-tight text-white">ARmour Safety Studio</h1>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#fe932c]/20 text-[#fe932c] font-semibold border border-[#fe932c]/40">
                Jetpack Compose Material3
              </span>
            </div>
            <p className="text-[11px] text-gray-400 hidden sm:block">
              Vocational AR Safety Training for Android Studio • 16 Screen Modular Architecture
            </p>
          </div>
        </div>

        {/* Quick Screen Jump Selector */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <select
              value={currentScreen}
              onChange={(e) => {
                const screen = e.target.value as ScreenId;
                setCurrentScreen(screen);
                if (screen.startsWith('admin')) {
                  setRole('admin');
                } else if (screen.startsWith('worker')) {
                  setRole('worker');
                }
              }}
              className="bg-[#21262d] border border-[#30363d] text-white text-xs font-semibold rounded-lg px-3 py-1.5 outline-none focus:border-[#fe932c] cursor-pointer"
            >
              {['Auth & Onboarding', 'Worker (Trainee)', 'Admin (Supervisory)'].map((group) => (
                <optgroup key={group} label={group} className="bg-[#161b22] text-gray-300">
                  {screensList
                    .filter((s) => s.group === group)
                    .map((s) => (
                      <option key={s.id} value={s.id} className="text-white">
                        {s.label}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Quick Language Toggle */}
          <div className="flex items-center bg-[#21262d] rounded-lg p-0.5 border border-[#30363d]">
            {[
              { id: 'en', label: 'EN' },
              { id: 'hi', label: 'हि' },
              { id: 'sat', label: 'ᱥ' }
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => setLanguage(l.id as AppLanguage)}
                className={`px-2 py-1 rounded text-xs font-semibold transition-all ${
                  language === l.id
                    ? 'bg-[#fe932c] text-[#401f00] font-bold shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
                title={`Switch dialect to ${l.label}`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center bg-[#21262d] rounded-lg p-0.5 border border-[#30363d]">
            <button
              onClick={() => setViewMode('split')}
              className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-all ${
                viewMode === 'split' ? 'bg-[#30363d] text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
              title="Split View (Simulator + Kotlin Code)"
            >
              <Columns className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Split</span>
            </button>
            <button
              onClick={() => setViewMode('phone')}
              className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-all ${
                viewMode === 'phone' ? 'bg-[#30363d] text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
              title="Android Simulator Only"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Device</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`p-1.5 rounded-md text-xs font-medium flex items-center gap-1 transition-all ${
                viewMode === 'code' ? 'bg-[#30363d] text-white shadow-sm' : 'text-gray-400 hover:text-white'
              }`}
              title="Compose Code Inspector"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Code</span>
            </button>
          </div>

          <button
            onClick={handleCopyCurrentScreenCode}
            className="px-3 py-1.5 rounded-lg bg-[#fe932c] hover:bg-[#e68324] text-[#401f00] font-bold text-xs flex items-center gap-1.5 transition-all shadow"
          >
            {copiedNotification ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">
              {copiedNotification ? 'Copied Screen Code' : 'Copy Screen .kt'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Workspace Area */}
      <main className="flex-1 flex overflow-hidden p-2 sm:p-4 gap-4 bg-[#0d1117]">
        {/* Left / Phone Viewport */}
        {(viewMode === 'split' || viewMode === 'phone') && (
          <div
            className={`flex flex-col items-center justify-center overflow-y-auto h-full ${
              viewMode === 'phone' ? 'w-full max-w-2xl mx-auto' : 'w-full lg:w-[420px] shrink-0'
            }`}
          >
            <AndroidSimulator
              currentScreen={currentScreen}
              setCurrentScreen={(s) => {
                setCurrentScreen(s);
                if (s.startsWith('admin')) setRole('admin');
                if (s.startsWith('worker')) setRole('worker');
              }}
              language={language}
              setLanguage={setLanguage}
              role={role}
              setRole={setRole}
            />
          </div>
        )}

        {/* Right / Code Inspector */}
        {(viewMode === 'split' || viewMode === 'code') && (
          <div className="flex-1 h-full overflow-hidden flex flex-col">
            <CodeInspector
              currentScreen={currentScreen}
              onSelectScreenFromCode={(screenId) => {
                setCurrentScreen(screenId);
                if (screenId.startsWith('admin')) setRole('admin');
                if (screenId.startsWith('worker')) setRole('worker');
              }}
            />
          </div>
        )}
      </main>

      {/* Bottom Status strip */}
      <footer className="h-7 bg-[#161b22] border-t border-[#30363d] px-4 flex items-center justify-between text-[11px] text-gray-400 font-mono shrink-0 select-none">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Android Studio Ready
          </span>
          <span>Package: com.armour.safety</span>
          <span className="hidden sm:inline">Active Screen: {currentScreen}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Compose BOM: 2024.09.02</span>
          <span>Material3</span>
          <span>Coil 2.7.0</span>
        </div>
      </footer>
    </div>
  );
}

