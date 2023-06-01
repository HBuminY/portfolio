<script>
    export let img="/placeholder.webp"
</script>

<div class="bg-gradient-to-r from-slate-400 to-blue-950 rounded p-1 shadow-lg flex snap-center duration-300">
    <div class="bg-gradient-to-r from-slate-400 to-blue-950 flex lg:flex-row flex-col">

        <div class="bg-slate-500 mx-auto rounded-full lg:w-1/5 w-4/5 aspect-none flex-shrink-0 flex lg:flex-col flex-row justify-center p-5">
            <img src="{img}" alt="skill logo" class="drop-shadow-lg h-full w-full object-cover object-center rounded-full">
        </div>

        <div class="flex flex-col text-white from-slate-400 to-blue-900 gap-5 p-6">
            <div class="w-full"><h1 class="font-bold text-xl p-2 drop-shadow-lg mx-auto bg-gradient-to-l rounded text-center"><slot name="title"/></h1></div>
            <div><p class="drop-shadow-md bg-gradient-to-l p-2 rounded"><slot name="description"/></p></div>
        </div>

    </div>
</div>