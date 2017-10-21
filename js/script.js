$(document).ready(function() {
		$('body').on('click', '.sandvich', function(event){
			// alert('jshfsj');
			$('.social').toggleClass('oppenned');
			event.stopPropagation();
		})
		$('body').on('click', function(event) {
			$('.social').removeClass('oppenned');
		})
});


