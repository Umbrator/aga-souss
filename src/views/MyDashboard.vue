<template>
  <div>
    <NavAdmin></NavAdmin>
    <div class="container mt-4">
      <h2>Liste de Formations</h2>
      <div v-if="loading">Chargement en cours...</div>
      <div v-else-if="error">Erreur : {{ error }}</div>
      <div v-else>
        <ul>
          <li v-for="formation in formations" :key="formation.id">
            {{ formation.name }}
            {{ formation.age }}
            {{ formation.gender }}
            {{ formation.grade }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NavAdmin from "@/components/NavAdmin";

export default {
  name: "MyDashboard",
  components: {
    NavAdmin,
  },
  data() {
    return {
      loading: false,
      error: null,
      formations: [],
    };
  },
  mounted() {
    this.fetchFormations();
  },
  methods: {
    async fetchFormations() {
      this.loading = true;
      try {
        const response = await fetch("https://course-backend.onrender.com/");
        if (!response.ok) {
          throw new Error("Failed to fetch formations");
        }
        this.formations = await response.json();
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
