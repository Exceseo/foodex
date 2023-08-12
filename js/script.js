$(document).ready( function(){

    // box one start
    $(".btn_one").click(function(){
        $(".fade-box").fadeIn(800);
    });
    $(".btn_two").click(function(){
        $(".fade-box").fadeOut(800);
    });  
    $(".btn_there").click(function(){
        $(".fade-box").fadeToggle(1000);
    });

    // box two start
    $(".btn_4").click(function(){
        $(".silde-box").slideDown();
    });
    $(".btn_55").click(function(){
        $(".silde-box").slideUp();
    });
    $(".btn_6").click(function(){
        $(".silde-box").slideToggle("slow");
    });
 
    // box there start
    $(".btn_8").click(function(){
        $(".hide-box").hide()
    });

    $(".btn_7").click(function(){
        $(".hide-box").show()
    });

    $(".btn_9").click(function(){
        $(".hide-box").toggle()
    });

   // box four start
   $(".btn_10").click(function(){
       $(".class-box").addClass("myclass")
   });

   $(".btn_11").click(function(){
       $(".class-box").removeClass("myclass");
   });

   $(".btn_12").click(function(){
    $(".class-box").toggleClass("myclass")
   })

    // box five start
    $(".btn_13").click(function(){
        $(".abboxfive").animate({
            left: "1400px",
            width: "20%",
            borderRadius: "50%",

        }, 3000, acalback);
    });
});
    function acalback(){
    $(".abboxfive").animate({
        left: "0px",
        width: "1000px",
        borderRadius: "0%",
    }, 3000);
    };

    $(".btn_14").click(function(){
        $(".abboxsix").slideUp(2000).slideDown(2000).css({borderRadius: "30px", width: "90%",});
    });
    

