// card - 1
document.getElementById("card-btn-1").addEventListener("click", function () {
  alert("Board updated Successfully");
  //   task number decrease
  document.getElementById("task-assignment-number").innerText--;
  //   total increase
  document.getElementById("total-number").innerText++;
  //   disable button
  let btn = document.getElementById("card-btn-1");
  btn.disabled = true;
  btn.style.backgroundColor = "#DFE0E9";
  //   add to history
  let historyAdd = document.createElement("p");
  historyAdd.classList.add(
    "text-sm",
    "font-normal",
    "rounded-md",
    "bg-slate-100",
    "p-4"
  );
  let cardTitle = document.getElementById("card-title-1").innerText;
  historyAdd.innerText =
    "You have Complete The Task " + cardTitle + " at " + localTime;
  let historyContainer = document.getElementById("history-container");
  historyContainer.appendChild(historyAdd);
});

// card - 2
document.getElementById("card-btn-2").addEventListener("click", function () {
  alert("Board updated Successfully");
  //   task number decrease
  document.getElementById("task-assignment-number").innerText--;
  //   total increase
  document.getElementById("total-number").innerText++;
  //   disable button
  let btn = document.getElementById("card-btn-2");
  btn.disabled = true;
  btn.style.backgroundColor = "#DFE0E9";
  //   add to history
  let historyAdd = document.createElement("p");
  historyAdd.classList.add(
    "text-sm",
    "font-normal",
    "rounded-md",
    "bg-slate-100",
    "p-4"
  );
  let cardTitle2 = document.getElementById("card-title-2").innerText;

  historyAdd.innerText =
    "You have Complete The Task " + cardTitle2 + " at " + localTime;
  let historyContainer = document.getElementById("history-container");
  historyContainer.appendChild(historyAdd);
});

// card - 3
document.getElementById("card-btn-3").addEventListener("click", function () {
  alert("Board updated Successfully");
  //   task number decrease
  document.getElementById("task-assignment-number").innerText--;
  //   total increase
  document.getElementById("total-number").innerText++;
  //   disable button
  let btn = document.getElementById("card-btn-3");
  btn.disabled = true;
  btn.style.backgroundColor = "#DFE0E9";
  //   add to history
  let historyAdd = document.createElement("p");
  historyAdd.classList.add(
    "text-sm",
    "font-normal",
    "rounded-md",
    "bg-slate-100",
    "p-4"
  );
  let cardTitle3 = document.getElementById("card-title-3").innerText;
  historyAdd.innerText =
    "You have Complete The Task " + cardTitle3 + " at " + localTime;
  let historyContainer = document.getElementById("history-container");
  historyContainer.appendChild(historyAdd);
});

// card - 4
document.getElementById("card-btn-4").addEventListener("click", function () {
  alert("Board updated Successfully");
  //   task number decrease
  document.getElementById("task-assignment-number").innerText--;
  //   total increase
  document.getElementById("total-number").innerText++;
  //   disable button
  let btn = document.getElementById("card-btn-4");
  btn.disabled = true;
  btn.style.backgroundColor = "#DFE0E9";
  //   add to history
  let historyAdd = document.createElement("p");
  historyAdd.classList.add(
    "text-sm",
    "font-normal",
    "rounded-md",
    "bg-slate-100",
    "p-4"
  );
  let cardTitle4 = document.getElementById("card-title-4").innerText;
  historyAdd.innerText =
    "You have Complete The Task " + cardTitle4 + " at " + localTime;
  let historyContainer = document.getElementById("history-container");
  historyContainer.appendChild(historyAdd);
});

// card - 5
document.getElementById("card-btn-5").addEventListener("click", function () {
  alert("Board updated Successfully");
  //   task number decrease
  document.getElementById("task-assignment-number").innerText--;
  //   total increase
  document.getElementById("total-number").innerText++;
  //   disable button
  let btn = document.getElementById("card-btn-5");
  btn.disabled = true;
  btn.style.backgroundColor = "#DFE0E9";
  //   add to history
  let historyAdd = document.createElement("p");
  historyAdd.classList.add(
    "text-sm",
    "font-normal",
    "rounded-md",
    "bg-slate-100",
    "p-4"
  );
  let cardTitle5 = document.getElementById("card-title-5").innerText;
  historyAdd.innerText =
    "You have Complete The Task " + cardTitle5 + " at " + localTime;
  let historyContainer = document.getElementById("history-container");
  historyContainer.appendChild(historyAdd);
});

// card - 6
document.getElementById("card-btn-6").addEventListener("click", function () {
  alert("Board updated Successfully");
  //   task number decrease
  document.getElementById("task-assignment-number").innerText--;
  //   total increase
  document.getElementById("total-number").innerText++;
  //   disable button
  let btn = document.getElementById("card-btn-6");
  btn.disabled = true;
  btn.style.backgroundColor = "#DFE0E9";
  //   add to history
  let historyAdd = document.createElement("p");
  historyAdd.classList.add(
    "text-sm",
    "font-normal",
    "rounded-md",
    "bg-slate-100",
    "p-4"
  );
  let cardTitle6 = document.getElementById("card-title-6").innerText;
  historyAdd.innerText =
    "You have Complete The Task " + cardTitle6 + " at " + localTime;
  let historyContainer = document.getElementById("history-container");
  historyContainer.appendChild(historyAdd);
});
