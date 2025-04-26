<script lang="ts">
    import Icon from '@iconify/svelte';
    
    let { text, icon = undefined } = $props();
</script>

<a href="#id">
    {#if icon}
        <Icon {icon} style="font-size: x-large"/>
    {/if}
    {text}
</a>

<style>
    a {
        text-decoration: none;
        color: var(--color-1);
        font-size: 20px;
        font-family: cal sans;
        padding: 10px 20px;
        border-radius: 14px;
        transition: background-color 0.3s ease;
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }

    a:hover {
        background: linear-gradient(to bottom right, var(--color-2), var(--color-3));
        opacity: unset;
        color: black;
    }

    a:active {
        background-color: var(--color-5);
    }  
</style>