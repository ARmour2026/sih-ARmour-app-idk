import { CertificateRecord, ModuleRecord, TraineeRecord } from '../types';

export const ASSET_IMAGES = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5vwQiOmhcSGHUJFrWSYOP6sB9BpXEklbX71RauZ6KYnsqcbNnaN_-JcxmCoSqrj_siSLKe0jrdC0zdh6JywtEqVYjvmuiB5_fwZWo9xbQfAsvUSKGJcSh20lTCLvmPYvfuTpKUTqjrFehnT7U1fI4KjcaTHumPq_ZmVsp8Rn1h3ZdCeGufa8vvtuwyu4puhAle1VpDdTknKw570FC-BW_Io2YiTrbuWC5z560R0e6M97nYGpzbcbPa-_1YGlPHPx9SBY',
  fireSafety: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmAbWa6kzYa36x2XfwQLY8E3Nwhkmhx4pDO8SmkklRRhoBtrNswhzN2fUzYBonTDasgGIZnD6HGJffSfLSc0PAz8XqtbtN0h0vVEGICmBJ4uLlAhcaYwWrnC3SR6gPItb72gA_6FMQ_hatv4UdpUxHeMBbCE88cGvuhXwYY0RLgLDtyvjpl1WBdNTP8IWnCL-gagXJYka1EZMPxVrVmWenaLEC_P-xxBQ8Bp-Ya69OiVVD6tlmz0dYZA',
  gasSafety: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYz8SRXp3XVLdxd3fGkdfNxIliBSTOSmGg1ID1BcsRMeR8CdXgTghoIkcaKoyY096hOsIdvku116YWgTuCzJGDS6To2xrvVgukqTwi_6_Wx4LeKVuc3HpDGtvjT-oZw-iLqmg5fDPQmLcqJYIwdWhCPb5PDdmLGVP8VMHzb9NTafG24pDCpP2AlWqi26djRebzqgsBHu48rnuLB54YZ8j2jLax2cxpApL7ppAM8oevXoWWh0RMYxgK4A',
  manojSoren: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgiqZIv0vAYl6Ng-Hznjtu-UnJQ8u5GJoyfSQAg4v3rRTpY753rVMmWd-dM7RwJaUaO9UpRDmDc7rr6wKZ6xcjI4tA-IyIvQ34c4p4CL5YO-zhHNdf4zf2hVNeJWRvkqByZhIwMQ5yV8g2wFUmtcNSEMfFPRmkcvCHedfnFvj541NB27S91B_YrPUxjhCOktc7Wk9U8Iak9qcG1-wNQ1ZGPRUw1SfCyWU4ywVFcy0wIoNl5CRex4ENew',
  manojAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrPBngwKtn8QALWIueki_9N6loIgNFmjYLYgXpxZ4pBM51xDorybqoc0RA_64vdpDQwRXe1T0gs7ExWHCnFsP3JnPEWg9pM0E-bGb6t2j07XAxVevBcywSeps21H9C3RhZisxRXqiiGuCK9rAGAyb-QNsJOnCmau-Dl8Pj5l7qpmuw5pfO9x6AZb4xwMkSUHSzJk0_nUT5MZTc3hwzF0P6AAXyl5UTYI9Jn50uYPpx2m-uh36mY6wliQ',
  miningBanner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPYhC93dieq1SlcU0sYqa6nF9Ol4RIqehS-kFUPQePUBnDsJVI_v0tLyc0uG1dKu4P29MztcnatgLCSNOb-BaQaOGfIjKe1Iz5knJKL5VZdfhTukm_VaDW3SvK_k4z8-XoHNwacOOVj1gQIpiM7aUKTNHQ3xO7qmV5R59sdm0aK9vXOJ8GFuHcjed5rBaE8ks-n1ehmzzU1wZa9F2d1EZQZxhcu0YBc7aNv8TScX7cYA_fSfnPK-c_vw',
  gasDetector: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzplLJ21n2RGm5oB7K9s9q6WRaLgKPM4AFzC3WD_mENQxqB6Uh_S8kajVw1RvWJqnRq5fnb3GQOTohSwBoF9sWHFmobGXiH3XEqtWrsel_8QlDb--LC1WVNIUuQx3b4KajWb_hjskkDZraOTFZDkSo4DRrlmDmuS-EpzK76LbpU6rYJGTwUWj84MUDjdHmU1inOEH4bw5SnSl9_XmvD7EF9QV0VdAMW4ZXQKidAVk8DUSm6S4Dr285Aw',
};

export const MOCK_TRAINEES: TraineeRecord[] = [
  {
    id: 't-1',
    name: 'Manoj Soren',
    workerId: 'JH-MN-4029',
    division: 'Jharia Collieries — Seam 9 & 10 (Zone V)',
    language: 'Santali (ᱥᱟᱱᱛᱟᱲᱤ)',
    status: 'certified',
    avgScore: 92.0,
    certCount: 2,
    lastActive: 'Today 09:14',
    avatarUrl: ASSET_IMAGES.manojSoren,
    modules: [
      { name: 'Fire Safety', score: 92, attempts: 1, status: 'passed' },
      { name: 'Gas Leak & Confined Space', score: 84, attempts: 2, status: 'passed' }
    ]
  },
  {
    id: 't-2',
    name: 'Amit Kumar Mahto',
    workerId: 'JH-BK-1102',
    division: 'Bokaro Open Cast — Haulage 4',
    language: 'Hindi (हिन्दी)',
    status: 'reassess',
    avgScore: 58.0,
    certCount: 0,
    lastActive: 'Today 07:45',
    avatarUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=200&auto=format&fit=crop&q=80',
    modules: [
      { name: 'Gas Safety Module', score: 58, attempts: 1, status: 'failed' }
    ]
  },
  {
    id: 't-3',
    name: 'Sunita Hansda',
    workerId: 'JH-DH-8821',
    division: 'Dhanbad Underground Deep Drift',
    language: 'Santali (ᱥᱟᱱᱛᱟᱲᱤ)',
    status: 'certified',
    avgScore: 76.0,
    certCount: 2,
    lastActive: 'Yesterday',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    modules: [
      { name: 'Fire Safety', score: 76, attempts: 1, status: 'passed' },
      { name: 'Gas Leak Safety', score: 80, attempts: 2, status: 'passed' }
    ]
  },
  {
    id: 't-4',
    name: 'Ramesh Tirkey',
    workerId: 'JH-RN-5541',
    division: 'Raniganj Heavy Extraction Sector',
    language: 'Hindi (हिन्दी)',
    status: 'training',
    avgScore: 64.0,
    certCount: 1,
    lastActive: '2 days ago',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    modules: [
      { name: 'Fire Safety', score: 64, attempts: 1, status: 'in_progress' }
    ]
  }
];

export const MOCK_MODULES: ModuleRecord[] = [
  {
    id: 'mod-01',
    code: 'MOD-01',
    title: 'Fire & Explosion Safety',
    description: 'Practice identifying rapid fire hazards, selecting compliant class-appropriate PPE, initiating water-mist sequence, and guiding mine teams via safe pressurized egress routes.',
    imageUrl: ASSET_IMAGES.fireSafety,
    status: 'completed',
    score: 92,
    durationMins: 15,
    difficulty: 'Basic',
    badgesCount: 3,
    traineesEnrolled: 1248,
    completionRate: 84,
    avgScore: 78.4,
    passRate: 81.2,
    checkpoints: [
      'Hazard Identification',
      'PPE Selection',
      'Extinguisher Action',
      'Evacuation Route'
    ]
  },
  {
    id: 'mod-02',
    code: 'MOD-02',
    title: 'Gas Leak & Confined Space Safety',
    description: 'Practice multi-sensor gas detection, positive-pressure breathing apparatus deployment, lock-out/tag-out isolation, and coordinated emergency retrieval in restricted airshaft chambers.',
    imageUrl: ASSET_IMAGES.gasSafety,
    status: 'in_progress',
    score: 84,
    durationMins: 18,
    difficulty: 'Basic',
    isMandatory: true,
    traineesEnrolled: 1120,
    completionRate: 68,
    avgScore: 69.1,
    passRate: 71.5,
    checkpoints: [
      'Gas Leak Detection',
      'Danger Zone Demarcation',
      'SCBA Donning',
      'Buddy Protocol'
    ]
  }
];

export const MOCK_CERTIFICATES: CertificateRecord[] = [
  {
    id: 'cert-1',
    certNumber: '#CERT-2025-0841',
    traineeName: 'Manoj Soren',
    traineeId: 'JH-MN-4029',
    moduleName: 'Fire Safety',
    finalScore: 92.0,
    issuedDate: '14 Oct 2025',
    validUntil: '14 Oct 2026',
    status: 'valid',
    tier: 'Tier 1 Egress Master'
  },
  {
    id: 'cert-2',
    certNumber: '#CERT-2025-0840',
    traineeName: 'Sunita Hansda',
    traineeId: 'JH-DH-8821',
    moduleName: 'Fire Safety',
    finalScore: 82.5,
    issuedDate: '12 Oct 2025',
    validUntil: '12 Oct 2026',
    status: 'valid',
    tier: 'Standard Certified'
  },
  {
    id: 'cert-3',
    certNumber: '#CERT-2025-0839',
    traineeName: 'Bikram Roy',
    traineeId: 'JH-BK-3301',
    moduleName: 'Gas Leak Safety',
    finalScore: 68.0,
    issuedDate: 'Pending',
    validUntil: '--',
    status: 'pending',
    statusNote: 'Pending Proctor (Min 70%)'
  },
  {
    id: 'cert-4',
    certNumber: '#CERT-2024-0719',
    traineeName: 'Pravin Hembram',
    traineeId: 'JH-MN-1108',
    moduleName: 'Gas Leak Safety',
    finalScore: 51.0,
    issuedDate: '10 Aug 2024',
    validUntil: 'Revoked',
    status: 'revoked',
    statusNote: 'Safety Clamp Violation'
  }
];
