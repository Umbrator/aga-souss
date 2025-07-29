<template>
  <NavAdmin></NavAdmin>
  <div class="container mt-4">
    <h2>Edit Formateur</h2>
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="email"
          required
        />
      </div>
      <div class="mb-3">
        <label for="nom" class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          v-model="nom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="prenom" class="form-label">Prénom</label>
        <input
          type="text"
          class="form-control"
          id="prenom"
          v-model="prenom"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="password"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>

<script>
import NavAdmin from "@/components/NavAdmin";
import router from "@/router";
export default {
  name: "Ajou_Formateur",
  components: {
    NavAdmin,
  },
  data() {
    return {
      email: "",
      nom: "",
      prenom: "",
      editFormateurId: null,
      isEditing: false,
    };
  },
  methods: {
    async editFormateur(formateur) {
      const response = await fetch(`/api/formateurs/${formateur.id}`);
      const data = await response.json();
      this.email = data.email;
      this.nom = data.nom;
      this.prenom = data.prenom;
      this.editFormateurId = data.id;
      this.isEditing = true;

      router.push({
        name: "EditFormateur",
        params: { formateurId: data.id },
      });
    },
  },
};
</script>
