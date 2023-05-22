<script>
    import { fly } from "svelte/transition";
    export let currentPage;
</script>

{#if currentPage == 0}
    <div
        class="absolute bottom-0 left-1/2 transition-transform duration-300 hover:translate-y-2"
        transition:fly={{ y: 50, duration: 1000 }}
    >
        <img
            src="/sakura.svg"
            alt="sakura branch"
            class=" h-[50px] translate-x-to-center"
        />
    </div>
{:else if currentPage == 1}
    <div
        class="absolute bottom-0 translate-y-1/2 left-1/2 transition-transform duration-300 hover:-translate-y-0.5"
        transition:fly={{ y: 20, duration: 1000 }}
    >
        <img src="/sun.svg" alt="sun" class=" h-[50px] translate-x-to-center" />
    </div>
{:else if currentPage == 2}
    <div
        class="absolute bottom-0 left-1/2 transition-transform duration-300 hover:translate-x-1"
        transition:fly={{ y: 50, duration: 1000 }}
    >
        <img
            src="/mountain.svg"
            alt="mountain"
            class=" h-[50px] translate-x-to-center"
        />
    </div>
{/if}
