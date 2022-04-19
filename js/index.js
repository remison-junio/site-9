$(document).ready(()=> {
	$('.btn-menu').on('click', e => {
		e.preventDefault()
		$('#barra-navegacao, .btn-menu').toggleClass('active')
	})
})