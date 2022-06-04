
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Página para realizar login">
    <meta name="author" content="IPMA">
    <link rel="icon" href="img/favicon.png">

    <title>Área para Usuário Cadastrado</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/signin.css" rel="stylesheet">
    <script src="js/ie-emulation-modes-warning.js"></script>

  </head>

  <body>

    <div class="container">		
      <form class="form-signin" method="POST" name="WFRLogon" action="#"  target="_blank" > 

<input style="float: right;" name="dataConnection" type="hidden" value="MonteAlegreDeMinas" />
<p style="text-align: left;"><input style="float: right;" name="sys" type="hidden" value="AUT" />

        <label for="inputEmail" class="sr-only">CPF</label>

        <input type="text" id="user" name="user" class="form-control" placeholder="Digite o CPF" required ><br />
		
        <label for="inputPassword" class="sr-only">Senha</label>
        <input type="password" name="password" class="form-control" placeholder="Digite a Senha" required >
        
        <button class="button" type="submit">Acessar</button>
      </form>



    </div> <!-- /container -->


    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="js/ie10-viewport-bug-workaround.js"></script>
  </body>
</html>