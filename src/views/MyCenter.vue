<template>
  <NavAdmin></NavAdmin>
  <div class="container mt-4">
    <h2>Ajouter un centre</h2>
    <form @submit.prevent="submitCenter">
      <div class="mb-3">
        <label for="formationId" class="form-label">Formation</label>
        <select
          class="form-select"
          id="formationId"
          v-model="formationId"
          required
        >
          <option disabled value="">Sélectionner une formation</option>
          <option
            v-for="formation in formations"
            :key="formation.id"
            :value="formation.id"
          >
            {{ formation.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="formateurId" class="form-label">Formateur</label>
        <select
          class="form-select"
          id="formateurId"
          v-model="formateurId"
          required
        >
          <option disabled value="">Sélectionner un formateur</option>
          <option
            v-for="formateur in formateurs"
            :key="formateur.id"
            :value="formateur.id"
          >
            {{ formateur.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="salleName" class="form-label">Nom de la salle</label>
        <input
          type="text"
          class="form-control"
          id="salleName"
          v-model="salleName"
          required
        />
      </div>
      <div class="mb-3">
        <label for="centerName" class="form-label">Nom du centre</label>
        <input
          type="text"
          class="form-control"
          id="centerName"
          v-model="centerName"
          required
        />
      </div>
      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Ajouter</button>
      </div>
    </form>
    <div>
      <h3>Liste des centres</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Nom du centre</th>
            <th>Nom de la salle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="center in centers" :key="center.id">
            <td>{{ center.centerName }}</td>
            <td>{{ center.salleName }}</td>
            <td>
              <button
                class="btn btn-primary me-2"
                @click="updateCenter(center.id)"
              >
                Modifier
              </button>
              <button class="btn btn-danger" @click="deleteCenter(center.id)">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NavAdmin from "@/components/NavAdmin";
export default {
  name: "Ajou_Centre",
  components: {
    NavAdmin,
  },
  data() {
    return {
      formationId: "",
      formateurId: "",
      salleName: "",
      centerName: "",
      formations: [],
      formateurs: [],
      centers: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const formationRes = await fetch("/api/formations");
      const formateurRes = await fetch("/api/formateurs");
      this.formations = await formationRes.json();
      this.formateurs = await formateurRes.json();
    },
    async submitCenter() {
      const newCenter = {
        formationId: this.formationId,
        formateurId: this.formateurId,
        salleName: this.salleName,
        centerName: this.centerName,
      };
      const response = await fetch("/api/centers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCenter),
      });
      const savedCenter = await response.json();
      this.centers.push(savedCenter);
      this.resetForm();
    },
    resetForm() {
      this.formationId = "";
      this.formateurId = "";
      this.salleName = "";
      this.centerName = "";
    },
    async deleteCenter(centerId) {
      await fetch(`/api/centers/${centerId}`, { method: "DELETE" });
      this.centers = this.centers.filter((center) => center.id !== centerId);
    },
    async updateCenter(centerId) {
      const updatedCenter = { centerName: "New Center Name" };
      const response = await fetch(`/api/centers/${centerId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCenter),
      });
      const savedCenter = await response.json();
      const index = this.centers.findIndex((center) => center.id === centerId);
      if (index !== -1) {
        this.centers[index] = savedCenter;
      }
    },
  },
};
</script>
