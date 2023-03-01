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
  console.log(data);
}
