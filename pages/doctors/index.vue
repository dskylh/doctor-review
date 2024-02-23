<script setup>
const uri = "https://65cf598bbdb50d5e5f5b17a4.mockapi.io/api/v1/doctors";
const { data } = await useFetch(uri);
const doctors = ref(data);

const selectAll = ref(false);
const selectedDoctors = ref([]);
const deleteSelectedDoctors = async () => {
  for (const id of selectedDoctors.value) {
    await fetch(`${uri}/${id}`, {
      method: "DELETE",
    });
    doctors.value = doctors.value.filter((doctor) => doctor.id !== id);
  }
};
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
          <th>Doktorun Dalı</th>
          <th>Telefon Numarasi</th>
          <th>
            <button
              @click="deleteSelectedDoctors"
              class="btn btn-warning btn-xs"
            >
              delete
            </button>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <!-- row 1 -->
        <tr v-for="doctor in doctors" :key="doctor.id">
          <th>
            <label>
              <input
                :checked="selectAll"
                :value="doctor.id"
                v-model="selectedDoctors"
                type="checkbox"
                class="checkbox"
              />
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
          <td>{{ doctor.contact }}</td>
          <th>
            <NuxtLink :to="`/doctor/${doctor.id}`" class="link font"
              >details</NuxtLink
            >
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
