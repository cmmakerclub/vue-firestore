<template>
  <div>
    <h1>Todo Lists</h1>
    <ul v-for="todoList in this.$root.$data.todoLists" :key="todoList.id">
      <li>
        {{ todoList.todo }}
        &nbsp;
        <button
          type="button"
          class="btn-danger"
          @click="deleteTodo(todoList.id)">
          x
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .btn-danger {
    background-color: #ff4d4d;
    color: white;
  }
</style>

<script>
export default {
  name: 'TodoLists',
  methods: {
    deleteTodo(todoListId) {
      this.$root.$data.deleteDocument(todoListId);
    },
  },
  mounted() {
    console.log('TodoLists mounted.');
  },
};
</script>
