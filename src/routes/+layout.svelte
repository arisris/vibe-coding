<script>
  import { themeScript } from "$lib/theme.svelte";
  import "$lib/app.css";
  let { children } = $props();
</script>

<svelte:head>
  {@render themeScript()}
</svelte:head>

{@render children()}
