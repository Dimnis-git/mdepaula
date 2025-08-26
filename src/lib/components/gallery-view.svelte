<script lang="ts">
	import { backOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	let {
		icon,
		text,
		images
	}: {
		icon: string;
		text: string;
		images: {
			currentImageIndex: number;
			touchStartX: number;
			images: {
				image: string | any;
				alt: string;
			}[];
		};
	} = $props();

	let currentImageIndex = $state(0);
	let touchStartX = $state(0);
	let swipe = $state<'left' | 'right' | null>(null);

	const totalImages = images.images.length;

	function nextImage() {
		swipe = 'left';
		currentImageIndex = (currentImageIndex + 1) % totalImages;
	}

	function prevImage() {
		swipe = 'right';
		currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
	}

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
	}

	function handleTouchEnd(e: TouchEvent) {
		const touchEndX = e.changedTouches[0].clientX;
		const deltaX = touchEndX - touchStartX;
		const swipeThreshold = 50; // Minimum distance for a swipe

		if (deltaX > swipeThreshold) {
			prevImage();
		} else if (deltaX < -swipeThreshold) {
			nextImage();
		}
	}
</script>

<div
	class="rounded-3x select-none- flex lg:h-[800px] touch-pan-y flex-col drop-shadow-xl drop-shadow-primary"
	ontouchstart={handleTouchStart}
	ontouchend={handleTouchEnd}
>
	<button
		onclick={prevImage}
		class="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-gradient-to-br from-third to-second p-2"
		aria-label="Previous Image"
	>
		<Icon icon="pepicons-print:arrow-left" class="text-lg" />
	</button>
	<button
		onclick={nextImage}
		class="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-gradient-to-br from-third to-second p-2"
		aria-label="Next Image"
	>
		<Icon icon="pepicons-print:arrow-right" class="text-lg" />
	</button>
	<header
		class="font-cal-sans flex h-12 items-center gap-2 rounded-t-3xl bg-third px-6 text-lg text-black"
	>
		<Icon {icon} class="text-lg" />
		<p class="font-figtree font-medium">{text}</p>
	</header>
	<main class="relative h-full w-full overflow-hidden rounded-b-3xl">
		<div
			class="flex h-full w-full transition-transform duration-500"
			style:transform={`translateX(-${currentImageIndex * 100}%)`}
		>
			{#each images.images as image}
				<div class="h-full w-full flex-shrink-0">
					<enhanced:img
						src={image.image}
						alt={image.alt}
						class="pointer-events-none h-full w-full touch-auto object-cover"
					/>
				</div>
			{/each}
		</div>
	</main>
</div>
