<template>
  <li>
    <input type="checkbox" v-model="task.completed">
    <span v-bind:class="{ done: task.completed }">{{task.text}}</span>
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
</style>