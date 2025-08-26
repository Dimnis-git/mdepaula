<script lang="ts">
	import { onMount } from 'svelte';
	import Example1 from '$lib/images/carrousel/example1.jpeg?enhanced';
	import Example2 from '$lib/images/carrousel/example2.jpeg?enhanced';
	import Example3 from '$lib/images/carrousel/example3.jpeg?enhanced';
	import Example4 from '$lib/images/carrousel/example4.jpeg?enhanced';
	import Example5 from '$lib/images/carrousel/example5.jpeg?enhanced';
	import Example6 from '$lib/images/carrousel/example6.jpeg?enhanced';
	import Example7 from '$lib/images/carrousel/saladeestar.jpg?enhanced';
	import Example8 from '$lib/images/carrousel/ilharipada.jpg?enhanced';
	let images = [
		{
			image: Example1,
			alt: 'Escritório planejado com móveis de madeira clara, cadeira preta e decoração moderna.'
		},
		{
			image: Example2,
			alt: 'Cozinha planejada com armários brancos, bancada de madeira e eletrodomésticos modernos.'
		},
		{
			image: Example3,
			alt: 'Cozinha planejada com armários de madeira escura, ilha central e iluminação embutida.'
		},
		{
			image: Example4,
			alt: 'Quarto infantil planejado com cama baixa, prateleiras coloridas e decoração lúdica.'
		},
		{
			image: Example5,
			alt: 'Sala de estar planejada, estante de madeira e decoração aconchegante.'
		},
		{
			image: Example6,
			alt: 'Banheiro planejado com armários madeira escura, pia de mármore e espelho grande.'
		},
		{
			image: Example7,
			alt: 'sala de estar acochegante, com painel amadeirado e hack personalizado'
		},
	{
		image:Example8,
		alt: 'ilha ripada com curva na cor carvalho'
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
	<div class="relative overflow-hidden h-full w-full rounded-3xl">
		{#each images as image, index}
			<enhanced:img
				src={image.image}
				alt={image.alt}
				class="rounded-3xl absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out pointer-events-none touch-auto"
				class:opacity-100={index === currentImageIndex}
				class:opacity-0={index !== currentImageIndex}
			/>
		{/each}
	</div>
</div>
