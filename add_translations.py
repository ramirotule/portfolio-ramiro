import json

with open("src/locales/en.json", "r") as f:
    en_data = json.load(f)

with open("src/locales/es.json", "r") as f:
    es_data = json.load(f)

en_experience = {
    "title": "Experience",
    "sorted": "Sorted: Chronological",
    "active": "Active",
    "coreImpact": "Core Impact",
    "dataFiltering": "Data Filtering",
    "downloadPdf": "Download PDF",
    "tabs": {
      "us": "US Experience",
      "own": "Own Projects",
      "government": "Government Projects",
      "interests": "Interests & AI"
    },
    "data": {
      "us": [
        {
          "id": "temperies",
          "company": "TEMPERIES",
          "role": "Senior Frontend Developer",
          "period": "03/2022 — PRESENT // USA REMOTE",
          "status": "CURRENT ENGAGEMENT",
          "description": [
            "FasterWay (2024 - Present): Collaborating in the development of a premier fitness and nutrition desktop and mobile app, focusing on high-traffic features and tracking systems.",
            "Arculix & SecureAuth: Led the UI modernization by replacing BlueprintJS with Material UI and executed a major rebranding project for user security management workflows.",
            "UMOV (Chile): Developed a HealthTech back-office web application designed to manage clinic users and patient interactions.",
            "LinkLabs (USA): Implemented complex UI modules based on high-fidelity Figma designs, ensuring a seamless experience for administrative staff."
          ],
          "impact": [
            { "label": "PERFORMANCE GAIN", "value": "40%" },
            { "label": "MAJOR PROJECTS", "value": "4" }
          ]
        }
      ],
      "own": [
        {
          "id": "stockautos",
          "company": "STOCKAUTOS",
          "role": "Fullstack Architect",
          "period": "2024 — PRESENT // LA PAMPA",
          "status": "ACTIVE PROJECT",
          "description": [
            "Automotive management system with direct n8n automation for publishing vehicles across multiple platforms.",
            "Built a robust backend using Supabase, optimizing the reach of local dealerships."
          ],
          "impact": [
            { "label": "AUTOMATION", "value": "100%" },
            { "label": "DEALERSHIPS", "value": "SCALING" }
          ]
        },
        {
          "id": "alkila",
          "company": "ALKILA",
          "role": "Founder & Lead Architect",
          "period": "2023 — PRESENT // LA PAMPA",
          "status": "ACTIVE PROJECT",
          "description": [
            "Architected and deployed a full-scale real estate marketplace using React, Tailwind and Supabase.",
            "Integrated complex workflows using n8n to automate lead management and SEO injection.",
            "Designed an advanced filtering system connecting tenants with local properties efficiently."
          ],
          "impact": [
            { "label": "ACTIVE LISTINGS", "value": "500+" },
            { "label": "AUTOMATION SAVINGS", "value": "20h/wk" }
          ]
        },
        {
          "id": "raminformatica",
          "company": "RAM INFORMÁTICA",
          "role": "Fullstack Developer",
          "period": "2023 // E-COMMERCE",
          "status": "COMPLETED",
          "description": [
            "Developed an integrated e-commerce and administrative dashboard.",
            "Created an automation script in Python that processes WhatsApp messages from suppliers to recalculate profit margins in real-time."
          ],
          "impact": [
            { "label": "PRICING SYNC", "value": "REAL-TIME" },
            { "label": "BACKEND", "value": "SUPABASE" }
          ]
        },
        {
          "id": "detakito",
          "company": "DETAQUITO",
          "role": "Mobile Developer",
          "period": "2023 // MOBILE",
          "status": "SHOWCASE",
          "description": [
            "Extreme performance showcase app built in React Native.",
            "Utilized Fabric Architecture to ensure a fluid and fully native user experience."
          ],
          "impact": [
            { "label": "PERFORMANCE", "value": "60 FPS" },
            { "label": "ENGINE", "value": "FABRIC" }
          ]
        },
        {
          "id": "controlgastos",
          "company": "CONTROLGASTOS",
          "role": "Frontend Developer",
          "period": "2022 // FINTECH",
          "status": "COMPLETED",
          "description": [
            "100% responsive Web App built with React and Tailwind for personal financial management.",
            "Created detailed graphical reports for cash flow, fixed/variable expenses, and credit card tracking."
          ],
          "impact": [
            { "label": "RESPONSIVE", "value": "YES" },
            { "label": "REPORTING", "value": "REAL-TIME" }
          ]
        }
      ],
      "government": [
        {
          "id": "apa",
          "company": "A.P.A. - GOV AGENCY",
          "role": "Frontend Developer",
          "period": "03/2019 — 01/2022 // LA PAMPA",
          "status": "PREVIOUS ROLE",
          "description": [
            "Led the migration of legacy systems from Visual FoxPro to modern React-based web applications.",
            "Developed critical modules for payroll, vacation management, and stock control using React, Bootstrap, and Firebase."
          ],
          "impact": [
            { "label": "MIGRATION", "value": "100%" },
            { "label": "KEY MODULES", "value": "3" }
          ]
        }
      ],
      "interests": [
        {
          "id": "python-ai",
          "company": "INTELIGENCIA ARTIFICIAL",
          "role": "Foco Actual: Python & IA",
          "period": "2024 — PRESENTE // APRENDIZAJE CONTINUO",
          "status": "ROADMAP DE APRENDIZAJE",
          "description": [
            "Explorando conceptos de machine learning y fundamentos de redes neuronales usando Python.",
            "Construyendo herramientas experimentales impulsadas por IA con énfasis en la integración.",
            "Profundizando en LLMs, prompt engineering y flujos de trabajo con agentes autónomos."
          ],
          "impact": [
            { "label": "MODELOS DE IA", "value": "3+" },
            { "label": "PROYECTOS PYTHON", "value": "ACTIVOS" }
          ]
        },
        {
          "id": "tech-future",
          "company": "TECNOLOGÍAS DEL FUTURO",
          "role": "Explorador Tecnológico",
          "period": "EN CURSO // PASIÓN",
          "status": "CURIOSIDADES",
          "description": [
            "Manteniéndome al día con los últimos avances en Web3, edge computing y arquitecturas web de alto rendimiento.",
            "Estudiando patrones de interacción emergentes en diseño de interfaces (Brutalismo, Glassmorphism)."
          ],
          "impact": [
            { "label": "PROTOTIPOS", "value": "10+" },
            { "label": "CURIOSIDAD", "value": "100%" }
          ]
        }
      ]
    }
}

es_experience = {
    "title": "Experiencia",
    "sorted": "Ordenado: Cronológico",
    "active": "Activo",
    "coreImpact": "Impacto Core",
    "dataFiltering": "Filtrado de Datos",
    "downloadPdf": "Descargar PDF",
    "tabs": {
      "us": "Experiencia US",
      "own": "Proyectos Propios",
      "government": "Proyectos Gobierno",
      "interests": "Intereses e IA"
    },
    "data": {
      "us": [
        {
          "id": "temperies",
          "company": "TEMPERIES",
          "role": "Desarrollador Frontend Senior",
          "period": "03/2022 — PRESENTE // REMOTO",
          "status": "COMPROMISO ACTUAL",
          "description": [
            "FasterWay (2024 - Presente): Colaborando en el desarrollo de una aplicación web y móvil de primer nivel sobre fitness y nutrición, enfocada en features de alto tráfico.",
            "Arculix & SecureAuth: Lideré la modernización de la UI migrando BlueprintJS a Material UI y ejecuté un rebranding completo para flujos de gestión de seguridad de usuarios.",
            "UMOV (Chile): Desarrollé un back-office HealthTech especializado para administrar pacientes.",
            "LinkLabs (USA): Implementé módulos de UI complejos basados en Figma de alta fidelidad, asegurando una experiencia perfecta."
          ],
          "impact": [
            { "label": "MEJORA RENDIMIENTO", "value": "40%" },
            { "label": "PROYECTOS MAYORES", "value": "4" }
          ]
        }
      ],
      "own": [
        {
          "id": "stockautos",
          "company": "STOCKAUTOS",
          "role": "Arquitecto Fullstack",
          "period": "2024 — PRESENTE // LA PAMPA",
          "status": "PROYECTO ACTIVO",
          "description": [
            "Sistema de gestión automotriz con automatización directa en n8n para publicar vehículos en múltiples plataformas.",
            "Construí un backend robusto usando Supabase, optimizando el alcance de las concesionarias locales."
          ],
          "impact": [
            { "label": "AUTOMATIZACIÓN", "value": "100%" },
            { "label": "AGENCIAS", "value": "ESCALANDO" }
          ]
        },
        {
          "id": "alkila",
          "company": "ALKILA",
          "role": "Fundador y Arquitecto Principal",
          "period": "2023 — PRESENTE // LA PAMPA",
          "status": "PROYECTO ACTIVO",
          "description": [
            "Arquitecturé y desplegué un marketplace inmobiliario a gran escala usando React, Tailwind y Supabase.",
            "Integré flujos de trabajo en n8n para automatizar leads y la inyección SEO.",
            "Diseñé un sistema de filtros avanzado que conecta inquilinos con propiedades localmente."
          ],
          "impact": [
            { "label": "PROPIEDADES ACTIVAS", "value": "500+" },
            { "label": "AHORRO AUTOMAT.", "value": "20h/sem" }
          ]
        },
        {
          "id": "raminformatica",
          "company": "RAM INFORMÁTICA",
          "role": "Desarrollador Fullstack",
          "period": "2023 // E-COMMERCE",
          "status": "COMPLETADO",
          "description": [
            "Desarrollé un dashboard integrado de administración y e-commerce.",
            "Creé un script de automatización en Python que procesa mensajes de WhatsApp de proveedores para recalcular márgenes de ganancia en tiempo real."
          ],
          "impact": [
            { "label": "SINCR PRECIOS", "value": "ACTUAL" },
            { "label": "BACKEND", "value": "SUPABASE" }
          ]
        },
        {
          "id": "detakito",
          "company": "DETAQUITO",
          "role": "Desarrollador Mobile",
          "period": "2023 // MOBILE",
          "status": "SHOWCASE",
          "description": [
            "App de alto rendimiento construida en React Native.",
            "Utilicé Fabric Architecture para asegurar una experiencia de usuario fluida y completamente nativa."
          ],
          "impact": [
            { "label": "RENDIMIENTO", "value": "60 FPS" },
            { "label": "MOTOR", "value": "FABRIC" }
          ]
        },
        {
          "id": "controlgastos",
          "company": "CONTROLGASTOS",
          "role": "Desarrollador Frontend",
          "period": "2022 // FINTECH",
          "status": "COMPLETADO",
          "description": [
            "Web App 100% responsiva construida en React y Tailwind para finanzas personales.",
            "Creé reportes gráficos detallados para el flujo de caja y seguimiento de gastos y tarjetas."
          ],
          "impact": [
            { "label": "RESPONSIVO", "value": "SÍ" },
            { "label": "REPORTES", "value": "DASHBOARDS" }
          ]
        }
      ],
      "government": [
        {
          "id": "apa",
          "company": "A.P.A. - ENTIDAD GOBI.",
          "role": "Desarrollador Frontend",
          "period": "03/2019 — 01/2022 // LA PAMPA",
          "status": "ROL PREVIO",
          "description": [
            "Lideré la migración de sistemas legacy desde Visual FoxPro hacia aplicaciones web modernas en React.",
            "Desarrollé módulos críticos para recursos humanos, vacaciones y control de stock usando React, Bootstrap y Firebase."
          ],
          "impact": [
            { "label": "MIGRACIÓN", "value": "100%" },
            { "label": "MÓDULOS CLAVE", "value": "3" }
          ]
        }
      ],
      "interests": [
        {
          "id": "python-ai",
          "company": "INTELIGENCIA ARTIFICIAL",
          "role": "Foco Actual: Python & IA",
          "period": "2024 — PRESENTE // APRENDIZAJE CONTINUO",
          "status": "ROADMAP DE APRENDIZAJE",
          "description": [
            "Explorando conceptos de machine learning y fundamentos de redes neuronales usando Python.",
            "Construyendo herramientas experimentales impulsadas por IA con énfasis en la integración.",
            "Profundizando en LLMs, prompt engineering y flujos de trabajo con agentes autónomos."
          ],
          "impact": [
            { "label": "MODELOS DE IA", "value": "3+" },
            { "label": "PROYECTOS PYTHON", "value": "ACTIVOS" }
          ]
        },
        {
          "id": "tech-future",
          "company": "TECNOLOGÍAS DEL FUTURO",
          "role": "Explorador Tecnológico",
          "period": "EN CURSO // PASIÓN",
          "status": "CURIOSIDADES",
          "description": [
            "Manteniéndome al día con los últimos avances en Web3, edge computing y arquitecturas web de alto rendimiento.",
            "Estudiando patrones de interacción emergentes en diseño de interfaces (Brutalismo, Glassmorphism)."
          ],
          "impact": [
            { "label": "PROTOTIPOS", "value": "10+" },
            { "label": "CURIOSIDAD", "value": "100%" }
          ]
        }
      ]
    }
}

en_data["experience"] = en_experience
es_data["experience"] = es_experience

with open("src/locales/en.json", "w") as f:
    json.dump(en_data, f, indent=2, ensure_ascii=False)

with open("src/locales/es.json", "w") as f:
    json.dump(es_data, f, indent=2, ensure_ascii=False)
