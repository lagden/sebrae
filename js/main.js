var $win
    ,$container
    ,$slideshow
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
                scrollButtons:{
                    enable:true
                }
            });
        });

        // Show Plus
        $('a.showPlus').click(function(ev){
            ev.preventDefault();
            $(this).remove();
            $('#plus').removeClass('hidden');
            $('.container').addClass('boxWhite');
            $container.mCustomScrollbar("update");
            $('.rfSlider').fadeOut(200);
            $('.home.bt-inscreva-se').fadeOut(200); 
        });

    })(jQuery);

});

