<script lang="ts">
    import '../app.css';
    import Logo from '$lib/images/MdePaula-Logo.png';
	import Icon from '@iconify/svelte';

    let { children } = $props();
</script>

<header>
    <button id="menu-button">
        <Icon icon="line-md:menu" style="font-size: 16px" />
    </button>
    <img src={Logo} alt="Logo"/>
    <div id="header-links">
        {@render HeaderLinks("https://api.whatsapp.com/send?phone=11995943124", "ic:baseline-whatsapp", "WhatsApp")}
        {@render HeaderLinks("https://www.instagram.com/mdepaula1990", "mdi:instagram", "Instagram")}
    </div>
</header>

<main>
    {@render children()}
</main>

{#snippet HeaderLinks(href: string, icon: string, title: string)}
    <a {href} target="_blank" {title}>
        <Icon {icon}/>
    </a>
{/snippet}

<style>
    header {
        padding-left: 10px;
        display: flex;
        align-items: center;
        height: 8vh;
        z-index: 999;
    }

    header img {
        width: 80px;
    }

    header #header-links {
        padding-right: 20px;
        display: flex;
        gap: 10px;
        margin-left: auto;
    }

    header #header-links a {
        display: flex; 
        padding: 4px;
        border-radius: 30%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    header #header-links a[title="WhatsApp"] {
        background: linear-gradient(to right, #25D366, #128C7E);
    }

    header #header-links a[title="Instagram"] {
        background: linear-gradient(to right, #F58529, #DD2A7B, #8134AF);
    }

    main {
        padding: 12px
    }
    
    #menu-button {    
        cursor: pointer;
        display: flex;    
        padding: 4px;
        border-radius: 30%;
        color: var(--color-1);
        margin-right: 6px;
        margin-top: 1px;
        background: transparent;
    }

</style>