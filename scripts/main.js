Parse.initialize("sbvjVEY7RR8pDyYAwxQbuBd8qbYyxJPZZ3lcxOf2", "VhUUULfEt0pJaZG8jm0lBIdbJ1IlKaIzjNnd9iNj");

$(".images-1-1").backstretch("http://placehold.it/300x300");

$(".images-2-1").backstretch("http://placehold.it/300x300");
$(".images-2-2").backstretch("http://placehold.it/300x300");
$(".images-2-3").backstretch("http://placehold.it/300x300");

$(".images-3-1").backstretch("http://placehold.it/300x300");

$(".images-4-1").backstretch("http://placehold.it/300x300");

$(".images-5-1").backstretch("http://placehold.it/600x300");
$(".images-5-2").backstretch("http://placehold.it/300x300");

$(".images-6-1").backstretch("http://placehold.it/600x600");

$(".images-7-1").backstretch("http://placehold.it/300x300");

$(".images-8-1").backstretch("http://placehold.it/300x300");


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