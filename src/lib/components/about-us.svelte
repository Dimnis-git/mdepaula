<script lang="ts">
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const aboutUs = [
		{
			title: 'Quem nós somos?',
			subtitle:
				'Com mais de 30 anos de tradição no mercado de marcenaria, a Mdepaula é especialista em móveis planejados em MDF, oferecendo soluções sob medida que transformam ambientes com sofisticação, funcionalidade e durabilidade.'
		},
		{
			title: 'Como trabalhamos?',
			subtitle:
				'Desde o início da nossa trajetória, mantemos o compromisso com a qualidade artesanal, o atendimento personalizado e a entrega de projetos que aliam design inteligente e materiais de primeira linha.'
		},
		{
			title: 'O que entregamos?',
			subtitle:
				'Cada móvel planejado pela Mdepaula é pensado para refletir o seu estilo de vida, suas necessidades e o seu sonho. Atuamos em projetos residenciais e comerciais, sempre priorizando o cuidado com os detalhes, o acabamento impecável e a satisfação de cada cliente.'
		}
	];

	let showItems = $state(false);
	let listElement: HTMLUListElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					showItems = true;
					observer.disconnect();
				} 
			},
			{
				threshold: 0.1
			}
		);

		if (listElement)
			observer.observe(listElement);

		return () => {
			if (listElement) 
				observer.unobserve(listElement);
		};
	});
</script>

<h2>Sobre nos:</h2>

<ul class="mt-4 xl:px-96" bind:this={listElement}>
	{#each aboutUs as item, i (i)}
		{#if showItems}
			<li
				class="mb-6 rounded-3xl border border-gray-200 bg-white p-6 font-figtree shadow-xl w-full"
				in:scale={{ delay: i * 600, duration: 1000, easing: quintOut }}
			>
				<h3 class="mb-2 text-lg font-semibold">{item.title}</h3>
				<p class="text-current/70">{item.subtitle}</p>
			</li>
		{/if}
	{/each}
</ul>
