import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //li生成
  const li = document.createElement("li");
  //div生成(同じクラス名をつける)
  const div = document.createElement("div");
  div.className = "list-row";
  //pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText; //innerTextで要素を格納しinputTextの値を設定

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};
//id=add-buttonに対してクリックイベントを付与
document
  .getElementById("add-button") //idを取得
  .addEventListener("click", () => onClickAdd()); //clickされたらonClickAddを実行する
