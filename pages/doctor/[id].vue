<script setup>
const { id } = useRoute().params;
const uri = "https://65cf598bbdb50d5e5f5b17a4.mockapi.io/api/v1/doctors/" + id;
const { data: doctor } = await useFetch(uri);
</script>

<template>
  <div class="flex flex-col justify-center items-center p-4">
    <span>
      <NuxtImg :src="doctor.avatar" class="mask mask-squircle" />
    </span>
    <h1 class="font-bold text-3xl">{{ doctor.name }}</h1>
    <p>{{ doctor.city }}</p>
  </div>
</template>
