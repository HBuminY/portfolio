<script>
    import Island from "../Island.svelte";
    import { onMount } from "svelte";
    import Lorem from "../Lorem.svelte";

    let clazz="opacity-0";

    onMount(()=>{
        clazz="opacity-100"
        document.getElementById("generalContainer").scrollTop=0;
    });

    let borderGradient = "from-slate-400 to-blue-950";
    let bgColor = "bg-mountain";

    let projectLinks = [
        {
            name:"Wanderstone",
            link:"/wanderstone",
            img:"placeholder.webp",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque accusantium itaque, vitae nobis qui mollitia nemo natus a. Similique autem aspernatur aliquid sunt commodi impedit, iusto porro voluptatum non!"
        },
        {
            name:"Faaest",
            link:"/Faaest",
            img:"placeholder.webp",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque accusantium itaque, vitae nobis qui mollitia nemo natus a. Similique autem aspernatur aliquid sunt commodi impedit, iusto porro voluptatum non!"
        },
    ]
</script>


<div 
    class="w-3/4 py-[30vh] gap-[40vh] flex flex-col place-content-around transition-opacity duration-1000 {clazz} relative"
>
    <Island clazz={borderGradient} {bgColor} snap={false}>
        <div
            class="relative flex flex-col h-full w-full p-4 justify-center gap-7 from-orange-700 to-orange-200"
        >
            {#each projectLinks as { name, link, description, img }}
                <div class="flex flex-col snap-center">
                    <div><a href={link}><h1>{name}</h1></a></div>
                    <div class="flex flex-col lg:flex-row">
                        <div><img src={img} alt="some project"></div>
                        <div><p>{description}</p></div>
                    </div>
                </div>
            {/each}
        </div>
    </Island>
</div>