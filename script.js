var emailVisible = false;

function toggleEmail() {
  var emailDiv = document.getElementById("email");
  emailVisible = !emailVisible;

  if (emailVisible) {
    emailDiv.style.display = "block";
  } else {
    emailDiv.style.display = "none";
  }
}
