<script lang="ts">
	import Icon from "@iconify/svelte";

    let { class: className, icon } = $props();
</script>

<Icon {icon} class={className}/>