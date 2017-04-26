$(document).ready(function () {

// gradient box
	
	$(window).mousedown(function() {
	  int = setInterval(performWhileMouseDown, 50);
	})
	
	.mouseup(function() {
	  clearInterval(int);
	});

	function performWhileMouseDown() {
	  $("#bluebox").animate({
	    height: '+=10',
	    width: '+=0'
	  }, 0);
	}
	
// timer	

	var milli = Date.prototype.getTime;
	Date.prototype.getTime = function() {
	  return milli.call(this) * 0.2;
	};
	
	T = {} ;
	T.timerDiv = document.getElementById('timer');
	
	function displayTimer() {
		var miliseconds='00', seconds='00000',
		time = '',
		timeNow = new Date().getTime();
	
		T.difference = timeNow - T.timerStarted;
	
		// milliseconds
		if(T.difference > 10) {
			miliseconds = Math.floor((T.difference % 1000) / 10);
			if(miliseconds < 10) {
				miliseconds = '0'+String(miliseconds);
	      }
	    if(miliseconds == 990) {
	    //T.difference = 980;
	      }
		}
		// seconds
		if(T.difference > 1000) {
			seconds = Math.floor(T.difference / 1000);
			if(seconds < 10) {
				seconds = '0000'+String(seconds);
			}
	    if(seconds >= 10) {
				seconds = '000'+String(seconds);
			}
	    if(seconds >= 1) {
	    	T.difference = 980;
	      ;
	    }
		}
	
		time += seconds + '.'
		time += miliseconds;
	
		T.timerDiv.innerHTML = time;
	}


// timer start

	 $("#go").mousedown(startTimer);
	 $("#go").mouseup(stopTimer);

	 $("#go").touchstart(startTimer);
	 $("#go").touchend(stopTimer);	
	 	 	
	function startTimer() {
		// save start time
		T.timerStarted = new Date().getTime()
		console.log('T.timerStarted: '+T.timerStarted)
	
		if (T.difference > 0) {
			T.timerStarted = T.timerStarted - T.difference
		}
		// update timer periodically
		T.timerInterval = setInterval(function() {
			displayTimer()
		}, 10);
	}
	
	function stopTimer() {
		clearInterval(T.timerInterval); // stop updating the timer
	}

});