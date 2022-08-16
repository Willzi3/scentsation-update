import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    users: null,
    product: null,
    products: null,
  },
  getters: {
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    sortProductsByTitle: (state) => {
      state.products = state.products.sort((a, b) => {
        // return a.number - b.number;
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.products.reverse();
      }
      state.asc = !state.asc;
    },
  },
  actions: {
     // USER
     getUser: async (context, id) => {
      fetch("https://scentsation-store.herokuapp.com/users/:id" + id)
        .then((res) => res.json())
        .then((json) => context.commit("setUser", json))
        .catch((err) => console.log(err.message));
    },
    // USERS
    getUsers: async (context) => {
      fetch("https://scentsation-store.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => context.commit("setUsers", data))
        .catch((err) => console.log(err.message));
    },

    // LOGIN USER

    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        `https://scentsation-store.herokuapp.com/users/login?email=${email}&password=${password}`
      );
      const userData = await response.json();
      console.log(userData);
      if (userData.length) {
        context.commit("setUser", userData[0]);
        // window.localStorage.setItem("user", JSON.stringify(userData[0]));
      }
      if (!userData.length) return alert("No user found");
    },

    // REGISTER USER
    register: async (context, user) => {
      fetch("https://scentsation-store.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },

    // SHOW ALL OF EM PRODUCTS
    getProducts: async (context) => {
      fetch("https://scentsation-store.herokuapp.com/products")
        .then((response) => response.json())
        .then((json) => context.commit("setProducts", json));
    },

    // SHOW ONE ITEM
    getProduct: async (context, id) => {
      fetch("https://scentsation-store.herokuapp.com/products/" +id)
        .then((response) => response.json())
        .then((product) => context.commit("setProduct", product[0]));
    },

    // PROFILE
    // ADD TO CART
    addCart: async (context, item) => {
      context.state.user.cart.push(item);
      context.dispatch("updateUserInfo", context.state.user);
    },
    // DELETE CARD LIST ITEM
    detletCartItem: async (context, item) => {
      context.state.user.cart = context.state.user.cart.filter(
        (item) => item.id != item.id
      );
      context.dispatch("updateUserInfo", context.state.user);
    },

    updateUserInfo: async (context, user) => {
      const { id, email, password, fullname, phone, cart, userRole } = user;
      fetch("https://scentsation-store.herokuapp.com/users/" + id, {
        method: "PATCH",
        body: JSON.stringify({
          email: email,
          password: password,
          fullname: fullname,
          phone: phone,
          cart: cart,
          userRole: userRole,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },
  },
  modules: {
  }
})
