$(document).ready(function() {

	$(".auth-buttons").click(function() {
		$(this).next().slideToggle();
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.owl-carousel').owlCarousel({

    responsive:{
    		0: {
    				items:1
    		},
        420:{
            items:2
        },
        600:{
            items:3
        },
        900:{
            items:4
        }
    }
})
	// var owl = $("#carousel");
	// owl.owlCarousel({
	// 	items : 4
	// 	responsive:{
 //        0:{
 //            items:1
 //        },
 //        600:{
 //            items:3
 //        },
 //        900:{
 //            items:3
 //        }
 //    }
	// });

});
	function setEqualHeight(columns) { 
			var tallestcolumn = 0; 
			columns.each( function() { 
				currentHeight = $(this).height(); 
				if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } ); 
				columns.height(tallestcolumn); 
			} 
			
			$(document).ready(function() { setEqualHeight($(".main-post")); });