<template>
  <nav class="bg-indigo-600">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <button @click="toggleOpenMenu">
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <router-link
              class="block lg:hidden text-white py-1 h-8 w-auto text-center text-lg font-bold uppercase"
              to="/"
              >SearchAid</router-link
            >
            <router-link
              class="hidden lg:block text-white py-1 h-8 w-autotext-center text-lg font-bold uppercase"
              to="/"
              >SearchAid</router-link
            >
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a
                href="#info"
                v-smooth-scroll="{
                  duration: 1000,
                  offset: -50,
                }"
                class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium uppercase"
                >Πληροφοριες</a
              >
              <a
                href="#services"
                v-smooth-scroll="{
                  duration: 1000,
                  offset: -50,
                }"
                class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                >Υπηρεσια</a
              >
              <a
                href="#search"
                v-smooth-scroll="{
                  duration: 1000,
                  offset: -50,
                }"
                class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                >Αναζητηση</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium uppercase"
                to="/login"
                v-if="!isLoggedIn"
                >Συνδεση</router-link
              >
              <router-link
                class="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium uppercase"
                to="/signup"
                v-if="!isLoggedIn"
                >Γινε Μελος</router-link
              >
            </div>
          </div>
          <div class="ml-3 relative" v-if="isLoggedIn">
            <div
              class="rounded-full h-8 w-8 bg-indigo-900 flex justify-center items-center"
            >
              <button
                class="flex text-sm text-white"
                id="user-menu"
                aria-haspopup="true"
                @click="toggleOpen"
              >
                <i class="fas fa-user-alt fa-md"></i>
              </button>
            </div>
            <div
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
              v-if="open"
            >
              <router-link
                :to="{
                  name: 'Profile',
                  params: { user_slug: currentUserSlug },
                }"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                >Λογαριασμός</router-link
              >
              <a
                class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                @click="logout"
              >
                Αποσύνδεση
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="openMenu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#info"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
          >Πληροφοριες</a
        >
        <a
          href="#services"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
          >Υπηρεσια</a
        >
        <a
          href="#search"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
          >Αναζητηση</a
        >
        <router-link
          v-if="!isLoggedIn"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
          to="/login"
          >Συνδεση</router-link
        >
        <router-link
          v-if="!isLoggedIn"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
          to="/signup"
          >Γινε Μελος</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase/app";
import db from "@/firebase/init";

export default {
  data() {
    return {
      open: false,
      openMenu: false,
      isLoggedIn: false,
      currentUser: false,
      currentUserSlug: "",
      currentUserFullName: "",
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;

      //this.currentUserSlug = firebase.auth().currentUser.uid;

      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
          this.currentUserSlug = snapshot.data().slug;
        });
    }

    // console.log(this.currentUser);
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
    toggleOpenMenu() {
      this.openMenu = !this.openMenu;
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ name: "Home" });
        });
    },
  },
};
</script>

<style>
</style>