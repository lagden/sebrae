var mouseStillDown = false
    ,$down
    ,$up
    ,$container
    ,$content
    ,animationOffset
    ;

jQuery.fn.ready(function(){

    // jQuery as $
    (function($){

        // PlaceHolder
        $('input, textarea').placeholder();

        // Custom Form
        $('select.Styled').customized();

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

    })(jQuery);

});

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