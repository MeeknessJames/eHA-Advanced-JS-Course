
document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('todo');

  list.addEventListener('click', (event) => {
    const item = event.target.closest('.todo-item');
    if (!item || !list.contains(item)) return;

    item.classList.toggle('completed');
  });
});
