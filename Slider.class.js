function Slider() {

	var idSlider;
	var slide;
	var isDisplay;
	var width = 600;
	var height = 400;
	var overlayTextHeight = 120;
	
	Slider.prototype.Construct = function (idSlider) {
		this.idSlider = idSlider;
		$('#' + this.idSlider).addClass("slider autoplay");
		this.slide = "";
		this.isDisplay = false;
	}
	
	Slider.prototype.addSlide = function (imgBackgroundPath, title, text) {
		this.slide += '<div><div><img src="'+ imgBackgroundPath +'"/></div><div class="text"><p>'+ title +'</p><p>'+ text +'</p></div></div>';
	}
	
	Slider.prototype.display = function () {
		$('#' + this.idSlider).append(this.slide);
		this.isDisplay = true;
		this.setSize(width, height, overlayTextHeight);
	}
	
	Slider.prototype.setSize = function (width, height, overlayTextHeight) {
		if (!this.isDisplay)
			console.log("Error: Slider must be display before setSize.");
		$('#' + this.idSlider).css({
			width : width + 'px'
		});
		
		$('#' + this.idSlider).find('.text').css({
			width : width + 'px',
			top : (height - overlayTextHeight) + 'px',
			height : overlayTextHeight + 'px'
		});
		
		$('#' + this.idSlider).find('img').css({
			width : width + 'px',
			height : height + 'px'
		});
	}
	
	
	Slider.prototype.setting = function (autoplaySpeed) {
		if (!this.isDisplay)
			console.log("Error: Slider must be display before setting.");
		$('#' + this.idSlider).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: autoplaySpeed,
		});
	}
}