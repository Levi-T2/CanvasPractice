<template>
    <div class="container-fluid">
        <section class="row mt-2">
            <div class="col-12 d-flex">
                <div class="px-2">
                    <button title="Draw Pie Chart" @click="ActivateChartOne()" class="btn btn-primary">Draw Pie
                        Chart</button>
                </div>
                <div class="px-2">
                    <button title="Draw Text" @click="ActivateText()" class="btn btn-warning">Draw Text</button>
                </div>
            </div>
        </section>
    </div>
    <div class="m-4">
        <canvas id="PieChart" width="200" height="200"></canvas>
    </div>
    <div class="m-4">
        <canvas id="TextGen" width="200" height="200"></canvas>
    </div>
</template>


<script>
export default {
    setup() {
        return {
            // Draws Pie Chart With Data Supplied.
            ActivateChartOne() {
                const results = [
                    { name: "Satisfied", count: 1043, color: "green" },
                    { name: "Neutral", count: 563, color: "blue" },
                    { name: "Unsatisfied", count: 510, color: "orange" },
                    { name: "No Comment", count: 175, color: "gray" }
                ];
                let cx = document.getElementById("PieChart").getContext("2d");
                let total = results
                    .reduce((sum, { count }) => sum + count, 0);
                // NOTE Starting at the top.
                let currentAngle = -0.5 * Math.PI;
                for (let result of results) {
                    let sliceAngle = (result.count / total) * 2 * Math.PI;
                    cx.beginPath();
                    // center=100, 100, radius=100
                    // from current angle, clockwise by slice's angle.
                    cx.arc(100, 100, 100, currentAngle, currentAngle + sliceAngle);
                    currentAngle += sliceAngle;
                    cx.lineTo(100, 100);
                    cx.fillStyle = result.color;
                    cx.fill();
                }
            },
            ActivateText() {
                let cx = document.getElementById("TextGen").getContext("2d");
                cx.font = "28px Georgia";
                cx.fillStyle = "crimson";
                cx.fillText("I can draw text!", 10, 50);
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>