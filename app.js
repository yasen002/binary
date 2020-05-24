document.getElementById("binary-form").addEventListener("input", () => {
  const num = document.getElementById("num").value;
  const output = document.getElementById("result");
  output.value = "";
  for (var i = 0; i < num.length; i++) {
    output.value += num[i].charCodeAt(0).toString(2) + " ";
  }
});
