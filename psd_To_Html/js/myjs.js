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


    $('.portfolio-carousel').carouFredSel({
        responsive:true,
		width:'100%',
		circular:true,
		prev:'#prev',
		next:'#next',
		scroll:{
			items:1,
			duration:500,
			pauseOnHover: true
		},
		auto:true,
		items:{
			visible:{
				min:1,
				max:4
			},
		height:"variable"
		}
       
    });



    $('.team-carousel').carouFredSel({
        responsive: true,
        widht: '100%',
        circular: true,
        prev: '#team-prev',
        next: '#team-next',

        scroll: {
            items:1,
            duration:500,
            pauseOnHover:true
        },

        auto: true,
        items: {
            visible: {
                min:1,
                max:3
            },
            height: "variable"
        }

    });

    $('.testimonial-carousel').carouFredSel({

		responsive:true,
		width:'100%',
		circular:true,
		scroll:{
			items:1,
			duration:500,
			pauseOnHover: true
		},
		auto:true,
		items:{
			visible:{
				min:1,
				max:1
			},
		height:"variable"
		},
		pagination:{
			container:".testipager",
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

    // Slick nav

    $('#menu').slicknav({
        label:''
    });

    // for Prallax effect

    $('.parallax-window').parallax(
        {
        // imageSrc: '/path/to/image.jpg'
        imageSrc: 'g../img/contact-bg.png'
    });

    
})