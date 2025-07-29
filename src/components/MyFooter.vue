<template>
  <div class="container-fluid my-5">
    <!-- Changed container to container-fluid -->
    <footer class="bg-light text-center">
      <!-- Removed container from footer -->
      <section class="">
        <form action="">
          <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div class="col-md-5 col-12">
              <div class="form-outline mb-4">
                <input type="email" id="form5Example2" class="form-control" />
                <label class="form-label" for="form5Example2"
                  >Email address</label
                >
              </div>
            </div>
            <div class="col-auto">
              <button type="submit" class="btn btn-primary mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </section>

      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2024 Copyright:
        <a class="text-dark" href="#">MDBootstrap.com</a>
      </div>
    </footer>
  </div>
</template>
