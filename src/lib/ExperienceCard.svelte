<script>
    export let hrefLink="#";
    export let img;

    //slot names: title, qualities, description
</script>

<div class="bg-gradient-to-r from-pink-400 to-purple-400 rounded p-1 shadow-lg max flex flex-col snap-center">
    <div class="bg-gradient-to-r from-pink-300 to-purple-300 flex flex-col lg:flex-row p-2 gap-5">
        
        <div class="flex-shrink-0 flex flex-col justify-center basis-1/5">
            <img src="{img}" alt="experience image" class="bg-purple-100 rounded-full ">
        </div>

        <div class="flex flex-col grow">
            <h1 class="text-lg font-bold drop-shadow-lg underline decoration-2">
                <slot name="title"/>
            </h1>
            <div class="flex flex-row p-5 gap-3">
                <div class="flex flex-col flex-shrink-0 justify-between">
                    <ul class="list-disc">
                        <p class="mb-2 text-md font-semibold underline">This task required qualities like:</p>
                        <slot name="qualities"/>
                    </ul>
                    
                    <a class="rounded-lg bg-gradient-to-tr from-pink-400 to-purple-400 font-semibold overflow-hidden" href="{hrefLink}">
                        <div class="w-full h-full hover:bg-purple-500 hover:bg-opacity-40 transition-colors">
                            More information
                        </div>
                    </a>
                </div>
                <p class="grow">
                    <slot name="description"/>
                </p>
            </div>
        </div>
    </div>
</div>