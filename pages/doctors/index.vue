<script setup>
const uri = "https://65cf598bbdb50d5e5f5b17a4.mockapi.io/api/v1/doctors";
const { data } = await useFetch(uri);
const doctors = ref(data);

const selectAll = ref(false);
const selectedElements = ref([]);

function handleSelectAll(value) {
  selectAll.value = value;
  selectedElements.value = value
    ? doctors.value.map((doctor) => doctor.id)
    : [];
  console.log(selectedElements.value);
}

function handleSingleSelect(value) {
  selectedElements.value = value;
  console.log(selectedElements.value);
}

const deleteSelectedDoctors = async () => {
  for (const id of selectedDoctors.value) {
    await fetch(`${uri}/${id}`, {
      method: "DELETE",
    });
    doctors.value = doctors.value.filter((doctor) => doctor.id !== id);
  }
};
let fields = ["İsim", "Doktorun Dalı", "Telefon Numarasi"];
</script>

<template>
  <div>
    <table-list
      @selectAll="handleSelectAll"
      @singleSelect="handleSingleSelect"
      :elements="doctors"
      :fields="fields"
    >
      <template #listBody="props">
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <NuxtImg :src="props.element.avatar" alt="image" />
                <slot name="element-avatar"></slot>
              </div>
            </div>
            <div>
              <div class="font-bold">{{ props.element.name }}</div>
              <div class="text-sm opacity-50">{{ props.element.city }}</div>
            </div>
          </div>
        </td>
        <td>
          {{ props.element.speciality }}
        </td>
        <td>{{ props.element.contact }}</td>
        <th>
          <NuxtLink :to="`/doctor/${props.element.id}`" class="link font"
            >details</NuxtLink
          >
        </th>
      </template>
    </table-list>
  </div>
</template>
