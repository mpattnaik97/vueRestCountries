<template>
  <countryDetails v-bind:country="this.country" />
</template>
<script>
import countryDetails from "./../components/CountryDetail";

export default {
  components: {
    countryDetails,
  },

  data: function () {
    return {
      country: [],
    };
  },

  methods: {
    async fetchData() {
      try {
        const resp = await this.axios.get(
          "https://restcountries.eu/rest/v3.1/name/" +
            this.$route.params.countryInfo.toLowerCase() +
            "?fullText=true"
        );
        this.country = resp.data[0];
        // console.log(this.country);
      } catch (e) {
        console.log(e);
      }
    },
  },
  watch: {
    "$route.params.countryInfo": async function () {
      this.country = this.$country;
    },
  },
  async mounted() {
    console.log(this.$route.params.countryInfo);
    this.country = this.$country;
    // this.fetchData();
    console.log(this.$country);
  },
};
</script>