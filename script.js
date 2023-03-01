let data;
let request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    loadData(data[0]);
  }
};

request.open("GET", "https://api.github.com/users/cjtessler/repos", true);
request.send();

function loadData(data) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Reference project container
  const projectContainer = document.getElementById("project-container");
  let repo = data["full_name"];
  let date = new Date(data["updated_at"]).toLocaleDateString("en-us", options);

  // Create repo card
  const project = document.createElement("div");
  project.classList = "repo-card";
  project.setAttribute("data-repo", repo);
  projectContainer.appendChild(project);

  // Create subtext for last commit
  const subtext = document.createElement("div");
  subtext.classList = "subtext";
  subtext.innerHTML = `Last commit on ${date}.`;
  projectContainer.appendChild(subtext);
}
