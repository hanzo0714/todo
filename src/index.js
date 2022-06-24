import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText); //未完了リストに追加する関数を呼び出し
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //li生成
  const li = document.createElement("li");
  //div生成(同じクラス名をつける)
  const div = document.createElement("div");
  div.className = "list-row";
  //pタグ生成
  const p = document.createElement("p");
  p.innerText = text; //innerTextで要素を格納しtextの値を設定
  //buttonタグ生成（完了ボタン）=>押下時のイベント
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押下された完了ボタンのliタグを未完了リストから削除
    deleteFromIncompleteList(div.parentNode);
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode; //完了ボタンの親要素取得
    //TODOの内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化
    addTarget.textContent = null;

    //pタグを生成
    const p = document.createElement("p");
    p.innerText = text;
    //buttonタグ生成(戻すボタン)
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンのliタグを完了リストから削除
      const deleteTarget = div.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    //liタグの子要素にdivを設定
    li.appendChild(div);
    //divタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //buttonタグ生成（削除ボタン）=>押下時のイベント
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押下された削除ボタンのliタグを未完了リストから削除
    deleteFromIncompleteList(div.parentNode);
  });

  //liタグの子要素にdivを設定
  li.appendChild(div);
  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

//id=add-buttonに対してクリックイベントを付与
document
  .getElementById("add-button") //idを取得
  .addEventListener("click", () => onClickAdd()); //clickされたらonClickAddを実行する
