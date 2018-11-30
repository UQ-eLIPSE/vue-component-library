<template>
    <div class="v-bg">
        <h1 class="v-label">
            {{ label }}
        </h1>
        <!-- <img src="../../assets/elipse-logo.png"> -->
        eLIPSE logo
    </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";

const VHeader = Vue.extend( {
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

</style>