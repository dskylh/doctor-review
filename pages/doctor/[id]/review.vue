<script setup>
const params = useRoute().params;
console.log(params);
const uri =
  "https://65cf598bbdb50d5e5f5b17a4.mockapi.io/api/v1/doctors/" + params.id;
const { data: doctor } = await useFetch(uri);
</script>
<template>
  <div>
    <review :doctor></review>
  </div>
</template>
