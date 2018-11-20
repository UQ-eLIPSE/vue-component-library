<template>
    <div>
        <h1>This is a sentence of header 1 text.</h1>
        <h2>This is a sentence of header 2 text.</h2>
        <h3>This is a sentence of header 3 text.</h3>
        <p>This is a sentence of body text.</p>
        <p class="font-size-s">This is a sentence of small text.</p>
        <p class="font-size-xs">This is a sentence of extra small text.</p>
    </div>
</template>

<script>
export default {
    name: 'typography',
};
</script>

<style lang="scss" scoped>
@import "../../mixins.scss";
</style>