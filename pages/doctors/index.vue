<script setup lang="ts">
const uri = "https://65cf598bbdb50d5e5f5b17a4.mockapi.io/api/v1/doctors";
const { data: doctors } = await useFetch(uri);
const selectAll = ref(false);
</script>
<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input v-model="selectAll" type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>İsim</th>
          <th>Dalı</th>
          <th>Cinsiyet</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="doctor in doctors">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <NuxtImg :src="doctor.avatar" alt="image" />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ doctor.name }}</div>
                <div class="text-sm opacity-50">{{ doctor.city }}</div>
              </div>
            </div>
          </td>
          <td>
            {{ doctor.speciality }}
          </td>
          <td>{{ doctor.sex }}</td>
          <th>
            <NuxtLink :to="`/doctors/${doctor.id}`" class="btn btn-ghost btn-xs">details</NuxtLink>
          </th>
        </tr>
        <!-- foot -->
      </tbody>

      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
