<template>
  <div>
    <input type="text" v-model="todoInput">&nbsp;
    <button type="button" @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      todoInput: '',
    };
  },
  methods: {
    addTodo() {
      if (this.todoInput.length < 1) {
        // eslint-disable-next-line no-alert
        alert('Todo field can\'t empty.');
      } else {
        this.$root.$data.addDocument({
          todo: this.todoInput,
          created_at: Date.now(),
        });
        this.todoInput = '';
      }
    },
  },
};
</script>
