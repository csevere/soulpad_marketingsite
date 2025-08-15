# SoulPad MVP: Profile Demo - Requirements

This document outlines the core requirements for the Minimum Viable Product (MVP) of SoulPad, focused on delivering a foundational "MySpace Profile" like demo. The goal is to showcase the platform's core premise of **self-expression and aesthetic freedom** through a highly customizable personal digital space, distinct from traditional social media [1, 2].

## 1. Core Vision & Purpose

*   **Empower Self-Expression:** Provide a creative universe for users to express their digital identity [1, 2].
*   **Aesthetic Freedom:** Allow **extensive customization of layouts, themes, and content** on a personal "SoulPad" [1, 3].
*   **Post-Social Media Ethos (Simplified for MVP):** Focus on **individual creation** over engagement metrics; this MVP will not include likes, followers, or feeds [2, 4].
*   **Privacy-First (Simplified for MVP):** The SoulPad belongs to the user, with an option for **private or public visibility** [3].

## 2. Key User Journeys (MVP Scope)

### 2.1 Create & Customize a SoulPad

*   **User navigates to the SoulPad creation page:** A clear entry point to begin creating their personal space.
*   **User is presented with an editable canvas (the "SoulPad"):** This serves as the central creative workspace for self-expression [3, 5].
*   **User can add and manipulate basic content elements on the canvas:**
    *   **Text Blocks:** Add and edit text, with basic styling options (e.g., font, size, color) [6].
    *   **Images:** Upload images (from a local device) and place them on the canvas [6].
    *   **Basic Shapes:** Add simple geometric shapes (e.g., rectangles, circles) [6].
*   **User can freely arrange elements:** Users must be able to **move, resize, rotate, and layer elements** on the canvas, providing "aesthetic freedom" [3, 6].
*   **User can apply basic themes/backgrounds:** Select from a limited set of pre-defined visual themes or backgrounds for their SoulPad.
*   **User can save their SoulPad:** Persist the current state of their SoulPad (all elements, positions, styles) [6, 7]. This save operation implicitly assigns a unique identifier to the SoulPad [8].
*   **User can view their saved SoulPad:** Access their SoulPad via a unique URL (e.g., `/s/user-vanity-url` for public views, `/edit/soulpad-id` for editing) [8].

### 2.2 Manage SoulPad Visibility

*   **User can toggle SoulPad visibility:** Choose between "Private" (only accessible for editing by the creator) and "Public" (viewable by anyone with the unique URL) [3, 8].
*   **Public SoulPads are viewable as static pages:** When a public SoulPad is accessed, it will be served as a pre-rendered, static HTML page for **fast loading and optimal performance** [9, 10].

## 3. Out of Scope for MVP (Future Enhancements)

*   **User Registration & Accounts:** This MVP will enable creation and saving of a SoulPad without requiring traditional user registration or a login/password system. SoulPads will be identified by unique IDs [11, 12].
*   **Real-time Collaboration:** Invite-only comments, voice notes, or shared editing sessions are not included in this MVP [3].
*   **AI Helper Bot:** The personalized AI assistant is explicitly out of scope for this MVP [1, 3, 13].
*   **SoulStore & Digital Asset Management:** The marketplace for buying/selling art assets is not part of this MVP [1, 3, 14].
*   **Complex Interactions/Widgets:** Interactive elements beyond basic text and images are out of scope.
*   **Advanced Image/Content Editing:** Only basic placement of images; features like filters or complex cropping are not included.

## 4. Technical Considerations (MVP Foundation)

The MVP will leverage a subset of the recommended tech stack, focusing on rapid development and laying the groundwork for future features.

*   **Frontend Framework (Next.js):**
    *   Will be used for building the **highly interactive SoulPad editor** via Client-Side Rendering (CSR) [10, 15].
*   **Frontend Framework (Gatsby 5, migrating to Next.js):**
    *   The current implementation uses **Gatsby 5** for building the highly interactive SoulPad editor and static public SoulPad views.
    *   There is a planned migration to **Next.js** to leverage its advanced features such as Client-Side Rendering (CSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) [10, 15].
*   **Canvas Engine (Fabric.js):**
    *   Chosen for its **granular control over HTML5 canvas elements**, enabling deep aesthetic customization and free manipulation of objects (text, images, shapes) [16, 17].
    *   Its ability to **serialize the canvas state to JSON** is crucial for persisting user-created SoulPads [6].
*   **UI Component Management (Storybook):**
    *   Will be used to develop and document reusable UI components in isolation, ensuring consistency and accelerating UI development across customizable SoulPads and themes [18, 19].
*   **Real-time & State Persistence (PartyKit / Cloudflare Durable Objects):**
    *   Each SoulPad will be managed as a unique, stateful entity via a **Cloudflare Durable Object**, orchestrated by **PartyKit** [7, 20].
    *   This layer will primarily handle the persistence of the SoulPad's interactive state (the Fabric.js JSON) across sessions, not multi-user collaboration for this MVP [7].
*   **Database (PlanetScale - Relational):**
    *   Will store structured metadata about SoulPads, including their unique ID, `owner_user_id`, `vanity_url`, and `is_public` status [8, 21, 22].
    *   The serialized JSON canvas data from Fabric.js will be stored as part of the SoulPad configuration within this database.
*   **Asset Storage (Cloudflare R2):**
    *   Will be used for storing user-uploaded image files that are placed on the SoulPad canvas. Its **zero egress fees** are critical for handling media-rich user-generated content cost-effectively [23, 24].
*   **API-First Approach:** Communication between frontend and backend components will rely on well-defined APIs to ensure modularity and independent evolution [25].
*   **Scalability & Performance:** The architecture will leverage Next.js SSG/ISR, Cloudflare's edge network, and R2 for fast asset delivery, laying the groundwork for future scalability [26].
*   **Security:** Basic security considerations will be implemented for data in transit and at rest, with a focus on securely managing the public/private visibility mechanism [27].
