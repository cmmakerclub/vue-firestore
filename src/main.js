import Vue from 'vue';
import App from './App.vue';
import router from './router';

const _ = require('underscore');
const firebase = require('firebase');

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
});

const db = firebase.firestore();

const addDocument = (data = {}) => {
  db.collection('TodoLists').add(data)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

const deleteDocument = (id) => {
  db.collection('TodoLists').doc(id).delete().then(() => {
    console.log('Document successfully deleted!');
  })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

Vue.config.productionTip = false;

new Vue({
  data: {
    addDocument,
    deleteDocument,
    todoLists: [],
  },
  methods: {
    getData() {
      db.collection('TodoLists')
        .onSnapshot((querySnapshot) => {
          this.todoLists = [];
          querySnapshot.forEach((doc) => {
            const data = {
              ...doc.data(),
              id: doc.id,
            };
            // console.log(data);
            this.todoLists.push(data);
          });
          this.todoLists = _.sortBy(this.todoLists, d => d.created_at);
          this.todoLists = this.todoLists.reverse();
        });
    },
  },
  mounted() {
    this.getData();
  },
  router,
  render: h => h(App),
}).$mount('#app');
