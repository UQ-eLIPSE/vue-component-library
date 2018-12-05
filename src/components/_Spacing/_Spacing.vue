<template>
    <div>
        <div class="row stack-m">
            <div class="inset inset-xs square inline-m">
                <p>inset-xs</p>
            </div>
            <div class="inset inset-s square inline-m">
                <p>inset-s</p>
            </div>
            <div class="inset inset-m square inline-m">
                <p>inset-m</p>
            </div>
            <div class="inset inset-l square inline-m">
                <p>inset-l</p>
            </div>
            <div class="inset inset-xl square">
                <p>inset-xl</p>
            </div>
        </div>
        <div class="row stack-m">
            <div class="inset inset-squish-s rect inline-m">
                <p>inset-squish-s</p>
            </div>
            <div class="inset inset-squish-m rect inline-m">
                <p>inset-squish-m</p>
            </div>
            <div class="inset inset-squish-l rect">
                <p>inset-squish-l</p>
            </div>
        </div>
        <div class="row stack-m">
            <div class="inset inset-stretch-s rect inline-m">
                <p>inset-stretch-s</p>
            </div>
            <div class="inset inset-stretch-m rect inline-m">
                <p>inset-stretch-m</p>
            </div>
        </div>
        <div class="row">
            <div class="inline-xl">
                <div class="inset stack-xs stack">
                    <p>stack-xs</p>
                </div>
                <div class="inset stack-s stack">
                    <p>stack-s</p>
                </div>
                <div class="inset stack-m stack">
                    <p>stack-m</p>
                </div>
                <div class="inset stack-l stack">
                    <p>stack-l</p>
                </div>
                <div class="inset stack-xl stack">
                    <p>stack-xl</p>
                </div>
                <div class="inset stack"></div>
            </div>
            <div class="row">
                <div class="inset inline-xs inline">
                    <p class="rotate">inline-xs</p>
                </div>
                <div class="inset inline-s inline">
                    <p class="rotate">inline-s</p>
                </div>
                <div class="inset inline-m inline">
                    <p class="rotate">inline-m</p>
                </div>
                <div class="inset inline-l inline">
                    <p class="rotate">inline-l</p>
                </div>
                <div class="inset inline-xl inline">
                    <p class="rotate">inline-xl</p>
                </div>
                <div class="inset inline">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'spacing'
};
</script>

<style lang="scss" scoped>
@import "../../mixins.scss";
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body {
    font-family: 'Open Sans', sans-serif;
}

.row {
    width: 100%;
    display: flex;
    align-items: center;
}

.inset {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: $secondary-lighter;
    background-clip: content-box;
    border: solid 1px $grey;
}

.square {
    height: 10rem;
    width: 10rem;
}

.rect {
    height: 4rem;
    width: 10rem;
}

.stack {
    height: 1rem;
    width: 15rem;
}

.inline {
    height: 15rem;
    width: 1rem;
}

.rotate {
    transform: rotate(-90deg);
}

p {
    margin: 0;
    white-space: nowrap;
    font-family: 'Open Sans', sans-serif;
}
</style>