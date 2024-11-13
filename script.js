function showText() {
  let value = document.getElementById("input").value;
  if (value) {
    document.getElementById("user-name").innerText = value;
  } else {
    document.getElementById("user-name").innerText = "value not get";
  }
}
