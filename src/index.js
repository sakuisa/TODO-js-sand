import "./styles.css";
// テキストボックスの値を取得し、初期化する
const onClickAdd = () => {
   const inputText = document.getElementById("add-text").value;
document.getElementById("add-text").value = "";

// div生成
const div = document.createElement("div");
div.className = "list-row";


// liタグ生成
const li = document.createElement("li")
li.innerText = inputText;

// button（完了）タグ生成
const completeButton = document.createElement ("button");
completeButton.innerText = "完了";
completeButton.addEventListener("click" , () =>{
   // alert("完了")
   //  押された削除ボタンの親タグ(div)を未完了リストから削除
   deleteFromIncompleteList(deleteButton.parentNode);
   
   // 完了リストに追加する要素
   const addTarget = completeButton.parentElementNode;
   
   // TODOの内容を取得
   const text = addTarget.firstElementChild.innerText;
   
   // div以下を初期化
   addTarget.textContent =null;
   
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

// button（削除）タグ生成
const deleteButton = document.createElement ("button");
deleteButton.innerText = "削除";
deleteButton.addEventListener ("click",() => {
// 押された削除ボタンの親タグ(div)を未完了リストから削除
deleteFromIncompleteList(deleteButton.parentNode);

});

// divタブの子要素に各要素を設定
div.appendChild(li);
div.appendChild(completeButton);
div.appendChild(deleteButton);

// 未完了のリストに追加
document.getElementById("incomplete-list").appendChild(div);

};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
document.getElementById("incomplete-list").removeChild(target);   
}


document.getElementById("add-button")
.addEventListener("click",() => onClickAdd());
