<template>
  <div class="max-w-7xl mx-auto">
    <div
      class="grid p-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-10 "
    >
      <image-card v-for="image in allImages" :image="image" :key="image.id" />
    </div>
  </div>
</template>

<script>
import ImageCard from "./ImageCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    ImageCard,
  },
  data() {
    return {
      images: [],
    };
  },
  computed: {
    ...mapGetters(["allImages"]),
  },
  mounted() {
    this.$store.dispatch("getImages");
  },
};
</script>
