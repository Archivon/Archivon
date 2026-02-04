<?php

$host = "localhost";      // servidor do banco
$dbname = "nome_do_banco"; // nome do banco de dados
$user = "usuario";        // nome do usuário
$password = "senha";    // senha do usuário

// tenta conectar ao banco de dados
try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8",
        $user,
        $password
    );

    // ativa erros detalhados
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Conectado com sucesso!";
// aqui você pode adicionar mais código para interagir com o banco de dados

// captura erros de conexão
} catch (PDOException $e) { 
    die("Erro na conexão: " . $e->getMessage());
}
?>
