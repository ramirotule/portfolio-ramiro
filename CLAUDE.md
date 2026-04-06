Gemini dijo
Tienes razón, Ramiro. Para que Claude Code o cualquier agente de IA procese esto correctamente, necesita una estructura de Markdown (MD) técnica, con bloques de código, jerarquía de archivos y directrices de arquitectura claras.

Aquí tienes el prompt formateado como un documento técnico de especificaciones para que lo copies y pegues directamente:

🚀 PROJECT SPECIFICATION: PORTFOLIO 2026 - RAMIRO TOULEMONDE
1. IDENTITY & CONTEXT
Developer: Ramiro Toulemonde.

Role: Senior Frontend Developer (+5 years experience).

Location: Santa Rosa, La Pampa, Argentina.

Stack: React.js, TypeScript, Tailwind CSS, Supabase, n8n, Python.

2. CORE PHILOSOPHY
The portfolio must look "Beyond Conventional". It should feel like a high-end engineering product, not a standard landing page.

Design Language: Minimalist Brutalism mixed with Glassmorphism.

Interactivity: High-performance animations using framer-motion.

Dark-First: Default dark mode with neon/electric accents.

3. TECHNICAL ARCHITECTURE (TASKS FOR CLAUDE CODE)
A. Initialization & I18n
Setup a Vite + React + TypeScript project.

Implement i18next for seamless language switching (EN/ES).

Structure for locales:

JSON
// src/locales/en.json
{
  "hero": { "title": "Engineering Digital Solutions from La Pampa to the World" },
  "projects": { "saas": "Automotive Management SaaS", "alkila": "Real Estate Platform" }
}
B. Navigation & Layout
Avoid standard scrolling. Implement a Bento Grid layout that reorganizes dynamically based on viewport or a horizontal "Timeline" scroll.

Create a "Command Palette" (Cmd+K) for recruiters to navigate sections or download my CV instantly.

C. Featured Projects Showcase
Detailed logic for each card:

RT Software Factory (SaaS): Highlight the n8n automation and Supabase backend.

Alkila: Emphasize the React JS local impact in Santa Rosa.


RAM Informática: Visual explanation of the Python + WhatsApp pricing engine.

Detakito: Showcase React Native performance metrics (Fabric Architecture).

D. Advanced Integration
AI Stack: A dedicated section for "Human-AI Collaboration" showing my workflow with Claude Code and AntiGravity.


Interactive CV: A JSON-powered resume viewer that allows recruiters to "toggle" between my experience in the US (Temperies/Arculix) and my local projects.
+1

4. DIRECTIVES FOR GENERATION
"Claude, follow these strict rules:

Use Tailwind CSS for all styling; no external CSS files.

Implement Lucide-react for iconography.

Use Framer Motion for entrance animations and layout transitions.

Ensure all components are responsive and accessible (A11y).

Create a constants.ts file to centralize all my personal data from the provided context."