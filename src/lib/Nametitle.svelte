<script>
    // @ts-nocheck

    import { cubicInOut } from "svelte/easing";
    import { onMount } from "svelte";
    import { slide } from 'svelte/transition';

    export let intro;

    let animationReady = false;

    onMount(() => {
        animationReady = true;
    });

    function customAnim(node, {duration}) {
        
        return {
            easing:cubicInOut,
            duration,
            css: (t,u) => `width:${t*9}rem;`,
        };
    }

    function startOutro(){
        setTimeout(() => {
            animationReady=false;
        }, 500);
    };
</script>

{#if animationReady}
    <div
        class="block bg-orange-700 py-2 px-4 max-h-min rounded-full mx-auto w-36 overflow-hidden"
        in:customAnim={{duration: 1000 }}
        out:slide={{duration: 1000, y:1000}}
        on:introend={startOutro}
        on:outroend={()=>{intro=false;}}
    >
        <h1 class="text-3xl text-white text-center">
            <slot />
        </h1>
    </div>
{/if}
