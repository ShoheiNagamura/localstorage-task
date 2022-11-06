$(function () {
    setTimeout(function () {
        $('.cover').fadeOut(25000);
    });
});

// $(function () {
//     setTimeout(function () {
//         $('.detail').fadeIn(000);
//     });
// });


$(".open-note").on('click', function () {
    $("h1").fadeOut(4000);
    $(".sub-title").fadeOut(4000);
    $(".open-note").fadeOut(4000);
    $(".detail").fadeOut(4000);
    $(".header img").fadeOut(4000);
    $(".header").stop(true).animate({ 'width': 'toggle' }, 5000);
});

// $(".header").fadeOut(5000);

// $(function () {
//     setTimeout(function () {
//         $('.header').fadeOut(5000);
//     });
// });

// $(".header h1").on("clock", funciton(){
//     $('.header').fadeOut(5000);
// });





const memo = [];

const hoge = [];


// saveをクリックするとデータ保存
$("#save").on('click', function () {
    // フォームから値を受け取りdataオブジェクトに格納
    alert("Are you sure you want to include it?");

    const data = {
        "title": $("#title").val(),
        "text": $("#text").val()
    }

    memo.push(data); //memo配列に格納
    hoge.push("<p>" + memo.at(-1).text + "</p>");
    hoge.push("<li>" + memo.at(-1).title + "</li>");

    // hoge配列をリバース
    hoge.reverse();

    $(".y").html(hoge);
    hoge.reverse(); //abc

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

    memo.reverse(); //cba

    for (let i = 0; i < memo.length; i++) {
        hoge.push("<li>" + memo[i].title + "</li>");
        hoge.push("<p>" + memo[i].text + "</p>");
    }//cba

    $(".y").html(hoge); //cba

    memo.reverse(); //abc
    hoge.reverse(); //abc
}


// データの削除
$("#clear").on("click", function () {
    localStorage.removeItem("memo");
    hoge.length = 0; //配列を初期化
    // hoge = []; //初期化
    $('.y').children().remove();
    $("#title").val("");
    $("#text").val("");
});
