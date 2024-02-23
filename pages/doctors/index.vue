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
    </table-list>
  </div>
</template>
