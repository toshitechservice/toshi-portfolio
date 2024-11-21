$(function(){
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニュークリック時
  $('.toggle-btn').on('click', function() {
    if($('#header').hasClass('active')) {
      $('#header').removeClass('active');
    } else {
      $('#header').addClass('active');
    }
  });

  // メニュー表示中の画面クリック時
  $('#mask').on('click', function() {
    $('#header').removeClass('active');
  });



  /*=================================================
  タイピングアニメーション
  ===================================================*/
  $('.typing').t({
    caret: false,
  });

  $('.typing2').t({
    caret: false,
    delay: 1,
  })



  /*=================================================
  Inview（画面に表示されたタイミングで処理を実行）
  ===================================================*/
  $('.works-list li').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('slideIn');
    }
  });

  $('.skill-item').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('slideIn');
    }
  });

  $('.about-wrap div').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if(isInView){
      // 要素が表示されたらslide-leftクラスを追加
      $(this).stop().addClass('slideIn');
    }
  });



  /*=================================================
  コピーボタン＋メッセージ表示
  ===================================================*/
  $('.copybtn').on('click', function(){
    // クリックしたボタンの前の要素を取得
    var copytxt = $(this).prev();
    navigator.clipboard.writeText(copytxt.text());

    // PCクリック時フラッシュメッセージ表示
    $('.msg-txt').fadeIn(100, function(){
      setTimeout(function(){
        $('.msg-txt').fadeOut(500);
      }, 1000)
    });

  });



  /*=================================================
  お問い合わせフォームの処理
  ===================================================*/
  // 送信ボタンクリック時の処理
  $(".sendBtn").click(function(){ 
    $.ajax({
        type: 'POST',
        dataType:'json',
        //データをmail.phpに
        url:'../functions/mail.php',
        data:{
            //入力データを送信します。
            //ひとまず、左右どちらも入力内容が入った変数名で統一してください。
            email:email,
            name:name,
            message:message,
        },
        success:function(data) {
            alert(data)
            //フォームのトップページにリダイレクト
            // location.href = "./";
        },
        error:function(XMLHttpRequest, textStatus, errorThrown) {
            //エラーを表示
            alert(errorThrown);
        }
      }); 
  });


  // フォーカスが外れたとき（blur）にフォームの入力チェックをする
  $('#name').blur(function () {
    inputNameCheck();
  });

  $('#furigana').blur(function () {
    inputFuriganaCheck();
  });

  $('#email').blur(function () {
    inputMailCheck();
  });

  $('#message').blur(function () {
    inputMessageCheck();
  });


  // 入力チェック関数定義
  function inputNameCheck() {
    // お名前のチェック
    if($('#name').val() == '') {
      // エラーあり
      $('#name').css('background-color', '#f79999');
      $('.err-name').text('※入力してください');
    } else {
      // エラーなし
      $('#name').css('background-color', '#fafafa');
      $('.err-name').text('');
    }
  }

  function inputFuriganaCheck() {
    // フリガナのチェック
    if ($('#furigana').val() == '') {
      // エラーあり
      $('#furigana').css('background-color', '#f79999');
      $('.err-furigana').text('※入力してください');
    } else {
      // エラーなし
      $('#furigana').css('background-color', '#fafafa');
      $('.err-furigana').text('');
    }
  }

  function inputMailCheck() {
    // メールアドレスのチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
      // エラーあり
      $('#email').css('background-color', '#f79999');
      $('.err-mail').text('※メールアドレスが正しくありません');
    } else {
      // エラーなし
      $('#email').css('background-color', '#fafafa');
      $('.err-mail').text('');
    }
  }

  function inputMessageCheck() {
    // お問い合わせのチェック
    if ($('#message').val() == '') {
      // エラーあり
      $('#message').css('background-color', '#f79999');
      $('.err-message').text('※入力してください');
    } else {
      // エラーなし
      $('#message').css('background-color', '#fafafa');
      $('.err-message').text('');
    }
  }

});