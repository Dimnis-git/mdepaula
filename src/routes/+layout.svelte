<script lang="ts">
    import '../app.css';
    import Logo from '$lib/images/MdePaula-Logo.png';
	import Button from '$lib/components/header/button.svelte';

    let { children } = $props();
</script>

<header>
    <div>
        <img src={Logo} alt="Logo" width="220px"/>
    </div>
    <div>
        <Button text="Serviços" icon="fluent:box-toolbox-24-filled"/>
        <Button text="Galeria" icon="fluent:board-split-24-filled"/>
        <Button text="Feedback's" icon="fluent:person-feedback-24-filled"/>
        <!-- <Button text="Contatos" icon="fluent:call-24-filled"/> -->
    </div>
</header>

<main>
    {@render children()}
</main>

<footer>
    <div>Marcenaria de Móveis Planejados | MdePaula &copy; {new Date().getFullYear()}</div>
    <div></div>
</footer>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Cal+Sans&family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');

    :global(:root) {
        --font-family: 'Courier New', Courier, monospace;
        --color-1: #9f6239;
        --color-2: #bd7c52;
        --color-3: #dc986c;
        --color-4: #fbb487;
        --color-5: #ffd1a3;
    }

    header {
        display: flex;
        padding: 14px;
        justify-content: space-between;
        align-items: center;
        height: 8vh;
    }

    main {
        padding-left: 16px;
        padding-top: 25px;
    }

    footer {
        font-family: figtree;
        min-height: 40px;
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        padding: 8px;
    }
</style>