# [ZOO NAME] Website with AI-Powered Workplace Productivity Assistant

> **Wild at Heart. Close to You.**

## Project Overview

[ZOO NAME] is a modern, responsive website for a zoo business in [CITY, SOUTH AFRICA]. It is designed to attract families, schools, tourists and corporate groups, and to make booking a visit easy.

The site also includes an **AI-Powered Workplace Productivity Assistant**, built for the CAPACITI AI project brief. The assistant automates repetitive tasks such as drafting emails, planning schedules, summarising information and answering questions, for both visitors and zoo staff.

**Problem statement:** Professionals and visitors spend significant time on repetitive tasks like writing emails, planning schedules, researching and finding information. This project uses AI to simplify and speed up those tasks while applying AI responsibly.

**Branding:** The leopard image is used as the logo, favicon and hero visual. The colour palette comes from that image: sky blue `#1E73BE`, amber `#D9822B`, bark brown `#4A3B32` and cream `#FFF8EE`.

## Features

### Website
- **Home:** hero section with slogan, featured animals, opening hours, ticket prices, testimonials, conservation counters, newsletter signup
- **Our Animals:** filterable animal cards (Big Cats, Birds, Reptiles, Primates, Antelope) with the leopard as the featured animal
- **Plan Your Visit:** ticket pricing, booking form, map, directions, FAQs, accessibility information
- **Experiences:** feeding sessions, guided safaris, school trips, birthday parties, corporate team-building days
- **Conservation and Education:** mission, adoption programmes, volunteer sign-up
- **Contact:** contact form, phone, email, social links

### AI Assistant Hub
| Tool | What it does |
|------|--------------|
| **Smart Email Generator** | Creates context-based professional emails with tone options (formal, informal, persuasive) and audience options (client, manager, team) |
| **AI Task Planner / Scheduler** | Builds daily or weekly plans prioritised by urgency and importance, with time-saving tips. Doubles as a "Plan My Zoo Day" itinerary builder for visitors |
| **AI Research Assistant** | Summarises articles, reports or topics, and gives key insights, recommendations and a simplified version |
| **AI Chatbot Interface** | Floating and full-page chat for questions on tickets, hours, animals and events, with multi-turn conversations and quick-reply chips |

### Prompt Engineering
- A dedicated system prompt for each AI tool (role, context, task, output format, tone rules, constraints)
- Few-shot examples for the email generator and summariser
- A **Prompt Library** page showing v1 and v2 prompts side by side, with notes on what was improved

### Responsible AI
- A disclaimer under every AI output: *"AI-generated content may contain errors. Please review before use."*
- A "Validate before you send" checklist on the email tool
- A "Verify with official sources" note on the research tool
- A **Responsible AI and Privacy** page covering limitations, bias, data privacy and the human-in-the-loop policy
- The chatbot says when it is unsure and directs users to staff for pricing, safety and animal welfare questions

### Productivity Impact
- An Impact section showing time saved per task (for example, email drafting from 10 minutes to 1 minute)
- Copy to clipboard, regenerate and download as PDF on AI outputs

### Quality
- Fully responsive (mobile and desktop)
- Accessible: alt text, good contrast, keyboard navigation
- SEO-friendly page titles and meta descriptions

## Tools Used

| Tool | Purpose |
|------|---------|
| **Lovable.ai** | Generating and building the website from the project prompt |
| **ChatGPT / Claude** | Drafting and refining prompts, and powering the AI features |
| **React + Tailwind CSS** | Front-end framework and styling (Lovable default stack) |
| **Supabase** (optional) | Backend, secure API key storage and form data, if enabled in Lovable |
| **GitHub** | Version control and project hosting |

## Setup Instructions

### Option A: Build and run with Lovable
1. Go to [lovable.ai](https://lovable.ai) and create a new project.
2. Paste the project prompt and attach the leopard logo image to the same message.
3. Replace placeholders such as `[ZOO NAME]` and `[CITY, SOUTH AFRICA]` with your details.
4. Review the generated site, then ask Lovable to refine individual pages or features.
5. Click **Publish** to deploy.

### Option B: Run locally after exporting to GitHub
**Prerequisites:** Node.js 18 or later, npm and Git.

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
npm install

# 3. Add environment variables
cp .env.example .env
# Edit .env and add your keys (see below)

# 4. Start the development server
npm run dev
```

Open the local address shown in the terminal (usually `http://localhost:5173`).

### Environment variables
```
AI_API_KEY=your_ai_provider_key
SUPABASE_URL=your_supabase_url          # if used
SUPABASE_ANON_KEY=your_supabase_key     # if used
```

> **Security:** Never commit your `.env` file or API keys. Keep AI calls on a backend or edge function so keys are not exposed in the browser.

### Build for production
```bash
npm run build
```

## Project Deliverables

- **AI solution / prototype:** this website and the AI Assistant Hub
- **Documentation:** the "About This Project" page (problem statement, solution overview, tools used, sample prompts, challenges and solutions)
- **Presentation:** slide deck or live demo explaining features and impact

## Responsible AI Notice

AI outputs can be inaccurate or biased. Always review AI-generated content before using or sending it. Do not enter sensitive personal information. For pricing, safety and animal welfare queries, contact the zoo staff directly.

## Contact

[ZOO NAME], [ADDRESS], [CITY], South Africa
Phone: [PHONE] | Email: [EMAIL]
