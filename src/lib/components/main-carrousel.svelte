<script lang="ts">
	import { onMount } from 'svelte';
	import Example1 from '$lib/images/carrousel/example1.jpeg?enhanced';
	import Example2 from '$lib/images/carrousel/example2.jpeg?enhanced';
	import Example3 from '$lib/images/carrousel/example3.jpeg?enhanced';
	import Example4 from '$lib/images/carrousel/example4.jpeg?enhanced';
	import Example5 from '$lib/images/carrousel/example5.jpeg?enhanced';
	import Example6 from '$lib/images/carrousel/example6.jpeg?enhanced';
	import Example7 from '$lib/images/carrousel/example7.jpeg?enhanced';
	
	let images = [
		{
			image: Example1,
			alt: 'Escritório planejado com móveis de madeira clara e detalhes em branco, incluindo uma mesa ampla, estantes embutidas e iluminação moderna.'
		},
		{
			image: Example2,
			alt: 'Cozinha moderna com armários planejados em tons de cinza e branco, bancada de mármore e eletrodomésticos embutidos, criando um ambiente funcional e elegante.'
		},
		{
			image: Example3,
			alt: 'Quarto planejado com móveis sob medida em madeira escura, incluindo uma cama king size, guarda-roupa embutido e iluminação suave, proporcionando um ambiente aconchegante.'
		},
		{
			image: Example4,
			alt: 'Sala de estar com estantes planejadas em madeira clara, integrando espaço para TV, livros e decoração, criando um ambiente organizado e moderno.'
		},
		{
			image: Example5,
			alt: 'Banheiro planejado com armários sob medida em tons neutros, pia dupla e espelho grande, oferecendo funcionalidade e estilo.'
		},
		{
			image: Example6,
			alt: 'Closet planejado com prateleiras ajustáveis, gavetas e espaço para roupas e acessórios, tudo em um design elegante e eficiente.'
		},
		{
			image: Example7,
			alt: 'Área de serviço planejada com armários superiores e inferiores, bancada para passar roupas e espaço para eletrodomésticos, otimizando o uso do espaço.'
		}
	];

	let currentImageIndex = $state(0);

	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		interval = setInterval(() => {
			currentImageIndex = (currentImageIndex + 1) % images.length;
		}, 4000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="rounded-3xl *:rounded-3xl drop-shadow-xl drop-shadow-primary h-[80vh] lg:px-96">
	<div id="carousel" class="relative overflow-hidden h-full w-full">
		{#each images as image, index}
			<enhanced:img
				src={image.image}
				alt={image.alt}
				class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out pointer-events-none touch-auto"
				class:opacity-100={index === currentImageIndex}
				class:opacity-0={index !== currentImageIndex}
			/>
		{/each}
	</div>
</div>
