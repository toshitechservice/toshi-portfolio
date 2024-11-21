<?php
//jsで送られてきたデータを受け取り、変数に格納
$mailarea = htmlspecialchars($_POST['mailarea'], ENT_QUOTES);
$namearea = htmlspecialchars($_POST['namearea'], ENT_QUOTES);
$textboxarea = htmlspecialchars($_POST['textboxarea'], ENT_QUOTES);
  
//文字コードを日本語,UTF-8に設定
header("Content-Type:text/html; charset=UTF-8");
mb_language("japanese");
mb_internal_encoding("utf-8");
  
//送信先のメールアドレスを変数に格納
$mail="toshi.techservice@gmail.com";
//タイトルを変数に格納
$sub1="[自動返信] 原寿旭へのお問い合わせが完了しました";
//$mail_toという変数に格納、送信時使用
$mail_to = $mailarea;
  
//メールの本文を書きます。
//改行しながら変数に一行ずつ書いていきましょう。
$messegeall .= "原寿旭へのお問い合わせありがとうございます。\n";
$messegeall .= "今後とも、何卒、よろしくお願いいたします。\n";
$messegeall .= "\n";
$messegeall .= "─送信内容の確認─────────────────\n";
$messegeall .= "\n";
$messegeall .= "お名前：".$namearea."\n";
$messegeall .= "メールアドレス：".$mailarea."\n";
$messegeall .= "テキスト：\n";
$messegeall .= $textboxarea."\n";
$messegeall .= "\n";
$messegeall .= "─────────────────────────\n";
$messegeall .= "\n";
$messegeall .= "============================================\n";
$messegeall .= "このメールは自動送信です。\n";
$messegeall .= "お心当たりのない方は、お手数をおかけいたしますが、\n";
$messegeall .= "下記メールアドレスまでご連絡ください。\n";
$messegeall .= "============================================\n";
$messegeall .= "\n";
$messegeall .= "サイト : https://google.com\n";
$messegeall .= "\n";
$messegeall .= "━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
$messegeall .= "　原寿旭(はらとしあき)\n";
$messegeall .= "　E-mail：toshi.techservice@gmail.com\n";
$messegeall .= "━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
  
//メールを送信処理
//$success1=mb_send_mail(送り先メアド,タイトル,メッセージ内容,"From:".送り元メアド);
$success1=mb_send_mail($mail_to,$sub1,$messegeall,"From:".$mail);
//自動返信メールは送り先メアドと、送り元メアドを交換すると送れます。
$success2=mb_send_mail($mail,$sub1,$messegeall,"From:".$mail_to);
  
//jsonで送信完了メッセージをjsに戻す
header('Content-type: application/json');
echo json_encode( "送信が完了しました！" );

?>