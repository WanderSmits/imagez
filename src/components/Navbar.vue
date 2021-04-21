<template>
  <nav class="bg-gray-100">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <!-- wrap both logo and tabs in a container -->
        <div class="flex space-x-4">
          <!-- logo -->
        </div>

        <!-- primary nav -->
        <div>
          <!-- <ul class="hidden md:flex items-center space-x-1 list-none hover">
            <li class="py-5 px-3 text-gray-700 hover:text-gray-900">
              <a href="#">Something</a>
            </li>
            <li>
              <a href="#" class="py-5 px-3 text-gray-700 hover:text-gray-900"
                >Something else
              </a>
            </li>
          </ul> -->
          <ul class="list-none">
            <li>
              <a
                href="#"
                class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="font-bold pl-2">Tumblr achtig</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- secondary nav -->
        <div>
          <ul class="hidden md:flex items-center space-x-1">
            <li class="py-5 px-3">
              <a href="">Login</a>
            </li>
            <li
              class="py-2 px-3 bg-gray-100 hover:bg-gray-300 text-gray-900 hover:text-gray-800 rounded transition duration-300"
            >
              <a href="">Signup</a>
            </li>
          </ul>
        </div>

        <!-- mobile button goes here -->
        <div class="md:hidden flex items-center">
          <button @click="clickMenu()" class="mobile-menu-button">
            <svg
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- mobile menu -->
    <div v-if="collapseMenu == true" class="md:hidden">
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
      <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      collapseMenu: false,
    };
  },

  methods: {
    clickMenu() {
      this.collapseMenu = !this.collapseMenu;
    },
  },
};
</script>

<style></style>
