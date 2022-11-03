const memo = [];

const hoge = [];


// saveをクリックするとデータ保存
$("#save").on('click', function () {
    console.log(hoge);
    // フォームから値を受け取りdataオブジェクトに格納
    const data = {
        "title": $("#title").val(),
        "text": $("#text").val()
    }
    memo.push(data); //memo配列に格納

    // for (let i = 0; i < memo.length; i++) {
    hoge.push("<p>" + memo.at(-1).title + "</p>");
    // hoge配列をリバース
    hoge.reverse();
    console.log(hoge); //cba
    console.log(memo); //abc
    // }
    $(".y").html(hoge);
    hoge.reverse(); //abc
    console.log(hoge); //abc
    console.log(memo); //abc

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
    // console.log(data); abc
    for (let i = 0; i < data.length; i++) {
        memo.push(data[i]); //abc
    }

    // console.log(memo);
    memo.reverse(); //cba

    for (let i = 0; i < memo.length; i++) {
        hoge.push("<p>" + memo[i].title + "</p>");
    }//cba



    console.log(hoge);

    $(".y").html(hoge); //cba

    memo.reverse(); //abc
    hoge.reverse(); //abc
}
