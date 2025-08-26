<script lang="ts">
	import bedroom1 from '$lib/images/bedroom/1.jpeg?enhanced';
	import bedroom2 from '$lib/images/bedroom/2.jpeg?enhanced';
    import bedroom3 from '$lib/images/bedroom/3.jpeg?enhanced';
    import bedroom4 from '$lib/images/bedroom/4.jpeg?enhanced';
    import bedroom5 from '$lib/images/bedroom/5.jpeg?enhanced';
    import bedroom6 from '$lib/images/bedroom/6.jpeg?enhanced';
    import bedroom7 from '$lib/images/bedroom/7.jpeg?enhanced';
    import bedroom8 from '$lib/images/bedroom/8.jpeg?enhanced';
    import bedroom9 from '$lib/images/bedroom/9.jpeg?enhanced';
    import bedroom10 from '$lib/images/bedroom/10.jpeg?enhanced';

	import GalleryView from '../gallery-view.svelte';

	let bedroom = $state({
		currentImageIndex: 0,
		touchStartX: 0,
		images: [
			{
				image: bedroom1,
                alt: 'Quarto moderno com cama king size, iluminação suave e decoração minimalista, criando um ambiente aconchegante e elegante.'
            },
            {
                image: bedroom2,
                alt: 'Quarto planejado com armários embutidos, cama confortável e detalhes em madeira, proporcionando funcionalidade e estilo.'
            },
            {
                image: bedroom3,
                alt: 'Quarto de casal com design contemporâneo, paredes em tons neutros, iluminação indireta e móveis sofisticados.'
            },
            {
                image: bedroom4,
                alt: 'Quarto infantil colorido e alegre, com móveis funcionais, decoração temática e espaço para brincadeiras.'
            },
            {
                image: bedroom5,
                alt: 'Quarto de solteiro com estilo industrial, apresentando elementos rústicos, iluminação pendente e uma atmosfera urbana.'
            },
            {
                image: bedroom6,
                alt: 'Quarto minimalista com cama baixa, paleta de cores neutras e decoração simples, promovendo tranquilidade e relaxamento.'
            },
            {
                image: bedroom7,
                alt: 'Quarto luxuoso com detalhes em dourado, iluminação sofisticada e móveis elegantes, criando um ambiente requintado.'
            },
            {
                image: bedroom8,
                alt: 'Quarto aconchegante com cama de dossel, tecidos macios e iluminação quente, ideal para descanso e conforto.'
            },
            {
                image: bedroom9,
                alt: 'Quarto compacto com design inteligente, aproveitando ao máximo o espaço disponível sem comprometer o estilo.'
            },
            {
                image: bedroom10,
                alt: 'Quarto com varanda privativa, decoração moderna e vista panorâmica, proporcionando um ambiente relaxante e inspirador.'

            }
		]
	});
</script>

<GalleryView icon="mdi:bed-king-outline" text="Quartos" images={bedroom}/>