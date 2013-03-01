var mouseStillDown = false
    ,$win
    ,$down
    ,$up
    ,$container
    ,$content
    ,$slideshow
    ,animationOffset
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
        $down = $('#down');
        $up = $('#up');
        $container = $('.container');
        $content = $('.content');

        animationOffset = $container.height() - $content.height();
        if(animationOffset > 0)
        {
            $up.hide();
            $down.hide();
        }

        $down
        .mousedown(function(ev)
        {
            ev.preventDefault();
            mouseStillDown = true;
            loop('down');
        })
        .mouseup(function(ev)
        {
            mouseStillDown = false;
            $content.stop();
        })
        .click(function(ev)
        {
            ev.preventDefault();
        });

        $up
        .mousedown(function(ev)
        {
            ev.preventDefault();
            mouseStillDown = true;
            loop('up');
        })
        .mouseup(function(ev)
        {
            mouseStillDown = false;
            $content.stop();
        })
        .click(function(ev)
        {
            ev.preventDefault();
        });

        // Resize
        $win = $(window);
        $win.on('resize',function(){
            resizeBox();
        });

    })(jQuery);

});

function resizeBox()
{
    console.log('resizeBox');
};

function loop(direction)
{
    if (!mouseStillDown)
        return;

    if(mouseStillDown){
        scrolla(direction);
        setInterval(100, "loop");
    }
}

function scrolla(direction, speed)
{
    animationOffset = $container.height() - $content.height();
    speed = speed || 2000;
    if (direction == 'up') animationOffset = 0;
    console.log(animationOffset);
    if(animationOffset <= 0)
        $content.animate({ "marginTop": animationOffset + "px" }, speed, "linear");
}