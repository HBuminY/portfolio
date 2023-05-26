<script>
    export let currentPage;

    let backgrounds=[
        "bg-sakura",
        "bg-sunset",
        "bg-night"
    ];
</script>

<svelte:head>
    <link rel="preload" as="image" href="/navbarbg.webp"/>
    <link rel="preload" as="image" href="/navbarbg_page2.webp"/>
    <link rel="preload" as="image" href="/navbarbg_page3.webp"/>
</svelte:head>

<div class="m-0 p-0 sticky transition top-0 z-50">
    <ul
        class="
            list-none m-0 p-0 overflow-hidden w-full shadow-xl flex flex-row justify-center space-x-5 max-h-min relative
            transition-backrgound
            {backgrounds[currentPage]} bg-cover
        "
    >
        <slot/>
    </ul>
</div>