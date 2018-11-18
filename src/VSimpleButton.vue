<template>
  <button
    class="btn"
    :class="`${type} ${size}`"
    @click="$emit('click', $event)">
    <slot>Submit</slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      default: "auto",
      type: String,
      validator(prop) {
        return ["auto", "full", "half"].indexOf(prop) > -1;
      }
    },
    type: {
      default: "primary",
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  min-width: 72px;
  font-weight: 600;
  padding: 0.825rem 0.75rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 0.1s ease-in-out;
  // background: #f8afcd;
  background: #f80fcd;
  outline: none;
  position: relative;
  &.full {
    width: 100%;
  }
  &.primary {
    &:active {
      // background: #f8afcd;
      background: #f80fcd;
    }
  }
}
</style>
