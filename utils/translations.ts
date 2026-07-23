export type Language = 'en' | 'pt';

export const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-GB'); // DD/MM/YYYY
  } catch (e) {
    return dateString;
  }
};

export const translations = {
  en: {
    common: {
      vulcan: 'VULCAN',
      all: 'All',
      search: 'Search...',
      rowsPerPage: 'Rows per page:',
      page: 'Page',
      of: 'of',
      name: 'Name',
      id: 'ID',
      company: 'Company',
      department: 'Department',
      jobTitle: 'Job Title',
      role: 'Role',
      actions: 'Actions',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      print: 'Print',
      download: 'Download',
      import: 'Import',
      template: 'Template',
      yes: 'Yes',
      no: 'No',
      date: 'Date',
      time: 'Time',
      status: 'Status',
      recordsFound: 'records found',
      completed: 'Completed',
      timeLeft: 'left',
      passed: 'Passed',
      failed: 'Failed',
      pending: 'Pending',
      complianceRate: 'Compliance Rate',
      testsProcessed: 'Tests Processed',
      stats: {
        totalRecords: 'Total Records',
        passRate: 'Pass Rate',
        passed: 'Passed',
        failed: 'Failed',
        totalUsers: 'Total Users',
        active: 'Active',
        admins: 'Admins'
      },
      operationalMatrix: 'Operational Matrix',
      owner: 'Owner',
      sending: 'Sending...',
      smsBlast: 'SMS Blast',
      simulateRole: 'Simulate Role',
      superuser: 'Superuser Access',
      restricted: 'Restricted Access',
      enterpriseView: 'Enterprise View',
      exitFullScreen: 'Exit Full Screen',
      fullScreen: 'Full Screen',
      notifications: 'Notifications',
      noNotifications: 'No notifications',
      clearAll: 'Clear All',
      legal: 'Legal',
      rights: 'All rights reserved.'
    },
    publicHome: {
      nav: {
        portfolio: 'Portfolio',
        about: 'About',
        vision: 'Vision',
        mission: 'Mission',
        partners: 'Partners',
        contact: 'Contact',
        enterHub: 'Enter Client Hub'
      },
      hero: {
        badge: 'Innovating Tomorrow',
        title1: 'Architecting',
        title2: 'Enterprise',
        title3: 'Future',
        desc: 'Digitec delivers a unified software ecosystem for industry titans, dynamic startups, and residential projects. From heavy industry safety to custom operational orchestration.',
        btnExplore: 'Explore Ecosystem',
        btnEnter: 'Enter Client Hub'
      },
      about: {
        title: 'Custom Software Engineering',
        subtitle: 'Digitec engineers bespoke digital ecosystems for global industries, innovative startups, and modern residential developments. We transform complex operational needs into mission-critical software that empowers businesses of all scales.',
        cards: {
          safeteq: 'SAFETEQ Enterprise Risk Management - Our flagship compliance engine for Critical Activity Requirements.',
          edudesk: 'Industrial Learning Management System digitizing training lifecycles.',
          h365: 'Integrated Health informatics for remote and high-risk site operations.',
          microfin: 'Automated financial orchestration for industrial contractor networks.',
          websites: 'Precision-engineered portals for startups, residences, and individual companies.'
        }
      },
      vision: {
        title: 'Our Vision',
        headline: 'Intelligent Digital Ecosystems.',
        desc: 'We are bridging the gap between physical operations and intelligent digital orchestration through high-fidelity software tailored for industry, retail, and residence.',
        mission: 'Our Strategic Mission',
        missionHeadline: 'Transforming Complexity into Precision',
        goals: [
          'Unify fragmented legacy data into actionable operational intelligence.',
          'Develop custom software tailored to specific startup and residential needs.',
          'Deliver world-class technology solutions homegrown in Africa for the world.'
        ]
      },
      partners: {
        title: 'Global Industrial Partners',
        stats: {
          records: 'Over 12,000+ Safety Credentials Managed',
          reliability: '99.99% Operational Uptime'
        }
      },
      contact: {
        title: 'Architect your manual process to a fully digitized process',
        desc: 'Request a consultation for custom digital transformation of your specific operational needs.',
        emailLabel: 'Direct Email',
        callLabel: 'Operations Line',
        form: {
          name: 'Contact Name',
          email: 'info@digitecinternational.com',
          details: 'Scope of work...',
          btn: 'Send Brief'
        }
      }
    },
    publicMission: {
        hero: {
            badge: 'Strategic Mandate',
            title: 'Mission-Critical Digital Ecosystems',
            desc: 'To engineer resilient, mission-critical digital ecosystems that transform complex manual logic into precise, automated orchestration, safeguarding assets and empowering businesses of all scales.'
        },
        manifesto: {
            title: 'The Digital Manifesto',
            text: 'We believe that software must be as resilient as the operations it supports. From heavy industry to residential systems, we digitalize complex logic to ensure safety, efficiency, and empowerment for every user.'
        },
        values: {
            title: 'Operational Pillars',
            precision: {
                title: 'Compliance Logic',
                desc: 'Integrating directly with training matrices to automate the validation of critical requisitions.'
            },
            safety: {
                title: 'Automated Shield',
                desc: 'Real-time lockout systems driven by certification validity using RAC 01 protocols.'
            },
            integrity: {
                title: 'Data Sovereignty',
                desc: 'Providing a single immutable record of safety training and personnel health across global sites.'
            }
        },
        telemetry: {
          title: 'Our Mission',
          machineEcosystems: 'Intelligent Machine Ecosystems.',
          eomTitle: 'EOM Parameter Extraction',
          eomDesc: 'Real-time CAN-bus integration pulling critical temperature, pressure, and fuel data directly from the ECM.',
          fireTitle: 'Fire Suppression Systems',
          fireDesc: 'Automated health monitoring and trigger alerts for multi-million dollar asset protection.',
          lubTitle: 'Lincoln AutoLub Monitoring',
          lubDesc: 'Predictive lubrication tracking to prevent premature component failure and downtime.',
          daemonName: 'telemetry_daemon.v1',
          fetchEcm: '# Fetching ECM Parameters...'
        }
    },
    portfolio: {
      hero: {
        badge: 'Enterprise Ecosystem',
        title: 'Solutions Portfolio',
        desc: 'Robust, scalable, and mission-critical software designed for industry titans, dynamic startups, and bespoke residential operational needs.'
      },
      btnCaseStudy: 'View Specs',
      back: 'Return Home',
      labels: {
        flagship: 'Primary Standard',
        ready: 'Production Ready',
        webSolution: 'Corporate Digital',
        iotSolution: 'Advanced Telemetry'
      },
      items: {
        safeteq: {
          name: 'SAFETEQ Enterprise Risk Management',
          category: 'Critical Requisitions',
          desc: 'The "Critical Activity Requirements System" (SAFETEQ). Automates training workflows, digital passports, and turnstile access control for a safer workforce.'
        },
        minesite: {
          name: 'Minesite Vision',
          category: 'IoT Fleet Telemetry',
          desc: 'Advanced IoT monitoring for heavy mining fleets. Tracks Fire Suppression Systems, Lincoln AutoLub performance, and critical EOM parameters from the ECM.'
        },
        amtecheng: {
          name: 'Amtecheng Eng.',
          category: 'Engineering Portal',
          desc: 'A high-conversion corporate ecosystem for leading engineering firms. Focused on lead generation and industrial project showcasing.'
        },
        edudesk: {
          name: 'EduDesk',
          category: 'Industrial Training',
          desc: 'Digitizing the lifecycle of apprentice and operator training programs with gradebooks and attendance modules.'
        },
        h365: {
          name: 'H365 Site Health',
          category: 'Occupational Health',
          desc: 'Medical management for remote operations. Integrated ASO tracking and Electronic Medical Records.'
        },
        microfin: {
          name: 'MicroFin',
          category: 'Financial Control',
          desc: 'Automated lending and payroll orchestration for large-scale industrial contractor workforces.'
        },
        jactrac: {
          name: 'JacTrac Mini',
          category: 'Hydraulic Asset Tracking',
          desc: 'Specialized Industrial IoT for tracking hose installation lifecycles and predicting catastrophic component failure.'
        },
        swiftpos: {
          name: 'SwiftPOS Retail',
          category: 'Inventory Security',
          desc: 'Point of Sale integrated with CCTV and warehouse alarms for total operational visibility.'
        },
        smartres: {
          name: 'HomeNexus',
          category: 'Residential Automation',
          desc: 'Custom smart home ecosystems for modern residences, unifying security, lighting, and climate control into a single interface.'
        }
      },
      industries: {
        mining: 'Mining',
        oilGas: 'Oil & Gas',
        ports: 'Ports',
        manufacturing: 'Manufacturing',
        education: 'Academic',
        healthcare: 'Clinical',
        finance: 'Banking',
        retail: 'Retail',
        logistics: 'Supply Chain',
        residential: 'Residential',
        gov: 'Public Sector',
        clinical: 'Medical',
        banking: 'Fintech',
        industry: 'Heavy Industry',
        security: 'Physical Security',
        engineering: 'Engineering'
      },
      tags: {
        iot: 'IoT Enabled',
        saas: 'SaaS',
        security: 'High Security',
        offline: 'Offline Core',
        scalable: 'Auto-Scaling',
        secure: 'Zero-Trust',
        cloud: 'Multi-Region',
        smb: 'SME Ready',
        seo: 'SEO Engine',
        telemetry: 'Real-time Telemetry'
      },
      footer: {
        title: 'Custom Architecture Needed?',
        desc: "We build bespoke software for complex industrial logic. Contact our solutions desk.",
        btn: 'Request Consultation'
      }
    },
    caseStudies: {
      labels: {
        challenge: 'The Challenge',
        solution: 'The Solution',
        techFeatures: 'Technical Features',
        stack: 'Technology Stack',
        buildLaunch: 'Build & Launch',
        ready: 'Deploying Soon?',
        readyDesc: 'Our engineering units are ready to scale your next digital migration.',
        contact: 'Contact Us',
        previewPending: 'Staging Phase',
        sandboxAccess: 'Public Demo Access',
        stagingDesc: "This application is currently in internal staging for client validation.",
        standardsDesc: "This system follows Digitec' High standards for industrial-grade resilience."
      },
      safeteq: {
        subtitle: 'Critical Activity Requirements - SAFETEQ Enterprise Risk Management',
        challenge: 'Large-scale mining operations struggled with certification silos. Expired credentials created life-threatening liability at site gates, where 10,000+ employees required individual verification daily.',
        solution: 'SAFETEQ Enterprise Risk Management is a high-security compliance engine. It merges HR records with real-time training results to generate digital QR passports. If a requirement (RACS, ASO, or DL) is expired, access is blocked automatically.',
        features: [
          'Multi-tenant architecture supporting global mining leaders.',
          'Digital QR "Passports" for offline field verification.',
          'Boolean logic engine for complex compliance matrices.',
          'IoT Alcohol Control (breathalyzer) gate integration.',
          'Automated training renewal queues and SMS alerts.'
        ],
        impact: [
          { label: 'Gate Throughput', desc: 'Faster verification time.' },
          { label: 'Safety Adherence', desc: 'Compliance with SAFETEQ Enterprise Risk Management.' },
          { label: 'Admin Errors', desc: 'Reduction in manual entry.' }
        ]
      },
      minesite: {
          subtitle: 'Predictive IoT Telemetry',
          challenge: 'Unexpected equipment failure led to millions in lost productivity and safety risks during fire suppression failures.',
          solution: 'Minesite Vision integrates directly with fleet ECMs via MQTT to monitor parameters like engine load, lubrication levels, and fire system status in real-time.',
          features: [
            'Direct CAN-bus parameter extraction.',
            'MQTT real-time telemetry stream.',
            'Automated lubrication failure prediction.',
            'Integrated fire suppression health checks.'
          ],
          impact: [
            { label: 'Downtime', desc: 'Significant reduction in unplanned stops.' },
            { label: 'Safety Incidents', desc: 'Zero failures of protected assets.' },
            { label: 'Data Accuracy', desc: 'Real-time telemetry instead of manual logs.' }
          ]
      },
      amtecheng: {
          subtitle: 'Strategic Engineering Presence',
          challenge: 'Leading engineering firms lacked a unified platform to showcase complex multi-million dollar projects and manage high-intent lead generation.',
          solution: 'A high-conversion corporate ecosystem built with Next.js, featuring a headless CMS for rapid project updates and a custom lead scoring engine.',
          features: [
            'Headless CMS for heavy-asset management.',
            'High-performance SSR for technical SEO.',
            'Integrated lead nurturing funnel.',
            'Interactive 3D project walk-throughs.'
          ],
          impact: [
            { label: 'Lead Volume', desc: 'Substantial increase in monthly RFQs.' },
            { label: 'Page Load', desc: 'Sub-second performance for global project sites.' },
            { label: 'User Rating', desc: 'High scores on technical accessibility.' }
          ]
      },
      edudesk: {
        subtitle: 'Digital Campus Orchestration',
        challenge: 'Legacy paper-based grading in industrial training centers led to certification delays and lack of data transparency.',
        solution: 'EduDesk is a centralized training management system that automates gradebooks, attendance, and certification issuance.',
        features: ['Digital Gradebooks', 'Automated Attendance', 'NFC Integration', 'Real-time Progress Tracking'],
        impact: [
          { label: 'Efficiency', desc: 'Faster grading cycles.' },
          { label: 'Transparency', desc: 'Live access to student data.' },
          { label: 'Paperwork', desc: '90% reduction in physical logs.' }
        ]
      },
      h365: {
        subtitle: 'Occupational Health Platform',
        challenge: 'Remote mining sites lacked integrated medical history and real-time ASO tracking, increasing safety risks.',
        solution: 'H365 provides a comprehensive EMR and occupational health platform with integrated certification tracking.',
        features: ['Electronic Medical Records', 'ASO Auto-Alerts', 'Telemedicine Integration', 'Physical Fitness Tracking'],
        impact: [
          { label: 'Risk Reduction', desc: 'Fewer health-related incidents.' },
          { label: 'Compliance', desc: '100% ASO validity tracking.' },
          { label: 'Access', desc: 'Instant medical data for HSE.' }
        ]
      },
      microfin: {
          subtitle: 'Financial Orchestration for Contractors',
          challenge: 'Managing payroll and small loans for thousands of contractors was a manual, error-prone administrative burden.',
          solution: 'MicroFin automates the lending lifecycle and integrates directly with contractor attendance data.',
          features: ['Automated Lending', 'Payroll Integration', 'Risk Scoring', 'Mobile Disbursement'],
          impact: [
            { label: 'Admin Time', desc: 'Significant reduction in processing.' },
            { label: 'Accuracy', desc: 'Zero manual calculation errors.' },
            { label: 'Velocity', desc: 'Instant disbursement to workers.' }
          ]
      },
      jactrac: {
          subtitle: 'Industrial Asset Lifecycle Tracking',
          challenge: 'Critical hydraulic components failed without warning, causing massive downtime and safety hazards.',
          solution: 'JacTrac uses IoT and lifecycle analytics to predict component failure before it happens.',
          features: ['Component Serialization', 'IoT Failure Prediction', 'Maintenance Scheduling', 'Field Asset Audit'],
          impact: [
            { label: 'Downtime', desc: 'Drastic reduction in failure stops.' },
            { label: 'Safety', desc: 'Prevention of high-pressure bursts.' },
            { label: 'Cost', desc: 'Optimization of inventory spend.' }
          ]
      },
      swiftpos: {
          subtitle: 'High-Security Retail Ecosystem',
          challenge: 'Warehouse inventory leakage and retail fraud required an integrated security and transaction platform.',
          solution: 'SwiftPOS merges point-of-sale logic with CCTV and alarm telemetry for total site security.',
          features: ['Integrated CCTV', 'Real-time Inventory Sync', 'Fraud Detection AI', 'Multi-Store Management'],
          impact: [
            { label: 'Shrinkage', desc: 'Major reduction in inventory loss.' },
            { label: 'Security', desc: 'Instant alert on anomalous sales.' },
            { label: 'Control', desc: 'Unified view across all branches.' }
          ]
      },
      smartres: {
          subtitle: 'Custom Residential Automation',
          challenge: 'Modern luxury residences required a unified, secure system to manage complex lighting, climate, and high-end security protocols.',
          solution: 'HomeNexus provides a centralized, industrial-grade automation engine tailored for high-end residential operational needs.',
          features: ['Unified Security Hub', 'Adaptive Climate Logic', 'Biometric Access Control', 'Energy Consumption Analytics'],
          impact: [
            { label: 'Energy Efficiency', desc: 'Optimized consumption via smart logic.' },
            { label: 'Security Response', desc: 'Instant biometric validation.' },
            { label: 'User Experience', desc: 'Single-interface orchestration.' }
          ]
      }
    },
    launchpad: {
      title: 'Digital Command Hub',
      welcome: 'Welcome, {name}. Select an industrial workspace.',
      btnLaunch: 'Access Vault',
      btnExplore: 'View Specs',
      hub: 'Hub',
      switchApp: 'Switch Application',
      status: {
        active: 'Production Active',
        access: 'Standard Access',
        trial: 'Beta Testing',
        enterprise: 'Enterprise',
        pending: 'Pending Setup',
        locked: 'Locked'
      },
      footer: {
        title: 'Unified Ecosystem Support',
        desc: 'Digitec provides cross-app data synchronization for enterprise clients.',
        btn: 'Contact Solutions Architect'
      },
      globalStatus: 'Status: Operational'
    },
    nav: {
      dashboard: 'Dashboard',
      booking: 'Scheduling',
      records: 'Training Records',
      database: 'Master Matrix',
      reports: 'Analytics',
      enterpriseDashboard: 'Corporate View',
      alcohol: 'Alcohol IoT',
      requestCards: 'Issue Passports',
      communications: 'Comms Log',
      schedule: 'Calendar',
      siteGovernance: 'Policy Engine',
      trainerInput: 'Grade Entries',
      users: 'User Access',
      settings: 'System Config',
      logs: 'System Logs',
      manuals: 'Documentation',
      feedbackAdmin: 'Support Tickets',
      adminGuide: 'Admin Slides',
      presentation: 'Proposal',
      proposal: 'Full Spec'
    },
    auth: {
      login: 'Sign In',
      logout: 'Exit Hub',
      poweredBy: 'Powered by',
      loginPage: {
        title: 'Enter Client Hub',
        subtitle: 'Secure Access to Digitec Ecosystem',
        emailLabel: 'Email Address',
        passwordLabel: 'Password',
        placeholderEmail: 'admin@vulcan.com',
        placeholderPassword: '••••••••',
        error: 'Please enter valid credentials.'
      }
    },
    dashboard: {
      loading: 'Loading Dashboard Resources...',
      title: 'Operational Dashboard',
      subtitle: 'Site Overview',
      upcoming: {
        title: 'Upcoming Training',
        viewSchedule: 'Full Calendar',
        date: 'Date',
        session: 'Module',
        capacity: 'Seats',
        status: 'Status'
      },
      booked: {
        title: 'Staff Booked',
        tableEmployee: 'Staff Member',
        tableRac: 'Module',
        tableDate: 'Date',
        tableRoom: 'Venue',
        tableTrainer: 'Instructor',
        noData: 'No current bookings'
      },
      kpi: {
        adherence: 'Compliance',
        certifications: 'Active SAFETEQ Enterprise Risk Management',
        pending: 'In Training',
        expiring: 'Renewal Alert',
        scheduled: 'Sessions'
      },
      charts: {
        compliant: 'Authorized',
        nonCompliant: 'Blocked',
        complianceTitle: 'Adherence Matrix',
        complianceSubtitle: 'By SAFETEQ Enterprise Risk Management Protocol',
        accessTitle: 'Gate Status',
        missing: 'Deficiencies'
      },
      renewal: {
        title: 'Renewal Alerts',
        message: 'staff members requiring renewal within 30 days.',
        button: 'Initiate Renewals'
      },
      autoBooking: {
        title: 'Auto-Reservations',
        subPart1: 'Staff with high-risk expiry',
        subPart2: 'have been auto-reserved.'
      }
    },
    reports: {
      title: 'Reporting & Analytics',
      subtitle: 'Site performance and compliance trends',
      filters: {
        period: 'Report Period',
        startDate: 'Start Date',
        endDate: 'End Date',
        department: 'Department',
        racType: 'RAC Module'
      },
      periods: {
        weekly: 'Last 7 Days',
        monthly: 'Last 30 Days',
        ytd: 'Year to Date',
        custom: 'Custom Range'
      },
      printReport: 'Print Executive Report',
      stats: {
        totalTrained: 'Total Trained',
        passRate: 'Pass Rate',
        attendance: 'Attendance',
        noShows: 'No Shows'
      },
      charts: {
        performance: 'RAC Performance Trend',
        breakdownTitle: 'Success vs Failure by Module',
        distributionTitle: 'Compliance Distribution',
        distributionSubtitle: 'Breakdown of current site population',
        aiSubtitle: 'Strategic Insights'
      },
      executiveAnalysis: 'AI Executive Summary',
      analyzing: 'Analyzing...',
      generate: 'Generate Brief',
      leaderboard: 'Trainer Performance',
      trainerMetrics: {
        students: 'Students',
        avgTheory: 'Avg Theory'
      },
      noShowsTitle: 'No-Show Incident Log'
    },
    database: {
      title: 'Master Compliance Matrix',
      subtitle: 'Workforce Authorization Control',
      granted: 'Granted',
      blocked: 'Blocked',
      active: 'Active',
      accessStatus: 'Access Status',
      aso: 'ASO Expiry',
      opsMatrix: 'Ops Matrix',
      importSuccess: 'Import Successful',
      massQr: 'Bulk QR Download',
      zipping: 'Archiving...',
      wizard: 'Import Wizard',
      exportDb: 'Export Database',
      editModal: 'Edit Employee Profile',
      contactInfo: 'Contact Information',
      cell: 'Mobile Number',
      dlDetails: 'Driver License Details',
      number: 'Number',
      class: 'Class',
      mappingTitle: 'Source Data Mapping',
      mappingSubtitle: 'Connect your legacy CSV columns to SAFETEQ fields',
      preview: 'Data Preview',
      coreData: 'Core Identity',
      complianceTrain: 'Compliance & Training',
      sourceCol: 'Source Column',
      cardBack: 'Digital Passport Rear',
      confirmDeactivate: 'Deactivate Employee?',
      confirmDeactivateMsg: 'This will block access and mark the record as inactive.',
      confirmDelete: 'Delete Record?',
      confirmDeleteMsg: 'This will permanently remove the record from the database.',
      bulkQrMessage: 'Are you sure you want to generate {count} QR codes? This might take a moment.',
      processImport: 'Start Import Processing',
      importCsv: 'Import CSV',
      ops: {
          EMI_PTS: 'Emi-PTS',
          APR_ART: 'Apr-ART',
          DONO_AREA_PTS: 'Owner',
          EXEC: 'Exec'
      }
    },
    results: {
      searchPlaceholder: 'Search by Name or ID...',
      passport: 'My Passport',
      export: 'Export Results',
      table: {
        employee: 'Employee',
        session: 'Training',
        date: 'Date',
        trainer: 'Trainer',
        theory: 'Theory',
        status: 'Status',
        expiry: 'Expiry'
      }
    },
    trainer: {
      title: 'Grading Terminal',
      loggedInAs: 'Authenticated Instructor:',
      noSessions: 'No pending sessions found in your queue.',
      selectSession: 'Operational Workflow Selection',
      chooseSession: 'Select a training session to input grades',
      saveResults: 'Commit & Print Register'
    },
    cards: {
      title: 'Passport Studio',
      sending: 'Processing Request...',
      requestButton: 'Request Card Issuance',
      eligibility: {
          failedTitle: 'Eligibility Pending',
          failedMsg: 'You are currently not eligible for a Digital Passport. Ensure your ASO and RAC certifications are valid.',
          checkReqs: 'View Requirements'
      }
    },
    verification: {
      title: 'Asset Authorization',
      notFound: 'Digital Passport Not Found',
      verified: 'ACCESS GRANTED',
      notVerified: 'ACCESS BLOCKED',
      scanTime: 'Verification Time',
      asoStatus: 'Medical Validity',
      dlStatus: 'Driver Authorization'
    },
    communications: {
        title: 'Communication Hub',
        subtitle: 'Outbound Notification Logs',
        clear: 'Clear History',
        search: 'Search messages...',
        empty: 'No message history found.',
        select: 'Select a message to preview simulation',
        sms: 'SMS NOTIFICATION',
        gateway: 'Digital Gateway 04',
        to: 'To',
        automated: 'This is an automated system notification.'
    },
    notifications: {
        capacityTitle: 'Auto-Slotting Active',
        capacityMsg: 'Session reached capacity. Overflow students moved to'
    },
    feedback: {
        title: 'System Feedback',
        subtitle: 'Help us optimize the platform',
        typeLabel: 'Entry Type',
        types: {
            Bug: 'Technical Issue',
            Improvement: 'Feature Request',
            General: 'Platform Comment'
        },
        messageLabel: 'Detailed Description',
        msgPlaceholder: 'Describe your observation...',
        button: 'Submit Brief',
        adminTitle: 'User Experience Auditor',
        manage: 'Manage incoming user feedback and bug reports.',
        status: {
            New: 'Awaiting Review',
            InProgress: 'Investigating',
            Resolved: 'Optimized',
            Dismissed: 'Closed'
        },
        actionable: 'Actionable',
        noSelection: 'No Feedback Selected',
        selectPrompt: 'Select an entry from the list to view technical details.',
        workflow: 'Resolution Workflow',
        priority: 'Strategic Priority',
        markActionable: 'Mark as Actionable',
        markedActionable: 'Actionable Engaged',
        submittedBy: 'Reported by User',
        internalNotes: 'Engineering Analysis Notes',
        visibleAdmin: 'Confidential: Internal Engineering View Only',
        deleteRecord: 'Purge Record'
    },
    racDefs: {
        RAC01: 'RAC 01 - Working at Height',
        RAC02: 'RAC 02 - Vehicles and Mobile Equipment',
        RAC03: 'RAC 03 - Mobile Equipment Lockout',
        RAC04: 'RAC 04 - Machine Guarding',
        RAC05: 'RAC 05 - Confined Space',
        RAC06: 'RAC 06 - Lifting Operations',
        RAC07: 'RAC 07 - Ground Stability',
        RAC08: 'RAC 08 - Electricity',
        RAC09: 'RAC 09 - Explosives',
        RAC10: 'RAC 10 - Liquid Metal',
        RAC11: 'RAC 11 - Mine Traffic',
        PTS: 'PTS - Permissão de Trabalho Seguro',
        ART: 'ART - Análise de Risco da Tarefa',
        LIB_OPS: 'LIB-OPS - Liberação Operacional',
        LIB_MOV: 'LIB-MOV - Liberação de Movimentação'
    },
    advisor: {
      button: 'Safety Advisor',
      title: 'Safety Advisor',
      sender: 'SAFETEQ Enterprise Risk Management AI',
      emptyState: 'Ask me about safety protocols.',
      placeholder: 'Type your query...'
    },
    alcohol: {
      dashboard: {
        live: 'Live Stream Active',
        backToLive: 'Back to Monitoring',
        specs: 'Technical Specs',
        title: 'Alcohol Control System',
        subtitle: 'IoT Integration & Live Gate Monitoring',
        kpi: {
          total: 'Total Tests',
          violations: 'Violations',
          health: 'Device Status'
        },
        online: 'Online',
        hourlyTrend: 'Hourly Test Volume',
        dailyTrend: 'Daily Test Volume',
        deviceLoad: 'Device Traffic Distribution',
        complianceRatio: 'Compliance vs Violations',
        liveStream: 'Real-time Event Stream',
        mqtt: 'MQTT Protocol',
        deviceHealth: 'Network Integrity',
        alert: {
          title: 'VIOLATION DETECTED',
          desc: 'Immediate Lockout Initiated',
          measured: 'Measured BAC'
        },
        actions: 'Automated Response Log',
        actionLog: {
          locked: 'Credential Locked in Master Matrix',
          generating: 'Generating Incident Report...',
          logged: 'Incident Logged to Audit Trail',
          contacting: 'Contacting HSE Supervisor...',
          sent: 'Alert Sent via SMS/Email'
        },
        close: 'Acknowledge Alert'
      },
      protocol: {
        title: 'Safety Interlock Protocol',
        positiveTitle: 'Positive BAC Detection',
        positiveDesc: 'The system immediately invalidates the "Access Granted" status for the next 24 hours. The gate turnstile remains locked.',
        resetTitle: 'Manual Override',
        resetDesc: 'Only HSE Managers can reset a blocked status after a formal interview and second manual test.'
      },
      features: {
        title: 'Technical Capabilities',
        iotTitle: 'IoT Gateway',
        iotDesc: 'Low-latency connectivity via ESP32/PLC edge controllers.',
        accessTitle: 'Instant Lockout',
        accessDesc: 'Direct integration with turnstile logic and HR credentials.',
        complianceTitle: 'Audit Trail',
        complianceDesc: 'Tamper-proof logs of every entry attempt with BAC data.'
      }
    },
    enterprise: {
      systemTitle: 'Global Command Hub',
      systemSubtitle: 'Multi-Tenant Management',
      title: 'Enterprise View',
      subtitle: 'Group Performance',
      siteName: 'Site',
      globalHealth: 'Aggregate Compliance',
      totalWorkforce: 'Total Staff',
      topPerformer: 'Top Site',
      needsAttention: 'Risk Area',
      noData: 'No data available',
      tenantMatrix: 'Portfolio Health',
      systemView: 'Master View',
      siteComparison: 'Site Benchmarking',
      riskHeatmap: 'Risk Mapping',
      selectPrompt: 'Adjust filters to view data',
      aiAuditor: 'Platform Auditor',
      aiDirector: 'Safety Director AI',
      systemIntelligence: 'Platform Insights',
      companyIntelligence: 'Enterprise Insights',
      aiPrompt: 'Generating strategic brief...',
      aiPromptSystem: 'Analyzing portfolio risks.',
      aiPromptEnterprise: 'Analyzing local trends.',
      bottlenecks: 'Operational Friction',
      failure: 'Failure Rate'
    },
    schedule: {
      title: 'Training Schedule',
      subtitle: 'Resource and Venue Coordination',
      newSession: 'New Session',
      modal: {
        title: 'Schedule Configuration',
        racType: 'Certification Module',
        date: 'Session Date',
        startTime: 'Start Time',
        location: 'Venue/Room',
        capacity: 'Capacity',
        instructor: 'Certified Instructor',
        language: 'Session Language',
        portuguese: 'Portuguese',
        english: 'English',
        saveSession: 'Commit to Schedule'
      }
    },
    settings: {
      title: 'Global Configuration',
      globalConfig: 'System Master Policy',
      localConfig: 'Site Specific Preferences',
      saveAll: 'Apply All Changes',
      saving: 'Synchronizing...',
      rooms: {
        title: 'Venues & Physical Resources',
        name: 'Room Name',
        capacity: 'Seat Capacity'
      },
      trainers: {
        title: 'Authenticated Instructors',
        new: 'Register New Trainer'
      },
      racs: {
        title: 'Certification Logic Matrix'
      },
      integrationPage: {
        title: 'External Data Bridges',
        sourceA: 'Corporate ERP (SuccessFactors)',
        sourceB: 'Contractor DB (Célula)',
        waiting: 'Middleware Standby',
        processing: 'Data Normalization Active',
        syncNow: 'Trigger Cloud Sync'
      }
    },
    logs: {
        title: 'System Event Logs',
        levels: {
            all: 'All Severity',
            info: 'Informational',
            warn: 'Warnings',
            error: 'Critical Errors',
            audit: 'Security Audits'
        },
        table: {
            level: 'Severity',
            timestamp: 'System Time',
            user: 'Originator',
            message: 'Event Description'
        }
    },
    users: {
        title: 'Credential Management',
        subtitle: 'RBAC (Role Based Access Control)',
        addUser: 'Add Participant',
        table: {
            user: 'Authorized User',
            role: 'Permission Set',
            status: 'Operational Status',
            actions: 'Auth Control'
        },
        modal: {
            title: 'Provision Access',
            name: 'Legal Name',
            email: 'Corporate Email',
            createUser: 'Grant Permissions'
        }
    },
    booking: {
        title: 'Session Reservation',
        selfServiceTitle: 'Self-Enrollment Portal',
        selfServiceDesc: 'Book your mandatory safety training certifications.',
        secureMode: 'Secure Administrative Booking active.',
        manageSchedule: 'Resource Config',
        success: 'Reservations Locked Successfully',
        selectSession: 'Operational Slot',
        chooseSession: 'Select active session',
        dlRequired: 'RAC 02 requires a valid Driver License verification.',
        addRow: 'Add Entry',
        submitBooking: 'Commit Reservations'
    },
    manuals: {
        title: 'Operational Guidelines',
        subtitle: 'System Documentation & Standard Procedures',
        sysAdmin: {
            title: 'SaaS Administrator Guide',
            subtitle: 'Global Tenant & Logic Management',
            configTitle: '1. Resource Provisioning',
            configDesc: 'Before scheduling, ensure all venues and instructors are verified.',
            rooms: 'Map high-capacity rooms to physical venues.',
            trainers: 'Assign certification permissions to trainers.',
            racs: 'Configure global validity months (Standard: 24mo).',
            dbTitle: '2. Data Sovereignty',
            dbDesc: 'The Database uses Unified Logic for Access Control.',
            restrictionWarning: 'CRITICAL: Deactivating a user removes them from gate access immediately.',
            csv: 'Import Wizard supports automated header mapping from HR sources.',
            active: 'Toggle the "Active" column to control physical site access.'
        },
        racAdmin: {
            title: 'Site Administrator Manual',
            subtitle: 'Training & Capacity Management',
            schedTitle: 'Session Coordination',
            schedDesc: 'Schedule training slots to meet department demand.',
            create: 'Create slots with valid Room IDs.',
            lang: 'Select language based on workforce demographic.',
            autoTitle: 'Auto-Booking Protocol',
            autoDesc: 'The system auto-reserves seats for users expiring in < 7 days.',
            approve: 'Admins must manually approve overflow auto-bookings.',
            renewTitle: 'Renewals',
            renewDesc: 'Use the Dashboard Alert widget to batch-book expiring staff.'
        },
        racTrainer: {
            title: 'Instructor Field Guide',
            subtitle: 'Result Entry & Validation',
            inputTitle: 'Grading Terminal',
            inputDesc: 'Input real-time results for your assigned sessions.',
            grading: 'Attendance + Score (70% min) = Pass.',
            rac02: 'RAC 02 RULE: Driver License MUST be visually verified to pass.',
            save: 'Saving results triggers an automated print of the physical register.'
        },
        deptAdmin: {
            title: 'Manager Operations Manual',
            subtitle: 'Department Performance & Compliance',
            reqTitle: 'Staff Requirements',
            reqDesc: 'Verify which RACs your team needs based on task risk.',
            search: 'Search specific matriculas for real-time status.',
            print: 'Export CSV reports for weekly safety meetings.',
            repTitle: 'Strategic Reporting',
            repDesc: 'Generate and analyze department-level safety performance reports.'
        },
        user: {
            title: 'End-User Instructions',
            subtitle: 'Self-Service & Verification',
            statusTitle: 'Access Passport',
            statusDesc: 'Your "Access Status" is calculated from your valid certifications.',
            filterAlert: 'Ensure your ASO (Medical) is valid to prevent site lockout.',
            green: 'Granted: All reqs met.',
            red: 'Blocked: Certification expired.',
            qr: 'Field verification is done via your Digital QR Passport.'
        }
    },
    adminManual: {
        title: 'Strategic Command Guide',
        subtitle: 'Enterprise Safety Orchestration Protocols',
        slides: {
            intro: 'Executive Overview',
            logic: 'The Compliance Engine',
            dashboard: 'Command Centers',
            workflows: 'Standard Operating Procedures',
            advanced: 'Advanced Protocols',
            robotics: 'Robotic Resilience',
            troubleshoot: 'Tactical Support',
            architecture: 'System Blueprints'
        },
        content: {
            confidential: 'Authorized Access Only',
            production: 'Production Stable Environment',
            logic: {
                title: 'Logic Matrix 4.0',
                desc: 'How binary compliance is calculated.',
                active: 'User Context',
                aso: 'Medical Validity',
                racs: 'Skill Validation',
                result: 'GATE ACCESS'
            },
            dashboard: {
                operational: {
                    title: 'Field Level Control',
                    kpi: 'Live KPI Tracking',
                    renewal: 'Expiry Alerts',
                    auto: 'Overflow Control'
                },
                enterprise: {
                    title: 'Corporate Oversight',
                    global: 'Multi-Site Metrics',
                    risk: 'Departmental Heatmaps',
                    ai: 'AI Strategy Reports'
                }
            },
            workflows: {
                a: { title: 'Onboarding', steps: ['Database Import', 'Matrix Mapping', 'ASO Check'] },
                b: { title: 'Planning', steps: ['Schedule Slot', 'Check Venue', 'Assign Trainer'] },
                c: { title: 'Execution', steps: ['Attendance', 'Score Entry', 'Auto-Print'] },
                d: { title: 'Issuance', steps: ['Compliance Pass', 'QR Gen', 'Passport Issue'] }
            },
            advanced: {
                gov: { title: 'Site Governance', desc: 'Push global safety policies to specific remote sites.' },
                alcohol: { title: 'IoT Integration', desc: 'MQTT linked breathalyzers trigger immediate lockout.' }
            },
            robotics: {
                title: 'Robotic Self-Healing Protocols',
                subtitle: 'Automated resilience and diagnostic systems.',
                crash: {
                    title: 'Auto-Recovery Engine',
                    desc: 'The system utilizes a React Error Boundary wrapper. If a critical runtime error occurs (e.g., memory leak or unhandled exception), the "RoboTech" protocol intercepts the crash, displays a diagnostic visualization to the user, and attempts a soft-reload of the state to prevent a hard browser crash.'
                },
                diagnostics: {
                    title: 'Active Diagnostics',
                    desc: 'System Admins can manually trigger the "RoboTech Healer Protocol" from the Settings page. This runs a background thread that scans for database latency, optimizes memory shards, and verifies API integrity without interrupting active users.'
                }
            },
            architecture: {
                ui: '[ USER INTERFACE ]',
                gate: '[ PERMISSION GATE ]',
                gateDesc: 'Checks User Role (System Admin vs User)',
                logic: '[ LOGIC ENGINE ]',
                checkCap: 'Check Capacity',
                checkMatrix: 'Check Matrix Lock',
                checkDl: 'Check DL Validity',
                dbState: '[ DATABASE STATE ]',
                updateRecord: 'Updates Booking / Employee Record',
                automation: '[ AUTOMATION ]',
                emailTrig: '📧 Email/SMS Trigger',
                printTrig: '🖨️ Auto-Print Register',
                aiTrig: '🤖 AI Analysis Update'
            },
            troubleshoot: {
                denied: { issue: 'Access Denied', solution: 'Verify ASO date in DB.' },
                booking: { issue: 'Booking Locked', solution: 'Check requirement matrix.' },
                failed: { issue: 'Auto-Fail', solution: 'Check Driver License date.' },
                qr: { issue: 'QR Not Found', solution: 'Ensure ID case-sensitivity.' },
                speed: { issue: 'Lag', solution: 'Wait for Cloud Sync log.' }
            }
        }
    },
    proposal: {
        digitalTrans: 'Digital Transformation Proposal',
        aboutMe: {
            title: 'Solutions Architect',
            name: 'Pita Domingos',
            preferred: 'RoboTech Architect',
            bio: 'Expert in designing high-fidelity software ecosystems for industrial giants. Specialized in automating complex logic to safeguard human life.',
            cert: 'Senior System Architect',
            role: 'Lead Project Engineer'
        },
        execSummary: {
            title: 'Executive Summary',
            text: 'Digitec proposes a unified "Critical Activity Requirements System" (SAFETEQ) to replace fragmented legacy datasets with a rugged, real-time safety orchestration platform.',
            quote: 'Transforming industrial uncertainty into binary precision.'
        },
        objectives: {
            title: 'Strategic Objectives',
            problemTitle: 'Current Friction',
            problemText: 'Manual certification tracking creates life-threatening delays and administrative liability.',
            solutionTitle: 'Digital Solution',
            goals: ['Automate Gate Compliance', 'Unify Multi-Tenant Data', 'Digital QR Passport Issuance', 'Real-time AI Risk Analysis']
        },
        organogram: {
            title: 'Project Structure',
            tech1: 'Logic Engineer',
            tech2: 'Infrastructure Lead'
        },
        timeline: {
            title: 'Deployment Roadmap',
            phase1: 'Architecture Design', phase1desc: 'Logic mapping & DB schema.',
            phase2: 'Middleware Sync', phase2desc: 'Legacy system connectivity.',
            phase3: 'Module Buildout', phase3desc: 'UI & Logic implementation.',
            phase4: 'UAT Testing', phase4desc: 'User validation & Hardening.',
            phase5: 'Site Handover', phase5desc: 'Training & Production go-live.'
        },
        techStack: {
            title: 'Technology Ecosystem',
            frontendTitle: 'Web/Mobile', frontend: 'React • TypeScript • Tailwind',
            backendTitle: 'Orchestration', backend: 'Node.js • Cloud Functions',
            databaseTitle: 'Persistence', database: 'PostgreSQL • InfluxDB (IoT)',
            securityTitle: 'Encryption', security: 'OAuth2 • AES-256'
        },
        financials: {
            title: 'Strategic Investment',
            items: [
                { name: 'Initial Environment Provisioning', cost: '$1,500.00', type: 'Setup' },
                { name: 'Core SaaS License (Annual)', cost: '$12,000.00', type: 'Licensing' },
                { name: 'Monthly Cloud Infrastructure', cost: '$450.00', type: 'Hosting' },
                { name: 'Personnel Training & Documentation', cost: '$3,200.00', type: 'Services' },
                { name: 'Maintenance & Support (Monthly)', cost: '$800.00', type: 'Retainer' }
            ]
        },
        roadmap: {
            title: 'Enterprise Scalability',
            auth: 'Identity SSO', authDesc: 'Azure AD Integration.',
            db: 'Global Cluster', dbDesc: 'Multi-region redundancy.',
            email: 'Automated SMTP', emailDesc: 'Transactional reporting.',
            hosting: 'Hybrid Cloud', hostingDesc: 'On-prem + Azure capability.'
        },
        aiFeatures: {
            title: 'Gemini Intelligence',
            chatbot: '24/7 Safety Advisor Chatbot.',
            reporting: 'Automated Executive Summaries.'
        },
        futureUpdates: {
            title: 'Future Capabilities',
            moduleA: 'Module A - Advanced ERP Sync',
            moduleB: 'Module B - IoT Hardware Gateway'
        },
        enhancedCaps: {
            title: 'Enterprise Resilience',
            mobileVerify: { desc: 'Field-ready QR validation via mobile app.' },
            autoBooking: { desc: 'Zero-downtime training renewals.' },
            massData: { desc: 'Import 10k+ records in seconds.' }
        },
        conclusion: {
            title: 'Zero-Harm via Code',
            text: 'Technology is the ultimate safeguard. Let us architect your safety future.'
        },
        thankYou: {
            title: 'Gratitude',
            contact: 'info@digitecinternational.com',
            phone: '+258 84 547 9481'
        }
    },
    ai: {
        systemPromptAdvice: 'You are a Safety Advisor for SAFETEQ. Advise on {rac} in {language}.',
        systemPromptReport: 'You are a Safety Director. Summarize the safety stats in {language}.'
    }
  },
  pt: {
    common: {
      vulcan: 'VULCAN',
      all: 'Todos',
      search: 'Pesquisar...',
      rowsPerPage: 'Linhas por página:',
      page: 'Página',
      of: 'de',
      name: 'Nome',
      id: 'ID',
      company: 'Empresa',
      department: 'Departamento',
      jobTitle: 'Cargo',
      role: 'Função',
      actions: 'Ações',
      cancel: 'Cancelar',
      save: 'Salvar',
      delete: 'Excluir',
      edit: 'Editar',
      view: 'Ver',
      print: 'Imprimir',
      download: 'Baixar',
      import: 'Importar',
      template: 'Modelo',
      yes: 'Sim',
      no: 'Não',
      date: 'Data',
      time: 'Hora',
      status: 'Status',
      recordsFound: 'registros encontrados',
      completed: 'Concluído',
      timeLeft: 'restante',
      passed: 'Aprovado',
      failed: 'Reprovado',
      pending: 'Pendente',
      complianceRate: 'Taxa de Conformidade',
      testsProcessed: 'Testes Processados',
      stats: {
        totalRecords: 'Total de Registros',
        passRate: 'Taxa de Aprovação',
        passed: 'Aprovados',
        failed: 'Reprovados',
        totalUsers: 'Total de Usuários',
        active: 'Ativos',
        admins: 'Admins'
      },
      operationalMatrix: 'Matriz Operacional',
      owner: 'Proprietário',
      sending: 'Enviando...',
      smsBlast: 'Envio de SMS em Massa',
      simulateRole: 'Simular Função',
      superuser: 'Acesso Superusuário',
      restricted: 'Acesso Restrito',
      enterpriseView: 'Vista Empresarial',
      exitFullScreen: 'Sair de Ecrã Inteiro',
      fullScreen: 'Ecrã Inteiro',
      notifications: 'Notificações',
      noNotifications: 'Sem notificações',
      clearAll: 'Limpar Tudo',
      legal: 'Legal',
      rights: 'Todos os direitos reservados.'
    },
    publicHome: {
      nav: {
        portfolio: 'Portfólio',
        about: 'Sobre',
        vision: 'Visão',
        mission: 'Missão',
        partners: 'Parceiros',
        contact: 'Contato',
        enterHub: 'Central do Cliente'
      },
      hero: {
        badge: 'Inovando o Amanhã',
        title1: 'Arquitetando',
        title2: 'Futuro',
        title3: 'Empresarial',
        desc: 'A Digitec entrega um ecossistema de software unificado para gigantes da indústria, startups dinâmicas e projetos residenciais. Da segurança industrial a orquestração operacional personalizada.',
        btnExplore: 'Explorar Ecossistema',
        btnEnter: 'Central do Cliente'
      },
      about: {
        title: 'Engenharia de Software Personalizada',
        subtitle: 'Projetamos ecossistemas digitais sob medida para indústrias globais, startups inovadoras e desenvolvimentos residenciais modernos. Transformamos necessidades operacionais complexas em software de missão crítica.',
        cards: {
          safeteq: 'SAFETEQ Enterprise Risk Management - O padrão para Requisitos de Atividades Críticas.',
          edudesk: 'Gestão de campus para centros de educação industrial.',
          h365: 'Sistemas de saúde para mineração focados em conformidade.',
          microfin: 'Orquestração financeira para cadeias industriais.',
          websites: 'Portais de precisão para startups, residências e empresas individuais.'
        }
      },
      vision: {
        title: 'Nossa Visão',
        headline: 'Ecossistemas Digitais Inteligentes.',
        desc: 'Estamos a colmatar a lacuna entre as operações físicas e a orquestração digital inteligente através de software de alta fidelidade adaptado para indústria, retalho e residência.',
        mission: 'Nossa Missão Estratégica',
        missionHeadline: 'Transformando Complexidade em Precisão',
        goals: [
          'Unificar dados legados fragmentados em inteligência operacional acionável.',
          'Desenvolver software personalizado para necessidades específicas de startups e residências.',
          'Entregar soluções tecnológicas de classe mundial criadas em África para o mundo.'
        ]
      },
      partners: {
        title: 'Parceiros Industriais Globais',
        stats: {
          records: 'Mais de 12.000+ Credenciais de Segurança Gerenciadas',
          reliability: '99,99% de Disponibilidade Operacional'
        }
      },
      contact: {
        title: 'Arquitetar o seu processo manual para um processo totalmente digitalizado',
        desc: 'Solicite uma consulta para transformação digital personalizada das suas necessidades operacionais específicas.',
        emailLabel: 'E-mail Direto',
        callLabel: 'Linha de Operações',
        form: {
          name: 'Nome do Contato',
          email: 'info@digitecinternational.com',
          details: 'Escopo do trabalho...',
          btn: 'Enviar Resumo'
        }
      }
    },
    publicMission: {
        hero: {
            badge: 'Mandato Estratégico',
            title: 'Ecossistemas Digitais de Missão Crítica',
            desc: 'Projetar ecossistemas digitais resilientes e de missão crítica que transformam a lógica manual complexa em orquestração precisa e automatizada, protegendo ativos e capacitando negócios de todas as escalas.'
        },
        manifesto: {
            title: 'O Manifesto Digital',
            text: 'Acreditamos que o software deve ser tão resiliente quanto as operações que suporta. Da indústria pesada aos sistemas residenciais, digitalizamos lógicas complexas para garantir segurança, eficiência e capacitação para cada utilizador.'
        },
        values: {
            title: 'Pilares Operacionais',
            precision: {
                title: 'Lógica de Conformidade',
                desc: 'Integração direta com matrizes de treinamento para automatizar a validação de requisições críticas.'
            },
            safety: {
                title: 'Escudo Automatizado',
                desc: 'Sistemas de bloqueio em tempo real acionados pela validade de certificações usando protocolos RAC 01.'
            },
            integrity: {
                title: 'Soberania de Dados',
                desc: 'Fornecendo um registro único e imutável de treinamento de segurança e saúde em sites globais.'
            }
        },
        telemetry: {
          title: 'Nossa Missão',
          machineEcosystems: 'Ecossistemas de Máquinas Inteligentes.',
          eomTitle: 'Extração de Parâmetros EOM',
          eomDesc: 'Integração CAN-bus em tempo real extraindo dados críticos de temperatura, pressão e combustível diretamente do ECM.',
          fireTitle: 'Sistemas de Supressão de Incêndio',
          fireDesc: 'Monitoramento automatizado de integridade e alertas de gatilho para proteção de ativos multimilionários.',
          lubTitle: 'Monitoramento Lincoln AutoLub',
          lubDesc: 'Acompanhamento preditivo de lubrificação para evitar falhas prematuras de componentes e tempo de inatividade.',
          daemonName: 'telemetry_daemon.v1',
          fetchEcm: '# Extraindo Parâmetros ECM...'
        }
    },
    portfolio: {
      hero: {
        badge: 'Ecossistema Empresarial',
        title: 'Portfólio de Soluções',
        desc: 'Software robusto, escalável e de missão crítica, concebido para as exigências únicas da indústria, startups e necessidades residenciais.'
      },
      btnCaseStudy: 'Ver Especificações',
      back: 'Voltar ao Início',
      labels: {
        flagship: 'Padrão Primário',
        ready: 'Pronto para Produção',
        webSolution: 'Digital Corporativo',
        iotSolution: 'Telemetria Avançada'
      },
      items: {
        safeteq: {
          name: 'SAFETEQ Enterprise Risk Management',
          category: 'Requisições Críticas',
          desc: 'O "Sistema de Requisitos de Atividades Críticas" (SAFETEQ). Automatiza fluxos de trabalho de treinamento, passaportes digitais e controle de acesso para uma força de trabalho mais segura.'
        },
        minesite: {
          name: 'Minesite Vision',
          category: 'Telemetria de Frota IoT',
          desc: 'Monitoramento IoT avançado para frotas de mineração pesada. Rastreia Sistemas de Supressão de Incêndio, desempenho do Lincoln AutoLub e parâmetros críticos EOM do ECM.'
        },
        amtecheng: {
          name: 'Amtecheng Eng.',
          category: 'Portal de Engenharia',
          desc: 'Um ecossistema corporativo de alta conversão para empresas líderes de engenharia. Focado na geração de leads e na exibição de projetos industriais.'
        },
        edudesk: {
          name: 'EduDesk',
          category: 'Treinamento Industrial',
          desc: 'Digitalizando o ciclo de vida dos programas de treinamento de aprendizes e operadores com livros de notas e módulos de assiduidade.'
        },
        h365: {
          name: 'H365 Site Health',
          category: 'Saúde Ocupacional',
          desc: 'Gestão médica para operações remotas. Rastreamento ASO integrado e Registos Médicos Eletrónicos.'
        },
        microfin: {
          name: 'MicroFin',
          category: 'Controlo Financeiro',
          desc: 'Orquestração automatizada de empréstimos e folha de pagamento para forças de trabalho de empreiteiras industriais de grande escala.'
        },
        jactrac: {
          name: 'JacTrac Mini',
          category: 'Rastreamento de Ativos Hidráulicos',
          desc: 'IoT industrial especializado para rastrear ciclos de vida de instalação de mangueiras e prever falhas catastróficas de componentes.'
        },
        swiftpos: {
          name: 'SwiftPOS Retail',
          category: 'Segurança de Inventário',
          desc: 'Ponto de Venda integrado com CCTV e alarmes de armazém para visibilidade operacional total.'
        },
        smartres: {
          name: 'HomeNexus',
          category: 'Automação Residencial',
          desc: 'Ecossistemas de casa inteligente personalizados para residências modernas, unificando segurança, iluminação e climatização numa única interface.'
        }
      },
      industries: {
        mining: 'Mineração',
        oilGas: 'Petróleo e Gás',
        ports: 'Portos',
        manufacturing: 'Indústria',
        education: 'Académico',
        healthcare: 'Clínico',
        finance: 'Banca',
        retail: 'Retalho',
        logistics: 'Cadeia de Suprimentos',
        residential: 'Residencial',
        gov: 'Sector Público',
        clinical: 'Médico',
        banking: 'Fintech',
        industry: 'Indústria Pesada',
        security: 'Segurança Física',
        engineering: 'Engenharia'
      },
      tags: {
        iot: 'Habilitado para IoT',
        saas: 'SaaS',
        security: 'Alta Segurança',
        offline: 'Núcleo Offline',
        scalable: 'Auto-Escalável',
        secure: 'Zero-Trust',
        cloud: 'Multi-Região',
        smb: 'Pronto para PME',
        seo: 'Motor SEO',
        telemetry: 'Telemetria em Tempo Real'
      },
      footer: {
        title: 'Necessita de Arquitetura Personalizada?',
        desc: "Construímos software por medida para lógica industrial complexa. Contacte o nosso balcão de soluções.",
        btn: 'Solicitar Consulta'
      }
    },
    caseStudies: {
      labels: {
        challenge: 'O Desafio',
        solution: 'A Solução',
        techFeatures: 'Características Técnicas',
        stack: 'Stack Tecnológica',
        buildLaunch: 'Construção e Lançamento',
        ready: 'Implementação em breve?',
        readyDesc: 'As nossas unidades de engenharia estão prontas para escalar a sua próxima migração digital.',
        contact: 'Contacte-nos',
        previewPending: 'Fase de Staging',
        sandboxAccess: 'Acesso a Demo Pública',
        stagingDesc: "Esta aplicação encontra-se atualmente em fase de staging interna para validação do cliente.",
        standardsDesc: "Este sistema segue os elevados padrões da Digitec para resiliência de nível industrial."
      },
      safeteq: {
        subtitle: 'Requisitos de Atividades Críticas - SAFETEQ Enterprise Risk Management',
        challenge: 'As operações mineiras de grande escala debatiam-se com silos de certificação. As credenciais expiradas criavam responsabilidades de risco de vida nos portões do local, onde mais de 10.000 funcionários necessitavam de verificação individual diária.',
        solution: 'O SAFETEQ Enterprise Risk Management é um motor de conformidade de alta segurança. Funde registos de RH com resultados de formação em tempo real para gerar passaportes QR digitais. Se um requisito (RACS, ASO ou DL) expirar, o acesso é bloqueado automaticamente.',
        features: [
          'Arquitetura multi-tenant que suporta líderes globais de mineração.',
          ' "Passaportes" QR digitais para verificação de campo offline.',
          'Motor de lógica booleana para matrizes de conformidade complexas.',
          'Integração de portão com Controlo de Álcool IoT (etiloteste).',
          'Filas automatizadas de renovação de formação e alertas SMS.'
        ],
        impact: [
          { label: 'Fluxo no Portão', desc: 'Tempo de verificação mais rápido.' },
          { label: 'Aderência à Segurança', desc: 'Conformidade com o SAFETEQ Enterprise Risk Management.' },
          { label: 'Erros Administrativos', desc: 'Redução na introdução manual.' }
        ]
      },
      minesite: {
          subtitle: 'Telemetria IoT Preditiva',
          challenge: 'Falhas inesperadas nos equipamentos levaram a milhões em perda de produtividade e riscos de segurança durante falhas na supressão de incêndios.',
          solution: 'O Minesite Vision integra-se diretamente com os ECMs da frota via MQTT para monitorizar parâmetros como carga do motor, níveis de lubrificação e estado do sistema de incêndio em tempo real.',
          features: [
            'Extração direta de parâmetros via CAN-bus.',
            'Fluxo de telemetria em tempo real MQTT.',
            'Previsão automatizada de falhas de lubrificação.',
            'Verificações integradas de integridade da supressão de incêndios.'
          ],
          impact: [
            { label: 'Tempo de Inatividade', desc: 'Redução significativa em paragens não planeadas.' },
            { label: 'Incidentes de Segurança', desc: 'Zero falhas de ativos protegidos.' },
            { label: 'Precisão de Dados', desc: 'Telemetria em tempo real em vez de registos manuais.' }
          ]
      },
      amtecheng: {
          subtitle: 'Presença Estratégica de Engenharia',
          challenge: 'As principais empresas de engenharia careciam de uma plataforma unificada para exibir projetos complexos de vários milhões de dólares e gerir a geração de leads de alta intenção.',
          solution: 'Um ecossistema corporativo de alta conversão construído com Next.js, apresentando um CMS headless para atualizações rápidas de projetos e um motor de pontuação de leads personalizado.',
          features: [
            'CMS Headless para gestão de ativos pesados.',
            'SSR de alto desempenho para SEO técnico.',
            'Funil de nutrição de leads integrado.',
            'Visitas interativas em 3D aos projetos.'
          ],
          impact: [
            { label: 'Volume de Leads', desc: 'Aumento substancial nos RFQs mensais.' },
            { label: 'Carga de Página', desc: 'Desempenho inferior a um segundo para sites de projetos globais.' },
            { label: 'Avaliação de Utilizador', desc: 'Pontuações elevadas em acessibilidade técnica.' }
          ]
      },
      edudesk: {
        subtitle: 'Orquestração de Campus Digital',
        challenge: 'A classificação manual em papel nos centros de formação industrial levava a atrasos na certificação e falta de transparência nos dados.',
        solution: 'O EduDesk é um sistema de gestão de formação centralizado que automatiza cadernetas, assiduidade e emissão de certificados.',
        features: ['Cadernetas Digitais', 'Assiduidade Automatizada', 'Integração NFC', 'Acompanhamento de Progresso em Tempo Real'],
        impact: [
          { label: 'Eficiência', desc: 'Ciclos de classificação mais rápidos.' },
          { label: 'Transparência', desc: 'Acesso em tempo real aos dados dos alunos.' },
          { label: 'Papelada', desc: 'redução de 90% nos registos físicos.' }
        ]
      },
      h365: {
        subtitle: 'Plataforma de Saúde Ocupacional',
        challenge: 'Os locais de mineração remotos careciam de histórico médico integrado e acompanhamento de ASO em tempo real, aumentando os riscos de segurança.',
        solution: 'O H365 fornece uma plataforma completa de EMR e saúde ocupacional com acompanhamento integrado de certificações.',
        features: ['Registos Médicos Eletrónicos', 'Auto-Alertas ASO', 'Integração de Telemedicina', 'Acompanhamento de Aptidão Física'],
        impact: [
          { label: 'Redução de Risco', desc: 'Menos incidentes relacionados com a saúde.' },
          { label: 'Conformidade', desc: '100% de acompanhamento da validade de ASO.' },
          { label: 'Acesso', desc: 'Dados médicos instantâneos para HSE.' }
        ]
      },
      microfin: {
          subtitle: 'Orquestração Financeira para Empreiteiros',
          challenge: 'Gerir a folha de pagamento e pequenos empréstimos para milhares de empreiteiros era um fardo administrativo manual e propenso a erros.',
          solution: 'O MicroFin automatiza o ciclo de vida dos empréstimos e integra-se diretamente com os dados de assiduidade dos empreiteiros.',
          features: ['Empréstimos Automatizados', 'Integração com Folha de Pagamento', 'Pontuação de Risco', 'Desembolso Móvel'],
          impact: [
            { label: 'Tempo Administrativo', desc: 'Redução significativa no processamento.' },
            { label: 'Precisão', desc: 'Zero erros de cálculo manual.' },
            { label: 'Velocidade', desc: 'Desembolso instantâneo aos trabalhadores.' }
          ]
      },
      jactrac: {
          subtitle: 'Acompanhamento do Ciclo de Vida de Ativos Industriais',
          challenge: 'Componentes hidráulicos críticos falhavam sem aviso, causando enormes tempos de inatividade e riscos de segurança.',
          solution: 'O JacTrac utiliza IoT e análise de ciclo de vida para prever falhas de componentes antes que estas aconteçam.',
          features: ['Serialização de Componentes', 'Previsão de Falhas IoT', 'Agendamento de Manutenção', 'Auditoria de Ativos em Campo'],
          impact: [
            { label: 'Inatividade', desc: 'Redução drástica nas paragens por falha.' },
            { label: 'Segurança', desc: 'Prevenção de explosões de alta pressão.' },
            { label: 'Custo', desc: 'Otimização dos gastos com inventário.' }
          ]
      },
      swiftpos: {
          subtitle: 'Ecossistema de Retalho de Alta Segurança',
          challenge: 'As fugas de inventário em armazém e a fraude no retalho exigiam uma plataforma integrada de segurança e transações.',
          solution: 'O SwiftPOS funde a lógica de ponto de venda com telemetria de CCTV e alarmes para segurança total do local.',
          features: ['CCTV Integrado', 'Sincronização de Inventário em Tempo Real', 'IA de Deteção de Fraude', 'Gestão de Múltiplas Lojas'],
          impact: [
            { label: 'Perdas (Shrinkage)', desc: 'Grande redução na perda de inventário.' },
            { label: 'Segurança', desc: 'Alerta instantâneo sobre vendas anómalas.' },
            { label: 'Controlo', desc: 'Vista unificada em todas as sucursais.' }
          ]
      },
      smartres: {
          subtitle: 'Automação Residencial Personalizada',
          challenge: 'Residências de luxo modernas exigiam um sistema unificado e seguro para gerir iluminação, climatização e protocolos de segurança de alto nível.',
          solution: 'O HomeNexus fornece um motor de automação centralizado de nível industrial adaptado às necessidades operacionais residenciais.',
          features: ['Hub de Segurança Unificado', 'Lógica de Climatização Adaptativa', 'Controlo de Acesso Biométrico', 'Analítica de Consumo de Energia'],
          impact: [
            { label: 'Eficiência Energética', desc: 'Consumo otimizado via lógica inteligente.' },
            { label: 'Resposta de Segurança', desc: 'Validação biométrica instantânea.' },
            { label: 'Experiência do Utilizador', desc: 'Orquestração de interface única.' }
          ]
      }
    },
    launchpad: {
      title: 'Centro de Comando Digital',
      welcome: 'Bem-vindo, {name}. Selecione um espaço de trabalho industrial.',
      btnLaunch: 'Aceder ao Cofre',
      btnExplore: 'Ver Especificações',
      hub: 'Hub',
      switchApp: 'Mudar de Aplicação',
      status: {
        active: 'Produção Ativa',
        access: 'Acesso Padrão',
        trial: 'Teste Beta',
        enterprise: 'Empresarial',
        pending: 'Configuração Pendente',
        locked: 'Bloqueado'
      },
      footer: {
        title: 'Suporte a Ecossistema Unificado',
        desc: 'A Digitec fornece sincronização de dados entre aplicações para clientes empresariais.',
        btn: 'Contactar Arquiteto de Soluções'
      },
      globalStatus: 'Estado: Operacional'
    },
    nav: {
      dashboard: 'Painel',
      booking: 'Agendamento',
      records: 'Registos de Formação',
      database: 'Matriz Mestra',
      reports: 'Analítica',
      enterpriseDashboard: 'Vista Corporativa',
      alcohol: 'IoT de Álcool',
      requestCards: 'Emitir Passaportes',
      communications: 'Registo de Comms',
      schedule: 'Calendário',
      siteGovernance: 'Motor de Políticas',
      trainerInput: 'Entrada de Notas',
      users: 'Acesso de Utilizadores',
      settings: 'Config do Sistema',
      logs: 'Registos do Sistema',
      manuals: 'Documentação',
      feedbackAdmin: 'Tickets de Suporte',
      adminGuide: 'Slides de Admin',
      presentation: 'Proposta',
      proposal: 'Especificação Completa'
    },
    auth: {
      login: 'Entrar',
      logout: 'Sair da Central',
      poweredBy: 'Desenvolvido por',
      loginPage: {
        title: 'Central do Cliente',
        subtitle: 'Acesso Seguro ao Ecossistema Digitec',
        emailLabel: 'Endereço de E-mail',
        passwordLabel: 'Palavra-passe',
        placeholderEmail: 'admin@vulcan.com',
        placeholderPassword: '••••••••',
        error: 'Por favor, insira credenciais válidas.'
      }
    },
    database: {
      title: 'Matriz Mestra de Conformidade',
      subtitle: 'Controle de Autorização da Força de Trabalho',
      granted: 'Autorizado',
      blocked: 'Bloqueado',
      active: 'Ativo',
      accessStatus: 'Estado de Acesso',
      aso: 'Validade ASO',
      opsMatrix: 'Matriz Ops',
      importSuccess: 'Importação Concluída',
      massQr: 'Baixar QRs em Massa',
      zipping: 'Arquivando...',
      wizard: 'Assistente de Importação',
      exportDb: 'Exportar Base de Dados',
      editModal: 'Editar Perfil do Colaborador',
      contactInfo: 'Informações de Contacto',
      cell: 'Telemóvel',
      dlDetails: 'Detalhes da Carta de Condução',
      number: 'Número',
      class: 'Classe',
      mappingTitle: 'Mapeamento de Dados de Origem',
      mappingSubtitle: 'Conecte as colunas do seu CSV legado aos campos do SAFETEQ',
      preview: 'Pré-visualização de Dados',
      coreData: 'Identidade Principal',
      complianceTrain: 'Conformidade e Treino',
      sourceCol: 'Coluna de Origem',
      cardBack: 'Verso do Passaporte Digital',
      confirmDeactivate: 'Desativar Colaborador?',
      confirmDeactivateMsg: 'Isto bloqueará o acesso e marcará o registo como inativo.',
      confirmDelete: 'Excluir Registo?',
      confirmDeleteMsg: 'Isto removerá permanentemente o registo da base de dados.',
      bulkQrMessage: 'Tem a certeza que deseja gerar {count} códigos QR? Isto pode levar algum tempo.',
      processImport: 'Iniciar Processamento de Importação',
      importCsv: 'Importar CSV',
      ops: {
          EMI_PTS: 'Emi-PTS',
          APR_ART: 'Apr-ART',
          DONO_AREA_PTS: 'Proprietário',
          EXEC: 'Exec'
      }
    },
    dashboard: {
      loading: 'A carregar recursos do painel...',
      title: 'Painel Operacional',
      subtitle: 'Visão Geral do Site',
      upcoming: {
        title: 'Próximas Formações',
        viewSchedule: 'Calendário Completo',
        date: 'Data',
        session: 'Módulo',
        capacity: 'Vagas',
        status: 'Estado'
      },
      booked: {
        title: 'Pessoal Reservado',
        tableEmployee: 'Funcionário',
        tableRac: 'Módulo',
        tableDate: 'Data',
        tableRoom: 'Local',
        tableTrainer: 'Instrutor',
        noData: 'Sem reservas atuais'
      },
      kpi: {
        adherence: 'Conformidade',
        certifications: 'SAFETEQ Enterprise Risk Management Ativos',
        pending: 'Em Formação',
        expiring: 'Alerta de Renovação',
        scheduled: 'Sessões'
      },
      charts: {
        compliant: 'Autorizado',
        nonCompliant: 'Bloqueado',
        complianceTitle: 'Matriz de Aderência',
        complianceSubtitle: 'Por Protocolo SAFETEQ Enterprise Risk Management',
        accessTitle: 'Estado do Portão',
        missing: 'Deficiências'
      },
      renewal: {
        title: 'Alertas de Renovação',
        message: 'funcionários que necessitam de renovação em 30 dias.',
        button: 'Iniciar Renovações'
      },
      autoBooking: {
        title: 'Auto-Reservas',
        subPart1: 'Pessoal com expiração de alto risco',
        subPart2: 'foram auto-reservados.'
      }
    },
    reports: {
      title: 'Relatórios e Analítica',
      subtitle: 'Desempenho do site e tendências de conformidade',
      filters: {
        period: 'Período do Relatório',
        startDate: 'Data de Início',
        endDate: 'Data de Fim',
        department: 'Departamento',
        racType: 'Módulo RAC'
      },
      periods: {
        weekly: 'Últimos 7 Dias',
        monthly: 'Últimos 30 Dias',
        ytd: 'Ano até à Data',
        custom: 'Intervalo Personalizado'
      },
      printReport: 'Imprimir Relatório Executivo',
      stats: {
        totalTrained: 'Total Formado',
        passRate: 'Taxa de Aprovação',
        attendance: 'Assiduidade',
        noShows: 'Não Comparências'
      },
      charts: {
        performance: 'Tendência de Desempenho RAC',
        breakdownTitle: 'Sucesso vs Falha por Módulo',
        distributionTitle: 'Distribuição de Conformidade',
        distributionSubtitle: 'Divisão da população atual do site',
        aiSubtitle: 'Insights Estratégicos'
      },
      executiveAnalysis: 'Resumo Executivo de IA',
      analyzing: 'Analisando...',
      generate: 'Gerar Resumo',
      leaderboard: 'Desempenho do Instrutor',
      trainerMetrics: {
        students: 'Alunos',
        avgTheory: 'Média Teórica'
      },
      noShowsTitle: 'Registo de Incidentes de Não Comparência'
    },
    results: {
      searchPlaceholder: 'Pesquisar por Nome ou ID...',
      passport: 'Meu Passaporte',
      export: 'Exportar Resultados',
      table: {
        employee: 'Colaborador',
        session: 'Formação',
        date: 'Data',
        trainer: 'Instrutor',
        theory: 'Teoria',
        status: 'Estado',
        expiry: 'Validade'
      }
    },
    trainer: {
      title: 'Terminal de Classificação',
      loggedInAs: 'Instrutor Autenticado:',
      noSessions: 'Nenhuma sessão pendente encontrada na sua fila.',
      selectSession: 'Seleção de Fluxo Operacional',
      chooseSession: 'Selecione uma sessão de formação para inserir notas',
      saveResults: 'Confirmar e Imprimir Registo'
    },
    cards: {
      title: 'Estúdio de Passaportes',
      sending: 'Processando Pedido...',
      requestButton: 'Solicitar Emissão de Cartão',
      eligibility: {
          failedTitle: 'Elegibilidade Pendente',
          failedMsg: 'Atualmente não é elegível para um Passaporte Digital. Certifique-se de que as suas certificações ASO e RAC são válidas.',
          checkReqs: 'Ver Requisitos'
      }
    },
    verification: {
      title: 'Autorização de Ativos',
      notFound: 'Passaporte Digital Não Encontrado',
      verified: 'ACESSO AUTORIZADO',
      notVerified: 'ACESSO BLOQUEADO',
      scanTime: 'Hora da Verificação',
      asoStatus: 'Validade Médica',
      dlStatus: 'Autorização de Condutor'
    },
    communications: {
        title: 'Central de Comunicação',
        subtitle: 'Registos de Notificações de Saída',
        clear: 'Limpar Histórico',
        search: 'Pesquisar mensagens...',
        empty: 'Nenhum histórico de mensagens encontrado.',
        select: 'Selecione uma mensagem para pré-visualizar a simulação',
        sms: 'NOTIFICAÇÃO SMS',
        gateway: 'Digital Gateway 04',
        to: 'Para',
        automated: 'Esta é uma notificação automática do sistema.'
    },
    notifications: {
        capacityTitle: 'Alocação Automática Ativa',
        capacityMsg: 'Sessão atingiu a capacidade. Alunos excedentes movidos para'
    },
    feedback: {
        title: 'Feedback do Sistema',
        subtitle: 'Ajude-nos a otimizar a plataforma',
        typeLabel: 'Tipo de Entrada',
        types: {
            Bug: 'Problema Técnico',
            Improvement: 'Pedido de Funcionalidade',
            General: 'Comentário da Plataforma'
        },
        messageLabel: 'Descrição Detalhada',
        msgPlaceholder: 'Descreva a sua observação...',
        button: 'Enviar Resumo',
        adminTitle: 'Auditor de Experiência do Utilizador',
        manage: 'Gerir feedback de utilizadores e relatórios de erros.',
        status: {
            New: 'Aguardando Revisão',
            InProgress: 'Investigando',
            Resolved: 'Otimizado',
            Dismissed: 'Fechado'
        },
        actionable: 'Acionável',
        noSelection: 'Nenhum Feedback Selecionado',
        selectPrompt: 'Selecione uma entrada da lista para ver detalhes técnicos.',
        workflow: 'Fluxo de Resolução',
        priority: 'Prioridade Estratégica',
        markActionable: 'Marcar como Acionável',
        markedActionable: 'Acionável Engajado',
        submittedBy: 'Reportado pelo Utilizador',
        internalNotes: 'Notas de Análise de Engenharia',
        visibleAdmin: 'Confidencial: Apenas Vista de Engenharia Interna',
        deleteRecord: 'Purgar Registo'
    },
    racDefs: {
        RAC01: 'RACS 01 - Trabalho em Altura',
        RAC02: 'RACS 02 - Veículos e Equipamentos Móveis',
        RAC03: 'RACS 03 - Bloqueio de Equipamentos Móveis',
        RAC04: 'RACS 04 - Proteção de Máquinas',
        RAC05: 'RACS 05 - Espaço Confinado',
        RAC06: 'RACS 06 - Operações de Içamento',
        RAC07: 'RACS 07 - Estabilidade do Solo',
        RAC08: 'RACS 08 - Eletricidade',
        RAC09: 'RACS 09 - Explosivos',
        RAC10: 'RACS 10 - Metal Líquido',
        RAC11: 'RACS 11 - Tráfego de Mina',
        PTS: 'PTS - Permissão de Trabalho Seguro',
        ART: 'ART - Análise de Risco da Tarefa',
        LIB_OPS: 'LIB-OPS - Liberação Operacional',
        LIB_MOV: 'LIB-MOV - Liberação de Movimentação'
    },
    advisor: {
      button: 'Consultor de Segurança',
      title: 'Consultor de Segurança',
      sender: 'IA SAFETEQ Enterprise Risk Management',
      emptyState: 'Pergunte-me sobre protocolos de segurança.',
      placeholder: 'Digite a sua consulta...'
    },
    alcohol: {
      dashboard: {
        live: 'Stream em Direto Ativo',
        backToLive: 'Voltar à Monitorização',
        specs: 'Especificações Técnicas',
        title: 'Sistema de Controlo de Álcool',
        subtitle: 'Integração IoT e Monitorização de Portão em Direto',
        kpi: {
          total: 'Total de Testes',
          violations: 'Violações',
          health: 'Estado do Dispositivo'
        },
        online: 'Online',
        hourlyTrend: 'Volume de Testes por Hora',
        dailyTrend: 'Volume de Testes Diário',
        deviceLoad: 'Distribuição de Tráfego do Dispositivo',
        complianceRatio: 'Conformidade vs Violações',
        liveStream: 'Fluxo de Eventos em Tempo Real',
        mqtt: 'Protocolo MQTT',
        deviceHealth: 'Integridade da Rede',
        alert: {
          title: 'VIOLAÇÃO DETETADA',
          desc: 'Bloqueio Imediato Iniciado',
          measured: 'BAC Medido'
        },
        actions: 'Registo de Resposta Automatizada',
        actionLog: {
          locked: 'Credencial Bloqueada na Matriz Mestra',
          generating: 'Gerando Relatório de Incidente...',
          logged: 'Incidente Registado no Trilho de Auditoria',
          contacting: 'Contactando Supervisor de HSE...',
          sent: 'Alerta Enviado via SMS/Email'
        },
        close: 'Reconhecer Alerta'
      },
      protocol: {
        title: 'Protocolo de Intertravamento de Segurança',
        positiveTitle: 'Deteção de BAC Positivo',
        positiveDesc: 'O sistema invalida imediatamente o estado de "Acesso Autorizado" pelas próximas 24 horas. O torniquete do portão permanece bloqueado.',
        resetTitle: 'Sobreposição Manual',
        resetDesc: 'Apenas os Gestores de HSE podem repor um estado bloqueado após uma entrevista formal e um segundo teste manual.'
      },
      features: {
        title: 'Capacidades Técnicas',
        iotTitle: 'Gateway IoT',
        iotDesc: 'Conetividade de baixa latência via controladores de borda ESP32/PLC.',
        accessTitle: 'Bloqueio Instante',
        accessDesc: 'Integração direta com a lógica do torniquete e credenciais de RH.',
        complianceTitle: 'Trilho de Auditoria',
        complianceDesc: 'Registos à prova de adulteração de cada tentativa de entrada com dados de BAC.'
      }
    },
    enterprise: {
      systemTitle: 'Central de Comando Global',
      systemSubtitle: 'Gestão Multi-Tenant',
      title: 'Vista Empresarial',
      subtitle: 'Desempenho do Grupo',
      siteName: 'Local',
      globalHealth: 'Conformidade Agregada',
      totalWorkforce: 'Total de Pessoal',
      topPerformer: 'Melhor Local',
      needsAttention: 'Área de Risco',
      noData: 'Dados não disponíveis',
      tenantMatrix: 'Saúde do Portfólio',
      systemView: 'Vista Mestra',
      siteComparison: 'Benchmarking de Locais',
      riskHeatmap: 'Mapeamento de Risco',
      selectPrompt: 'Ajuste os filtros para visualizar dados',
      aiAuditor: 'Auditor da Plataforma',
      aiDirector: 'IA Diretor de Segurança',
      systemIntelligence: 'Insights da Plataforma',
      companyIntelligence: 'Insights Empresariais',
      aiPrompt: 'Gerando resumo estratégico...',
      aiPromptSystem: 'Analisando riscos do portfólio.',
      aiPromptEnterprise: 'Analisando tendências locais.',
      bottlenecks: 'Fricção Operacional',
      failure: 'Taxa de Falha'
    },
    schedule: {
      title: 'Agenda de Treino',
      subtitle: 'Coordenação de Recursos e Locais',
      newSession: 'Nova Sessão',
      modal: {
        title: 'Configuração de Agendamento',
        racType: 'Módulo de Certificação',
        date: 'Data da Sessão',
        startTime: 'Hora de Início',
        location: 'Local/Sala',
        capacity: 'Capacidade',
        instructor: 'Instrutor Certificado',
        language: 'Idioma da Sessão',
        portuguese: 'Português',
        english: 'Inglês',
        saveSession: 'Confirmar no Agendamento'
      }
    },
    settings: {
      title: 'Configuração Global',
      globalConfig: 'Política Mestra do Sistema',
      localConfig: 'Preferências Específicas do Local',
      saveAll: 'Aplicar Todas as Alterações',
      saving: 'Sincronizando...',
      rooms: {
        title: 'Locais e Recursos Físicos',
        name: 'Nome da Sala',
        capacity: 'Capacidade de Lugares'
      },
      trainers: {
        title: 'Instrutores Autenticados',
        new: 'Registar Novo Instrutor'
      },
      racs: {
        title: 'Matriz de Lógica de Certificação'
      },
      integrationPage: {
        title: 'Pontes de Dados Externos',
        sourceA: 'ERP Corporativo (SuccessFactors)',
        sourceB: 'DB de Empreiteiros (Célula)',
        waiting: 'Middleware em Espera',
        processing: 'Normalização de Dados Ativa',
        syncNow: 'Acionar Sincronização na Nuvem'
      }
    },
    logs: {
        title: 'Registos de Eventos do Sistema',
        levels: {
            all: 'Toda a Gravidade',
            info: 'Informativo',
            warn: 'Avisos',
            error: 'Erros Críticos',
            audit: 'Auditorias de Segurança'
        },
        table: {
            level: 'Gravidade',
            timestamp: 'Hora do Sistema',
            user: 'Originador',
            message: 'Descrição do Evento'
        }
    },
    users: {
        title: 'Gestão de Credenciais',
        subtitle: 'RBAC (Controle de Acesso Baseado em Funções)',
        addUser: 'Adicionar Participante',
        table: {
            user: 'Utilizador Autorizado',
            role: 'Conjunto de Permissões',
            status: 'Estado Operacional',
            actions: 'Controle de Autenticação'
        },
        modal: {
            title: 'Provisionar Acesso',
            name: 'Nome Legal',
            email: 'E-mail Corporativo',
            createUser: 'Conceder Permissões'
        }
    },
    booking: {
        title: 'Reserva de Sessão',
        selfServiceTitle: 'Portal de Autoinscrição',
        selfServiceDesc: 'Reserve as suas certificações de formação de segurança obrigatórias.',
        secureMode: 'Reserva Administrativa Segura ativa.',
        manageSchedule: 'Config de Recursos',
        success: 'Reservas Bloqueadas com Sucesso',
        selectSession: 'Vaga Operacional',
        chooseSession: 'Selecionar sessão ativa',
        dlRequired: 'RAC 02 requer verificação de Carta de Condução válida.',
        addRow: 'Adicionar Entrada',
        submitBooking: 'Confirmar Reservas'
    },
    manuals: {
        title: 'Diretrizes Operacionais',
        subtitle: 'Documentação do Sistema e Procedimentos Padrão',
        sysAdmin: {
            title: 'Guia do Administrador SaaS',
            subtitle: 'Gestão Global de Tenants e Lógica',
            configTitle: '1. Provisionamento de Recursos',
            configDesc: 'Antes de agendar, certifique-se de que todos os locais e instrutores estão verificados.',
            rooms: 'Mapear salas de alta capacidade para locais físicos.',
            trainers: 'Atribuir permissões de certificação aos instrutores.',
            racs: 'Configurar meses de validade global (Padrão: 24 meses).',
            dbTitle: '2. Soberania de Dados',
            dbDesc: 'A Base de Dados utiliza Lógica Unificada para Controle de Acesso.',
            restrictionWarning: 'CRÍTICO: A desativação de um utilizador remove-o do acesso ao portão imediatamente.',
            csv: 'O Assistente de Importação suporta o mapeamento automatizado de cabeçalhos de fontes de RH.',
            active: 'Alterne a coluna "Ativo" para controlar o acesso físico ao site.'
        },
        racAdmin: {
            title: 'Manual do Administrador do Site',
            subtitle: 'Gestão de Formação e Capacidade',
            schedTitle: 'Coordenação de Sessões',
            schedDesc: 'Agendar vagas de formação para satisfazer a procura do departamento.',
            create: 'Criar vagas com IDs de Sala válidos.',
            lang: 'Selecionar idioma com base na demografia da força de trabalho.',
            autoTitle: 'Protocolo de Auto-Reserva',
            autoDesc: 'O sistema reserva automaticamente lugares para utilizadores com expiração em < 7 dias.',
            approve: 'Os administradores devem aprovar manualmente as auto-reservas excedentes.',
            renewTitle: 'Renovações',
            renewDesc: 'Utilize o widget de Alerta do Painel para reservar em massa funcionários a expirar.'
        },
        racTrainer: {
            title: 'Guia de Campo do Instrutor',
            subtitle: 'Entrada de Resultados e Validação',
            inputTitle: 'Terminal de Classificação',
            inputDesc: 'Introduzir resultados em tempo real para as sessões atribuídas.',
            grading: 'Assiduidade + Pontuação (mín. 70%) = Aprovação.',
            rac02: 'REGRA RAC 02: A Carta de Condução DEVE ser visualmente verificada para aprovação.',
            save: 'Guardar resultados aciona uma impressão automática do registo físico.'
        },
        deptAdmin: {
            title: 'Manual de Operações do Gestor',
            subtitle: 'Desempenho e Conformidade do Departamento',
            reqTitle: 'Requisitos de Pessoal',
            reqDesc: 'Verifique quais RACs a sua equipa necessita com base no risco da tarefa.',
            search: 'Pesquisar matrículas específicas para estado em tempo real.',
            print: 'Exportar relatórios CSV para reuniões de segurança semanais.',
            repTitle: 'Relatórios Estratégicos',
            repDesc: 'Gerar e analisar relatórios de desempenho de segurança ao nível do departamento.'
        },
        user: {
            title: 'Instruções para o Utilizador Final',
            subtitle: 'Autosserviço e Verificação',
            statusTitle: 'Passaporte de Acesso',
            statusDesc: 'O seu "Estado de Acesso" é calculado a partir das suas certificações válidas.',
            filterAlert: 'Certifique-se de que o seu ASO (Médico) é válido para evitar o bloqueio do local.',
            green: 'Autorizado: Todos os requisitos cumpridos.',
            red: 'Bloqueado: Certificação expirada.',
            qr: 'A verificação de campo é feita através do seu Passaporte QR Digital.'
        }
    },
    adminManual: {
        title: 'Guia de Comando Estratégico',
        subtitle: 'Protocolos de Orquestração de Segurança Empresarial',
        slides: {
            intro: 'Visão Geral Executiva',
            logic: 'O Motor de Conformidade',
            dashboard: 'Centros de Comando',
            workflows: 'Procedimentos Operacionais Padrão',
            advanced: 'Protocolos Avançados',
            robotics: 'Resiliência Robótica',
            troubleshoot: 'Suporte Tático',
            architecture: 'Plantas do Sistema'
        },
        content: {
            confidential: 'Apenas Acesso Autorizado',
            production: 'Ambiente Estável de Produção',
            logic: {
                title: 'Matriz de Lógica 4.0',
                desc: 'Como a conformidade binária é calculada.',
                active: 'Contexto do Utilizador',
                aso: 'Validade Médica',
                racs: 'Validação de Competências',
                result: 'ACESSO AO PORTÃO'
            },
            dashboard: {
                operational: {
                    title: 'Controle ao Nível de Campo',
                    kpi: 'Acompanhamento de KPI em Direto',
                    renewal: 'Alertas de Expiração',
                    auto: 'Controle de Transbordo'
                },
                enterprise: {
                    title: 'Supervisão Corporativa',
                    global: 'Métricas Multi-Site',
                    risk: 'Mapas de Calor Departamentais',
                    ai: 'Relatórios de Estratégia de IA'
                }
            },
            workflows: {
                a: { title: 'Integração', steps: ['Importação de Base de Dados', 'Mapeamento de Matriz', 'Verificação de ASO'] },
                b: { title: 'Planeamento', steps: ['Agendar Vaga', 'Verificar Local', 'Atribuir Instrutor'] },
                c: { title: 'Execução', steps: ['Assiduidade', 'Entrada de Notas', 'Auto-Impressão'] },
                d: { title: 'Emissão', steps: ['Aprovação de Conformidade', 'Geração de QR', 'Emissão de Passaporte'] }
            },
            advanced: {
                gov: { title: 'Governança do Site', desc: 'Enviar políticas de segurança globais para sites remotos específicos.' },
                alcohol: { title: 'Integração IoT', desc: 'Etilotesters ligados via MQTT acionam bloqueio imediato.' }
            },
            robotics: {
                title: 'Protocolos de Autorrecuperação Robótica',
                subtitle: 'Sistemas automatizados de resiliência e diagnóstico.',
                crash: {
                    title: 'Motor de Autorrecuperação',
                    desc: 'O sistema utiliza um wrapper React Error Boundary. Se ocorrer um erro crítico de tempo de execução (ex: fuga de memória), o protocolo "RoboTech" intercepta a falha, exibe uma visualização de diagnóstico e tenta um soft-reload do estado.'
                },
                diagnostics: {
                    title: 'Diagnóstico Ativo',
                    desc: 'Os Admins do Sistema podem acionar manualmente o "Protocolo Healer RoboTech" na página de Configurações. Este executa um scan em segundo plano para latência da base de dados e otimiza fragmentos de memória.'
                }
            },
            architecture: {
                ui: '[ INTERFACE DO UTILIZADOR ]',
                gate: '[ PORTÃO de PERMISSÃO ]',
                gateDesc: 'Verifica a Função do Utilizador (Admin vs Utilizador)',
                logic: '[ MOTOR DE LÓGICA ]',
                checkCap: 'Verificar Capacidade',
                checkMatrix: 'Verificar Bloqueio de Matriz',
                checkDl: 'Verificar Validade de DL',
                dbState: '[ ESTADO DA BASE DE DADOS ]',
                updateRecord: 'Atualiza Registo de Reserva / Colaborador',
                automation: '[ AUTOMAÇÃO ]',
                emailTrig: '📧 Acionador de Email/SMS',
                printTrig: '🖨️ Auto-Impressão de Registo',
                aiTrig: '🤖 Atualização de Análise de IA'
            },
            troubleshoot: {
                denied: { issue: 'Acesso Negado', solution: 'Verificar data de ASO na BD.' },
                booking: { issue: 'Reserva Bloqueada', solution: 'Verificar matriz de requisitos.' },
                failed: { issue: 'Auto-Falha', solution: 'Verificar data da Carta de Condução.' },
                qr: { issue: 'QR Não Encontrado', solution: 'Garantir sensibilidade a maiúsculas/minúsculas do ID.' },
                speed: { issue: 'Lentidão', solution: 'Aguardar log de Sincronização na Nuvem.' }
            }
        }
    },
    proposal: {
        digitalTrans: 'Proposta de Transformação Digital',
        aboutMe: {
            title: 'Arquiteto de Soluções',
            name: 'Pita Domingos',
            preferred: 'Arquiteto RoboTech',
            bio: 'Especialista em projetar ecossistemas de software de alta fidelidade para gigantes industriais. Focado em automatizar lógicas complexas para salvaguardar a vida humana.',
            cert: 'Arquiteto de Sistemas Sénior',
            role: 'Engenheiro Líder de Projeto'
        },
        execSummary: {
            title: 'Resumo Executivo',
            text: 'A Digitec propõe um sistema unificado de "Requisitos de Atividades Críticas" (SAFETEQ) para substituir conjuntos de dados legados fragmentados por uma plataforma de orquestração de segurança robusta e em tempo real.',
            quote: 'Transformando incerteza industrial em precisão binária.'
        },
        objectives: {
            title: 'Objetivos Estratégicos',
            problemTitle: 'Fricção Atual',
            problemText: 'O rastreamento manual de certificações cria atrasos fatais e responsabilidade administrativa.',
            solutionTitle: 'Solução Digital',
            goals: ['Automatizar Conformidade de Portaria', 'Unificar Dados Multi-Tenant', 'Emissão de Passaporte QR Digital', 'Análise de Risco por IA em Tempo Real']
        },
        organogram: {
            title: 'Estrutura do Projeto',
            tech1: 'Engenheiro de Lógica',
            tech2: 'Líder de Infraestrutura'
        },
        timeline: {
            title: 'Roadmap de Implementação',
            phase1: 'Design de Arquitetura', phase1desc: 'Mapeamento de lógica e esquema de BD.',
            phase2: 'Sincronização de Middleware', phase2desc: 'Conetividade com sistemas legados.',
            phase3: 'Construção de Módulos', phase3desc: 'Implementação de UI e Lógica.',
            phase4: 'Testes UAT', phase4desc: 'Validação pelo utilizador e endurecimento.',
            phase5: 'Entrega do Site', phase5desc: 'Formação e entrada em produção.'
        },
        techStack: {
            title: 'Ecossistema Tecnológico',
            frontendTitle: 'Web/Móvel', frontend: 'React • TypeScript • Tailwind',
            backendTitle: 'Orquestração', backend: 'Node.js • Cloud Functions',
            databaseTitle: 'Persistência', database: 'PostgreSQL • InfluxDB (IoT)',
            securityTitle: 'Criptografia', security: 'OAuth2 • AES-256'
        },
        financials: {
            title: 'Investimento Estratégico',
            items: [
                { name: 'Provisionamento de Ambiente Inicial', cost: '$1,500.00', type: 'Setup' },
                { name: 'Licença Core SaaS (Anual)', cost: '$12,000.00', type: 'Licensing' },
                { name: 'Infraestrutura Cloud Mensal', cost: '$450.00', type: 'Hosting' },
                { name: 'Treinamento e Documentação de Pessoal', cost: '$3,200.00', type: 'Services' },
                { name: 'Manutenção e Suporte (Mensal)', cost: '$800.00', type: 'Retainer' }
            ]
        },
        roadmap: {
            title: 'Escalabilidade Empresarial',
            auth: 'SSO de Identidade', authDesc: 'Integração com Azure AD.',
            db: 'Cluster Global', dbDesc: 'Redundância multi-região.',
            email: 'SMTP Automatizado', emailDesc: 'Relatórios transacionais.',
            hosting: 'Nuvem Híbrida', hostingDesc: 'Capacidade On-prem + Azure.'
        },
        aiFeatures: {
            title: 'Inteligência Gemini',
            chatbot: 'Chatbot Consultor de Segurança 24/7.',
            reporting: 'Resumos Executivos Automatizados.'
        },
        futureUpdates: {
            title: 'Capacidades Futuras',
            moduleA: 'Módulo A - Sincronização ERP Avançada',
            moduleB: 'Módulo B - Gateway de Hardware IoT'
        },
        enhancedCaps: {
            title: 'Resiliência Empresarial',
            mobileVerify: { desc: 'Validação QR pronta para campo via app móvel.' },
            autoBooking: { desc: 'Renovações de formação sem tempo de inatividade.' },
            massData: { desc: 'Importação de mais de 10k registos em segundos.' }
        },
        conclusion: {
            title: 'Zero Danos via Código',
            text: 'A tecnologia é a salvaguarda derradeira. Deixe-nos arquitetar o seu futuro de segurança.'
        },
        thankYou: {
            title: 'Gratidão',
            contact: 'info@digitecinternational.com',
            phone: '+258 84 547 9481'
        }
    },
    ai: {
        systemPromptAdvice: 'Você é um Consultor de Segurança da SAFETEQ. Aconselhe sobre {rac} em {language}.',
        systemPromptReport: 'Você é um Diretor de Segurança. Resuma as estatísticas de segurança em {language}.'
    }
  }
};