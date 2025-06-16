<script lang="ts">
	import '../app.css';
	import Logo from '$lib/images/MdePaula-Logo.png';
	import Icon from '@iconify/svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>MdePaula | Marcenaria</title>
</svelte:head>
<header>
	<img src={Logo} alt="Logo" />
	<div id="header-links">
		{@render HeaderLinks(
			'https://api.whatsapp.com/send?phone=11995943124',
			'ic:baseline-whatsapp',
			'WhatsApp'
		)}
		{@render HeaderLinks('https://www.instagram.com/mdepaula1990', 'mdi:instagram', 'Instagram')}
	</div>
</header>

<main>
	{@render children()}
</main>

{#snippet HeaderLinks(href: string, icon: string, title: string)}
	<a {href} target="_blank" {title}>
		<Icon {icon} style="font-size: larger" />
	</a>
{/snippet}

<style>
	header {
		padding-left: 10px;
		display: flex;
		align-items: center;
		height: 8vh;
		z-index: 999;
	}

	header img {
		width: 100px;
	}

	header #header-links {
		padding-right: 20px;
		display: flex;
		gap: 10px;
		margin-left: auto;
	}

	header #header-links a {
		display: flex;
		padding: 5px;
		border-radius: 30%;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	header #header-links a[title='WhatsApp'] {
		background: linear-gradient(to right, #25d366, #128c7e);
	}

	header #header-links a[title='Instagram'] {
		background: linear-gradient(to right, #f58529, #dd2a7b, #8134af);
	}

	main {
		padding: 12px;
	}

	#menu-button {
		cursor: pointer;
		display: flex;
		padding: 4px;
		border-radius: 30%;
		color: var(--color-1);
		margin-right: 6px;
		margin-top: 1px;
		background: transparent;
	}
</style>
