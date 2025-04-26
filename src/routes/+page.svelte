<script lang="ts">
	import { onMount } from 'svelte';

	import Example1 from '$lib/images/examples/1.jpeg';
	import Example2 from '$lib/images/examples/2.jpeg';
	import Example3 from '$lib/images/examples/3.jpeg';
	import Example4 from '$lib/images/examples/4.jpeg';

	let images = [Example1, Example2, Example3, Example4];

	let currentImageIndex = 0;

	onMount(() => {
		const interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % images.length;
		}, 3000);

		return () => clearInterval(interval);
	});
</script>

<div id="hero">
	<div id="hero-text">
		<h2>Planejando Sonhos</h2>
		<br />
		<br />
		<br />
		<p style="font-size: xx-large;">
			Com mais de 30 anos de tradição no mercado de marcenaria, a MdePaula é especialista em móveis
			planejados em MDF, oferecendo soluções sob medida que transformam ambientes com sofisticação,
			funcionalidade e durabilidade.
		</p>
		<br />
		<br />
		<br />
		<p style="font-size: xx-large;">
			Desde o início da nossa trajetória, mantemos o compromisso com a qualidade artesanal, o
			atendimento personalizado e a entrega de projetos que aliam design inteligente e materiais de
			primeira linha.
		</p>
		<br />
		<br />
		<br />
		<p style="font-size: xx-large;">
			Cada móvel planejado pela MdePaula <b
				>é pensado para refletir o seu estilo de vida, suas necessidades e o seu sonho.</b
			> Atuamos em projetos residenciais e comerciais, sempre priorizando o cuidado com os detalhes,
			o acabamento impecável e a satisfação de cada cliente.
		</p>
	</div>
	<div id="galery">
		<div id="carousel">
			{#each images as image, index}
				<img src={image} alt={`Image ${index + 1}`} class:active={index === currentImageIndex} />
			{/each}
		</div>
	</div>
</div>

<style>
	h2 {
		font-family: cal sans;
		font-size: 42px;
	}

	p {
		font-family: figtree;
	}

	#hero {
		display: flex;
	}

	#hero-text {
		padding-left: 10px;
		margin-right: 90px;
	}

	#galery {
		min-width: 900px;
		height: 75vh;
		box-shadow:
			rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px,
			rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px,
			rgba(0, 0, 0, 0.09) 0px -3px 5px;
		border-top-left-radius: 32px;
		border-bottom-left-radius: 32px;
	}

	#carousel {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-top-left-radius: 32px;
		border-bottom-left-radius: 32px;
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
	}

	#carousel img.active {
		opacity: 1;
	}
</style>
