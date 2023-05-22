<script>
    export let currentPage;

    let backgrounds=[
        "bg-sakura",
        "bg-sunset",
        "bg-night"
    ];
</script>

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