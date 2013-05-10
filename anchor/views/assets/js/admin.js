/**
 *   Anchor, general admin stuff
 */
$(function() {
    var body = $('body').addClass('js-enabled');
    
    //  Meta toggling
    var meta = $('.meta'),
        metaHeight = meta.height(),
        moar = $('.moar'),
        slidingMeta = false,
        metaObj = {
            height: '0px', // height: 0 doesn't work
            overflow: 'hidden',
            padding: 0
        };
        
    meta.css(metaObj);
    
    moar.click(function() {
        if(!slidingMeta) {
            slidingMeta = true;
            
            meta.animate(meta.height() == metaHeight ? metaObj : {
                height: meta.height() == metaHeight ? 0 : metaHeight,
                padding: '30px 0'
            }, 400);
            
            setTimeout(function() {
                slidingMeta = false;
            }, 400);
        }
        
        return false;
    });
    
    //  Are you sure you want to delete this?
    //  Double check.
    $('.delete').click(function() {
        return alert('Final answer? How about just making it archived instead?');
    });
});