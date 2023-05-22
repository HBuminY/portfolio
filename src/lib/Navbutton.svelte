<script>
    import {link} from 'svelte-spa-router'

    export let title = "button";
    export let page;
    export let onclick = ()=>{};

    export let active = false;
    let conditionalClasses = active?'bg-slate-500 bg-opacity-60 hover:bg-slate-600 ':'hover:bg-moondream' 
</script>

<li class="inline-block m-0 p-0">
    <a href="{page}"
        class="block text-center p-3 no-underline hover:bg-opacity-60 text-white transition-colors backdrop-blur-sm {conditionalClasses}"
        on:click={onclick}
        use:link
    >
        {title}
    </a>
</li>