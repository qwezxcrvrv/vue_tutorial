<template>
  <div class="todo">
    <div class="status" :class="{ active: todoData.completed }"></div>
    <div>
      <h3>{{ todoData.title }}</h3>
      <p>{{ todoData.description }}</p>
      <p v-if="todoData.completed">Todo Completed!</p>
      <p v-else>Todo Incomplete!</p>
    </div>
    <button @click="setTodoComplete" type="button" class="toggle-button">{{ todoData.completed ? "x" : "✔" }}</button>
    <!--setTodoComplete의 this.$emit이 사용됨-->
    <button @click="$emit('remove-requested', todoData.id)" type="button">Remove</button>
    <!--
      $emit은 특정한 이벤트를 유저가 정의한 이름으로 parent component에 전달
      위의 $emit은 remove-requested의 이름으로 todoData.id를 parameter로 가진 click이벤트를 실행시킨다는 정보를 parent component로 전달함 (App.vue)
      클릭시 실행되는 로직은 App.vue에 정의되어있음
    -->
  </div>
</template>

<script>
export default {
  props: { 
    //prop은 TodoItem을 사용을하는 상위 파일(App.vue)에서 전달된 데이터를 받아서 chile component에서(TodoItem.vue) 사용할수 있게 함
    //App에서 :todoData가 아래 todoData가 되는것이며 이름이 매칭이 되어야함. :는 dynamic 하게 정보가 변하는 props를 의미. 만약 :이 없다면 정보가 변하지 않는 static props임
    todoData: {
      type: Object,
      //todoData가 object형식인지 validation함. 만약 다른 형식일경우에는 console에 warning이 뜸
      //object props를 받으면 아래와 같이 default(){ return{}} 형식으로 object를 받는다.
      default() {
        return {
          completed: false,
          title: "Todo Placeholder",
          description: "Description placeholder text"
        }
      }
    }
  },
  data() {
    return {

    }
  },
  methods: {
    setTodoComplete() {
      this.$emit('status-changed');
      //script에서 사용시에는 $emit앞에 this.를 붙임
    }
  }
}
</script>

<style scoped>
.todo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

h3,
p {
  margin: 0.2rem;
}

p {
  font-size: 0.8rem;
  color: rgb(189, 189, 189);
}

.status {
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: rgb(255, 90, 90);
}

button {
  height: 2rem;
}

.toggle-button {
  flex: 0, 0, auto;
  width: 2rem;
}

.toggle-button:first-of-type {
  margin-left: auto;
}

.active {
  background-color: rgb(90, 255, 90);
}
</style>