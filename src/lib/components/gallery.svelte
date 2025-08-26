<script lang="ts">
	import Icon from './icon.svelte';
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	let galleryImages = $state({
		kitchen: {
			currentImageIndex: 0,
			touchStartX: 0,
			images: []
		},
		livingroom: {
			currentImageIndex: 0,
			touchStartX: 0,
			images: []
		},
		bedroom: {
			currentImageIndex: 0,
			touchStartX: 0,
			images: []
		},
		tables: {
			currentImageIndex: 0,
			touchStartX: 0,
			images: []
		},
		closet: {
			currentImageIndex: 0,
			touchStartX: 0,
			images: []
		},
		desk: {
			currentImageIndex: 0,
			touchStartX: 0,
			images: []
		}
	});

	let swipe = $state<'left' | 'right'>('left')
</script>

<h2>Galeria:</h2>

<div class="mt-6 xl:px-96">
	<div class="grid xl:grid-cols-2 gap-8">
		{@render GalleryItem('mdi:kitchen-counter-outline', 'Cozinhas', galleryImages.kitchen)}
		{@render GalleryItem('mdi:sofa-outline', 'Salas de Estar', galleryImages.livingroom)}
		{@render GalleryItem('mdi:bed-king-outline', 'Quartos', galleryImages.bedroom)}
		{@render GalleryItem('mdi:table-furniture', 'Mesas', galleryImages.tables)}
		{@render GalleryItem('mdi:wardrobe-outline', 'Armários', galleryImages.closet)}
		{@render GalleryItem('mdi:desk-lamp', 'Escritórios', galleryImages.desk)}
	</div>
</div>

{#snippet GalleryItem(
	icon: string,
	text: string,
	images: { currentImageIndex: number; images: string[]; touchStartX: number }
)}
	{@const totalImages = images.images.length}
	<div
		class="rounded-3x flex h-[600px] touch-pan-y flex-col drop-shadow-xl drop-shadow-primary select-none"
		ontouchstart={(e) => {
			images.touchStartX = e.touches[0].clientX;
		}}
		ontouchend={(e) => {
			const touchEndX = e.changedTouches[0].clientX;
			const deltaX = touchEndX - images.touchStartX;
			const swipeThreshold = 50; // Minimum distance for a swipe
			if (deltaX > swipeThreshold) {
				swipe = 'right';
				images.currentImageIndex = (images.currentImageIndex - 1 + totalImages) % totalImages;
			} else if (deltaX < -swipeThreshold) {
				swipe = 'left';
				images.currentImageIndex = (images.currentImageIndex + 1) % totalImages;
			}
		}}
	>
		<button
			onclick={() =>
				(images.currentImageIndex = (images.currentImageIndex - 1 + totalImages) % totalImages)}
			class="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-gradient-to-br from-third to-second p-2"
		>
			<Icon icon="pepicons-print:arrow-left" class="text-lg" />
		</button>
		<button
			onclick={() => (images.currentImageIndex = (images.currentImageIndex + 1) % totalImages)}
			class="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-gradient-to-br from-third to-second p-2"
		>
			<Icon icon="pepicons-print:arrow-right" class="text-lg" />
		</button>
		<header
			class="font-cal-sans flex h-12 items-center gap-2 rounded-t-3xl bg-third px-6 text-lg text-black"
		>
			<Icon {icon} class="text-lg" />
			<p class=" font-figtree font-medium">{text}</p>
		</header>
		<main class="relative w-full h-full rounded-b-3xl">
			{#key images.currentImageIndex}
				<button class="absolute h-full w-full cursor-pointer rounded-b-3xl">
					<img
						in:fly={{ duration: 750, x: swipe === 'right' ? 20 : -20, easing: backOut }}
						out:fly={{ duration: 750, x: swipe === 'right' ? -20 : 20, easing: backOut }}
						src={images.images[images.currentImageIndex]}
						alt="{text} - Imagem {images.currentImageIndex + 1}"
						class="pointer-events-none w-full h-full cursor-pointer touch-auto rounded-b-3xl"
					/>
				</button>
			{/key}
		</main>
	</div>
{/snippet}
