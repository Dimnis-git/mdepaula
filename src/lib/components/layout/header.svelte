<script lang="ts">
	import Logo from '$lib/images/MdePaula-Logo.png';
	import Icon from '../icon.svelte';
</script>

<header class="flex justify-between items-center m-4">
	<div>
		<img src={Logo} alt="Logo" class="w-28 lg:w-48 drop-shadow-sm drop-shadow-yellow-700/60"/>
	</div>
	<div class="flex item gap-4">
		{@render HeaderLinks(
			'https://api.whatsapp.com/send?phone=11995943124',
			'ic:baseline-whatsapp',
			'WhatsApp'
		)}
		{@render HeaderLinks('https://www.instagram.com/mdepaula1990', 'mdi:instagram', 'Instagram')}
	</div>
</header>

{#snippet HeaderLinks(href: string, icon: string, title: string)}
	<button {title} class="z-50 cursor-pointer w-8 h-8 lg:h-16 lg:w-16 flex justify-center items-center rounded-full text-white drop-shadow-sm {title === 'Instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-pink-400' : 'bg-green-500 drop-shadow-green-400'}" onclick={() => window.open(href, '_blank', 'noopener')}>
		<Icon {icon} class="text-lg lg:text-4xl"/>
	</button>
{/snippet}