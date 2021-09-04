import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const list = document.createElement("li");
  list.className = "list-row";
  list.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    console.log(text);
    deleteFromCompleteList(completeButton.parentNode);
    document.getElementById("complete-list").appendChild();
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromCompleteList(deleteButton.parentNode);
  });

  list.appendChild(completeButton);
  list.appendChild(deleteButton);
  document.getElementById("imcomplete-list").appendChild(list);
};

const deleteFromCompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
