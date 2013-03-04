<?php
$page = isset($_REQUEST['page']) ? $_REQUEST['page'] : '404';
$itens = array(
    'home'=>'Home',
    'premio'=>'O que é o Prêmio?',
    'participar'=>'Como participar',
    'premiacao'=>'Premiação',
    'regulamento'=>'Regulamento',
    'historia'=>'Como escrever a história',
    'fale'=>'Fale conosco',
    'cronograma'=>'Cronograma',
);

$ds = DIRECTORY_SEPARATOR;
$filename = "pages{$ds}{$page}.php";
$include = false;
if (file_exists($filename))
    $include = true;
else
{
    $page = '404';
    $erro404 = '<div class="notFound boxWhite">404 - página não encontrada</div>';
}
?>
<!DOCTYPE HTML>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Prêmio Sebrae Mulher de Negócios</title>
    <link href='http://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="js/vendor/jquery/plugin/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css">
    <!--[if (gte IE 6)&(lte IE 8)]>
        <script src="js/vendor/shiv.js" type="text/javascript"></script>
    <![endif]-->
</head>
<body>
    <main role="main" class="main">
        <div class="wrapper cf" style="background-image:url('images/bgs/<?php echo "{$page}.png" ?>')">
            <header role="banner" class="cell-3">
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
            <div class="cell-8 customPad">
                <section class="auth">
                    <form method="post" class="frm inline" id="frmLogin" action="/">
                        <label for="auth_login">Login</label>
                        <input title="Login" type="text" name="auth[login]" id="auth_login">
                        <label for="auth_senha">Senha</label>
                        <input title="Senha" type="password" name="auth[senha]" id="auth_senha">
                        <button type="submit" class="bt-enviar-login">Enviar</button>
                        <a href="#inscreva-se" class="<?php echo (mt_rand(1,10)%2) ? "txtroxo" : "txtbranco" ?>" >Inscreva-se <i class="seta ir">seta</i></a>
                    </form>
                </section>
                <!-- Miolo -->
                <?php
                if($include) include $filename;
                else echo $erro404;
                ?>
            </div>
        </div>
    </main>
    <footer role="contentinfo" class="theFooter cf">
        <section class="wrapper cf">
            <figure>
                <img src="images/logos.png" class="float--right" alt="logos">
            </figure>
        </section>
    </footer>
    <!-- jQuery -->
    <script src="js/vendor/jquery/jquery.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/jquery.ui.core.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/jquery.ui.widget.js" type="text/javascript"></script>
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
    <script src="js/vendor/jquery/plugin/rf/jquery.rf.slideshow.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/plugin/rf/jquery.rf.slideshownav.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/plugin/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/plugin/validate/jquery.validate.min.js" type="text/javascript"></script>
    <script src="js/vendor/jquery/plugin/validate/messages_pt_BR.js" type="text/javascript"></script>
    <!-- scripts -->
    <script src="js/helper.js" type="text/javascript"></script>
    <script src="js/main.js" type="text/javascript"></script>
    </body>
</html>