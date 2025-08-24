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
	<a {href} {title} class="p-1.5 lg:p-3 rounded-full text-white drop-shadow-sm {title === 'Instagram' ? 'bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-pink-400' : 'bg-green-500 drop-shadow-green-400'}">
		<Icon {icon} class="text-lg lg:text-4xl"/>
	</a>
{/snippet}