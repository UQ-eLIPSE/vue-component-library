<template>
  <div class="banner" :style="bannerStyles" :class="`banner__${position}`">
    <slot></slot>
  </div>
</template>
<script>
const defaultStyles = {
  left: 0,
  right: 0
};
export default {
  props: {
    position: {
      type: String,
      default: "top",
      validator(position) {
        return ["top", "bottom"].indexOf(position) > -1;
      }
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      bannerStyles: {
        ...defaultStyles,
        ...this.styles
      }
    };
  }
};
</script>