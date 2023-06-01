<script>
    import { each } from "svelte/internal";
    import Island from "../Island.svelte";
    import { onMount } from "svelte";

    let clazz = "opacity-0";

    onMount(() => {
        clazz = "opacity-100";
        document.getElementById("generalContainer").scrollTop = 0;
    });

    let borderGradient = "from-orange-800 to-orange-300";
    let bgColor = "bg-sunnycolor";

    let contactLinks = [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/hulusi-bumin-yal%C3%A7%C4%B1n-12839a162/",
            title: "Hulusi Bumin Yalçın",
        },

        {
            name: "Github",
            link: "https://github.com/HBuminY",
            title: "@HBuminY",
        },

        {
            name: "Twitter",
            link: "https://twitter.com/BuminYalc",
            title: "@BuminYalc",
        },

        {
            name: "Email",
            action: () => {
                navigator.clipboard.writeText("pybhad@gmail.com");
                alert("Email copied to clipboard");
                return;
            },
            title: "pybhad@gmail.com",
        },
    ];
</script>

<div
    class="w-full lg:w-3/4 py-[30vh] gap-[40vh] flex flex-col place-content-around transition-opacity duration-1000 {clazz} relative"
>
    <Island clazz={borderGradient} {bgColor} snap={false}>
        <div
            class="relative flex flex-col h-full w-full p-4 justify-center gap-7 from-orange-700 to-orange-200"
        >
            {#each contactLinks as { name, link, action, title }}
                <div class="bg-gradient-to-tr p-2 w-full rounded snap-center">
                    <div class="bg-sunnycolor w-full h-full rounded p-2">
                        <h1 class="text-lg text-center font-bold text-orange-950">{name} :</h1>

                        <div class="text-white text-center mx-auto bg-gradient-to-r rounded-md -translate-x-2 hover:translate-x-0 transition-transform ">

                            <a
                                target={link ? "_blank" : ""}
                                href={link ? link : "#"}
                                on:click={action ? action : () => {}}
                            >
                                {title}
                            </a>

                        </div>

                    </div>
                </div>
            {/each}
        </div>
    </Island>
</div>
