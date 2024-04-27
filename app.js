const inputTarefa = document.querySelector("#tarefaInput");
const adicionarBtn = document.querySelector(".adicionarBtn");
const tarefaLista = document.querySelector(".tarefaLista");

adicionarBtn.addEventListener("click", adicionar);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    adicionar();
  }
});

function adicionar(event) {
  // tarefadiv
  const tarefaDiv = document.createElement("div");
  tarefaDiv.classList.add("tarefaDiv");
  // nova tarefa
  const novaTarefa = document.createElement("li");
  novaTarefa.classList.add("novaTarefa");
  // tarefa input
  novaTarefa.innerText = inputTarefa.value;
  //putting tarefa in tarefa div
  tarefaDiv.appendChild(novaTarefa);
  //complete of tarefa button
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("completeBtn");
  completeBtn.addEventListener("click", function () {
    novaTarefa.style.background = "green";
  });
  // delete of tarefa button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", deleteButton);

  novaTarefa.appendChild(completeBtn);
  novaTarefa.appendChild(deleteBtn);
  tarefaLista.appendChild(tarefaDiv);

  inputTarefa.value = "";
}

function deleteButton(e) {
  const item = e.target;
  if (item.classList[0] === "deleteBtn") {
    const tarefa = item.parentElement;
    tarefa.remove();
  }
}
