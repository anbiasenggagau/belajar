<?php 


$json = file_get_contents('https://v2.jokeapi.dev/joke/Any?type=single'); // this WILL do an http request for you




?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
</head>
<body>
    <pre>
        <?php 
            $data = json_decode($json);
var_dump($data->joke);
         ?>
    </pre>
</body>
</html>