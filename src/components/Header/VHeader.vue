<template>
    <div class="v-bg">
        <h1 class="v-label">
            {{ label }}
        </h1>
        <img class="logo"
             src="data:image/png;base64,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">
    </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

const VHeader = Vue.extend({
    name: 'v-header',
    props: {
        label: {
            default: 'Project Name',
            type: String
        }
    }
});
export default VHeader;
</script>

<style lang="scss" scoped>
@import "../../mixins.scss";

.v-bg {
    background: $primary;
    background: linear-gradient(90deg, $primary 35%, $primary-dark 100%);
    width: 100%;
    height: 7.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    box-sizing: border-box;
}

.v-label {
    color: $white;
}

.logo {
    height: 2rem;
}
</style>