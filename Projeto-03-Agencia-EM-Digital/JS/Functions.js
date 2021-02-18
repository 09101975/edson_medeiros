$(function(){
    
    //menu-mobile - deslizar para baixo
    $('.mobile-menu').click(function(){
        $('.mobile-menu').find('ul').slideToggle();
    })

    //scroll menu - desktop
    $('nav a, .link').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html, body').animate({'scrollTop': offSetTop});
       
        return false;
       
    })
/*
        $('.box-texto a').click(function(levTop){
        var totop = $(window).scrollTop()-8;
        if(totop <= 0){
           clearInterval(idInterval);
        }else{
            totop--;
            $(window).scrollTop(totop);
        }
    })
     
    function levTop(){
        idInterval = setInterval('totop();', 1);
    }
     8*/   
})
