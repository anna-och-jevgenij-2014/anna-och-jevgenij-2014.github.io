Parse.initialize("sbvjVEY7RR8pDyYAwxQbuBd8qbYyxJPZZ3lcxOf2", "VhUUULfEt0pJaZG8jm0lBIdbJ1IlKaIzjNnd9iNj");
var WeddingReply = Parse.Object.extend("WeddingReply");

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

var replyId = window.location.hash.substring(1),
    query = new Parse.Query(WeddingReply);

query.get(replyId, {
    success: function(reply) {
        $('#name').val(reply.get("name"));
        $('#wishes').val(reply.get("wishes"));
        $("#reply-form input[type=radio][value='" + reply.get("anwser") + "']").click();
        window.reply = reply;
    },
    error: function(object, error) {
        $("form").hide();
        $("#not-found-notification").fadeIn();
    }
});


$('#reply-form').submit(function(){
    $('#submit').button('loading');

    if($('#email').val()){
        console.log('invalid');
        return false;
    }

    var values = {
        name: $.trim($('#name').val()),
        anwser: $('#reply-form input[type=radio]:checked').val(),
        wishes: $.trim($('#wishes').val())
    };

    var reply = window.reply;
    reply.save(values).then(function(object) {
        $('#submit').hide();
        $("#saved-notification").fadeIn();
        setTimeout(function(){
            location.reload();
        }, 3000);
    });

    return false;

});
