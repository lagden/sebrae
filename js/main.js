var mouseStillDown = false
    ,$down
    ,$up
    ,$container
    ,$content
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
        setInterval(50, "loop");
    }
}

function scrolla(direction, speed)
{
    speed = speed || 1000;
    var animationOffset = $container.height() - $content.height();
    if (direction == 'up') animationOffset = 0;
    console.log(animationOffset);
    $content.animate({ "marginTop": animationOffset + "px" }, speed, "linear");
}