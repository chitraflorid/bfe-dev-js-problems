function throttle(fn, timelimit) {
		let throttledTimer = false;
    let lastRunTime = null;
    
    return function() {
    		const context = this;
        const args = [...arguments];
        
        if (!lastRunTime) {
        		fn.apply(context, args);
            lastRunTime = Date.now();
        } else {        
        		if (Date.now() - lastRunTime >= timelimit) {
            		clearTimeout(throttledTimer);
                throttledTimer = setTimeout(() => {
                fn.apply(context, args), timelimit - (Date.now() - lastRunTime);
                lastRunTime = Date.now();
                });
                
            }
        }
    }
}
