<template>
    <div class="container-fluid">
        <section class="row mt-2">
            <div class="col-12 d-flex">
                <div class="px-2">
                    <button title="Draw Image" @click="ActivateImage()" class="btn btn-primary">Draw Image</button>
                </div>
                <div class="px-2">
                    <button title="Flip Image" @click="ActivateFlip()" class="btn btn-success">Flip Image</button>
                </div>
            </div>
        </section>
    </div>
    <div>
        <!-- Image Sizing can also be done on the canvas itself. -->
        <canvas id="ImageOne" width="840" height="859"></canvas>
    </div>
</template>


<script>
import hat from '../images/hat.png'

export default {
    setup() {
        return {

            // NOTE Drawing Images Can be Done A lot of ways.
            ActivateImage() {
                let cx = document.getElementById("ImageOne").getContext("2d");
                let img = document.createElement("img");
                img.src = hat;
                img.addEventListener("load", () => {
                    // The Parameters effect image location and sizing.
                    cx.drawImage(img, 10, 10,);
                    // A for loop can also be applied to draw the image several times in an alternating location.
                });
            },
            ActivateFlip() {
                let cx = document.getElementById("ImageOne").getContext("2d");
                let img = document.createElement("img");
                img.src = hat;
                img.addEventListener("load", () => {
                    cx.drawImage(img, 10, 10,);
                });
                // NOTE the code below not take the image but adds a new one on top of the already rendered image.
                // This could be abstracted to run within another function that could adjust the original graphic.
                // Such as a interval that will flip it after a given time. ( Animation )
                cx.translate((420, 430), 0);
                cx.scale(-1, 1);
                cx.translate(-(420, 430), 0);
            },
        }
    }
};
</script>


<style lang="scss" scoped></style>