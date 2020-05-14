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

export default {
  name: 'Todo',
  props: ['title', 'list'],
  data: function() {
    return {
      tasks: [
      { id: 1, text: 'Learn JavaScript', completed: false },
      { id: 2, text: 'Learn Vue', completed: false },
      { id: 3, text: 'Build something awesome', completed: false }
    ]
    }
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
    addTask: function (event) {
      this.tasks.push({
        id: this.tasks.length + 1,
        text: event.target.value,
        completed: false
      })
      event.target.value = ''
    },
    removeTask: function(id) {
      console.log('removing ', id)
      this.tasks = this.tasks.filter(task => task.id !== id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
