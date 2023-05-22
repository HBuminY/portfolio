<script>
    import { onMount } from "svelte";

    let i = 0;
    let texts = ["Web", "Game", "Desktop"];
    let txtIndex = 0;
    let txt = texts[txtIndex];
    let OriSpeed = 300;
    let speed = OriSpeed;
    let element;

    let dynamicText="";

    function twWrite() {
        if (i < txt.length) {
            dynamicText += txt.charAt(i);
            i++;
            if (speed > 100) {
                speed -= 50;
            }
            setTimeout(twWrite, speed);
        } else if (i == txt.length) {
            speed = OriSpeed;
            //console.log("removing");
            setTimeout(twRemove, 2000);
        }
    }

    function twRemove() {
        if (i > -1) {
            dynamicText = txt.slice(0, i);
            i--;
            if (speed > 100) {
                speed -= 50;
            }
            setTimeout(twRemove, speed);
        } else if (i == -1) {
            speed = OriSpeed;
            txtIndex++;
            txt = texts[txtIndex % 3];
            twWrite();
        }
    }

    onMount(twWrite);
</script>

<p class="drop-shadow-lg text-lg">A {dynamicText} developer.</p>