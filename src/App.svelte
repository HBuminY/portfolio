<script>
    import Nametitle from "./lib/Nametitle.svelte";
    import Navbar from "./lib/Navbar.svelte";
    import {fade} from "svelte/transition";
    import Navbutton from "./lib/Navbutton.svelte";
    import Head from "./lib/Head.svelte";
    import Content from "./lib/Content.svelte";
    import Footer from "./lib/Footer.svelte";

    import Router from 'svelte-spa-router';
    import {location} from 'svelte-spa-router';

    //pages
    import Whois from "./lib/pages/Whois.svelte";
    import Contact from "./lib/pages/Contact.svelte";
    import Projects from "./lib/pages/Projects.svelte";
    import NotFound from "./lib/pages/NotFound.svelte";
    //spa routing
    const routes = {
        '/': Whois,

        // Wrapping the Author component
        '/contact': Contact,

        // Wrapping the Book component
        '/projects': Projects,

        // Catch-all route last
        '*': NotFound
    }
    
    //OPTIONS
    let showIntro=($location!=="/"); //dont show intro and show the interface alone

    let intro=!showIntro;
    let showPage=showIntro;

    let currentPage=0; //0 1 2

    Object.keys(routes).forEach((key, index)=>{
        if($location===key){
            currentPage=index;
            return;
        }
    });

    let bodyBackgroundColors=[
        "rgb(203, 213, 225)",
        "#fed7aa",
        "#ecfeff"
    ];
    
    $: document.body.style.backgroundColor = bodyBackgroundColors[currentPage];
</script>

<h1 class="font-lobster hidden">load font</h1>

{#if intro}
    <div 
        class="bg-slate-600 flex flex-col justify-center h-screen w-full"
        transition:fade
        on:outroend={()=>{showPage=true}}
    >
        <Nametitle bind:intro>HBuminY</Nametitle>
    </div>
{/if}

{#if showPage}
    <div 
        id="generalContainer"
        class="container fixed top-0 left-0 h-screen w-full overflow-auto lg:snap-y snap-mandatory"
        transition:fade
    >
    
        <Head {currentPage}/>

        
        <Navbar {currentPage}>
            <Navbutton title={"Who is"} page={"/"} onclick={()=>{currentPage=0}}/>
            <Navbutton title={"Contact"} page={"/contact"} onclick={()=>{currentPage=1}}/>
            <Navbutton title={"Projects"} page={"/projects"} onclick={()=>{currentPage=2}}/>
        </Navbar>

        <Content>
            <Router {routes}/>
            <Footer/>
        </Content>    
    </div>

{/if}