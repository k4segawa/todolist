<script>
  let todos = [
    { name: 'todo1', id: 1 },
    { name: 'todo2', id: 2 },
    { name: 'todo3', id: 3 },
  ]
</script>

<h1>TODOLIST</h1>
<div>
  {#each todos as todo}
    <div>
      <a href="todo/{todo.id}">{todo.name}</a>
    </div>
  {/each}
</div>
