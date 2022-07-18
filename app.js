const routes = [
  { path: "/home", component: Home },
  {
    path: "/book_details/:id",
    component: bookDetails,
    name: "book_d",
    params: true,
  },
  {
    path: "/update_book/:id",
    component: bookUpdate,
    name: "book_u",
    params: true,
  },
  {
    path: "/create_user",
    component: createUser,
    name: "create",
    params: true,
  },
  {
    path: "/create_book",
    component: createBook,
    name: "create_b",
    params: true,
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({});
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount("#app");
