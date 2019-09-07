$(document).ready(function(){
    $('#slider-carousel').carouFredSel({
        responsive: true,
        widht: '100%',
        circular: true,

        scroll: {
            items:1,
            duration: 500,
            pauseOnHover: true
        },

        auto: true,
        items : {
            visble: {
                min:1,
                max: 1
            },

            height: "variable"
        },

        pagination: {
            container: ".sliderpager",
            anchorBuilder: false
        }
        
       
    });

    $(window).scroll(function(){
        var top = $(this).scrollTop();

        if(top>=100){
            $('header').addClass('secondary-dark-blue-bg');
        }else{
            $('header').removeClass('secondary-dark-blue-bg');
        }
    });
})