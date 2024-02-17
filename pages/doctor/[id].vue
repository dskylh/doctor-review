<script setup>
const { id } = useRoute().params;
const uri = "https://65cf598bbdb50d5e5f5b17a4.mockapi.io/api/v1/doctors/" + id;
const { data: doctor } = await useFetch(uri);
</script>

<template>
  <div class="flex flex-row items-center p-40">
    <div
      class="rounded-lg border shadow-sm bg-base-200 w-full max-w-lg mx-auto justify-start"
      data-v0-t="card"
    >
      <div class="flex flex-col space-y-1.5 p-6 text-center">
        <div class="space-y-2">
          <div class="flex items-center justify-center">
            <h1 class="text-3xl font-bold">{{ doctor.name }}</h1>
          </div>
          <div class="avatar">
            <div class="w-36 mask mask-squircle">
              <img :src="doctor.avatar" />
            </div>
          </div>
          <div class="grid gap-0.5 text-sm">
            <h2 class="font-semibold">{{ doctor.speciality }}</h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ doctor.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="p-4 grid gap-4">
        <div class="flex items-start gap-4">
          <Icon name="mdi:location" size="24" />
          <div class="grid gap-0.5 text-sm">
            <h3 class="font-semibold">Clinic Address</h3>
            <p>{{ doctor.city }}</p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <Icon name="ic:baseline-phone" size="24" />
          <div class="grid gap-0.5 text-sm">
            <h3 class="font-semibold">Contact</h3>
            <p>{{ doctor.contact }}</p>
          </div>
        </div>
      </div>
    </div>
    <section class="p-8">
      <div class="container mx-auto">
        <h2 class="text-2xl font-semibold mb-4">Yorumlar</h2>
        <div class="grid gap-6">
          <div class="text-sm flex items-start gap-4">
            <span
              class="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border"
            >
              <!-- Avatar -->
              <!-- <div class="avatar placeholder"> -->
              <!--   <div class="bg-base-300 text-neutral-content rounded-full w-12"> -->
              <!--     <span class="text-gray-400">U1</span> -->
              <!--   </div> -->
              <!-- </div> -->
              <Icon name="radix-icons:avatar" size="40" />
            </span>
            <div class="grid gap-1.5">
              <div class="flex items-center gap-2">
                <!-- user tag -->
                <div class="font-semibold">@user1</div>
                <div class="text-gray-500 text-xs dark:text-gray-400">
                  2 days ago
                </div>
              </div>
              <!-- content -->
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, blanditiis. Nemo qui non numquam omnis consectetur
                alias, sequi hic doloremque expedita asperiores quia doloribus
                beatae officia accusamus, aliquam nesciunt corporis?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
