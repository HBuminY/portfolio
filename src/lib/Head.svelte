<script>
    import { onMount } from "svelte";
    import AnimatedLogos from "./AnimatedLogos.svelte";
    import InteractiveName from "./InteractiveName.svelte";
    import { fade } from "svelte/transition";

    export let currentPage;

    let animStartPoint=0;
    let headAnimDur=500;

    onMount(()=>{
        animStartPoint=document.getElementById("headDiv").clientHeight;
        animStartPoint/=2;
    });
</script>

<div id="headDiv" class="relative p-5 flex w-full justify-start items-center snap-start">
    <InteractiveName/>
    <AnimatedLogos {currentPage}/>

    {#if currentPage==0}

    <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-r -z-10 from-moondream to-deadsky" transition:fade={{duration:headAnimDur}}></div>

    {:else if currentPage==1}

    <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-r -z-10 from-orange-800 to-orange-300" transition:fade={{duration:headAnimDur}}></div>

    {:else if currentPage==2}

    <div class="absolute top-0 left-0 h-full w-full bg-gradient-to-r -z-10 from-blue-950 to-blue-200" transition:fade={{duration:headAnimDur}}></div>

    {/if}
</div>