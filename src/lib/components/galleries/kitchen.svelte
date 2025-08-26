<script lang="ts">
	import kitchen1 from '$lib/images/kitchen/1.jpeg?enhanced';
	import kitchen2 from '$lib/images/kitchen/2.jpeg?enhanced';
	import kitchen3 from '$lib/images/kitchen/3.jpeg?enhanced';
	import kitchen4 from '$lib/images/kitchen/4.jpeg?enhanced';
	import kitchen5 from '$lib/images/kitchen/5.jpeg?enhanced';
	import kitchen6 from '$lib/images/kitchen/6.jpeg?enhanced';
	import kitchen7 from '$lib/images/kitchen/7.jpeg?enhanced';
	import kitchen8 from '$lib/images/kitchen/8.jpeg?enhanced';
	import kitchen9 from '$lib/images/kitchen/9.jpeg?enhanced';
	import kitchen10 from '$lib/images/kitchen/10.jpeg?enhanced';
	import kitchen11 from '$lib/images/kitchen/11.jpeg?enhanced';
	import kitchen12 from '$lib/images/kitchen/12.jpeg?enhanced';
	import kitchen13 from '$lib/images/kitchen/13.jpeg?enhanced';
	import kitchen14 from '$lib/images/kitchen/14.jpeg?enhanced';
	import kitchen15 from '$lib/images/kitchen/15.jpeg?enhanced';
	import kitchen16 from '$lib/images/kitchen/16.jpeg?enhanced';
	import kitchen17 from '$lib/images/kitchen/17.jpeg?enhanced';
	import kitchen18 from '$lib/images/kitchen/18.jpeg?enhanced';
	import kitchen19 from '$lib/images/kitchen/19.jpeg?enhanced';
	import kitchen20 from '$lib/images/kitchen/20.jpeg?enhanced';
	import kitchen21 from '$lib/images/kitchen/21.jpeg?enhanced';
	import kitchen22 from '$lib/images/kitchen/22.jpeg?enhanced';
	import kitchen23 from '$lib/images/kitchen/23.jpeg?enhanced';
	import kitchen24 from '$lib/images/kitchen/24.jpeg?enhanced';
	import kitchen25 from '$lib/images/kitchen/25.jpeg?enhanced';
	import kitchen26 from '$lib/images/kitchen/26.jpeg?enhanced';
	import kitchen27 from '$lib/images/kitchen/27.jpeg?enhanced';
	import kitchen28 from '$lib/images/kitchen/28.jpeg?enhanced';
	import kitchen29 from '$lib/images/kitchen/29.jpeg?enhanced';
	import kitchen30 from '$lib/images/kitchen/30.jpeg?enhanced';
	import GalleryView from '../gallery-view.svelte';

	let kitchen = $state({
		currentImageIndex: 0,
		touchStartX: 0,
		images: [
			{
				image: kitchen1,
				alt: 'Cozinha planejada com armários em tons de cinza e branco, bancada de mármore e eletrodomésticos embutidos, criando um ambiente funcional e elegante.'
			},
			{
				image: kitchen2,
				alt: 'Cozinha planejada com armários em madeira clara, bancada de granito e iluminação moderna, proporcionando um ambiente acolhedor e prático.'
			},
			{
				image: kitchen3,
				alt: 'Cozinha com design contemporâneo, armários brancos, ilha central e detalhes em madeira, otimizando o espaço e a funcionalidade.'
			},
			{
				image: kitchen4,
				alt: 'Cozinha moderna com armários pretos, bancada de quartzo branco e eletrodomésticos de última geração, criando um contraste sofisticado.'
			},
			{
				image: kitchen5,
				alt: 'Cozinha planejada em estilo industrial, com prateleiras abertas, acabamentos em metal e madeira de demolição, para um visual urbano.'
			},
			{
				image: kitchen6,
				alt: 'Cozinha clean com armários brancos sem puxadores, bancada clara e piso de porcelanato, transmitindo leveza e amplitude.'
			},
			{
				image: kitchen7,
				alt: 'Cozinha gourmet integrada à sala, com armários em tons neutros, torre de fornos e uma ampla bancada para refeições.'
			},
			{
				image: kitchen8,
				alt: 'Cozinha compacta e funcional, com marcenaria inteligente, aproveitando cada centímetro com soluções criativas de armazenamento.'
			},
			{
				image: kitchen9,
				alt: 'Cozinha com armários em laca azul, bancada de madeira e ladrilho hidráulico, trazendo cor e personalidade ao ambiente.'
			},
			{
				image: kitchen10,
				alt: 'Cozinha planejada com armários superiores com portas de vidro, iluminação interna e um design que une o clássico e o moderno.'
			},
			{
				image: kitchen11,
				alt: 'Cozinha com península, armários em tom fendi e bancada de silestone, ideal para cozinhar e socializar.'
			},
			{
				image: kitchen12,
				alt: 'Cozinha minimalista com armários planejados, linhas retas e ausência de ornamentos, focada na simplicidade e funcionalidade.'
			},
			{
				image: kitchen13,
				alt: 'Cozinha com armários em madeira natural, bancada de concreto queimado e pendentes industriais, criando um espaço rústico e moderno.'
			},
			{
				image: kitchen14,
				alt: 'Cozinha planejada com armários cinza e puxadores dourados, combinando elegância e tendências de design de interiores.'
			},
			{
				image: kitchen15,
				alt: 'Cozinha americana com balcão de refeições, armários otimizados e integração perfeita com a área de estar.'
			},
			{
				image: kitchen16,
				alt: 'Cozinha com marcenaria sob medida, incluindo nichos decorativos, adega climatizada e espaço para eletrodomésticos.'
			},
			{
				image: kitchen17,
				alt: 'Cozinha com armários em dois tons, bancada espaçosa e um layout que facilita o fluxo de trabalho e a organização.'
			},
			{
				image: kitchen18,
				alt: 'Cozinha de luxo com acabamentos de alto padrão, armários com sistema de amortecimento e iluminação de LED embutida.'
			},
			{
				image: kitchen19,
				alt: 'Cozinha planejada para apartamento pequeno, com soluções verticais e móveis multifuncionais para maximizar o espaço.'
			},
			{
				image: kitchen20,
				alt: 'Cozinha com estilo escandinavo, predominância de branco, madeira clara e design simples e funcional.'
			},
			{
				image: kitchen21,
				alt: 'Cozinha com armários planejados e detalhes em vidro reflecta, adicionando um toque de sofisticação e modernidade.'
			},
			{
				image: kitchen22,
				alt: 'Cozinha funcional com bancada em L, armários superiores e inferiores e excelente aproveitamento do espaço de canto.'
			},
			{
				image: kitchen23,
				alt: 'Cozinha com armários em tom verde-sálvia, bancada de mármore e metais em tom champanhe, criando um ambiente sereno e elegante.'
			},
			{
				image: kitchen24,
				alt: 'Cozinha planejada com ilha central que serve como área de preparo e mesa de jantar, otimizando a funcionalidade.'
			},
			{
				image: kitchen25,
				alt: 'Cozinha com armários ripados em madeira, trazendo textura e um design natural e contemporâneo ao ambiente.'
			},
			{
				image: kitchen26,
				alt: 'Cozinha com armários brancos e bancada preta, um clássico atemporal que oferece um contraste marcante e elegante.'
			},
			{
				image: kitchen27,
				alt: 'Cozinha planejada com torre quente, gavetões espaçosos e prateleiras para temperos, pensada para a praticidade do dia a dia.'
			},
			{
				image: kitchen28,
				alt: 'Cozinha com design arrojado, armários em acabamento metálico e iluminação cênica que destaca os detalhes do projeto.'
			},
			{
				image: kitchen29,
				alt: 'Cozinha integrada com varanda gourmet, com móveis planejados que unificam os dois ambientes de forma harmoniosa.'
			},
			{
				image: kitchen30,
				alt: 'Cozinha com armários planejados até o teto, maximizando o armazenamento vertical e criando uma aparência limpa e organizada.'
			}
		]
	});
</script>

<GalleryView icon="mdi:kitchen-counter-outline" text="Cozinhas" images={kitchen}/>