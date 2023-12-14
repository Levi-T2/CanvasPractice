<template>
    <div class="container-fluid">
        <section class="row mt-2">
            <div class="col-12">
                <div class="px-2">
                    <button @click="ActivateChartOne" class="btn btn-primary">Draw Chart 1</button>
                </div>
            </div>
        </section>
    </div>

    <canvas width="200" height="200"></canvas>
</template>


<script>
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped></style>