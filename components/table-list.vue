<script setup>
const props = defineProps(["elements", "fields"]);

const selectAll = ref(false);
const selectedElements = ref([]);
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input
                v-model="selectAll"
                type="checkbox"
                class="checkbox"
                @change="$emit('selectAll', selectAll)"
              />
            </label>
          </th>
          <th v-for="field in fields">{{ field }}</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="element in elements" :key="element.id">
          <th>
            <label>
              <input
                :checked="selectAll"
                :value="element.id"
                v-model="selectedElements"
                type="checkbox"
                class="checkbox"
                @change="$emit('singleSelect', selectedElements)"
              />
            </label>
          </th>
          <td>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <NuxtImg :src="element.avatar" alt="image" />
                  <slot name="element-avatar"></slot>
                </div>
              </div>
              <div>
                <div class="font-bold">{{ element.name }}</div>
                <div class="text-sm opacity-50">{{ element.city }}</div>
              </div>
            </div>
          </td>
          <td>
            {{ element.speciality }}
          </td>
          <td>{{ element.contact }}</td>
          <th>
            <NuxtLink :to="`/doctor/${element.id}`" class="link font"
              >details</NuxtLink
            >
          </th>
        </tr>
        <!-- foot -->
      </tbody>

      <tfoot>
        <tr>
          <th></th>
          <span v-for="field in fields">
            <th>{{ field }}</th>
          </span>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
