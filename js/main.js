var $win
    ,$container
    ,$slideshow
    ,$cronoDia
    ,$cronoDescricao
    ,$navPrevCrono
    ,$navNextCrono
    ,currDia
    ,currDescricao
    ,currPos = 1
    ,maxCrono
    ,sizeBaseWin = 650
    ,sizeBaseContainer = 550
    ,doResize = true
    ;

jQuery.fn.ready(function(){

    // jQuery as $
    (function($){

        // PlaceHolder
        $('input, textarea').placeholder();

        // Custom Form
        $('select.Styled').customized();

        // RF Slider
        $slideshow = $('#slideshow');
        $slideshow.slideshownav({
            transition: 'push(#{direction})',
            mode: 'horizontal',
            navSelector: '> ul > li > a',
            duration: 400,
            autoPlay: false
        });

        var $rfSlider = $('div.rfSlider');
        var slideshow = $slideshow.data('slideshownav');

        $rfSlider.find('a.prev').on('click',function(ev){
            ev.preventDefault();
            slideshow.show('previous',{ transition:'push(right), swing' });
        });

        $rfSlider.find('a.next').on('click',function(ev){
            ev.preventDefault();
            slideshow.show('next',{ transition:'push(left), swing' });
        });

        // Scroll
        $container = $('#container');
        $win = $(window);

        doResize = ($container.data('doresize') != undefined) ? $container.data('doresize') : true;

        $win.load(function(){
            $container.mCustomScrollbar({
                scrollButtons: {
                    enable: false
                }
                ,theme: "dark"
            })
            .find('.mCSB_scrollTools')
            .addClass('invisible');

            $('#up').on('click',function(ev){
                ev.preventDefault();
                scrolla("up");
            });

            $('#down').on('click',function(ev){
                ev.preventDefault();
                scrolla("down");
            });
        });

        // Resize
        $win.on('resize',function(){
            resizeBox();
        })
        .trigger('resize');

        // Show Plus
        $('a.showPlus').click(function(ev){
            ev.preventDefault();
            doResize = true;
            $(this).remove();
            $('#plus').removeClass('hidden');
            $('.navegacao').removeClass('hidden');
            $container
            .mCustomScrollbar("update");
            $('.container').addClass('boxWhite')
            $rfSlider.fadeOut(200);
            $('.home.bt-inscreva-se').fadeOut(200); 
            $win.trigger('resize');
        });

        // Cronograma
        $cronoDia = $('#showDia');
        $cronoDescricao = $('#showDescricao');
        currDia = $cronoDia.html();
        currDescricao = $cronoDescricao.html();
        maxCrono = $('.tbl td[data-pos]').length;

        var tds = $('.box-cronograma table.tbl td');
        tds.on('click',function(){
            $this = $(this);
            currDia = $this.data('dia');
            currDescricao = $this.data('descricao');
            currPos = $this.data('pos');
            navCrono(0);
            $cronoDia.html(currDia);
            $cronoDescricao.html(currDescricao);
        });
        tds.on('mouseenter',function(){
            $this = $(this);
            $cronoDia.html($this.data('dia'));
            $cronoDescricao.html($this.data('descricao'));
        });
        tds.on('mouseleave',function(){
            $cronoDia.html(currDia);
            $cronoDescricao.html(currDescricao);
        });

        $navPrevCrono = $('#prevCrono').on('click', function(ev){
            ev.preventDefault();
            navCrono(-1);
        })
        .hide();

        $navNextCrono = $('#nextCrono').on('click', function(ev){
            ev.preventDefault();
            navCrono(1);
        });

        // Form
        $("#frmFale").validate({
            errorElement: "em",
            errorContainer: $("#warning"),
        });

    })(jQuery);

});

function navCrono(pos)
{
    currPos += pos;
    if(currPos == maxCrono)
        $navNextCrono.hide();
    else
        $navNextCrono.show();

    if(currPos == 1)
        $navPrevCrono.hide();
    else
        $navPrevCrono.show();

    var $xxx = $('.tbl td[data-pos="'+currPos+'"]');
    currDia = $xxx.data('dia');
    currDescricao = $xxx.data('descricao');
    $cronoDia.html(currDia);
    $cronoDescricao.html(currDescricao);
}

function scrolla(which)
{
    if($container.find(".mCSB_scrollTools").css('display') == 'block')
    {
        var activeElemPos=Math.abs($container.find(".mCSB_container").position().top)
            ,pixelsToScroll=60;

        if(which==="up")
        {
            if(pixelsToScroll>activeElemPos)
                $container.mCustomScrollbar("scrollTo","top");
            else
                $container.mCustomScrollbar("scrollTo",(activeElemPos-pixelsToScroll),{scrollInertia:400,scrollEasing:Power2.easeOut});
        }
        else if(which==="down")
            $container.mCustomScrollbar("scrollTo",(activeElemPos+pixelsToScroll),{scrollInertia:400,scrollEasing:Power2.easeOut});
    }
}

function resizeBox()
{
    if(doResize)
    {
        if ($win.height() <= sizeBaseWin )
            $container.css({ "height": calculo() });
        else
            $container.css({ "height": sizeBaseContainer - 50 });
    }
    $container
    .mCustomScrollbar("update");
}

function calculo()
{
    var h = ((sizeBaseContainer * $win.height()) / sizeBaseWin) - 70;
    h = (h <= 200) ? 200 : h;
    return parseInt(h);
}