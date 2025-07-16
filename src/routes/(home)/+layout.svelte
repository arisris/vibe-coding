<script lang="ts">
  import Icon from "@iconify/svelte";
  let { children } = $props();
</script>

<section class="flex flex-col min-h-screen">
  <header class="absolute top-0 left-0 right-0 z-10">
    <div class="container mx-auto px-6 py-6 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <Icon icon="material-icon-theme:gemini-ai" class="size-6" />
        <span class="font-semibold text-lg">Gemini</span>
        <span class="text-gray-400">|</span>
        <span class="text-gray-600">Ai</span>
      </div>
      <!-- Tautan GitHub -->
      <a
        href="/#"
        class="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-100 transition-colors"
      >
        <Icon icon="ri:github-fill" class="size-4" />
        Star
        <span
          class="bg-gray-200 text-gray-700 text-xs font-semibold ml-1 px-2 py-0.5 rounded-full"
          >9.1k</span
        >
        on GitHub
      </a>
    </div>
  </header>
  {@render children()}
  <footer class="w-full">
    <div
      class="container mx-auto px-6 py-4 flex justify-between items-center text-sm text-gray-500"
    >
      <p>
        Built By
        <span class="font-semibold text-gray-600">Arisris.com</span>
      </p>
      <div class="flex items-center gap-4">
        <a href="/#" class="hover:text-gray-800 transition-colors">
          <Icon icon="ri:twitter-x-fill" class="size-6" />
          <span class="sr-only">Twitter</span>
        </a>
        <a href="/#" class="hover:text-gray-800 transition-colors">
          <Icon icon="ri:github-fill" class="size-6" />
          <span class="sr-only">GitHub</span>
        </a>
      </div>
    </div>
  </footer>
</section>
