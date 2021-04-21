<template>
  <div class="max-w-xs sm:items-center rounded overflow-hidden shadow-lg p-2  ">
    <img
      class="card-zoom-image object-cover"
      :src="image.urls.regular"
      alt="image.description"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ image.user.name }}</div>
      <p class="text-grey-darker text-base">
        {{ image.alt_description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageCard",
  props: {
    image: Object,
  },
};
</script>

<style>
.card-zoom-image {
  @apply transition-all duration-1000 ease-in-out   transform bg-center bg-cover;
}

.card-zoom-image:hover {
  @apply scale-105 cursor-pointer;
}
</style>
