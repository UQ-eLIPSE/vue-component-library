<template>
    <div>
        <div class="row">
            <p class="b">h1</p>
            <h1 class="blong">This is a sentence of header 1 text.</h1>
        </div>
        <div class="row">
            <p class="b">h2</p>
            <h2 class="blong">This is a sentence of header 2 text.</h2>
        </div>
        <div class="row">
            <p class="b">h3</p>
            <h3 class="blong">This is a sentence of header 3 text.</h3>
        </div>
        <div class="row">
            <p class="b">p</p>
            <p class="blong">This is a sentence of body text.</p>
        </div>
        <div class="row">
            <p class="b">p s</p>
            <p class="font-size-s blong">This is a sentence of small text.</p>
        </div>
        <div class="row">
            <p class="b">p xs</p>
            <p class="font-size-xs blong">This is a sentence of extra small text.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'typography',
};
</script>

<style lang="scss" scoped>
@import "../../mixins.scss";

.row {
    display: flex;
    align-items: center;
}

.b {
    height: 2rem;
    width: 3rem;
    margin: 0.5rem 0;
}

.blong {
    height: 2rem;
    width: 100%;
    margin: 0.5rem 0;
}
</style>