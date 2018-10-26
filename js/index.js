// 1. when we click an image, show the lightbox
// 2. we want to grab the image thats just being clicked and show it inside the modal
// 3. when we click the close button, hide the modal
// 4. our link doesn't follow the default href

$('.photos a').on('click', function() {
	var currentImage = $(this).html()
	// here we grab the modal and set it to our current image that we just clicked on
	$('.modal-content').html(currentImage)
	$('.modal').fadeIn(500)
	// 4. blocks the default action of the href 
	return false
})
$('.modal-close, .modal-background').on('click', function() {
	$('.modal').fadeOut(500)
	return false
})

