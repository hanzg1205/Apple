$(function(){
    var bannerbox=$(".banner");
    var banner=$('.bannerimg');
    var as=$(".bannerimg a");
    var $btn=$('.btn li');
    var now=0;
    var next=0;
    var flag=true;
    $(".bannerimg a:first-child").css("left",'0');
    var t=setInterval(move,2000);
    function move() {
        if (!flag) {
            return
        };
        flag = false;
        next++;
        if (next == as.length) {
            next = 0;
        };
        //console.log(next);
        as.eq(next).css({left: "100%"}).animate({left: 0}, function () {
            flag = true;
        });
        as.eq(now).animate({left: "-100%"});
        $btn.removeClass("hot").eq(next).addClass("hot");
        now = next;
    };
    $btn.click(function(){
        if(now==$(this).index()||!flag){
            return;
        }
        if($(this).index()<now){
            as.eq($(this).index()).animate({left:0});
            as.eq(now).animate({left:"100%"});
        }else{
            flag=false;
            as.eq($(this).index()).css({left:"100%"});
            as.eq(now).animate({left:"-100%"},function(){
                flag=true;
            });
            as.eq($(this).index()).animate({left:0});
        }
        $btn.removeClass('hot').eq($(this).index()).addClass('hot');
        now=next=$(this).index();
    });

    bannerbox.hover(function(){
        clearInterval(t);
        $('.btn2 a').css('display','block');
    },function(){
        t=setInterval(move,2000);
        $('.btn2 a').css('display','none');
    });
    var $right=$(".right");
    var $left=$(".left");
    $right.click(function(){
        move();
    });
    $left.click(function(){
        if(!flag){return};
        flag=false;
        next--;
        if(next==-1){
            next=as.length-1;
        }
        as.eq(next).css({left:"-100%"}).animate({left:0},function(){
            flag=true;
        });;
        as.eq(now).animate({left:"100%"});
        $btn.removeClass('hot').eq(next).addClass('hot');
        now=next;
    });


    $('.er').click(function(){
        var W=document.documentElement.clientWidth;
        if(W>768){
            return;
        }else {
            $('.nav-out').slideToggle();
        }
    })
        $('.footer h3').click(function(){
            var W=document.documentElement.clientWidth;
            if(W>768){
                return;
            }else{
                $(this).next("ul").slideToggle();
            }
        })
    $(window).resize(function(){
        var W=document.documentElement.clientWidth;
        if(W>768){
            $('.footer ul').show();
            $('.nav-out').show();
        }
    })
});