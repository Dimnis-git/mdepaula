<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>MdePaula | Marcenaria</title>
</svelte:head>

<Header />

<main class="px-6">
	{@render children()}
</main>