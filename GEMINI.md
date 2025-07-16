# Vibe Coding Web App
A svelte-kit web app project. AI based code generator by just instruct AI using prompt ideas and you will get magic project. You can collaborate with AI with using chat based

## Tech stack
* **Node.js 18+ + npm:** For the server-side runtime and package management.
* **SvelteKit:** The robust framework for building fast and reactive web applications, providing server-side rendering (SSR) and file-based routing.
* **TailwindCSS:** A utility-first CSS framework for rapidly styling the application with a highly customizable and efficient approach.

### Goals
  * **Generate public user interface for user to interact with AI:** This will be the core of your application, providing an intuitive and responsive interface for users to input prompts and view generated code.
  * **Integrate with an AI model for code generation:** This will involve setting up API routes in SvelteKit to communicate with a chosen AI model (e.g. Google's Gemini, etc.).
  * **Implement a chat-based collaboration system:** Allow users to refine their prompts and iteratively generate code through a conversational interface.
  * **Provide mechanisms for displaying and potentially editing generated code:** Syntax highlighting and basic code editing features will enhance the user experience.
  * **Handle user authentication:** Securely manage user sessions and project data.


### Project structure

Your proposed project structure is excellent and follows SvelteKit's conventions. Here's a slightly expanded view with some considerations:

dash case file naming is must for consistency.
```
src
├── app.d.ts // TypeScript declaration file for the SvelteKit app
├── app.html // Main HTML file for the SvelteKit app
├── lib      // Contains reusable components, modules, and utilities
|   ├── app.css  // Global CSS styles for the application
│   ├── index.ts // Entry point for the lib directory
│   ├── theme.svelte.ts // Theme related logic or store
│   ├── actions  // Svelte actions
│   │   └── click-outside.svelte.ts // Action for detecting clicks outside an element
│   ├── server // Server-side code
│   │   ├── ai.ts // Service for interacting with AI models
│   │   └── db.ts // Database related functions
│   ├── stores // Svelte stores for managing application state
│   │   ├── auth-store.svelte.ts // Store for authentication state
│   │   └── chat-store.svelte.ts // Store for chat related state
│   └── ui // UI components
│       ├── button.svelte // Button component
│       ├── chat-message.svelte // Component for displaying chat messages
│       ├── code-block.svelte // Component for displaying code blocks
│       ├── input.svelte // Input component
│       └── preview.svelte // Component for previewing content
└── routes // SvelteKit routes
    ├── +layout.svelte // Root layout for the application
    ├── (home) // Group of routes under the / path
    │   ├── +page.svelte // Page component for the / path
    │   └── project // Routes related to projects
    │       └── [id] // Dynamic route for project with an ID
    │           ├── +layout.svelte // Layout for individual project pages
    │           └── +page.svelte // Page component for individual project pages
    └── api // API routes
        └── code // API routes related to code
            └── stream // API route for chat based code generator streaming
                └── +server.ts // Server chat for the code streaming API endpoint

```

### Best Practice

### Coding Guidelines

1. Svelte component must be writen in runes mode. good example to start:
    ```svelte
    <!-- script1 (optional) when need to export some variable or snippets -->
    <script lang="ts" module>
      
    </script>
    <!-- script2 (required) -->
    <script lang="ts">
      let {} = $props()
    </script>
    <!-- HTML -->
    --- rest of html template file in svelte component ---
    <!-- css -->
    <style lang="postcss">
      /** reference base app.css file when need to use tailwind directive like @apply or other */
      @reference "$lib/app.css";
      ... rest of tailwindcss css definition ...
    </style>
    ```
### Related links
[Svelte](https://svelte.dev)