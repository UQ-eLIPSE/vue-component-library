<template>
    <div class="v-bg">
        <h1 class="v-label">
            {{ this.label }}
        </h1>
        <!-- <img src="../../assets/elipse-logo.png"> -->
        eLIPSE logo
    </div>
</template>

<script>
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

export default {
    name: 'v-header',
    props: {
        label: {
            default: 'Project Name',
            type: String
        }
    },
    components: {
        'font-awesome-icon': FontAwesomeIcon
    }
};
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