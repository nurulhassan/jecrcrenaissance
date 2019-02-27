
var DocWidth = $(window).width()
var DocHeight = $(document).height()
$(document).ready(() => {
			
		
			$(window).load(() => {
				// $('#center-preload').delay(2000).fadeOut('slow',"linear",function(){ clearInterval(timerId) })
					
					// console.log(DocWidth)
					if(DocWidth>=768){
					$('.jharokha_img').attr("src","elmt/jharokha1old.png")
					$('.jharokha').addClass("jharoka-back")
					$('.pillar').addClass("inactive")
					$('.jharokha_img').removeClass('inactive')
				}
				else
				{	
					$('.jharokha_img').removeClass('inactive')
					$('.jharokha_img').attr("src","elmt/jarokha_gate_final.png")
					$('.pillar').removeClass('inactive')
					$('.jharokha').addClass("jharoka-back")
					$('.pillar').attr('height',DocHeight)
				}
			})
		})

			$(window).resize(() =>{
					var DocWidth = $(window).width()
					var DocHeight = $(document).height()
					console.log(DocHeight)
					if(DocWidth>=768){
					$('.jharokha_img').attr("src","elmt/jharokha1old.png")
					$('.pillar').addClass('inactive')
					$('.jharokha_img').removeClass('inactive')
					
				}
				else{
					$('.jharokha_img').attr("src","elmt/jarokha_gate_final.png")
					$('.pillar').attr('height',DocHeight)
					$('.pillar').removeClass('inactive')
					$('.jharokha').addClass("jharoka-back")
					$('.jharokha_img').removeClass('inactive')
				}
					
				
		})