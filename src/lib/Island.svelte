<script>
    export let clazz = "from-black to-whitie";
    export let bgColor = "bg-white";
    export let snap = true;
</script>

<div
    class="relative bg-gradient-to-tr p-2 rounded-lg {clazz}"
    class:snap-center={snap}
>
    <div class="drop-shadow-2xl rounded-sm {bgColor}">
        <slot />
    </div>
</div>
