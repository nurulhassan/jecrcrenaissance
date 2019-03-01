
var DocWidth = $(window).width()
// var DocHeight = $(document).height()
$(document).ready(() => {
			
		
			$(window).load(() => {
					
					// console.log(DocWidth)
					if(DocWidth<=768){
						$('.certificate_img').attr("src","../../elmt/frame.png")
					}
					else{
						$('.certificate_img').attr("src","../../elmt/farme.png")	
					}
				})

			})
$(window).resize(()=> {
 		var DocWidth = $(window).width()
		if(DocWidth<=768){
						$('.certificate_img').attr("src","../../elmt/frame.png")
					}
					else{
						$('.certificate_img').attr("src","../../elmt/farme.png")	
					}

})
$('.nav-item').click(()=>{
	$('.nav-link').addClass("active")

	})
