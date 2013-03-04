var $win
    ,$container
    ,$slideshow
    ,$cronoDia
    ,$cronoDescricao
    ,currDia
    ,currDescricao
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

        $win.load(function(){
            $container.mCustomScrollbar({
                scrollButtons: {
                    enable: true
                }
                ,theme: "dark"
            });

            $('#up').on('click',function(ev){
                ev.preventDefault();
                scrolla("up");
            })
            $('#down').on('click',function(ev){
                ev.preventDefault();
                scrolla("down");
            })
        });

        // Show Plus
        $('a.showPlus').click(function(ev){
            ev.preventDefault();
            $(this).remove();
            $('#plus').removeClass('hidden');
            $('.navegacao').removeClass('hidden');
            $container
            // .addClass('boxWhite')
            .mCustomScrollbar("update");
            $rfSlider.fadeOut(200);
            $('.home.bt-inscreva-se').fadeOut(200); 
        });

        // Cronograma
        $cronoDia = $('#showDia');
        $cronoDescricao = $('#showDescricao');
        currDia = $cronoDia.text();
        currDescricao = $cronoDescricao.text();

        var tds = $('.box-cronograma table.tbl td');
        tds.on('click',function(){
            currDia = $(this).data('dia');
            currDescricao = $(this).data('descricao');
            $cronoDia.text(currDia);
            $cronoDescricao.text(currDescricao);
        });
        tds.on('mouseenter',function(){
            $cronoDia.text($(this).data('dia'));
            $cronoDescricao.text($(this).data('descricao'));
        });
        tds.on('mouseleave',function(){
            $cronoDia.text(currDia);
            $cronoDescricao.text(currDescricao);
        });

    })(jQuery);

});

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