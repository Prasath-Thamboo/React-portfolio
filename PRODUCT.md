# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are recruiters, hiring managers, and technical leads at companies in Swiss Romandy (French-speaking Switzerland) evaluating T.Prasath for DevOps & Infrastructure Engineer roles. Secondary readers include the same audience in France, and professional contacts (LinkedIn/GitHub visitors) doing a general credibility check. The bilingual FR/EN toggle exists because the audience spans both France and Switzerland.

## Product Purpose

A personal portfolio site for T.Prasath that makes the case, in one sitting, that he is hireable for DevOps & Infrastructure roles. Success is a recruiter or hiring manager reaching out (email/LinkedIn) or a candidacy advancing to interview. The site is not a general audience showcase — every section (About, Experience, Skills, Projects, Education, Contact) exists to support that hiring decision.

## Positioning

The differentiator is the full-stack-to-DevOps trajectory: real, hands-on experience building production applications (Node.js backend, Oracle data modeling, Flutter/React frontends, PHP/Symfony) combined with a current, active move into infrastructure automation and DevOps practice (IaC, CI/CD, observability). Unlike a DevOps specialist with no application-building background, or a full-stack developer with no infrastructure exposure, he can speak credibly to both ends of the pipeline — what candidates who are purely one or the other cannot truthfully claim.

## Operating Context

- Bilingual FR/EN toggle (`Lang` type, `language-context`), with FR as the default/primary locale (`<html lang="fr">`).
- Sections map to a fixed chapter model (`chapters.ts`): Home, About, Experience, Skills, Projects, Education, Contact — this is the site's information architecture and should be treated as durable structure, not a page-by-page invention.
- Contact form is a `mailto:` link only — no backend, no data collection, no stored submissions (confirmed in the site's own legal/privacy modal).
- Deployed on Netlify at prasdev.netlify.app.
- Currently employed (Navilone, 2024–2026, listed as current role) while job-searching for the next Swiss role — the portfolio is a proactive/passive search tool, not a stopgap for unemployment.

## Capabilities and Constraints

- Experience, education, and stats reflect real, confirmed facts (Navilone, Visual&KO, Fydgest; 5+ years experience) and must not be embellished or fabricated further.
- The Projects section carries an explicit in-code constraint (`src/data/projects.ts`): do not invent real project content there; several entries are still marked "to complete" pending the user's own descriptions. Future work must preserve this constraint rather than filling gaps with invented specifics.
- Personal, non-professional site under French law (LCEN/RGPD) — the legal modal's mentions légales and no-tracking/no-cookie posture are binding facts, not placeholder copy.
- No backend/server component; content is static data (`src/data/*.ts`) rendered client-side.

## Brand Commitments

- Name/identity: "T.Prasath", role tagline "Ingénieur DevOps & Infrastructure" / "DevOps & Infrastructure Engineer", site tagline "Du code à la production — Node.js, Terraform, CI/CD".
- Existing logo asset (`public/logo2.png`) used as favicon and social-share image; canonical domain prasdev.netlify.app.
- Contact channels are fixed and must stay accurate: prasath1@hotmail.fr, LinkedIn (prasath-thamboo-it-devops-suisse), GitHub (Prasath-Thamboo).
- Mobility statement — open to relocation to Swiss Romandy — is a current, active fact material to the site's purpose.

## Evidence on Hand

- Real work history with three named employers (Navilone, Visual&KO, Fydgest), roles, periods, and missions, in both FR and EN (`src/data/experience.ts`).
- Real project references with live URLs (Navilone, Visual&KO, Seranya, TechandCompare, Batchily, Serrurier de Proximité, Counter-inst, + 2 placeholders) in `src/data/projects.ts` — some descriptions still marked as placeholder ("Description à compléter"/"to be completed") and awaiting the user's input; do not invent replacement copy for these.
- Company/technology logo assets under `src/assets/companies/` and `src/assets/techno/`.
- No résumé/CV file or testimonials currently present in the repo — do not fabricate either.

## Product Principles

1. Every section serves the hiring decision — content that doesn't help a Swiss DevOps recruiter say yes is out of scope.
2. Real evidence only — experience, projects, and stats are factual claims a recruiter may verify; never invent or embellish them.
3. Bilingual parity — French and English content must stay equivalent in substance, since the audience genuinely spans both.
4. Full-stack-to-DevOps is the throughline — features and framing should reinforce the "built products, now automates their delivery" story, not dilute it into a generic developer portfolio.
5. Minimal, privacy-respecting by design — no tracking, no data collection, no backend beyond static hosting; preserve this posture in future work.

## Accessibility & Inclusion

No project-specific accessibility requirement has been established beyond standard web accessibility practice.
