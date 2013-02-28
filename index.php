<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <title>Ulalá</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="wrapper">
        <header>
            <h1 class="logo ir">Prêmio Sebrae Mulher de Negócios</h1>
            <nav>
                <ul>
                    <?php foreach ($itens as $k => $item): ?>
                        <li <?php echo ($k == $page) ? 'class="current"' : "" ?>>
                            <a href="<?php echo $item ?>"><?php echo $k ?></a>
                        </li>
                    <?php endforeach ?>
                </ul>
            </nav>
        </header>

        <div class="main">
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
        </div>
    </div>
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
