export async function getTodos() {
  const response = await fetch('http://localhost:3000/todos');
  const data = await response.json();
  return data;
}

export async function postTodo(title) {
  const response = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...title
    })
  });
};
