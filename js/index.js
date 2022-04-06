$(document).ready(()=> {
	$('.btn-menu').on('click', (e)=> {
		e.preventDefault()
		$('#barra-navegacao').toggle()
	})
})