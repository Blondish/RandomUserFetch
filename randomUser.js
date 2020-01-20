// https://randomuser.me/api/
var btn = document.querySelector("button");
var fullNameDisp = document.querySelector("#fullname");
var imageDisp = document.querySelector("#avatar");
var userNameDisp = document.querySelector("#username");
var emailDisp = document.querySelector("#email");
var cityDisp = document.querySelector("#city");

btn.addEventListener("click", function() {
  var url = "https://randomuser.me/api/";
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(embedData)
    .catch(displayErrors);
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
}
function parseJSON(response) {
  return response.json().then(function(data) {
    return data.results[0];
  });
}

function embedData(data) {
  var fullName = data.name.first + " " + data.name.last;
  fullNameDisp.innerText = fullName;
  imageDisp.src = data.picture.medium;
  userNameDisp.innerText = data.login.username;
  emailDisp.innerText = data.email;
  cityDisp.innerText = data.location.city;
}
function displayErrors(error) {
  console.log(error);
}
