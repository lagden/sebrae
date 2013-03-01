<?php
$page = isset($_REQUEST['page']) ? $_REQUEST['page'] : 'home';
$itens = array(
    'home'=>'Home',
    'premio'=>'O que é o Prêmio?',
    'participar'=>'Como participar',
    'premiacao'=>'Premiação',
    'regulamento'=>'Regulamento',
    'historia'=>'Como escrever a história',
    'fale'=>'Fale conosco',
    'cronograma'=>'Cronograma',
    'videos'=>'Vídeos',
)
?>
<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Ulalá</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="wrapper cf">

        <header role="banner" class="cell-4">
            <h1 class="logo ir">Prêmio Sebrae Mulher de Negócios</h1>
            <nav role="navigation">
                <ul class="menu">
                    <?php foreach ($itens as $k => $item): ?>
                        <li <?php echo ($k == $page) ? 'class="current"' : "" ?>>
                            <a href="?page=<?php echo $k ?>"><?php echo $item ?></a>
                        </li>
                    <?php endforeach ?>
                </ul>
            </nav>
        </header>

        <main role="main" class="main cell-8">

            <section class="auth">
                <form method="post" class="frm inline" id="frmLogin" action="/">
                    <label for="auth_login">Login</label>
                    <input title="Login" placeholder="Login" type="text" name="auth[login]" id="auth_login">
                    <label for="auth_senha">Senha</label>
                    <input title="Senha" type="password" name="auth[senha]" id="auth_senha">
                    <button class="btn">Enviar</button>
                </form>
            </section>

            <div class="container">
                <div class="content">
                    <p>string</p>
                    <p>string</p>
                    <p>string</p>
                    <p>string</p>
                    <p>string</p>
                    <p>string</p>
                    <p>string</p>
                    <p>string</p>
                    <p>string</p>
                    <p>string</p>
                    <p>lulu</p>
                </div>
            </div>

            <a href="#" id="up">Up</a>
            <a href="#" id="down">down</a>
        </main>
    </div>

    <footer role="contentinfo">
        
    </footer>
    <!-- jQuery -->
    <script src="js/vendor/jquery/jquery.js" type="text/javascript"></script>

    <!-- Selectivizr -->
    <!--[if (gte IE 6)&(lte IE 8)]>
        <script src="js/vendor/selectivizr.js" type="text/javascript"></script>
    <![endif]-->

    <!-- GreenSock -->
    <script src="js/vendor/greensock/plugins/CSSPlugin.min.js" type="text/javascript"></script>
    <script src="js/vendor/greensock/easing/EasePack.min.js" type="text/javascript"></script>
    <script src="js/vendor/greensock/TweenLite.min.js" type="text/javascript"></script>
    <script src="js/vendor/greensock/jquery.gsap.min.js" type="text/javascript"></script>

    <!-- plugins -->

    <!-- scripts -->
    <script src="js/helper.js" type="text/javascript"></script>
    <script src="js/main.js" type="text/javascript"></script>
</body>
</html>
