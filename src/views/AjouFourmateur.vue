<template>
  <NavAdmin></NavAdmin>
  <div class="container mt-4">
    <h2>Formulaire pour ajouter un formateur</h2>
    <form @submit.prevent="submitFormateur">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="formateur.email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          v-model="formateur.nom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="prenom" class="form-label">Prénom</label>
        <input
          type="text"
          class="form-control"
          id="prenom"
          v-model="formateur.prenom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="formateur.password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div>
      <h3>Formateurs ajoutés :</h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Nom</th>
            <th scope="col">Prénom</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="formateur in submittedFormateurs" :key="formateur.id">
            <td>{{ formateur.email }}</td>
            <td>{{ formateur.nom }}</td>
            <td>{{ formateur.prenom }}</td>
            <td>
              <button
                class="btn btn-primary me-2"
                @click="goToEditFormateur(formateur.id)"
              >
                Modifier
              </button>
              <button
                class="btn btn-danger"
                @click="deleteFormateur(formateur.id)"
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
  name: "Ajou_Formateur",
  components: {
    NavAdmin,
  },
  data() {
    return {
      formateur: {
        email: "",
        nom: "",
        prenom: "",
        password: "",
      },
      submittedFormateurs: [],
    };
  },
  methods: {
    async submitFormateur() {
      const response = await fetch(
        "http://localhost:8081/formateur/saveFormateur",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formateur),
        }
      );
      const savedFormateur = await response.json();
      this.submittedFormateurs.push(savedFormateur);
      this.resetForm();
      alert("Formateur added successfully!");
    },
    resetForm() {
      this.formateur = { email: "", nom: "", prenom: "", password: "" };
    },
  },
};
</script>
