Parse.initialize("sbvjVEY7RR8pDyYAwxQbuBd8qbYyxJPZZ3lcxOf2", "VhUUULfEt0pJaZG8jm0lBIdbJ1IlKaIzjNnd9iNj");

$(".images-3-1").backstretch("http://placehold.it/300x300");

$(".images-4-1").backstretch("http://placehold.it/300x300");

$(".images-5-1").backstretch("http://placehold.it/600x300");
$(".images-5-2").backstretch("http://placehold.it/300x300");

$(".images-6-1").backstretch("http://placehold.it/600x600");

$(".images-7-1").backstretch("http://placehold.it/300x300");

$(".images-8-1").backstretch("http://placehold.it/300x300");

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

$(".btn").button();

$(".navbar a").smoothScroll({
    offset: 50
});


$('#reply-form').submit(function(){
    $('#submit').button('loading');

    if($('#email').val()){
        console.log('invalid');
        return false;
    }

    var values = {
        name: $('#name').val(),
        anwser: $('#reply-form input[type=radio]:checked').val(),
        wishes: $('#wishes').val()
    };

    var WeddingReply = Parse.Object.extend("WeddingReply");
    var reply = new WeddingReply();
    reply.save(values).then(function(object) {
        alert("yay! it worked");
    });

    return false;

});