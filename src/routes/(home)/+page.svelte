<script lang="ts">
  import Icon from "@iconify/svelte";
</script>
<main class="flex-grow flex items-center justify-center">
  <div class="w-full max-w-4xl mx-auto px-4 py-16 text-center relative">
    <!-- Latar belakang gradien -->
    <div class="absolute inset-0 bg-radial from-gray-200 from-1% to-transparent"></div>

    <!-- Konten di atas gradien -->
    <div class="relative z-10 flex flex-col items-center py-16">
      <!-- Lencana "Powered by" -->
      <div
        class="border border-gray-300 bg-white rounded-lg px-3 py-1 text-sm mb-8 shadow-sm"
      >
        Powered by <span class="font-semibold">AI</span>. Used by
        <span class="font-semibold">1.9M+ users</span>.
      </div>

      <!-- Judul Utama -->
      <h1 class="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
        Turn your
        <span
          class="bg-gradient-to-r from-blue-500 to-sky-400 bg-clip-text text-transparent"
          >idea</span
        >
        <br />
        into an
        <span
          class="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
          >app</span
        >
      </h1>

      <!-- Bilah Pencarian -->
      <div
        class="w-full max-w-3xl bg-white border border-gray-200 rounded-xl shadow-lg p-2 flex flex-col gap-2 mb-4"
      >
        <textarea
          placeholder="Build me a budgeting app..."
          class="flex-grow w-full text-base p-2 border-none focus:ring-0 outline-none bg-transparent min-h-24"
        ></textarea>
        <div class="flex items-center gap-2 w-full">
          <button
            class="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
          >
            <span class="inline">DeepSeek V2</span>
            <Icon icon="ri:arrow-down-wide-fill" class="size-4" />
          </button>

          <button
            class="ml-auto flex items-center justify-center gap-2 bg-blue-500 text-gray-50 text-sm font-medium px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
          >
            <Icon icon="ri:send-plane-fill" class="size-4" />
            <span class="inline">Generate</span>
          </button>
        </div>
      </div>

      <!-- Tombol Saran -->
      <div class="flex flex-wrap justify-center gap-2">
        <button
          class="bg-white border border-gray-200 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >Quiz app</button
        >
        <button
          class="bg-white border border-gray-200 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >SaaS Landing page</button
        >
        <button
          class="bg-white border border-gray-200 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >Pomodoro Timer</button
        >
        <button
          class="bg-white border border-gray-200 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >Blog app</button
        >
        <button
          class="bg-white border border-gray-200 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >Flashcard app</button
        >
        <button
          class="bg-white border border-gray-200 text-gray-600 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors"
          >Timezone dashboard</button
        >
      </div>
    </div>
  </div>
</main>
