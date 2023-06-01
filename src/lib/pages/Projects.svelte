<script>
    import Island from "../Island.svelte";
    import { onMount } from "svelte";
    import ProjectElement from "../projectElement.svelte";

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
            img:"wanderstone_mm.webp",
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
    class="w-full lg:w-3/4 py-[30vh] gap-[40vh] flex flex-col place-content-around transition-opacity duration-1000 {clazz} relative"
>
    <Island clazz={borderGradient} {bgColor} snap={false}>
        <div
            class="relative flex flex-col h-full w-full p-4 justify-center gap-7 "
        >
            {#each projectLinks as { name, link, description, img }}
                <ProjectElement img={img}>
                    <span slot="title">
                        <a href={link}>{name}</a>
                    </span>
                    
                    <span slot="description">
                        {description}
                    </span>
                </ProjectElement>
            {/each}
        </div>
    </Island>
</div>