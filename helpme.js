$(document).ready(function() {
   
    //Preload
    $('<img/>').hide().attr('src', 'https://puu.sh/vBQ3W/62013f3c3d.jpg').load(function(){
        $('body').append($(this));
    });

        $('<img/>').hide().attr('src', 'https://puu.sh/vBQce/273938e2f0.jpg').load(function(){
        $('body').append($(this));
    });

        $('<img/>').hide().attr('src', 'https://puu.sh/vAN8t/6b7a07bc34.png').load(function(){
        $('body').append($(this));
    });
    
    $('#hhh').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBQ3W/62013f3c3d.jpg")');
    }, function() {
        $('body').css('background', '');

    });
    
    $('#htt').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vBQce/273938e2f0.jpg")');
    }, function() {
        $('body').css('background', '');

    });

    $('#w').hover(function() {
        $('body').css('background-image', 'url("https://puu.sh/vAN8t/6b7a07bc34.png")');
    }, function() {
        $('body').css('background', '');

    });

});
