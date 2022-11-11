<template>
  <div>
    <div v-for="pet in pets" :key="pet.id">
      <div>{{ pets.name }}</div>
    </div>
  </div>
</template>

<script>
import { usePetsStore } from "../stores/pets";
export default {
  data() {
    return {
      pets: [],
    };
  },
  async mounted() {
    await usePetsStore().fetchPets();
    this.pets = usePetsStore().getPets;
  },
};
</script>

<style></style>
