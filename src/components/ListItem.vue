<template>
  <li>
    <input type="checkbox" v-model="task.completed">
    <span v-bind:class="{ done: task.completed }">{{task.text}}</span>
    <span class="remove" v-on:click="$emit('remove-task', task.id)">x</span>
  </li>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['task']
}
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}

.remove {
  color: maroon;
  font-weight: bold;
  margin-left: 10px;
  font-size: 14px;
  vertical-align: middle;
  cursor: pointer;
}
</style>