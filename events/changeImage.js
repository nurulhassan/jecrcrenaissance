
var DocWidth = $(window).width()
// var DocHeight = $(document).height()

$(document).ready(() => {
			// console.log(DocWidth)
					
					console.log(DocWidth)
					if(DocWidth<=660){
						$('.certificate_img').attr("src","../../elmt/frame.png")
					}
					else{
						$('.certificate_img').attr("src","../../elmt/farme.png")	
					}

			})
$(window).on('resize',function () { 
 		var DocWidth = $(window).width()
		if(DocWidth<=660){
						$('.certificate_img').attr("src","../../elmt/frame.png")
					}
					else{
						$('.certificate_img').attr("src","../../elmt/farme.png")	
					}

})


$('.certificate_main').on('scroll',()=>{
	$('.nav-pills').css("position","fixed")
	$('.nav-pills').css("background-color","white")
	$('.nav-pills').css("width","75%")
	if(DocWidth>=500){
		$('.tab-content').css("margin-top","20px")
	}
	else{
		$('.tab-content').css("margin-top","53px")	
	}
})

