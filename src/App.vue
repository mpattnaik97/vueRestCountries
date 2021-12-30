<template>
  <div id="app" :class="mode">
    <Layout :mode="mode" @change="change" />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "App",

  data() {
    return {
      mode: "Dark",
    };
  },

  methods: {
    change() {
      if (this.mode === "Dark") {
        this.mode = "Light";
      } else {
        this.mode = "Dark";
      }
    },
  },
  components: {
    Layout,
  },
};
</script>
<style>
.container-fluid {
  padding-left: 50px;
  padding-right: 50px;
}

#app {
  min-height: 100vh;
  transition: background 0.3s ease-in-out;
}

.Dark nav,
.Dark button,
.Dark input,
.Dark input:focus,
.Dark .dropdown-menu,
.Dark .dropdown-item,
.Dark .country {
  background-color: #343a40;
  color: white;
  transition: background 0.3s ease-in-out;
}

.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  background-color: red;
}

.Dark,
.Dark .img-fluid {
  background-color: #1e2225;
  color: white;
  transition: background 0.3s ease-in-out;
}
.Dark .img {
  background-color: #343a40;
  width: 100%;
  transition: background 0.3s ease-in-out;
}

.Light {
  background-color: rgb(240, 240, 240);
  color: black;
  transition: background 0.3s ease-in-out;
}

nav,
.btn,
.dropdown-menu,
.dropdown-item,
.form-control,
.country {
  background-color: white;
  color: black;
  transition: background 0.3s ease-in-out;
}
.img-fluid {
  background-color: rgb(240, 240, 240);
  color: black;
  transition: background 0.3s ease-in-out;
}
.Light .img {
  background-color: white;
  width: 100%;
  transition: background 0.3s ease-in-out;
}

.country {
  border-radius: 20px;
  min-height: 100%;
}
</style>