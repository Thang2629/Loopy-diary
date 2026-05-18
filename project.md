# Project Brief: Loopy Diary

## 1. Project Overview
**Loopy Diary** is a playful, interactive decision-making web application designed to help users resolve indecision through a "Soft-Playful Modernism" experience. Built around the popular **Zanmang Loopy** (pink beaver) character, the app combines utility with a "vô tri" (silly/mindless) aesthetic to make choosing fun.

## 2. Target Audience
- Fans of the Zanmang Loopy character.
- Users looking for a fun, low-stakes way to make everyday decisions (e.g., "What to eat?", "Which movie to watch?").
- Communities seeking a shared, interactive tool for random selection.

## 3. Design Philosophy: "Soft-Playful Modernism"
- **Visual Style**: Pastel pink-dominant palette, soft 3D renders, rounded corners (Round-Full), and generous whitespace.
- **Atmosphere**: "Vô Tri" (Head empty, no thoughts). The design is intentionally derpy, cute, and slightly chaotic.
- **Typography**: Quicksand (Rounded, friendly sans-serif).
- **Core Elements**: 
  - Dynamic 3D Zanmang Loopy character assets scattered across the UI.
  - Floating, animated decorative elements (bubbles, balloons, confetti).

## 4. Key Features & Functionality

### A. The Decision Engine (Slot Machine Style)
*Replacing the traditional wheel with a vertical slot mechanic.*
- **Vertical Selection Box**: A rectangular frame displaying the list of options.
- **Scrolling Effect**: High-speed vertical scrolling of names upon interaction.
- **Easing Logic**: Smooth deceleration until a single winner is centered.
- **Celebration State**:
  - Confetti shower.
  - Sunburst background animation behind the winner.

### B. Post-Spin Actions (Okiela & Hogg)
*Context-aware buttons that appear after a result is drawn.*
- **Okiela Button**: Confirms the result and ends the session.
- **Hogg Button**: 
  - **Logic**: Removes the winning option from the current list.
  - **Interaction**: Hides the action buttons and prepares the machine for an immediate re-spin.

### C. Input Management
- **Option List**: Users can add, edit, and delete choices manually.
- **Smart Random**: AI-powered variety for quick list generation.
- **Community Themes**: Browse and load pre-made selection lists.

### D. Animated "Vô Tri" Decorations
- **Floating**: Loopy characters gently bobbing up and down.
- **Wiggling**: Playful side-to-side rotations for mischievous expressions.
- **Pulse/Swing**: Slow, rhythmic movements that keep the page feeling alive without distracting from the task.

## 5. Technical Requirements
- **Responsive Web Design**: Optimized for Desktop (primary) with support for mobile interactions.
- **Animation System**: CSS-based infinite loops for background characters; JavaScript-driven state management for the slot machine and "Hogg" removal logic.
- **State Management**: Local storage for "History" tracking and current option lists.

## 6. Brand Assets
- **Logo**: "Loopy Diary" wordmark in Quicksand Bold.
- **Characters**: A curated set of Zanmang Loopy 3D renders representing various emotions: Joyful, Thinking, "Vô Tri", Celebratory, Office Core, and Luxury.
