<script lang="ts">
	import { onMount } from 'svelte';
    import Example1 from '$lib/images/examples/1.jpeg';
	import Example2 from '$lib/images/examples/2.jpeg';
	import Example3 from '$lib/images/examples/3.jpeg';
	import Example4 from '$lib/images/examples/4.jpeg';

    let images = [Example1, Example2, Example3, Example4];

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

<div class="rounded-3xl *:rounded-3xl drop-shadow-xl drop-shadow-primary h-[80vh]">
	<div id="carousel" class="relative overflow-hidden h-full w-full">
		{#each images as image, index}
			<img
				src={image}
				alt={`Image ${currentImageIndex + 1}`}
				class:active={index === currentImageIndex}
			/>
		{/each}
	</div>
</div>

<style>
	#carousel img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 1s ease-in-out;
		touch-action: auto;
		pointer-events: none;
	}

	#carousel img.active {
		opacity: 1;
	}
</style>