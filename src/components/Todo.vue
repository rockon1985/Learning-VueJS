<template>
  <div>
    <div class="container">
      <h1>{{ title }}</h1>
      <span>{{`${completedTasks} / ${totalTasks} Completed`}}</span>
      <ul>
        <input type="text" class="add-task-input" v-on:keyup.enter="addTask" placeholder="Add new task">
        <ListItem
          v-for="task in tasks"
          v-bind:key = "task.id"
          v-bind:task = "task"
          v-on:remove-task="removeTask"
          v-on:toggle-task="toggleTask"
        ></ListItem>
      </ul>
    </div>
    <div class="rawData">
      {{tasks}}
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'
import TodoService from '../services/TodoService'

export default {
  name: 'Todo',
  props: ['title'],
  data: function() {
    return { tasks: [] }
  },
  computed: {
    completedTasks: function () {
      return this.tasks.filter(i => i.completed).length
    },
    totalTasks: function() {
      return this.tasks.length
    }
  },
  components: {
    ListItem
  },
  methods: {
    addTask: async function (event) {
      const {id, text, completed} = await TodoService.addNew({ text: event.target.value })  
      this.tasks.push({ id, text, completed })
      event.target.value = ''
    },
    toggleTask: async function(id) {
      let task = this.tasks.find(task => task.id === id)
      await TodoService.updateById(id, { completed: !task.completed })
      task.completed = !task.completed
    },
    removeTask: async function(id) {
      await TodoService.removeById(id)
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  },
  mounted: async function() {
    const tasks = await TodoService.getAll()
    this.tasks = tasks
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
.container ul {
  list-style: none;
  padding: 0;
}
.container li {
  font-size: 1.4em;
  margin: 0 10px;
}

.container {
  padding: 5px;
  width: 50%;
  margin: auto;
  background: wheat;
  border-radius: 10px;
  margin: 10px auto;
  box-shadow: 2px 4px 4px lightgray;
}
.rawData {
  width: 50%;
  background: lightgray;
  min-height: 70px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9em;
  margin: auto;
  padding: 5px;
}

.add-task-input {
  margin-bottom: 15px;
  width: 70%;
  height: 22px;
  padding: 0 5px;
}

.add-task button {
  margin-bottom: 15px;
  width: 15%;
  height: 26px;
  margin-left: 2px;
  font-size: 14px;
}
</style>
