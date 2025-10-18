# Chat & Video Call UI (Take‑home Assignment)

A front‑end React application that mimics a modern chat interface with:
- Sidebar chat list and a "New Message" flow with doctor suggestions
- Rich message composer with text and attachments (image/PDF preview)
- Message actions (copy, like/dislike) and mock assistant replies
- Video call view (individual/group) with action buttons and transcript panel

This project is intentionally front‑end only. All data/state is local to the browser.


## Tech Stack
- React 19 + TypeScript + Vite 7
- Tailwind CSS v4 with @tailwindcss/vite plugin
- Zustand for state management
- Radix UI primitives (Dialog as Sheet, Popover, Tabs, Scroll Area) with thin wrappers in src/components/ui
- lucide-react for icons
- Utility: clsx + tailwind-merge (exposed via cn helper)

Notable configuration:
- Path alias @ -> src (see vite.config.ts)
- Google font: Geist (loaded in index.html)


## Getting Started
Prerequisites:
- Node.js 18+ (20+ recommended)
- A package manager: npm, pnpm, or bun (a bun.lock is present, but npm/pnpm work fine)

Install dependencies:
- npm: npm install
- pnpm: pnpm install
- bun: bun install

Run the dev server:
- npm run dev
- Then open http://localhost:5173

Build and preview production bundle:
- Build: npm run build
- Preview: npm run preview

Lint:
- npm run lint


## Project Structure (high level)
- src/
  - App.tsx: App shell and main layout
  - components/
    - Chat.tsx: Layout primitives (Header/Content) and header logic (video/phone actions)
    - ChatMessageFrame.tsx: Conversation view, sending messages, mock replies, doctor card
    - ChatMessage.tsx: Bubble rendering + actions (copy, like/dislike)
    - ChatInput.tsx: Text + file attachments (image/PDF preview)
    - VideoCallFrame.tsx, GroupVideoCall.tsx, VideoCallActionButtons.tsx
    - TranscriptPanel.tsx
    - Header.tsx, Sidebar.tsx, NewChatHeader.tsx, DoctorCard.tsx
    - ui/: Light wrappers over Radix primitives (popover, sheet, tabs, scroll-area)
  - store/
    - useChatStore.ts: Chats, messages, recipients, reactions (Zustand)
    - useCallStore.ts: Call state (isCalling, start/end)
  - data/
    - doctors.ts: Static doctor data used for suggestions and labeling
  - types/
    - input.ts: Message/input and doctor types
  - lib/
    - utils.ts: cn helper (clsx + tailwind-merge)

Styles:
- src/index.css defines Tailwind v4 layers and project color tokens

Build tooling:
- vite.config.ts includes React plugin, Tailwind v4 plugin, and alias
- eslint.config.js configures TypeScript + React Hooks + React Refresh rules


## How to Use
- Start a new chat: click the pencil icon in the Sidebar header
  - Add recipients by typing doctor names; suggestions come from src/data/doctors.ts
- Send a message:
  - Type and press Enter (Shift+Enter for newline), or click Send
  - Attach files with the paperclip (image and PDF are previewed)
- Message actions (assistant messages only): copy, like, dislike
- Toggle video call:
  - Click the video button in the chat header; a call UI is shown
  - Individual versus group layout is chosen based on the current chat type
  - Group call UI can show/hide a transcript panel


## Assumptions & Limitations
- Front‑end only: no backend or persistence; state resets on refresh
- Doctors list and content are static fixtures (src/data/doctors.ts)
- File attachments are previewed locally via object URLs; no uploads occur
- "Assistant" replies are mocked from a local list for demo purposes
- User identity is fixed to senderId = "0" for authored messages
- Media/voice features and real-time networking are non-functional mock UI
- Modern evergreen browsers expected; tested with Vite dev server defaults


## Scripts (package.json)
- dev: vite (start dev server)
- build: tsc -b && vite build
- preview: vite preview
- lint: eslint .


## License
For evaluation as part of a take‑home assignment.