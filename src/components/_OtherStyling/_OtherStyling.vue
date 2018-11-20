<template>
    <div>
        <div class="row stack-m">
            <div class="block shadow-light inline-m">
                <p>shadow-light</p>
            </div>
            <div class="block shadow inline-m">
                <p>shadow</p>
            </div>
            <div class="block shadow-dark inline-m">
                <p>shadow-dark</p>
            </div>
            <div class="block horizontal-primary-gradient inline-m">
                <p class="white">horizontal-primary-gradient</p>
            </div>
            <div class="block vertical-primary-gradient">
                <p class="white">vertical-primary-gradient</p>
            </div>
        </div>
        <div class="row stack-m">
            <div class="block border curved-border inline-m">
                <p>curved-border</p>
            </div>
            <div class="block border border-regular inline-m">
                <p>border-regular</p>
            </div>
            <div class="block border border-bold">
                <p>border-bold</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'other-styling'
};
</script>

<style lang="scss" scoped>
@import "../../mixins.scss";

.row {
    display: flex;
    align-items: center;
}

.block {
    height: 10rem;
    width: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.border {
    border-color: $grey;
}

.white {
    color: $white;
}

</style>