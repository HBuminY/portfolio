<script>
    import Island from "../Island.svelte";
    import { onMount } from "svelte";
    import TypedText from "../typedText.svelte";
    import ExperienceCard from "../ExperienceCard.svelte";
    import SkillElement from "../skillElement.svelte";
    import IntersectionAnim from "../intersectionAnim.svelte";
    import { link } from "svelte-spa-router";

    let clazz="opacity-0";

    if(location.pathname!=="/"){
        location.pathname="/"
    };

    //lifecycle
    onMount(()=>{
        let genCon = document.getElementById("generalContainer");
        clazz="opacity-100"
        genCon.scrollTop=0;
    });

    //options
    let borderGradient = "from-pink-300 to-purple-300";
    let bgColor = "bg-slate-200";
</script>

<svelte:head>
    <link rel="preload" as="image" href="/myphoto.jpg"/>
</svelte:head>

<div class="w-full lg:w-3/4 py-[30vh] gap-[40vh] flex flex-col place-content-around transition-opacity duration-1000 {clazz} relative">
    

    <IntersectionAnim let:intersecting>
    <Island clazz={borderGradient} {bgColor}>
            <div class="p-3 px-10 flex flex-row justify-end">
                <img src="/hello.svg" alt="hand vector art" class="-scale-x-100 hidden lg:inline transition-transform duration-1000 {intersecting?"rotate-12":"-rotate-45"}">

                <div class="grow text-white text-center my-auto">
                    <h1 class="text-6xl align-middle font-bold drop-shadow-lg">
                        Hello!
                    </h1>
                </div>

                <img src="/hello.svg" alt="hand vector art " class="hidden lg:inline transition-transform duration-1000 {intersecting?"-rotate-12":"rotate-45"}">
            </div>
    </Island>
    </IntersectionAnim>

    <IntersectionAnim let:intersecting>
    <Island clazz={borderGradient} {bgColor}>
        <div class="relative flex flex-col lg:flex-row h-full w-full p-2 transition-all duration-300 {intersecting?"blur-0":"blur-sm"}">
            <div 
                class="h-auto z-10 lg:w-1/4 p-2 flex flex-col justify-center items-center flex-shrink-0 duration-700 {intersecting?"rotate-0":"rotate-45"}"
            >
                <img src="/myphoto.jpg" alt="hulusi" class="aspect-square rounded-full border border-black shadow-md shadow-black">
            </div>

            <div class="bg-gradient-to-tr text-white text-center rounded p-2 shadow-lg mb-5 lg:mb-0 duration-700 {intersecting?"lg:-translate-x-5 ":""}">
                <p class="drop-shadow-lg text-lg">Welcome to portfolio of</p>
                <h1 class="text-6xl font-bold align-middle drop-shadow-xl max-w-min mx-auto">
                    Hulusi Bumin Yalçın
                </h1>
                <TypedText/>
            </div>

            <div class="flex-grow flex flex-col justify-between text-white text-lg text-center">
                <div class="bg-gradient-to-r basis-3/6 rounded p-1 shadow-lg mb-5 duration-700 {intersecting?"translate-y-0":"translate-y-5"}">
                    <h1 class="text-xl font-semibold">I am,</h1>
                    <p class="drop-shadow-lg">
                        A young and dynamic developer and an artist who is inspired by the beauties of life.
                        As a person who enjoys always learning i spend a lot of time making researches to catch the newest and trendiest!
                    </p>
                </div>

                <div class="bg-gradient-to-r basis-2/6 rounded p-1 shadow-lg duration-700 {intersecting?"translate-y-0":"-translate-y-5"}">
                    <p class="drop-shadow-lg">
                        I believe we are in a changing world and i take "catching the train" as a mission to myself. And i'm always seeking new opportunuties that'll allow me to do so.
                    </p>
                </div>
            </div>
        </div>
    </Island>
    </IntersectionAnim>

    <IntersectionAnim let:intersecting>
    <Island clazz={borderGradient} {bgColor}>
        <div class="relative flex flex-col h-full w-full p-2 text-white text-center gap-10 duration-300 {intersecting?"blur-0":"blur-sm"}">
            <div class="bg-gradient-to-r rounded p-1 shadow-lg mx-auto duration-700 {intersecting?"translate-y-0":"translate-y-5"}">
                <h1 class="text-3xl font-bold drop-shadow-xl">
                    Career Objective:
                </h1>
            </div>

            <div class="bg-gradient-to-tr text-lg p-2 font-semibold duration-700 {intersecting?"translate-y-0":"-translate-y-5"}">
                <p class="text-white drop-shadow-lg">As a young and dynamic developer and artist, I find inspiration in the beauties of life. With a passion for continuous learning, I dedicate significant time to research the latest trends and innovations. In a rapidly changing world, <span class="text-pink-700 hover:text-red-500 font-semibold transition-colors">I embrace the mission of keeping up with the latest advancements</span> and actively seek new opportunities that allow me to do so. By staying ahead of the curve, I aim to contribute to the ever-evolving industry and make a meaningful impact. <span class="text-pink-700 font-semibold hover:text-red-500 transition-colors">Driven by curiosity and a desire to push boundaries</span>, I am committed to honing my skills, leveraging my creative mindset, and embracing exciting possibilities in the intersection of technology and art.</p>
            </div>
        </div>
    </Island>
    </IntersectionAnim>

    <Island clazz={borderGradient} {bgColor} snap={false}>
        <div class="relative flex flex-col h-full w-full p-2 text-white text-center gap-10">
            <div class="bg-gradient-to-r rounded p-1 shadow-lg max-w-min mx-auto">
                <h1 class="text-3xl font-bold drop-shadow-xl">
                    Skills:
                </h1>
            </div>

            <div class="w-full grow flex flex-col gap-10">
                <SkillElement img={"/webtech.webp"}>
                    <slot slot="title">
                        HTML, CSS and JavaScript
                    </slot>

                    <slot slot="description">
                        HTML, CSS, and JavaScript are the dynamic trio that power extraordinary online experiences. HTML structures content, CSS adds stunning visuals, and JavaScript brings websites to life with interactivity and seamless functionality. Together, they create captivating and immersive digital journeys that leave a lasting impression on users. Harnessing the power of these technologies unlocks endless possibilities for businesses to showcase their products, engage customers, and achieve remarkable online success.
                    </slot>
                </SkillElement>

                <SkillElement img={"/svelte_logo.webp"}>
                    <slot slot="title">
                        Svelte.js
                    </slot>

                    <slot slot="description">
                        Svelte is a cutting-edge JavaScript framework that enables the creation of efficient web interfaces. It optimizes code by compiling it into highly optimized JavaScript, leading to smaller file sizes and improved performance. With its reactive approach, the user interface automatically updates when data changes. Svelte utilizes components to build reusable UI elements by integrating HTML, CSS, and JavaScript into a single file. It prioritizes simplicity and aims to streamline development while delivering fast and optimized web applications.
                    </slot>
                </SkillElement>

                <SkillElement img={"/tailwind_logo.webp"}>
                    <slot slot="title">
                        TailwindCss
                    </slot>

                    <slot slot="description">
                        Tailwind is a tool used by web developers to make building websites faster and easier. It provides ready-to-use styles that can be applied to different parts of a website. These styles are designed to help businesses create professional-looking websites without needing to hire a dedicated designer. With Tailwind, developers can quickly add features like buttons, layouts, and colors to their websites by simply adding special keywords to the code. This saves time and money for businesses, as they can create and update their websites more efficiently.
                    </slot>
                </SkillElement>
            </div>
        </div>
    </Island>

    <Island clazz={borderGradient} {bgColor} snap={false}>
        <div class="relative flex flex-col h-full w-full p-2 text-white text-center gap-10">
            <div class="bg-gradient-to-r rounded p-1 shadow-lg max-w-min mx-auto">
                <h1 class="text-3xl font-bold drop-shadow-xl">
                    Experiences:
                </h1>
            </div>

            <ExperienceCard img={"/teknofest_logo.webp"}>
                <slot slot="title">
                    Team Leader in Teknofest 2021
                </slot>

                <slot slot="qualities">
                    <li>Leadership</li>
                    <li>Project Management</li>
                    <li>Time Management</li>
                    <li>Presentation Skills</li>
                </slot>

                <slot slot="description">
                    I had the privilege of leading my own team at Teknofest 2021, Turkey's biggest technology fair and competition. In the Tourism Technologies category, we presented our unique project, a 2D desktop game and integrated web application. Our project featured seamless data communication and storage between the game and web app using a custom JSON database. Teknofest provided an invaluable platform to showcase our skills, connect with industry professionals, and fuel our passion for technology.
                </slot>
            </ExperienceCard>

            <ExperienceCard img={"/consuni_logo.webp"}>
                <slot slot="title">
                    Contestant in Constructor Cup 2023
                </slot>

                <slot slot="qualities">
                    <li>Competitive Programming</li>
                    <li>Algorithmic Thinking</li>
                    <li>Problem Solving</li>
                </slot>

                <slot slot="description">
                    Participating in the Constructor Cup, a competitive programming challenge, as a junior developer was an exhilarating experience.
                    It brought together talented programmers, pushing me to improve my coding skills and logical thinking.
                    I learned from experienced developers and enhanced my communication and teamwork abilities.
                    The challenge left me with unforgettable memories and a renewed passion for programming.
                </slot>
            </ExperienceCard>
        </div>
    </Island>
</div>