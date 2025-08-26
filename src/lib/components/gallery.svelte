<script lang="ts">
	import Bathroom from './galleries/bathroom.svelte';
	import Bedroom from './galleries/bedroom.svelte';
	import Kitchen from './galleries/kitchen.svelte';
	import Livingroom from './galleries/livingroom.svelte';
	import Office from './galleries/office.svelte';
</script>

<h2>Galeria:</h2>

<div class="mt-6 xl:px-96">
	<div class="grid gap-8 xl:grid-cols-1">
		<Kitchen />
		<Office />
		<Livingroom />
		<Bathroom />
		<Bedroom />
	</div>
</div>