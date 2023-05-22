<script>
    import { onMount } from "svelte";

    //intersection observer(fancy scroll animations ooOO00!):
    let intersecting=true;
    let container;

    const options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 1.0,
    };

    onMount(()=>{
        if (/Android|iPhone/i.test(navigator.userAgent)) {
            return;
        };

        const observer = new IntersectionObserver((entries, observer)=>{
            intersecting=entries[0].isIntersecting;
        }, options);

        observer.observe(container);
    });
</script>

<div 
    bind:this={container}
> 
    <slot intersecting={intersecting}/>
</div>