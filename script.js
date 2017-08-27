$('.navigation-link').on('click', function() {
	$('.navigation-link.is-active').removeClass('is-active');
	$(this).addClass('is-active');
});

$('.languages-button').on('click', function() {
	$('.languages-button.is-active').removeClass('is-active');
	$(this).addClass('is-active');
});
$('.navigation-button').on('click', function() {
	$('.navigation').toggleClass('is-active');
	
});
$('.work-navigation-button-previous').on('click', function() {
	var oldItem = $('.work-item.is-active');
	var newItem = oldItem.prev();

	if (oldItem.is($('.work-item:first'))) {
		newItem = $('.work-item:last');
		oldItem.removeClass('is-active');
		newItem.addClass('is-active');
	} 
	oldItem.removeClass('is-active');
	newItem.addClass('is-active');
	
});
var animating = false;
function animateWorkItem() {
	var oldItem = $('.work-item.is-active');
	var newItem = oldItem.next();
	var item = $('.work-item:not(oldItem, newItem)')
	animating = true;
	if (oldItem.is($('.work-item:last'))) {
		newItem = $('.work-item:first');
		oldItem.removeClass('is-active');
		newItem.addClass('is-active');
	} 
	oldItem.removeClass('is-active');
	newItem.addClass('is-active');
	// textup();
	oldItem.css({
		'z-index': 1,
		'visibility': 'inherit',
		'opacity': 1
	});
	newItem.css({
		'z-index': 2,
		'visibility': 'inherit',
		'opacity': 1,
		'width': 0
	});
	newItem.animate({
		'width': '100%'
	},1000, 'easeInExpo', function() {
		oldItem.removeAttr('style');
		newItem.removeAttr('style');
		animating = false;
		// textdown();
	});
}

$('.work-navigation-button-next').on('click', function () {
	if (animating) {
		return false;
	} else {
		animateWorkItem();
	}
});

// function textup() {
// 	$('.work-text > span').css({
// 		'transfrom': 'translate(0%, -100%) matrix(1, 0, 0, 1, 0, 0)'
// 	});

// 	$('.work-item.is.active').find('span').animate({
// 		'transform': 'translate(0%, 100%)'
// 	}, 1000);
// 	alert($('.work-item.is.active').find('span').textContent;
// }
// function textdown() {

// }