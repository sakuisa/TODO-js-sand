import "./styles.css";
// テキストボックスの値を取得し、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");


  // button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //  押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFormIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODOの内容を取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";


    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了 リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
