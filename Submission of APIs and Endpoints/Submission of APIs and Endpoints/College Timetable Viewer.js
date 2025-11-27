function loadTimetable() {
  const day = document.getElementById("daySelect").value;

  fetch(`http://localhost:3000/timetable?day=${day}`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = "";

      if (data.length === 0) {
        list.innerHTML = "<p>No classes today.</p>";
        return;
      }

      data.forEach(item => {
        list.innerHTML += `
          <div class="class-box">
            <h3>${item.subject}</h3>
            <p>Faculty: ${item.faculty}</p>
            <p>Time: ${item.time}</p>
          </div>
        `;
      });
    });
}

document.getElementById("daySelect").addEventListener("change", loadTimetable);
loadTimetable();
