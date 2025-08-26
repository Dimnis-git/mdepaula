<script lang="ts">
	import office1 from '$lib/images/office/1.jpeg?enhanced';
	import office2 from '$lib/images/office/2.jpeg?enhanced';
	import office3 from '$lib/images/office/3.jpeg?enhanced';
	import office4 from '$lib/images/office/4.jpeg?enhanced';
	import office5 from '$lib/images/office/5.jpeg?enhanced';
    import office6 from '$lib/images/office/6.jpeg?enhanced';
    import office7 from '$lib/images/office/7.jpeg?enhanced';
    import office8 from '$lib/images/office/8.jpeg?enhanced';
    import office9 from '$lib/images/office/9.jpeg?enhanced';
    import office10 from '$lib/images/office/10.jpeg?enhanced';

	import GalleryView from '../gallery-view.svelte';

	let office = $state({
		currentImageIndex: 0,
		touchStartX: 0,
		images: [
			{
				image: office1,
                alt: 'Escritório moderno com mesa de madeira, cadeira ergonômica e decoração minimalista, criando um ambiente produtivo e elegante.'
            },
            {
                image: office2,
                alt: 'Espaço de trabalho contemporâneo com iluminação natural, plantas verdes e móveis funcionais, proporcionando conforto e inspiração.'
            },
            {
                image: office3,
                alt: 'Escritório em casa com design escandinavo, apresentando móveis claros, organização eficiente e uma atmosfera acolhedora.'
            },
            {
                image: office4,
                alt: 'Área de trabalho elegante com mesa de vidro, cadeira estilosa e decoração moderna, ideal para profissionais criativos.'
            },
            {
                image: office5,
                alt: 'Escritório minimalista com paredes brancas, prateleiras flutuantes e acessórios de escritório organizados, promovendo foco e clareza.'
            },
            {
                image: office6,
                alt: 'Espaço de trabalho industrial com elementos rústicos, iluminação pendente e uma combinação de materiais que criam um ambiente único.'
            },
            {
                image: office7,
                alt: 'Escritório funcional com mesa espaçosa, cadeira confortável e tecnologia moderna, perfeito para longas horas de trabalho.'
            },
            {
                image: office8,
                alt: 'Área de trabalho criativa com cores vibrantes, arte na parede e móveis personalizados, estimulando a inovação e a produtividade.'
            },
            {
                image: office9,
                alt: 'Escritório compacto com design inteligente, aproveitando ao máximo o espaço disponível sem comprometer o estilo.'
            },
            {
                image: office10,
                alt: 'Espaço de trabalho sofisticado com detalhes em metal, iluminação suave e uma atmosfera profissional e acolhedora.'
            }
		]
	});
</script>

<GalleryView icon="mdi:desk-lamp" text="Escritório" images={office}/>