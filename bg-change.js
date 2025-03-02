const colors = [
  "#FF6B6B",
  "#6BFFB3",
  "#6B83FF",
  "#F9C74F",
  "#90BE6D",
  "#F9844A",
  "#4D908E",
  "#A3D2CA",
  "#A262CB",
  "#A322CC",
];
let index = 0;

document.getElementById("bg-change").addEventListener("click", function () {
  document.body.style.backgroundColor = colors[index];
  index = index + 1;
  if (index >= colors.length) {
    index = 0;
  }
});
