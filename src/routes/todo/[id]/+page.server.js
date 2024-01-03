export async function load({ fetch, params }) {
  const res = await fetch(`/api/todos/${params.id}`);
  const todo = await res.json();
  console.log(todo)
  return { todo };
}
