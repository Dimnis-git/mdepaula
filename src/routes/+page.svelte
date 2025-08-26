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
	<meta name="description" content="Especialistas em cozinhas, quartos e móveis sob medida. Transforme sua casa com a Marcenaria de Paula. Orçamento sem compromisso." />
</svelte:head>
		
<MainTitle />

<MainCarrousel />

<AboutUs />

<OurServices />

<Gallery />

<Footer />