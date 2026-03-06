
$(document).ready(function () {

    $('div').css({
        "width": "80%",
        "margin": "auto",
        "text-align": "center"

    })

    ////CSS Syle -->Button
    $('button').each(function (ind, elm) {
        $(elm).css({
            "width": "100px",
            "height": "50px",
            "border": "none",
            "border-radius": "6px",
            'color': "white",
            "background-color": "rgba(252, 54, 140, 0.64)",
            "box-shadow": "5px 5px 4px rgb(203, 34, 135)",
            "cursor": "pointer",
            "margin-left": "5px"
        })
    })

    /////////////// Show ///////////////////

    //// About ////
    $('.aboutContent').html("Story About snow man").css({
        "width": "50%",
        "height": "200px",
        "box-shadow": "5px 5px 4px rgb(217, 217, 217) , 4px 4px 4px rgb(217, 217, 217)",
        "text-align": "center",
        "margin": "auto",
        "margin-top": "80px",
        "display": "none"
    })
    $('#aboutBtn').click(function () {
        $('.galleryContent').hide(1000);
        $('.serviceContent').hide(1000);
        $('.complainContent').hide(1000)
        $('.aboutContent').fadeToggle(1000);
        $('.aboutContent').css("display", "block")
    })



    //// Gallery ////

    $('.images img').each(function (ind, elm) {
        $(elm).css({
            "width": "50%",
            "height": "250px",
            "box-shadow": "5px 5px 4px rgb(217, 217, 217) , 4px 4px 4px rgb(217, 217, 217)",
            "text-align": "center",
            "margin": "auto",
            "margin-top": "80px",
            "display": "none"
        })
    })
    $('img:first , img:last').css({
        "width": "4%",
        "height": "35px",
        "cursor": "pointer",
        "position": "absolute",
        "top": "30%",
        "left": "27%",
        "transform": "translate(50% ,50%)",
        "display": "none"
    })
    $('img:last').css({
        "position": "absolute",
        "top": "30%",
        "left": "65%",
        "transform": "translate(50% ,50%)",
        "display": "none"
    })

    //// right ---> img /////
    counter = 1;
    $('#right').click(function () {
        counter++;
        if (counter > 8) counter = 1
        $('.images img').attr('src', `/image/${counter}.jpg`)
    })

    //// left ---> img /////
    $('#left').click(function () {
        counter--;
        if (counter < 1) counter = 8
        $('.images img').attr('src', `/image/${counter}.jpg`)
    })
    $('#galleryBtn').click(function () {
        $('.aboutContent').hide(1000);
        $('.serviceContent').hide(1000);
        $('.complainContent').hide(1000)
        $('.galleryContent').fadeToggle(1000);
        $('img').css("display", "block")
    })


    //// Services ////

    $('ul').css({
        "width": "100px",
        "margin": '20px auto',
        "list-style": "none",
        "display": "none",
        "margin-top": "0",
        "padding":"0",
        "margin-left": "51%",
    })
    $('li').css({
        "width": "100px",
        "height": "50px",
        "border": "none",
        "border-radius": "6px",
        'color': "white",
        "background-color": "rgba(250, 68, 147, 0.64)",
        "box-shadow": "2px 2px 2px rgb(203, 34, 135)",

        // "cursor":"pointer",
        // "margin-top":"10px"

    })
    $('#serviceBtn').click(function () {
        $('ul').css("display", "block")
        $('.aboutContent').hide();
        $('.galleryContent').hide();
        $('.serviceContent').slideToggle('slow');
    })


    //// Complain ////

    $('.formData ,.outData ').css({
        "width": "50%",
        "height": "300px",
        "box-shadow": "5px 5px 4px rgb(217, 217, 217) , 5px 5px 4px rgb(217, 217, 217)",
        "text-align": "center",
        "margin": "auto",
        "margin-top": "80px",
        "display": "none"
    })
    $('form').css({
        'margin-top':"30px"
    })
    $('#sendData , #back').css({
            "width": "55px",
            "height": "35px",
            "border": "none",
            "border-radius": "6px",
            'color': "white",
            "background-color": "rgba(255, 139, 189, 0.88)",
            "box-shadow": "2px 2px 2px rgb(238, 238, 238)",
            "cursor": "pointer",
            // "margin-left": "5px"
    })
    $('#back').css({
            "width": "100px",
    })
    $('textarea').css({
             "width": "200px",
            "height": "60px",
            "margin-left":"20px"
    })
    $('#complainBtn').click(function () {
        $('.formData').css("display", "block");
        $('.outData').css("display", "none");
        $('.aboutContent').hide(1000);
        $('.galleryContent').hide(1000);
        $('.serviceContent').hide(1000);
        $('.complainContent').fadeToggle(1000);
    })
})

$('#sendData').click(function(e){
        e.preventDefault();
        $('.outData').css("display", "block");
        $('.formData').css("display", "none");
        $('.p1').html(`your Complain is: ${$('#txtArea').val()}`);
        $('.p2').html(`Your Name is:  ${$('#txt').val()}`);
        $('.p3').html(`Your Email is: ${$('#mail').val()}`);
        $('.p4').html(`Your Phone is: ${$('#phone').val()}`);
})

$('#back').click(function(){

        $('.outData').css("display", "none");
        $('.formData').css("display", "block");
        $('#txt').text($('.p2'));
        $('#mail').text($('.p3'));
        $('#phone').text($('.p4'));
        $('#txtArea').text($('.p1'));

})