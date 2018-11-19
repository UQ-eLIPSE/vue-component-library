<template>
    <div class="v-bg">
        <label class="v-label">
            {{ this.label }}
        </label>
        <!-- <img src="../../assets/elipse-logo.png"> -->
        eLIPSE logo
    </div>
</template>

<script>
export default {
    name: 'v-header',
    props: {
        label: {
            default: 'Project Name',
            type: String
        }
    }
};
</script>

<style lang="scss" scoped>
.v-bg {
    background: rgb(0,132,132);
    background: linear-gradient(90deg, rgba(0,132,132,1) 35%, rgba(0,81,81,1) 100%);
    width: 100%;
    height: 7.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    box-sizing: border-box;
}

.v-label {
    color: white;
    font-size: 2.5rem;
}

</style>