function smoothScroll(target, duration){
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var startTime = null;

	function animation(currentTime){
		if(startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, targetPosition, duration);
		window.scrollTo(0, run);
		if(timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d){
		t /= d / 2;
		if(t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
    let scrollTarget = link.getAttribute('href');
    link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(scrollTarget,1000);
    })
});