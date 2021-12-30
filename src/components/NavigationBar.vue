<template>
  <nav class="navbar align-middle shadow p-4 mb-5">
    <ul class="navbar-nav">
      <li class="nav-item ml-5">
        <h5><b>Where in the world?</b></h5>
      </li>
    </ul>
    <button class="btn mr-5 ml-auto" @click="$emit('change')">
      <b-icon icon="moon" rotate="20" />
      &nbsp;{{ mode }} Mode
    </button>
  </nav>
</template>
<script>
export default {
  props: ["mode"],
};
</script>
