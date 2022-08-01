Vue.createApp({
  data() {
    return {
      // data here
      userInput: "",
      todoList: [],
    };
  },
  methods: {
    // methods here
    addTodo() {
      // add userInput to the todoList
      this.userInput = this.userInput.trim();
      if (this.userInput !== "") {
        const newTodo = {
          string: this.userInput,
          completed: false,
        };

        this.todoList.push(newTodo);

        // clear the input field
        this.userInput = "";
        // focus the input field
      }

      this.$refs.todoInput.focus();
    },
    removeTodo(index) {
      console.log(index);
      this.todoList.splice(index, 1);
    },
  },
  computed: {
    completedTodos() {
      let counter = 0;
      for (let todo of this.todoList) {
        if (todo.completed) {
          counter++;
        }
      }
      return counter;
    },
  },
  watch: {
    completedTodos(newVal) {
      if (newVal >= this.todoList.length) {
        console.log("Yay all todos complete!");
      } else {
        console.log("not done yet keep going!");
      }
    },
  },
  mounted() {
    console.log("the app has loaded!");
  },
}).mount("#todo-app");
