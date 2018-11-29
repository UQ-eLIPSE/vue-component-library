<template>
    <div class="v-bg">
        <h1 class="v-label">
            {{ this.label }}
        </h1>
        <img class="logo" :src="this.logo" />
    </div>
</template>

<script>
export default {
    name: 'v-header',
    props: {
        label: {
            default: 'Project Name',
            type: String
        },
        logo: {
            type: String,
            required: true
        }
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

.logo {
    height: 2rem;
}

</style>