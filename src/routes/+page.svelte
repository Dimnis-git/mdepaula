<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Example1 from '$lib/images/examples/1.jpeg';
	import Example2 from '$lib/images/examples/2.jpeg';
	import Example3 from '$lib/images/examples/3.jpeg';
	import Example4 from '$lib/images/examples/4.jpeg';
	import Icon from '@iconify/svelte';

	let images = [Example1, Example2, Example3, Example4];

	let currentImageIndex = $state(0);

	let interval: ReturnType<typeof setInterval>;

	const aboutUs = [
		{
			title: 'Quem nós somos?',
			subtitle:
				'Com mais de 30 anos de tradição no mercado de marcenaria, a Mdepaula é especialista em móveis planejados em MDF, oferecendo soluções sob medida que transformam ambientes com sofisticação, funcionalidade e durabilidade.',
			trigger: true
		},
		{
			title: 'Como trabalhamos?',
			subtitle:
				'Desde o início da nossa trajetória, mantemos o compromisso com a qualidade artesanal, o atendimento personalizado e a entrega de projetos que aliam design inteligente e materiais de primeira linha.',
			trigger: false
		},
		{
			title: 'O que entregamos?',
			subtitle:
				'Cada móvel planejado pela Mdepaula é pensado para refletir o seu estilo de vida, suas necessidades e o seu sonho. Atuamos em projetos residenciais e comerciais, sempre priorizando o cuidado com os detalhes, o acabamento impecável e a satisfação de cada cliente.',
			trigger: false
		}
	];

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

	onMount(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		window.addEventListener('scroll', handleScroll);

		interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % images.length;
		}, 3000);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearInterval(interval);
		};
	});

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

<section id="hero">
	<Icon icon="fluent-emoji:sparkles" style=" font-size: 28px" />
	<h1 id="title">Transformando ideias em móveis que fazem parte da sua história.</h1>
	<Icon icon="fluent-emoji:couch-and-lamp" style=" font-size: 28px" />
</section>

<div id="galery">
	<div id="carousel">
		{#each images as image, index}
			<img
				src={image}
				alt={`Image ${currentImageIndex + 1}`}
				class:active={index === currentImageIndex}
			/>
		{/each}
	</div>
</div>

<h3 id="sub-title">Sobre nós:</h3>

{#each aboutUs as item, i (i)}
	<div
		id="card-about-us"
		class="card"
		class:visible={isScrolledAboutUs}
		style="transform: translateX({isScrolledAboutUs ? 0 : 100}px); opacity: {isScrolledAboutUs
			? 1
			: 0}; transition: transform 1.75s ease, opacity 0.5s ease;"
	>
		<header>
			<h3>{item.title}</h3>
		</header>
		<p>{item.subtitle}</p>
	</div>
{/each}

<h3 id="sub-title">Nossos serviços:</h3>

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
{/each}

<h3 id="sub-title">Galeria:</h3>

<div class="card-galery">
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
</div>

<style>
	#galery,
	#carousel {
		border-radius: 32px;
	}

	#galery {
		box-shadow: 3px 0px 59px 3px rgba(159, 98, 57, 0.68);
		-webkit-box-shadow: 3px 0px 59px 3px rgba(159, 98, 57, 0.68);
		-moz-box-shadow: 3px 0px 59px 3px rgba(159, 98, 57, 0.68);
		user-select: auto;
		margin-top: 10px;
		height: 80vh;
		user-select: none !important;
	}

	#carousel {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	#carousel img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 1s ease-in-out;
		touch-action: pan-y;
	}

	#carousel img.active {
		opacity: 1;
	}

	#hero {
		margin-bottom: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	#title {
		font-family: Cal Sans;
		font-size: large;
		text-align: center;
		max-width: 280px;
	}

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

	#sub-title {
		font-family: Cal Sans;
		text-align: center;
		font-size: 1.5rem;
		margin-top: 60px;
		margin-bottom: 30px;
	}

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
