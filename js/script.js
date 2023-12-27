$(function(){
    //마이캐논
    $(".util_myca").hover(function(){
        $(".my").stop().slideDown();
    }, function(){
        $(".my").stop().slideUp();
    })//hover


    //서브메뉴영역
    // $(".gnb_p").hover(function(){
    //     $(".d_wrap").stop().css({display : "flex"});
    // }, function(){
    //     $(".d_wrap").stop().css({display : "none"});
    // })//

    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({height:"350px", padding: "15px 15px 30px"},"fast");
    }, function(){
        $(".d_wrap").stop().animate({height:"0", padding:"0"},"fast");
    })//
    // $(".gnb_p").mouseover(function(){
    //     $(".d_wrap").stop().toddleClass("on", 1000)
    // })



})//jquery