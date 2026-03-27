fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("views").innerText = data.views;
    document.getElementById("followers").innerText = data.followers;
    document.getElementById("following").innerText = data.following;
    document.getElementById("posts").innerText = data.posts;
    document.getElementById("tasks").innerText = data.tasks;
  });