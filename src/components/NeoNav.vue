<template>
    <div class="container-fluid">
        <section class="row bg-dark">
            <div class="col-12 text-center my-2 title-border">
                <h2 class="text-light">Canvas Practice</h2>
            </div>
            <div class="col-12 mb-2">
                <RouterLink :to="{ name: 'Home' }" class="mx-1">
                    <a role="button" class="p-2 btn-page">Canvas Page</a>
                </RouterLink>
                <RouterLink :to="{ name: 'Chart' }" class="mx-1">
                    <a role="button" class="p-2 btn-page">Chart Page</a>
                </RouterLink>
                <RouterLink :to="{ name: 'Image' }" class="mx-1">
                    <a role="button" class="p-2 btn-page">Image Page</a>
                </RouterLink>
                <RouterLink :to="{ name: 'Scale' }" class="mx-1">
                    <a role="button" class="p-2 btn-page">Scale Page</a>
                </RouterLink>
                <RouterLink :to="{ name: 'Sprite' }" class="mx-1">
                    <a role="button" class="p-2 btn-page">Sprite Page</a>
                </RouterLink>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.title-border {
    border-bottom: 2px solid white;
}

.btn-page {
    color: white;
    border-radius: 5px;
    transition: ease-in-out 0.25s;
}

.btn-page:hover {
    background-color: white;
    color: black;
}
</style>