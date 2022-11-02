
// const hoge = [
//     {
//         "name": "nagamura",
//         "age": 28,
//     },
//     {
//         "name": "shouhei",
//         "age": 27
//     }
// ]

// hoge.push({ name: "techann", age: 24 });

// console.log(hoge);


const memo = [];

// saveをクリックするとデータ保存
$("#save").on('click', function () {
    // フォームから値を受け取り変数に格納
    const data = {
        "title": $("#title").val(),
        "text": $("#text").val()
    }
    memo.push(data);

    for (let i = 0; i < memo.length - 1; i++) {
        $(".list").append(memo[i].title);
    }

    //JSONデータに変換しローカルストレージに格納
    const jsonMemo = JSON.stringify(memo);
    localStorage.setItem("memo", jsonMemo);
})

//データの取得
if (localStorage.getItem("memo")) {
    //ローカルストレージからJSONデータを取得
    const jsonMemo = localStorage.getItem("memo");
    // //取得したJSONデータをオブジェクトに変換
    const data = JSON.parse(jsonMemo);
    for (let i = 0; i < data.length; i++) {
        memo.push(data[i]);
    }

    for (let i = 0; i < memo.length - 1; i++) {
        $(".list").append(memo[i].title);
    }
}
