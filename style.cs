.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

body {
  background-image: linear-gradient(to right, blue, rgb(25, 128, 187));
  height: 100vh;
}

h1 {
  color: white;
  font-weight: bolder;
}

.novaTarefa {
  display: flex;
  color: white;
  font-weight: bolder;
  font-size: 20px;
  display: flex;
  gap: 10px;
  border-radius: 7px;
  padding: 10px;
  margin-top: 30px;
  background-color: rgb(38, 10, 90);
  text-transform: capitalize;
}

.completeBtn {
  background-color: rgb(4, 63, 4);
  border: none;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
}

.completeBtn:hover {
  background-color: rgb(0, 255, 0);
}

.deleteBtn {
  background-color: rgb(88, 4, 4);
  border: none;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
}

.deleteBtn:hover {
  background-color: rgb(255, 0, 0);
}

.input {
  display: flex;
}

#tarefaInput {
  padding: 7px;
  font-weight: bolder;
  font-size: 18px;
  border: none;
  outline: none;
}

.adicionarBtn {
  margin-left: 5px;
  padding: 10px;
  border: none;
  border-left: 1 px solid black;
  color: black;
  font-weight: bolder;
}

.adicionarBtn:hover {
  background-color: seagreen;
  cursor: pointer;
  transition: 0.5s;
}


