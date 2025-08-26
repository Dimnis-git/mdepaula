<script lang="ts">
	import MainTitle from '$lib/components/main-title.svelte';
	import MainCarrousel from '$lib/components/main-carrousel.svelte';
	import AboutUs from '$lib/components/about-us.svelte';
	import OurServices from '$lib/components/our-services.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Gallery from '$lib/components/gallery.svelte';
</script>

<svelte:head>
	<title>Marcenaria de Paula - Móveis Planejados em São Paulo</title>
	<meta name="description" content="Marcenaria especialistas em cozinhas, quartos, móveis, escritórios e armários sob medida em São Paulo. Transforme sua casa com a Marcenaria de Paula." />
	<meta name="keywords" content="marcenaria, paula, cozinhas, quartos, móveis, mdf, armários, planejados, sob medida, escritório, São Paulo" />
</svelte:head>
		
<MainTitle />

<MainCarrousel />

<AboutUs />

<OurServices />

<Gallery />

<Footer />