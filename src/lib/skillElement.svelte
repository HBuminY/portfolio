<script>
    import IntersectionAnim from "./intersectionAnim.svelte";
    export let img="/placeholder.webp"
</script>

<IntersectionAnim let:intersecting>
<div class="bg-gradient-to-r from-pink-400 to-purple-400 rounded p-1 shadow-lg flex snap-center duration-300 {intersecting?"blur-0":"blur-sm"}">
    <div class="bg-gradient-to-r from-pink-300 to-purple-300 flex lg:flex-row flex-col">

        <div class="bg-purple-600 lg:bg-purple-300 mx-auto rounded-full lg:w-1/5 w-4/5 aspect-none flex-shrink-0 flex lg:flex-col flex-row justify-center p-5">
            <img src="{img}" alt="skill logo" class="drop-shadow-lg h-full w-full object-cover object-center">
        </div>

        <div class="flex flex-col text-white from-pink-400 to-purple-400 gap-5 p-6">
            <div class="w-full"><h1 class="font-bold text-xl drop-shadow-lg mx-auto bg-gradient-to-l rounded"><slot name="title"/></h1></div>
            <div><p class="drop-shadow-md bg-gradient-to-l rounded"><slot name="description"/></p></div>
        </div>

    </div>
</div>
</IntersectionAnim>