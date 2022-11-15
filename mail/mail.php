<?php

$recepient = "red-hot-shot@yandex.ru";
$siteName = "HTML-шаблон";

$layout = trim($_POST["layout"]);
$long__a = trim($_POST["long__a"]);
$long__b = trim($_POST["long__b"]);
$long__c = trim($_POST["long__c"]);
$furniture = trim($_POST["furniture"]);
$buget = trim($_POST["buget"]);
$email = trim($_POST["email"]);
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Планировка: $layout\n Длина a: $long__a\nДлина b: $long__b\nДлина c: $long__c\n Мебель: $furniture\n Бюджет: $buget\n Почта: $email\n Имя: $name \nТелефон: $phone";
echo '<pre>';
echo $_POST;
echo '</pre>';
$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>