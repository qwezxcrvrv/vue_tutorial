<template>
  <main>
    <header>
      <img src="https://picsum.photos/id/237/100" alt="">
      <div>
        <h1>Todo App</h1>
        <p>Some clever tagline</p>
      </div>
      <div>
        <div class="form-group">
          <label for="todo-title">To Do Title:</label>
          <input v-model="newTodoTitle" id="todo-title" type="text">
        </div>
        <div class="form-group">
          <label for="todo-description">To Do Description:</label>
          <textarea v-model="newTodoDescription" id="todo-description"></textarea>
        </div>
        <button @click="addTodo" type="button">Add</button>
      </div>
    </header>
    <section class="list-body">
      <h3>My Tasks</h3>
      <ul>
        <!-- Todo items go here -->
        <TodoItem @status-changed="todo.completed = !todo.completed" @remove-requested="removeTodo"
          v-for="todo of todoList" :key="todo.id" :todoData="todo" />
        <!-- @status-changed와 @remove-requested는 TodoItem component에서 어떤 이벤트시에 사용되는지 정의됨  -->
      </ul>
    </section>
  </main>
  <footer>
    <h3>footer</h3>
  </footer>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
//./components/TodoItem.vue의 정보를 TodoItem으로 사용

export default {
  components: { TodoItem },//TodoItem을 template에서 component로 사용할수 있게해줌
  data() {
    return {
      customId: null,
      currentId: 1,
      newTodoTitle: null,
      newTodoDescription: null,
      todoList: [],
    }
  },
  methods: {
    addTodo() {
      this.todoList.push(
        {
          title: this.newTodoTitle,
          description: this.newTodoDescription,
          completed: false,
          id: this.currentId++,
        }
      )
    },
    removeTodo(id) {
      console.log(id);
      const startPos = this.todoList.findIndex(function (item) {
        return item.id === id;
      })
      //findIndex는 유저나 로직에 의해서 주어진 index의 value를 array에서 가져옴
      //parameter로 주어진 item은 array안의 각각의 value들을 의미함
      this.todoList.splice(startPos, 1);
    }
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  color: black;
  background-color: #ffcc66;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

header div * {
  margin: 0.2rem 0;
}

.list-body {
  padding: 0 1rem;
}

img {
  display: block;
  width: 6rem;
  height: 6rem;
  margin: 2rem;
  border-radius: 50%;
}

main {
  flex: 1 0 100%;

  background-color: #282828
}

footer {
  background-color: #ffcc66;
}
</style>