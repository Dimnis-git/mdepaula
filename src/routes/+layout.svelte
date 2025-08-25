<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/layout/header.svelte';
	import { beforeNavigate } from '$app/navigation';

	beforeNavigate(() => {
		window.scrollTo(0, 0);
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>MdePaula | Marcenaria</title>
</svelte:head>

<Header />

<main class="px-6 min-h-fit">
	{@render children()}
</main>