<?php

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$telefone = addcslashes($_POST['telefone']);

$destino = 'devdiego3@gmail.com';
$assunto = 'Coleta de dados - Devdiego';

$corpo = "Nome: " . $nome . "\n" . "E-mail: " . $email . "\n" . "Telefone: " . $telefone;

$cabeca = "From: diegoconstancioribeiro@gmail.com" . "\n" . "Reply-to: " . $email . "\n" . "X=Mailer:PHP/" . phpversion();

if (mail($destino, $assunto, $corpo, $cabeca)) {
    echo("E-mail enviado com sucesso!");
}else{
    echo("Houve um erro ao enviar o email!");
}
?>