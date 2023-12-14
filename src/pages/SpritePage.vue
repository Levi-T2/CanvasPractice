<template>
    <div class="container-fluid">
        <section class="row mt-2">
            <div class="col-12 d-flex">
                <div class="px-2">
                    <button title="Draw Sprite" @click="ActivateSprite()" class="btn btn-primary">Draw Sprite</button>
                </div>
            </div>
        </section>
        <section class="row justify-content-center">
            <div title="The Border Indicates Our Canvas" class="col-12 text-center">
                <canvas class="canvas" id="SpriteCanvas" height="140" width="140"></canvas>
            </div>
        </section>
    </div>
</template>


<script>
import catSprite from '../images/catSprite.jpg'

export default {
    setup() {
        return {
            ActivateSprite() {
                let cx = document.getElementById("SpriteCanvas").getContext("2d");
                let img = document.createElement("img");
                img.src = catSprite;
                let spriteW = 140;
                let spriteH = 140;
                img.addEventListener("load", () => {
                    let cycle = 0;
                    setInterval(() => {
                        cx.clearRect(0, 0, spriteW, spriteH);
                        cx.drawImage(img,
                            cycle * spriteW, 0, spriteW, spriteH,
                            0, 0, spriteW, spriteH);
                        cycle = (cycle + 0.9255) % 2;
                    }, 210);
                });
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.canvas {
    background-color: white;
}
</style>