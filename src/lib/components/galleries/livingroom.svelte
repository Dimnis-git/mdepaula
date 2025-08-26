<script lang="ts">
	import livingroom1 from '$lib/images/livingroom/1.jpeg?enhanced';
	import livingroom2 from '$lib/images/livingroom/2.jpeg?enhanced';
	import livingroom3 from '$lib/images/livingroom/3.jpeg?enhanced';
	import livingroom4 from '$lib/images/livingroom/4.jpeg?enhanced';
	import livingroom5 from '$lib/images/livingroom/5.jpeg?enhanced';
	import livingroom6 from '$lib/images/livingroom/6.jpeg?enhanced';

	import GalleryView from '../gallery-view.svelte';

	let livingroom = $state({
		currentImageIndex: 0,
		touchStartX: 0,
		images: [
			{
				image: livingroom1,
                alt: 'Sala de estar moderna com sofá cinza, mesa de centro de madeira e decoração minimalista, criando um ambiente acolhedor e elegante.'
			},
            {
                image: livingroom2,
                alt: 'Sala de estar com sofá em L, poltronas confortáveis e iluminação natural, proporcionando um espaço ideal para relaxar e socializar.'
            },
            {
                image: livingroom3,
                alt: 'Sala de estar contemporânea com móveis em tons neutros, tapete texturizado e obras de arte na parede, criando um ambiente sofisticado.'
            },
            {
                image: livingroom4,
                alt: 'Sala de estar com design escandinavo, apresentando móveis de madeira clara, plantas verdes e uma atmosfera leve e arejada.'
            },
            {
                image: livingroom5,
                alt: 'Sala de estar elegante com sofá azul, mesa de centro de vidro e iluminação moderna, oferecendo um espaço estiloso e confortável.'
            },
            {
                image: livingroom6,
                alt: 'Sala de estar aconchegante com lareira, poltronas macias e decoração rústica, perfeita para momentos de relaxamento em família.'
            }
		]
	});
</script>

<GalleryView icon="mdi:sofa-outline" text="Sala de Estar" images={livingroom}/>