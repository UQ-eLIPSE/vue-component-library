<template>
    <div class="outerContainer inset-m">
        <div class="col stack-m">
            <div class="b stack-s inline-s"></div>
            <div class="b primary-lighter stack-s inline-s">primary-lighter #C8FFFF</div>
            <div class="b primary-light stack-s inline-s">primary-light #00C8C8</div>
            <div class="b primary stack-s inline-s">primary #008484</div>
            <div class="b primary-dark stack-s inline-s">primary-dark #005151</div>
        </div>
        <div class="col stack-m">
            <div class="b stack-s inline-s"></div>
            <div class="b secondary-lighter stack-s inline-s">secondary-lighter #E7E6F6</div>
            <div class="b secondary-light stack-s inline-s">secondary-light #A09CDA</div>
            <div class="b secondary stack-s inline-s">secondary #716BC7</div>
            <div class="b secondary-dark stack-s inline-s">secondary-dark #4E46B9</div>
        </div>
        <div class="col stack-m">
            <div class="b stack-s inline-s"></div>
            <div class="b stack-s inline-s danger-lighter">danger-lighter #F8D7D7</div>
            <div class="b stack-s inline-s danger-light">danger-light #E88181</div>
            <div class="b stack-s inline-s danger">danger #DB3939</div>
            <div class="b stack-s inline-s danger-dark">danger-dark #B02020</div>
        </div>
        <div class="col stack-m">
            <div class="b stack-s inline-s"></div>
            <div class="b stack-s inline-s warning-lighter">warning-lighter #F9F0CF</div>
            <div class="b stack-s inline-s warning-light">warning-light #F1DD92</div>
            <div class="b stack-s inline-s warning">warning #E8C547</div>
            <div class="b stack-s inline-s warning-dark">warning-dark #D1A91A</div>
        </div>
        <div class="col stack-m">
            <div class="b stack-s inline-s background-color">background-color #F7F7F7</div>
            <div class="b stack-s inline-s text-disabled">text-disabled #C9CBCC</div>
            <div class="b stack-s inline-s text-color-light">text-color-light #94989B</div>
            <div class="b stack-s inline-s grey">grey #6A6E70</div>
            <div class="b stack-s inline-s text-color">text-color #515456</div>
        </div>
        <div class="col stack-m">
            <div class="b stack-s inline-s"></div>
            <div class="b stack-s inline-s"></div>
            <div class="b stack-s inline-s"></div>
            <div class="b stack-s inline-s white">white #FFFFFF</div>
            <div class="b stack-s inline-s"></div>
        </div>
        <div class="col stack-m">
            <div class="b stack-s inline-s"></div>
            <div class="b stack-s inline-s"></div>
            <div class="b stack-s inline-s"></div>
            <div class="b stack-s inline-s black">black #031A24</div>
            <div class="b stack-s inline-s"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'colors',
};
</script>

<style lang="scss" scoped>
@import "../../mixins.scss";
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

.outerContainer {
    background: $white;
    margin: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
}

.b {
    width: 9rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
}

.primary-lighter {
    background-color: $primary-lighter;
    color: $text-color;
}

.primary-light {
    background-color: $primary-light;
    color: $text-color;
}

.primary {
    background-color: $primary;
    color: $white;
}

.primary-dark {
    background-color: $primary-dark;
    color: $white;
}

.secondary-lighter {
    background-color: $secondary-lighter;
    color: $text-color;
}

.secondary-light {
    background-color: $secondary-light;
    color: $text-color;
}

.secondary {
    background-color: $secondary;
    color: $white;
}

.secondary-dark {
    background-color: $secondary-dark;
    color: $white;
}

.danger-lighter {
    background-color: $danger-lighter;
    color: $text-color;
}

.danger-light {
    background-color: $danger-light;
    color: $text-color;
}

.danger {
    background-color: $danger;
    color: $white;
}

.danger-dark {
    background-color: $danger-dark;
    color: $white;
}

.warning-lighter {
    background-color: $warning-lighter;
    color: $text-color;
}

.warning-light {
    background-color: $warning-light;
    color: $text-color;
}

.warning {
    background-color: $warning;
    color: $text-color;
}

.warning-dark {
    background-color: $warning-dark;
    color: $text-color;
}

.black {
    background-color: $black;
    color: $white;
}

.white {
    background-color: $white;
    border: solid 1px $text-disabled;
    color: $text-color;
}

.background-color {
    background-color: $background-color;
    color: $text-color;
}

.text-disabled {
    background-color: $text-disabled;
    color: $text-color;
}

.text-color-light {
    background-color: $text-color-light;
    color: $text-color;
}

.grey {
    background-color: $grey;
    color: $white;
}

.text-color {
    background-color: $text-color;
    color: $white;
}

</style>