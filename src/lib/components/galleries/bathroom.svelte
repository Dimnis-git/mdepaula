<script lang="ts">
	import bathroom1 from '$lib/images/bathroom/1.jpeg?enhanced';
	import bathroom2 from '$lib/images/bathroom/2.jpeg?enhanced';
	import bathroom3 from '$lib/images/bathroom/3.jpeg?enhanced';
	import bathroom4 from '$lib/images/bathroom/4.jpeg?enhanced';
	import bathroom5 from '$lib/images/bathroom/5.jpeg?enhanced';
    import bathroom6 from '$lib/images/bathroom/6.jpeg?enhanced';
    import bathroom7 from '$lib/images/bathroom/7.jpeg?enhanced';
    import bathroom8 from '$lib/images/bathroom/8.jpeg?enhanced';
    import bathroom9 from '$lib/images/bathroom/9.jpeg?enhanced';
    import bathroom10 from '$lib/images/bathroom/10.jpeg?enhanced';
    import bathroom11 from '$lib/images/bathroom/11.jpeg?enhanced';

	import GalleryView from '../gallery-view.svelte';

	let bathroom = $state({
		currentImageIndex: 0,
		touchStartX: 0,
		images: [
			{
				image: bathroom1,
                alt: 'Banheiro moderno com pia dupla, espelho grande e iluminação embutida, criando um ambiente elegante e funcional.'
            },
            {
                image: bathroom2,
                alt: 'Banheiro com design minimalista, apresentando revestimentos claros, bancada de mármore e detalhes em madeira, proporcionando um espaço sofisticado.'
            },
            {
                image: bathroom3,
                alt: 'Banheiro aconchegante com banheira de imersão, iluminação suave e decoração em tons neutros, ideal para momentos de relaxamento.'
            },
            {
                image: bathroom4,
                alt: 'Banheiro contemporâneo com box de vidro, pia suspensa e azulejos texturizados, criando um ambiente moderno e estiloso.'
            },
            {
                image: bathroom5,
                alt: 'Banheiro espaçoso com duas pias, armários embutidos e iluminação natural, oferecendo praticidade e conforto.'
            },
            {
                image: bathroom6,
                alt: 'Banheiro elegante com detalhes em preto e branco, espelho redondo e iluminação de destaque, proporcionando um visual sofisticado.'
            },
            {
                image: bathroom7,
                alt: 'Banheiro com design rústico, apresentando revestimentos em pedra, bancada de madeira e elementos naturais, criando um ambiente acolhedor.'
            },
            {
                image: bathroom8,
                alt: 'Banheiro moderno com chuveiro de teto, pia de concreto e iluminação embutida, oferecendo um espaço funcional e estiloso.'
            },
            {
                image: bathroom9,
                alt: 'Banheiro compacto com design inteligente, apresentando armários suspensos, espelho grande e iluminação eficiente para otimizar o espaço.'
            },
            {
                image: bathroom10,
                alt: 'Banheiro luxuoso com banheira independente, revestimentos em mármore e iluminação suave, criando um ambiente sofisticado e relaxante.'
            },
            {
                image: bathroom11,
                alt: 'Banheiro moderno com detalhes em azul, pia dupla e iluminação embutida, proporcionando um espaço elegante e funcional.'
            }
		]
	});
</script>

<GalleryView icon="mdi:bathroom" text="Banheiros" images={bathroom}/>