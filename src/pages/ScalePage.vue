<template>
    <div class="container-fluid">
        <section class="row mt-2">
            <div class="col-12 d-flex">
                <div class="px-2">
                    <button title="Draw Scaled Canvas" @click="ActivateScaledCanvas()" class="btn btn-primary">Draw Scaled
                        Circle</button>
                </div>
            </div>
        </section>
        <section class="row justify-content-center">
            <div title="The Border Indicates Our Canvas" class="col-12 text-center">
                <canvas class="canvas" id="ScaleCanvas" width="720" height="480"></canvas>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    setup() {
        return {
            ActivateScaledCanvas() {
                let cx = document.getElementById("ScaleCanvas").getContext("2d");
                cx.scale(3, .5);
                cx.beginPath();
                // NOTE the first two numbers here indicate the position of our graphic in the canvas.
                cx.arc(120, 400, 40, 0, 7);
                cx.lineWidth = 3;
                cx.stroke();
                cx.closePath();
                // Closing the path will allow for drawing several graphics at once.
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>