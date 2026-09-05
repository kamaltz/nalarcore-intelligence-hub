# NalarCore Intelligence Hub

Build a modern, production-ready official website for a Discord AI bot called “NalarCore”.

PROJECT CONTEXT

NalarCore is an AI-powered Discord bot developed as part of the Teras Bernalar community ecosystem.

Teras Bernalar is an Indonesian discussion and knowledge-sharing community focused on thoughtful, rational, open-minded, and evidence-oriented conversations across topics such as:

- Philosophy

- Psychology

- Science

- Technology

- Economics

- Law & Politics

- Social & Culture

- Health

- Literacy

- Literature

- Self-development

NalarCore acts as an intelligent supporting system for the Discord server.

In the future, NalarCore will be integrated with a Hermes-based AI agent architecture. Therefore, the website architecture and UI should be designed so that future AI-agent features, API integrations, bot management, knowledge tools, and dashboards can be added without redesigning the entire application.

IMPORTANT:

Do not claim that unfinished Hermes Agent functionality is already available.

Any future functionality should be labeled appropriately as:

“Coming Soon”, “In Development”, or “Planned”.

==================================================

1. BRAND IDENTITY

==================================================

Product name:

NalarCore

Community:

Teras Bernalar

Suggested tagline:

“Intelligence at the Core of Conversation.”

Alternative Indonesian supporting copy:

“Pendukung diskusi, informasi, dan komunitas Teras Bernalar.”

Brand personality:

- Intelligent

- Rational

- Modern

- Trustworthy

- Technological

- Community-oriented

- Minimalist

- Not overly corporate

- Not childish

The visual identity should combine:

AI + knowledge + reasoning + community.

Avoid generic SaaS designs that look like random AI startup templates.

Use a clean modern interface inspired by:

- developer tools

- AI platforms

- modern Discord ecosystem applications

- knowledge platforms

Do NOT directly copy any existing website.

==================================================

2. VISUAL DESIGN

==================================================

Use a modern dark-first interface.

Suggested visual direction:

- Dark navy / near-black background

- Teal / cyan / blue accents

- Subtle green accent where appropriate

- Soft gradients

- Thin borders

- Glass / translucent elements only where useful

- Subtle glow effects

- High readability

- Generous spacing

- Rounded cards

- Smooth micro-interactions

Avoid excessive neon effects.

The website should feel:

“intellectual technology”

rather than

“cyberpunk gaming”.

Typography:

Use a clean modern sans-serif font such as Inter, Geist, or similar.

Create a simple NalarCore visual mark using abstract concepts such as:

- neural nodes

- core

- connected knowledge

- reasoning network

- brain + computational structure

Do not use copyrighted third-party logos.

==================================================

3. TECH STACK

==================================================

Build using:

- React

- TypeScript

- Tailwind CSS

- shadcn/ui where appropriate

- Lucide icons

Structure the code cleanly using reusable components.

Prepare the architecture for future integration with:

- Discord OAuth2

- Discord Bot API

- Hermes Agent backend

- REST API / WebSocket API

- Supabase if a database or authentication layer is later required

Do NOT expose secrets, Discord tokens, API keys, Hermes credentials, or environment variables in frontend code.

Create clear placeholders/interfaces for future backend integrations.

==================================================

4. NAVIGATION

==================================================

Desktop navbar:

NalarCore logo

Home

Features

Commands

Docs

Status

About

Right side:

“Add to Discord”

“Dashboard”

Dashboard can initially be marked Beta / Coming Soon if no backend implementation exists.

Mobile:

Use a clean responsive hamburger menu.

Footer:

NalarCore

Product

Resources

Community

Legal

Legal links MUST include:

- Privacy Policy

- Terms of Service

Also include:

- Documentation

- Status

- Contact

==================================================

5. HOME PAGE

==================================================

Create a strong hero section.

Headline example:

“Reasoning Infrastructure for Better Communities.”

Supporting text:

“NalarCore is an intelligent Discord companion built to support conversations, knowledge discovery, moderation workflows, and community activities within the Teras Bernalar ecosystem.”

CTA buttons:

[ Add to Discord ]

[ Explore Features ]

Secondary link:

“View Documentation →”

Include a visual representation of NalarCore.

Instead of generic robot artwork, create an abstract interface showing:

Discord messages → NalarCore → AI Agent → Knowledge / Tools.

Clearly indicate that advanced Hermes Agent capabilities are part of the evolving architecture if not yet available.

==================================================

6. CORE FEATURES SECTION

==================================================

Create feature cards.

Examples:

AI Assistant

Help members ask questions, understand topics, and explore ideas directly inside Discord.

Discussion Companion

Support structured discussions by generating questions, summaries, context, and alternative perspectives.

Knowledge Support

Help members discover and understand information relevant to ongoing conversations.

Content Summarization

Summarize long discussions, articles, or supported content into concise explanations.

Community Utilities

Provide practical utilities for server members and moderators.

Moderation Assistance

Assist moderation workflows while keeping human moderators in control.

Teras Bernalar Integration

Designed specifically to support the Teras Bernalar community ecosystem.

Hermes Agent Integration

Future agent architecture enabling more advanced reasoning, tool usage, workflows, and autonomous task execution.

Mark Hermes features as:

“In Development”

==================================================

7. HOW IT WORKS

==================================================

Create a simple 4-step flow:

1. Member interacts

A Discord member sends a command, mention, or supported request.

2. NalarCore receives context

NalarCore identifies the request and relevant server context.

3. Intelligence layer

The system processes the request through configured AI services and, in the future, Hermes Agent.

4. Response / Action

NalarCore returns useful information or performs an authorized server action.

Create a clean visual diagram for this flow.

==================================================

8. HERMES AGENT ARCHITECTURE SECTION

==================================================

Create a dedicated technical section explaining the planned architecture.

Visual flow:

Discord

↓

NalarCore Bot

↓

NalarCore API / Gateway

↓

Hermes Agent

↓

LLM Provider

↓

Tools / Knowledge / External Services

The architecture should visually distinguish between:

CURRENT

and

PLANNED

Example:

Current:

Discord → NalarCore → AI/API services

Planned:

Discord → NalarCore → Agent Gateway → Hermes Agent → LLM + Tools + Knowledge

Include the statement:

“NalarCore is designed with an agent-ready architecture. Hermes integration will extend its ability to reason across tasks, use authorized tools, and coordinate more complex workflows.”

Do not claim autonomous capabilities are currently available unless implemented.

==================================================

9. COMMANDS PAGE

==================================================

Create:

/commands

Design a searchable command directory.

Command categories:

AI

Knowledge

Discussion

Utility

Moderation

Community

Example command cards:

/ask

Ask NalarCore a question.

/summarize

Summarize supported conversation context.

/topic

Generate discussion prompts.

/help

Display available commands.

These should be treated as example/placeholders unless implemented.

Each command should display:

- command name

- description

- category

- example usage

- required permission if applicable

Include search and category filters.

==================================================

10. DOCUMENTATION

==================================================

Create:

/docs

Documentation sidebar:

Getting Started

Introduction

Adding NalarCore

Permissions

Commands

AI Features

Privacy

Security

Hermes Integration

FAQ

Create a clean developer-documentation layout.

For Hermes Integration, explain architecture at a high level without exposing credentials or sensitive infrastructure details.

==================================================

11. STATUS PAGE

==================================================

Create:

/status

Components:

NalarCore Bot

Operational

Discord Gateway

Operational

NalarCore API

Operational / Development

AI Provider

Operational / Configurable

Hermes Agent

In Development

Database

Not Configured / Operational depending implementation

Use status badges.

Do NOT create fake uptime percentages or incident history.

Prepare the component so real monitoring APIs can be connected later.

==================================================

12. ABOUT PAGE

==================================================

Create:

/about

Explain:

NalarCore is developed as part of the Teras Bernalar ecosystem to provide technological infrastructure for community discussions, information access, and server operations.

Explain the philosophy behind the name:

“Nalar”

represents reasoning, thought, and intellectual exploration.

“Core”

represents the technological foundation supporting the community.

Together:

NalarCore represents the technological reasoning layer at the core of the Teras Bernalar digital ecosystem.

Include:

Built for Teras Bernalar.

Do not invent organization addresses, legal entities, team members, or company information.

==================================================

13. DASHBOARD FOUNDATION

==================================================

Create:

/dashboard

If authentication/backend is not implemented, create the UI foundation only.

Dashboard sections:

Overview

Server

AI Settings

Commands

Knowledge

Agent

Moderation

Logs

Settings

Overview:

Server status

NalarCore status

AI status

Hermes Agent status

Recent activity placeholder

Agent section:

Hermes Agent

Status: Not Connected / In Development

Future configuration placeholders:

Agent Endpoint

Model Provider

Tool Permissions

Knowledge Sources

Memory Configuration

IMPORTANT SECURITY RULE:

Never expose:

- bot token

- API keys

- secret keys

- OAuth secrets

- Hermes credentials

Any sensitive configuration must eventually be handled server-side.

==================================================

14. PRIVACY POLICY

==================================================

Create a dedicated page:

/privacy

Title:

Privacy Policy

The policy must be written clearly and transparently.

IMPORTANT:

Do NOT invent data collection practices.

Structure the page so the developer can easily update the actual data practices before production.

Include sections:

1. Introduction

Explain that the Privacy Policy describes how NalarCore handles information when users interact with the bot, website, and related services.

2. Information We Process

Use cautious wording.

Potential information may include:

- Discord User ID

- Discord Server/Guild ID

- Channel ID

- Message content only when required to process a requested bot feature

- Commands and interactions sent directly to NalarCore

- Technical logs necessary for security, reliability, and debugging

Clearly state that actual collection depends on enabled features.

3. How Information Is Used

Examples:

- Responding to commands

- Providing AI features

- Maintaining service reliability

- Preventing abuse

- Debugging

- Improving service functionality

4. AI Processing

Explain that content submitted to AI-powered features may be processed by configured AI/LLM providers.

Do not claim zero retention unless technically guaranteed.

5. Data Retention

State that retention periods should be limited to what is necessary for operating and securing the service.

Provide placeholders for the developer to specify exact retention periods.

6. Data Sharing

Explain that information is not sold.

Data may be processed by infrastructure or AI providers required to operate NalarCore.

7. Discord

Explain that Discord itself operates under its own privacy policy and terms.

8. Security

Describe reasonable technical and organizational safeguards without claiming absolute security.

9. User Choices and Data Requests

Provide a mechanism/placeholder for users to request:

- access

- correction

- deletion

10. Children's Privacy

Include an appropriate section referencing applicable platform requirements without inventing an arbitrary age policy.

11. Changes to This Policy

12. Contact

Use placeholders such as:

[CONTACT EMAIL]

[EFFECTIVE DATE]

Do NOT fabricate contact information.

==================================================

15. TERMS OF SERVICE

==================================================

Create:

/terms

Title:

Terms of Service

Include:

1. Acceptance of Terms

2. Description of Service

3. Eligibility

4. Discord Platform Compliance

5. Acceptable Use

Users must not use NalarCore for:

- spam

- harassment

- illegal activities

- attempts to exploit the bot

- circumventing security

- unauthorized automation

- abuse of AI features

- disruption of Discord communities

6. AI-Generated Content

Clearly explain:

AI-generated responses may contain errors.

Users should independently verify important information.

NalarCore should not be treated as a substitute for professional legal, financial, or medical advice.

7. Server Administrator Responsibilities

Server administrators are responsible for configuring permissions appropriately.

8. Service Availability

NalarCore may be updated, interrupted, modified, or discontinued.

Do not promise guaranteed uptime.

9. Intellectual Property

10. Third-Party Services

Examples may include:

Discord

AI providers

hosting providers

11. Limitation of Liability

Use reasonable, readable language and avoid pretending this automatically satisfies every jurisdiction.

12. Suspension and Termination

13. Changes to Terms

14. Contact

Placeholders:

[EFFECTIVE DATE]

[CONTACT EMAIL]

Add a visible notice for the developer:

“Legal documents must be reviewed and updated to reflect NalarCore’s actual infrastructure, data processing practices, jurisdiction, and third-party providers before public launch.”

==================================================

16. SECURITY & PRIVACY BY DESIGN

==================================================

The website architecture should follow privacy-by-design principles.

Do not expose internal secrets.

Do not send sensitive configuration to the client.

Prepare backend boundaries for:

Discord Bot

Hermes Agent

LLM provider

database

Use server-side environment variables.

For future Discord OAuth:

request only necessary scopes.

For future bot permissions:

follow least-privilege principles.

For Hermes Agent:

implement an explicit tool permission model so agent tools cannot automatically perform privileged Discord actions without authorization.

Visually explain:

User

→ Discord

→ NalarCore

→ Permission Layer

→ Hermes Agent

→ Authorized Tools

==================================================

17. CONTACT / SUPPORT

==================================================

Create a simple support section.

Options:

Discord Community

Documentation

Report a Problem

Privacy Request

Do not invent URLs.

Use configurable placeholders:

[DISCORD INVITE URL]

[SUPPORT EMAIL]

[GITHUB URL]

Hide links gracefully if they have not been configured.

==================================================

18. FOOTER

==================================================

Footer structure:

NalarCore

“Intelligence at the Core of Conversation.”

Product

Features

Commands

Status

Resources

Documentation

Support

Community

Teras Bernalar

Discord

Legal

Privacy Policy

Terms of Service

Bottom:

© [CURRENT YEAR] NalarCore / Teras Bernalar.

All rights reserved.

Include:

“Not affiliated with Discord Inc.”

==================================================

19. RESPONSIVE DESIGN

==================================================

The entire website must work properly on:

Desktop

Laptop

Tablet

Mobile

Pay particular attention to:

- navbar

- hero

- architecture diagrams

- documentation sidebar

- command directory

- dashboard

Do not simply shrink desktop layouts on mobile.

==================================================

20. UX REQUIREMENTS

==================================================

Implement:

- Smooth page transitions

- Accessible focus states

- Semantic HTML

- Keyboard navigation

- Proper contrast

- Loading states

- Empty states

- Error states

- 404 page

- Responsive navigation

- Reusable components

Avoid excessive animation.

Animations should communicate system behavior, not distract users.

==================================================

21. SEO / METADATA

==================================================

Create proper metadata for each page.

Default title:

NalarCore — Intelligence at the Core of Conversation

Description:

NalarCore is an intelligent Discord companion built for the Teras Bernalar community ecosystem.

Add:

Open Graph metadata

favicon placeholder

canonical structure

robots configuration

==================================================

22. PROJECT STRUCTURE

==================================================

Use clean modular architecture.

Suggested conceptual structure:

components/

  layout/

  navigation/

  ui/

  features/

  commands/

  status/

  dashboard/

  legal/

pages/routes:

  /

  /features

  /commands

  /docs

  /status

  /about

  /dashboard

  /privacy

  /terms

Keep content and configuration separated from UI where practical.

Create centralized configuration for:

APP_NAME

APP_DESCRIPTION

DISCORD_INVITE_URL

BOT_INVITE_URL

SUPPORT_EMAIL

GITHUB_URL

API_BASE_URL

This allows NalarCore infrastructure to be connected later without rewriting UI components.

==================================================

23. IMPORTANT DEVELOPMENT RULES

==================================================

Do not invent statistics.

Do not invent:

- number of servers

- number of users

- uptime

- AI accuracy

- response speed

- team members

- testimonials

Do not display fake testimonials.

Do not claim Hermes Agent is already integrated.

Do not hardcode sensitive credentials.

Do not use lorem ipsum.

Use meaningful Indonesian or English copy throughout the interface.

Prefer Indonesian for community-facing explanations, while technical terminology may remain in English.

Build the website as a credible early-stage open community infrastructure project, not as a fake established corporation.

==================================================

24. FINAL GOAL

==================================================

The final website should communicate that:

NalarCore is the technological intelligence layer supporting Teras Bernalar.

Today it can serve as the foundation for Discord bot utilities and AI-assisted community features.

In the future, Hermes Agent integration can expand NalarCore into a more capable agent system with reasoning, tool usage, knowledge access, and community automation — while maintaining explicit permissions, security boundaries, and human control.

The final result should feel polished enough to become the official public website of NalarCore.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ce9b408a-35c9-4c01-91e1-84c3252847b4).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
