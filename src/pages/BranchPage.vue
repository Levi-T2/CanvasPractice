<template>
    <div class="container-fluid">
        <section class="row mt-2">
            <div class="col-12 d-flex">
                <div class="px-2">
                    <button title="Draw Branch" @click="ActivateBranch()" class="btn btn-primary">Draw Branch</button>
                </div>
                <div class="px-2">
                    <button title="Draw Trees" @click="ActivateTree()" class="btn btn-primary">Draw Tree</button>
                </div>
            </div>
        </section>
        <section class="row justify-content-center mt-3">
            <div class="col-12 text-center">
                <canvas title="The Border Indicates Our Canvas" class="canvas" id="BranchCanvas" height="600"
                    width="900"></canvas>
            </div>
        </section>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup() {
        return {
            ActivateBranch() {
                let cx = document.getElementById("BranchCanvas").getContext("2d");
                function branch(length, angle, scale) {
                    cx.fillRect(0, 0, 1, length);
                    if (length < 8) return;
                    // The number being compared to length effects how many fractals the branch does.
                    cx.save();
                    cx.translate(0, length);
                    cx.rotate(-angle);
                    branch(length * scale, angle, scale);
                    cx.rotate(2 * angle);
                    branch(length * scale, angle, scale);
                    cx.restore();
                }
                cx.translate(300, 0);
                branch(60, 0.5, 0.8);
            },
            ActivateTree() {
                let cx = document.getElementById("BranchCanvas").getContext("2d");
                function TreeOne() {
                    function branch(length, angle, scale) {
                        cx.fillRect(0, 0, 1, length);
                        if (length < 8) return;
                        cx.save();
                        cx.translate(0, length);
                        cx.rotate(-angle);
                        branch(length * scale, angle, scale);
                        cx.rotate(2 * angle);
                        branch(length * scale, angle, scale);
                        cx.restore();
                    }
                    cx.translate(700, 600);
                    cx.rotate(179.055);
                    branch(55, 0.475, 0.8);
                }
                TreeOne();
                function TreeTwo() {
                    function branch(length, angle, scale) {
                        cx.fillRect(0, 0, 1, length);
                        if (length < 8) return;
                        cx.save();
                        cx.translate(0, length);
                        cx.rotate(-angle);
                        branch(length * scale, angle, scale);
                        cx.rotate(2 * angle);
                        branch(length * scale, angle, scale);
                        cx.restore();
                    }
                    cx.translate(400, 1.25);
                    // NOTE This translate moves the second one according to the position of the first one.
                    cx.rotate(25.126);
                    branch(55, 0.475, 0.8);
                }
                TreeTwo();
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>