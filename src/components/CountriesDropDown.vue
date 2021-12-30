<template>
  <div class="col-7">
    <b-dropdown
      id="dropdown-2"
      text="Filter by Region"
      class="shadow-sm rounded float-right"
    >
      <b-dropdown-item v-on:click="fetchAll()">All</b-dropdown-item>
      <b-dropdown-item v-on:click="fetchByRegion('africa')">
        Africa
      </b-dropdown-item>
      <b-dropdown-item
        class="dropdown-item"
        v-on:click="fetchByRegion('americas')"
      >
        Americas
      </b-dropdown-item>
      <b-dropdown-item v-on:click="fetchByRegion('asia')">
        Asia
      </b-dropdown-item>
      <b-dropdown-item v-on:click="fetchByRegion('europe')">
        Europe
      </b-dropdown-item>
      <b-dropdown-item v-on:click="fetchByRegion('oceania')">
        Oceania
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script>
import Countries from "./Countries.vue";

export default {
  methods: {
    fetchByName: function () {
      var rest_link = "";
      if (this.country_name === "") {
        rest_link = "https://restcountries.eu/rest/v3.1/all";
      } else {
        rest_link =
          "https://restcountries.eu/rest/v3.1/name/" + this.country_name;
      }
      fetch(rest_link)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          Countries.countries = json;
        });
    },

    fetchByRegion: function (region) {
      console.log("In fetchByRegion");
      fetch("https://restcountries.eu/rest/v3.1/region/" + region)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          Countries.countries = json;
        });
    },

    fetchAll: function () {
      console.log("In fetchByRegion");
      fetch("https://restcountries.eu/rest/v3.1/all")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          Countries.countries = json;
        });
    },
  },
};
</script>