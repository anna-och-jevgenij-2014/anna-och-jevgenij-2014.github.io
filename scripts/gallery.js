
$(".images").each(function(index, element){

    var $el = $(element)
    if($el.data("img")){
        $el.backstretch($el.data("img"))
    }

    var images = [];
    $el.children("span").each(function(index, child){
        var $el = $(child)
        if($el.data("img")){
            images.push($el.data("img"))
        }
    });
    if(images.length > 0){
        $el.backstretch(images)
    }

});

$('.gallery_1').click(function(){
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build images array
    var images = [];
    for(var i=1; i<136; i++){
        images.push({
            src: '//res.cloudinary.com/jevgenij/image/upload/gallery_1/gallery_1_' + i + '.jpg',
            w: 1440,
            h: 960
        });
    }
    images[48]['w'] = 960;
    images[48]['h'] = 1440;

    var options = {
        galleryUID: 1,
        index: 0
    };

    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, images, options);
    gallery.init();
});