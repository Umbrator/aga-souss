<template>
  <!DOCTYPE html>
  <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>ashboard</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
    </head>
    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div class="container-fluid">
          <router-link class="navbar-brand" :to="{ path: '/dashboard' }"
            >Dashboard Admin</router-link
          >

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="gestionFormationsDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gestion des Formations
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="gestionFormationsDropdown"
                >
                  <li>
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/ajouterformation' }"
                      >Ajouter une formation</router-link
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="gestionFormateursDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gestion des Formateurs
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="gestionFormateursDropdown"
                >
                  <li>
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/ajouterformateur' }"
                      >Ajouter un formateur</router-link
                    >
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="gestionCentresDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gestion des Centres
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="gestionCentresDropdown"
                >
                  <li>
                    <router-link
                      class="dropdown-item"
                      :to="{ path: '/ajoutercenter' }"
                      >Ajouter une Center</router-link
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </body>
  </html>
</template>
