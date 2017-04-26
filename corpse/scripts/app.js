$(document).ready(function () {
	var options = {
		$menu: false,
		panelSelector: 'section',
	    directionThreshold: 100,
	    slideSpeed: 300
	};
	$('body').panelSnap(options);
});