$(function () {
        /*nav部分*/
        var $navLi = $("#nav li");
        var nowIndex = 0;
        var $offsets = $("body>div");
        // function offsets() {
        //     return $offsets.offset();
        // }
        $navLi.on("click",function () {
            nowIndex = $(this).index();
            $navLi.eq(nowIndex).delay(300).addClass("selected").siblings().removeClass("selected");
            // $("window body").scrollTo($offsets.eq(nowIndex+1).offset());
            // console.log($offsets.eq(nowIndex+1).offset().top);
            $("html,body").stop().animate({scrollTop:$offsets.eq(nowIndex+1).offset().top-60},350,'linear');
        })
    var $i = $("#nav i");
    var navFlag = true;
        $i.on("click",function () {
            if(navFlag){
                // $navLis.css("display","block");
                for(var i = 0 ;i < $navLi.length;i++){
                    $navLi.eq(i).delay(300).css("display","block");
                }
            }
        else{
                $navLi.css("display","none");
            }
            navFlag = !navFlag;
        })

        /*skill部分*/
    $(".can-do div").hover(function () {
        // console.log(666);
        $(this).removeClass("can-do-content1").addClass("can-do-content2");
        // console.log(this);
    },function () {
        $(".can-do div").removeClass("can-do-content2").addClass("can-do-content1");
    }.bind(this))
    
    
        // $(window).scroll(function () {
        //     if($(window).scrollTop() != 0){
        //         $("#nav").css("background","rgba(245,245,245,0.8)");
        //         $("#nav li").css("height","2rem").css("padding-top","0").css("color","#000000");
        //         $("#nav .selected").css("borderBottom","3px solid #000000");
        //     }else if($(window).scrollTop() == 0){
        //         $("#nav").animate({background:"rgba(255,255,255 ,0.1)"},"normal","linear");
        //         $("#nav li").animate({height: "3.5rem",paddingTop:"2rem"},"normal","linear");
        //         $("#nav .selected").css("borderBottom","3px solid #ffffff");
        //     }
        // });
        // console.log("666");
        // if($(window).scrollTop() != 0){
        //     $(window).scroll(function () {
        //         $("#nav").css("background","rgba(245,245,245,0.8)");
        //         $("#nav li").css({"height":"2rem","padding-top":"0","color":"#000000"});
        //         $("#nav .selected").css("borderBottom","3px solid #000000");
        //     })
        // }else if($(window).scrollTop() == 0){
        //     $(window).scroll(function () {
        //         $("#nav").animate({background:"rgba(255,255,255 ,0.1)"},"normal","linear");
        //         $("#nav li").animate({height: "3.5rem",paddingTop:"2rem"},"normal","linear");
        //         $("#nav .selected").css("borderBottom","3px solid #ffffff");
        //     })
        // }
    // $(window).scroll(300,function () {
    //     $("#nav").css("background","rgba(245,245,245,0.8)");
    //     $("#nav li").css({"height":"2rem","padding-top":"0","color":"#000000"});
    //     $("#nav .selected").css("borderBottom","3px solid #000000");
    // })

    //  play();
    // var $imgs = $(".carouselImg img");

     // function play() {
     //     timer = setInterval(function (e) {
     //         var nowIndex = e.target.index;
     //         nowIndex++;
     //         if(nowIndex >= $(".carouselImg").children("img").length){
     //             nowIndex = 0;
     //         }
     //         $imgs.eq(nowIndex).addClass("selected").siblings().css({display:"none"});
     //     },2000);
     // }



});