import Vue from 'vue';
import App from './App.vue';
import router from './router';

const firebase = require('firebase');

firebase.initializeApp({
  apiKey: 'AIzaSyAqI_GLK8F1Y6Idgtfxx7-PGWLmPljjSi4',
  authDomain: 'cmmc-dsc1.firebaseapp.com',
  projectId: 'cmmc-dsc1',
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

Vue.config.productionTip = false;

new Vue({
  data: {
    addDocument,
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
            console.log(data);
            this.todoLists.push(data);
          });
        });
    },
  },
  mounted() {
    this.getData();
  },
  router,
  render: h => h(App),
}).$mount('#app');
