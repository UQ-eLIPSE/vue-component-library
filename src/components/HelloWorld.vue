<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Banner>This is a banner!</Banner>
    <Button>Submit</Button>
    <SimpleButton>Hello</SimpleButton>
  </div>
</template>

<script>
import Banner from "./Banner";
import Button from "./Button";
import SimpleButton from "./SimpleButton";

export default {
  name: "HelloWorld",
  components: {
    Banner,
    Button,
    SimpleButton
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
