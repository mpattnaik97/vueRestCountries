<template>
  <div>
    <NavBar :mode="mode" @change="$emit('change')" />
    <div class="container-fluid">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavigationBar.vue";

export default {
  props: ["mode"],

  components: {
    NavBar,
  },
};
</script>

