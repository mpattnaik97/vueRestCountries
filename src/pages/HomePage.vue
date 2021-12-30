<template>
  <div>
    <div id="filters" class="container-fluid px-5">
      <div class="row">
        <div class="input-group col-5">
          <span class="input-group-append">
            <button
              class="btn border-right-0 border shadow-none"
              style="border-radius: 5px 0px 0px 5px"
              type="button"
            >
              <b-icon-search />
            </button>
          </span>
          <input
            class="form-control border-left-0 border shadow-none"
            type="search"
            placeholder="Search for a country"
            style="border-radius: 0px 5px 5px 0px"
            id="example-search-input"
            v-on:input="debounceInput"
            v-model="country_name"
          />
        </div>

        <div class="col-7">
          <b-dropdown
            id="dropdown"
            variant="outline"
            class="shadow float-right"
            text="Filter by Region "
          >
            <b-dropdown-item v-on:click="fetchAll()">All</b-dropdown-item>
            <b-dropdown-item v-on:click="fetchByRegion('africa')">
              Africa
            </b-dropdown-item>
            <b-dropdown-item v-on:click="fetchByRegion('americas')">
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
      </div>
    </div>
    <Countries v-bind:countries="mycountries" />
  </div>
</template>

<script>
import Countries from "./../components/Countries";
import _ from "lodash";

export default {
  components: {
    Countries,
  },

  data: function () {
    return {
      country_name: "",
      mycountries: [],
      allCountries: [],
    };
  },

  async mounted() {
    this.fetchAll();
  },

  methods: {
    async fetchByName() {
      if (this.country_name === "") {
        this.mycountries = this.allCountries;
      } else {
        try {
          const response = await this.axios.get(
            "https://restcountries.com/v3.1/name/" + this.country_name
          );
          this.mycountries = response.data;
        } catch (e) {
          console.log(e);
        }
      }
    },

    debounceInput: _.debounce(function () {
      this.fetchByName();
    }, 400),

    async fetchByRegion(region) {
      console.log("In fetchByRegion");
      const response = await this.axios.get(
        "https://restcountries.com/v3.1/region/" + region
      );
      this.mycountries = response.data;
    },

    async fetchAll() {
      console.log("In FetchAll");
      const response = await this.axios.get(
        "https://restcountries.com/v3.1/all"
      );
      console.log(response.data);
      this.allCountries = response.data;
      this.mycountries = this.allCountries;
      return response.data;
    },
  },
};
</script>