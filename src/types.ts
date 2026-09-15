export type ScreenId =
  | 'role_selection'
  | 'language_selection'
  | 'worker_login'
  | 'admin_login'
  | 'registration'
  | 'forgot_password'
  | 'worker_dashboard'
  | 'worker_modules'
  | 'drill_result'
  | 'worker_certificates'
  | 'worker_settings'
  | 'admin_dashboard'
  | 'admin_trainees'
  | 'admin_trainee_detail'
  | 'admin_modules'
  | 'admin_certificates';

export type UserRole = 'worker' | 'admin' | null;

export type AppLanguage = 'en' | 'hi' | 'sat';

export interface ComposeFile {
  id: string;
  name: string;
  category: 'theme' | 'screen' | 'component' | 'navigation' | 'gradle' | 'res';
  packagePath: string;
  screenId?: ScreenId;
  description: string;
  code: string;
}

export interface TraineeRecord {
  id: string;
  name: string;
  workerId: string;
  division: string;
  language: string;
  status: 'certified' | 'reassess' | 'training';
  avgScore: number;
  certCount: number;
  lastActive: string;
  avatarUrl: string;
  modules: {
    name: string;
    score: number;
    attempts: number;
    status: 'passed' | 'failed' | 'in_progress';
  }[];
}

export interface ModuleRecord {
  id: string;
  code: string;
  title: string;
  description: string;
  imageUrl: string;
  status: 'completed' | 'in_progress' | 'not_started';
  score?: number;
  durationMins: number;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  badgesCount?: number;
  isMandatory?: boolean;
  traineesEnrolled: number;
  completionRate: number;
  avgScore: number;
  passRate: number;
  checkpoints: string[];
}

export interface CertificateRecord {
  id: string;
  certNumber: string;
  traineeName: string;
  traineeId: string;
  moduleName: string;
  finalScore: number;
  issuedDate: string;
  validUntil: string;
  status: 'valid' | 'pending' | 'revoked';
  statusNote?: string;
  tier?: string;
}
