<script>
  export let data;
  let todo = { id: data.todo, name: 'name'}
</script>

<h1><a href="/">TODOLIST</a></h1>
<div>
  <div>
    id: {todo.id}
  </div>
  <div>
    name: {todo.name}
  </div>
</div>
