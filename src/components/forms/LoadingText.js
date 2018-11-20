import React, { Component } from 'react';

var splittedText = [
  "packing up your info...",
  "sending info to server...",
  "Having Marco's check for issues...",
  "Getting the thumbs up from the tech team...",
  "Double Checking...",
  "Making a martini while we wait for results...",
  "wrapping up."
];

loopThroughArray(splittedText, function (arrayElement) {
   console.log(arrayElement);
}, 1000);

function loopThroughArray(array, callback, interval) {
    var newLoopTimer = new LoopTimer(function (time) {
        var element = array.shift();
        callback(element, time - start);
        array.push(element);
    }, interval);

    var start = newLoopTimer.start();
};

// Timer 
function LoopTimer(render, interval) {
    var timeout;
    var lastTime;

    this.start = startLoop;
    this.stop = stopLoop;

    // Start Loop
    function startLoop() {
        timeout = setTimeout(createLoop, 0);
        lastTime = Date.now();
        return lastTime;
    }
    
    // Stop Loop
    function stopLoop() {
        clearTimeout(timeout);
        return lastTime;
    }
    
    // The actual loop
    function createLoop() {
        var thisTime = Date.now();
        var loopTime = thisTime - lastTime;
        var delay = Math.max(interval - loopTime, 0);
        timeout = setTimeout(createLoop, delay);
        lastTime = thisTime + delay;
        render(thisTime);
    }
}

export default loopThroughArray