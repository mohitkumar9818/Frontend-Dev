function loadTasks() {
  const filter = $('#filter').val();
  let url = 'http://localhost:3000/tasks';

  if (filter === 'completed') {
    url += '?completed=true';
  } else if (filter) {
    url += '?priority=' + filter;
  }

  $.ajax({
    url: url,
    type: 'GET',
    success: function (data) {
      $('#taskList').empty();
      data.forEach(task => renderTask(task));
    }
  });
}

function renderTask(task) {
  $('#taskList').append(`
    <div class="task">
      <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id}, ${task.completed})">
      <div class="title">${task.title}</div>
      <div>[${task.priority}]</div>
    </div>
  `);
}

function toggleTask(id, completed) {
  $.ajax({
    url: `http://localhost:3000/tasks/${id}`,
    type: 'PATCH',
    data: JSON.stringify({ completed: !completed }),
    contentType: 'application/json',
    success: function () {
      loadTasks();
    }
  });
}

$('#filter').on('change', loadTasks);
loadTasks();
