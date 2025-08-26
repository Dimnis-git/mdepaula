<script lang="ts">
	import { onMount } from "svelte";
	import { quintOut } from "svelte/easing";
	import { fly } from "svelte/transition";
	import Icon from "./icon.svelte";

	const services = $state([
		{
			icon: 'mdi:kitchen-counter-outline',
			title: 'Cozinhas Planejadas',
			subtitle:
				'Projetos personalizados e funcionais para cozinhas de todos os tamanhos, integrando design moderno e praticidade.'
		},
		{
			icon: 'icon-park-outline:bedside-two',
			title: 'Quartos Sob Medida',
			subtitle:
				'Planejamos o seu quarto com móveis otimizados para aproveitar cada espaço de maneira inteligente e bonita.'
		},
		{
			icon: 'hugeicons:office-chair',
			title: 'Escritórios',
			subtitle:
				'Desenvolvemos ambientes de trabalho elegantes e confortáveis, feitos para aumentar a produtividade.'
		},
		{
			icon: 'solar:closet-linear',
			title: 'Closets Personalizados',
			subtitle:
				'Closets projetados sob medida, com aproveitamento de espaço e alta qualidade de acabamento.'
		}
	]);

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

<h2>Nosso serviços:</h2>

<ul class="mt-4 xl:px-96" bind:this={listElement}>
	{#each services as item, i (i)}
		{#if showItems}
			<li
				class="mb-6 rounded-3xl border border-gray-200 bg-white p-6 font-figtree shadow-xl w-full"
				in:fly={{ delay: i * 300, duration: 1000, easing: quintOut }}
			>
                <header class="flex items-center gap-3 mb-2">
                    <Icon icon={item.icon} class="text-xl"/>
			    	<h3 class="text-lg font-semibold">{item.title}</h3>
                </header>
				<p class="text-current/70">{item.subtitle}</p>
			</li>
		{/if}
	{/each}
</ul>
