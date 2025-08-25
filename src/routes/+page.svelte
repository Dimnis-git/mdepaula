<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import Icon from '@iconify/svelte';
	import MainTitle from '$lib/components/main-title.svelte';
	import MainCarrousel from '$lib/components/main-carrousel.svelte';
	import AboutUs from '$lib/components/about-us.svelte';
	import Footer from '$lib/components/layout/footer.svelte';

	const services = [
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
	];

	let isScrolledAboutUs = $state(false);
	let isScrolledServices = $state(false);

	function handleScroll() {
		const cardAboutUs = document.getElementById('card-about-us');
		const cardServices = document.getElementById('card-services');

		if (cardAboutUs) {
			const rect = cardAboutUs.getBoundingClientRect();
			isScrolledAboutUs = rect.top < window.innerHeight;
		}

		if (cardServices) {
			const rect = cardServices.getBoundingClientRect();
			isScrolledServices = rect.top < window.innerHeight;
		}
	}
</script>

<MainTitle />

<MainCarrousel />

<AboutUs />

<Footer />

<!-- {@render SubTitle('Nossos serviços:')}

<ul class="services">
	{#each services as service, i (i)}
		<li>
		</li>
	{/each}
</ul> -->

<!-- 
{#each services as item, i (i)}
	<div
		id={i === 0 ? 'card-services' : ''}
		class="card-services"
		class:visible={isScrolledServices}
		style="transform: translateX({isScrolledServices ? 0 : -100}px); opacity: {isScrolledServices
			? 1
			: 0}; transition: transform 1.75s ease, opacity 0.5s ease;"
	>
		<Icon
			icon={item.icon}
			style="font-size:72px; border-right: 2px solid rgba(0, 0, 0, 0.30); padding-right: 14px"
		/>
		<div class="card-information">
			<h3>{item.title}</h3>
			<p>{item.subtitle}</p>
		</div>
	</div>
{/each} -->

<!-- <h3 id="sub-title">Galeria:</h3> -->

<!-- <div class="card-galery">
	<header>
		<span>Cozinhas</span>
	</header>
	<img src={Example1} alt={`Image ${currentImageIndex + 1}`} />
	<div style="position: absolute: right: 0">
		<button type="button">
			<Icon icon="material-symbols:arrow-circle-left"/>
		</button>
		<button type="button">
			<Icon icon="material-symbols:arrow-circle-right"/>
		</button>
	</div>
</div> -->

{#snippet SubTitle(text: string)}
	<h3>{text}</h3>
{/snippet}

<style>
	.card {
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		background: white;
		border-radius: 16px;
		padding: 24px;
		margin-bottom: 40px;
		font-family: Figtree;
	}

	.card * {
		opacity: 1;
	}

	.card header {
		font-family: Cal Sans;
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 10px;
	}

	.card h3 {
		margin: 0;
	}

	.card p {
		font-size: 1rem;
		color: #555;
	}

	/* #sub-title {
		font-family: Cal Sans;
		text-align: center;
		font-size: 1.5rem;
		margin-top: 60px;
		margin-bottom: 30px;
	} */

	.card-services {
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		background: white;
		border-radius: 16px;
		padding: 24px;
		margin-bottom: 40px;
		font-family: Figtree;
		display: flex;
		align-items: center;
	}

	.card-services .card-information {
		padding-left: 20px;
	}

	.card-services .card-information h3 {
		font-weight: 700;
		font-size: large;
		margin-bottom: 10px;
	}

	.card-galery {
		border-radius: 32px;
		box-shadow: 3px 0px 59px 3px rgba(159, 98, 57, 0.68);
		-webkit-box-shadow: 3px 0px 59px 3px rgba(159, 98, 57, 0.68);
		-moz-box-shadow: 3px 0px 59px 3px rgba(159, 98, 57, 0.68);
		display: flex;
		flex-direction: column;
	}

	.card-galery header {
		text-align: center;
		border-top-left-radius: 32px;
		border-top-right-radius: 32px;
		padding: 14px;
		font-family: Cal Sans;
		background: linear-gradient(to right, var(--color-3), var(--color-4), var(--color-3));
	}

	.card-galery img {
		border-bottom-left-radius: 32px;
		border-bottom-right-radius: 32px;
	}

	.card-galery button {
		position: absolute;
	}
</style>
