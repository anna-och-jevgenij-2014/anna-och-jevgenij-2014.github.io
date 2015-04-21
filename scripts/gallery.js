
// build images array
var images = [];
for(var i=1; i<329; i++){
    images.push({
        src: '//res.cloudinary.com/jevgenij/image/upload/gallery_1/gallery_1_' + i + '.jpg',
        thumb: '//res.cloudinary.com/jevgenij/image/upload/c_fill,h_300,w_300/gallery_1/gallery_1_' + i + '.jpg',
        w: 1440,
        h: 960
    });
}

images[48]['w'] = 960;
images[48]['h'] = 1440;

images[85]['w'] = 960;
images[85]['h'] = 1440;

images[190]['w'] = 960;
images[190]['h'] = 1440;

images[277]['w'] = 960;
images[277]['h'] = 1440;

var openGallery = function(imageId){
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var options = {
        galleryUID: 1,
        index: imageId || 0
    };
    window.images = images;
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, images, options);
    gallery.init();
};

$(document).ready(function(){

    var i = 2,
        $row = $('.container .row:last-child'),
        $container = $('.container');
    while(i < 328){
        if($row.children().length >= 3){
            $row = $('<div class="row"></div>');
            $container.append($row);
        }
        $row.append($('<div class="col-md-4">' +
                      '<section class="box images gallery_1"' +
                      '       data-img="' + images[i].thumb + '"' +
                      '       data-imgid="' + i + '"></section>' +
                      '</div>'
        ));
        i++;
    }

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
        openGallery($(this).data('imgid'));
    });


    if(location.href.indexOf('#&gid') > 0){
        openGallery();
    }
});