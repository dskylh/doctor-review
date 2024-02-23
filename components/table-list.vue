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
          <slot name="listBody" :element="element"></slot>
        </tr>
        <!-- foot -->
      </tbody>
    </table>
  </div>
</template>
