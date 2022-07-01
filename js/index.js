$(document).ready(()=> {
	$('.btn-menu').on('click', e => {
		e.preventDefault()
		$('#barra-navegacao, .btn-menu').toggleClass('active')
	})

	$(window).scroll((e)=> {
		if($(e.target).scrollTop() >= 100) {
			$('header').addClass('fixo')
		} else if($(e.target).scrollTop() == 0) {
			$('header').removeClass('fixo')
		}
	})

	$('.menu a[href^="#"]').on('click', e => {
		e.preventDefault()

		$('#barra-navegacao, .btn-menu').removeClass('active')
		
		let id = $(e.target).attr('href'),
			targetOffset = $(id).offset().top;

		$('html, body').animate({ 
			scrollTop: targetOffset - 50
		}, 800);
	})

	$('#formulario').on('submit', e => e.preventDefault())

	$('#cadastroEmail').on('focus', ()=> $('#btn-cadastrar').addClass('active'))

	$('#cadastroEmail').on('blur', ()=> $('#btn-cadastrar').removeClass('active'))

const debounce = function(func, wait, immediate) {
	let timeout
	return function(...args) {
		const context = this
		const later = function () {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		const callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}
	
	function animacao(){
		$.each($('[data-animacao]'), (indice, valor)=> {
			const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

			if(windowTop > valor.offsetTop){
				$(valor).addClass('animar')
			}
		})
	}
	
	animacao()
	
	if($('[data-animacao]').length) {
	  $(window).scroll(debounce(function() {
	   animacao()
	  }, 100))
	}
})