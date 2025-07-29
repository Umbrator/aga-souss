<template>
  <NavAdmin></NavAdmin>
  <div class="container mt-4">
    <h2>Formulaire pour ajouter une formation</h2>
    <form @submit.prevent="submitFormation">
      <div class="mb-3">
        <label for="formateurId" class="form-label">Formateur</label>
        <select class="form-select" id="formateurId" v-model="formateurId">
          <option value="">Sélectionner un formateur</option>
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
        <label for="salleId" class="form-label">Salle</label>
        <select class="form-select" id="salleId" v-model="salleId">
          <option value="">Sélectionner une salle</option>
          <option v-for="salle in salles" :key="salle.id" :value="salle.id">
            {{ salle.name }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="formationName" class="form-label"
          >Nom de la formation</label
        >
        <input
          type="text"
          class="form-control"
          id="formationName"
          v-model="formationName"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div>
      <h3>Formations ajoutées :</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Salle</th>
            <th scope="col">Formateur</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="formation in submittedFormations" :key="formation.id">
            <td>{{ formation.nom }}</td>
            <td>{{ formation.salle.name }}</td>
            <td>{{ formation.formateur.name }}</td>
            <td>
              <button
                class="btn btn-primary me-2"
                @click="goToEditFormation(formation.id)"
              >
                Modifier
              </button>
              <button
                class="btn btn-danger"
                @click="deleteFormation(formation.id)"
              >
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
  name: "Ajou_Formation",
  components: {
    NavAdmin,
  },
  data() {
    return {
      formateurId: "",
      salleId: "",
      formationName: "",
      formateurs: [],
      salles: [],
      formations: [],
      submitted: false,
      submittedFormations: [],
    };
  },
  mounted() {
    this.fetchFormateursAndSalles();
    this.fetchFormations();
  },
  methods: {
    async fetchFormateursAndSalles() {
      try {
        const responseFormateurs = await fetch(
          "http://localhost:8081/formateur"
        );
        if (!responseFormateurs.ok)
          throw new Error("Failed to fetch formateurs");
        const formateursData = await responseFormateurs.json();
        this.formateurs = formateursData;

        const responseSalles = await fetch("http://localhost:8081/centre");
        if (!responseSalles.ok) throw new Error("Failed to fetch salles");
        const sallesData = await responseSalles.json();
        this.salles = sallesData;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchFormations() {
      try {
        const response = await fetch("http://localhost:8081/formateur");
        if (!response.ok) throw new Error("Failed to fetch formations");
        const data = await response.json();
        this.formations = data;
      } catch (error) {
        console.error("Error fetching formations:", error);
      }
    },
    async submitFormation() {
      const newFormation = {
        formateurId: this.formateurId,
        salleId: this.salleId,
        formationName: this.formationName,
      };
      try {
        const response = await fetch("/api/formations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newFormation),
        });
        if (!response.ok) throw new Error("Failed to submit formation");
        const savedFormation = await response.json();
        this.formations.push(savedFormation);
        this.submittedFormations.push(savedFormation);
        this.formateurId = "";
        this.salleId = "";
        this.formationName = "";
        this.submitted = true;
      } catch (error) {
        console.error("Error submitting formation:", error);
      }
    },
  },
};
</script>
