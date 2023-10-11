/* Declare and initialize global variables
-------------------------------------------------- */
var pageBg = document.querySelector("html");
var sliders = document.getElementsByTagName("input");
var rgb = [0, 0, 0];

/* Event handlers for range sliders
-------------------------------------------------- */
for (var i = 0; i < sliders.length; i++) {
    sliders[i].oninput = function () {
        var whichSlider = this.getAttribute("id");
        var sliderValue = this.value;
        newRgb = changeRgb(whichSlider, sliderValue);
        var newCSS = writeCSS(newRgb);
        pageBg.style.backgroundColor = newCSS;
    };
}

/* Functions
-------------------------------------------------- */

// STEP 1: Write a function called changeRgb 
function changeRgb(channel, value) {
    // STEP 2: Build a switch based on the value of the channel 
    switch (channel) {
        case 'red':
            // STEP 3: Inside each case, update the appropriate global rgb array element
            rgb[0] = parseInt(value);
            break;
        case 'green':
            rgb[1] = parseInt(value);
            break;
        case 'blue':
            rgb[2] = parseInt(value);
            break;
    }
    // STEP 4: Return the updated rgb array back to the event handler
    return rgb;
}

// STEP 5: Write a new function called writeCSS
function writeCSS(newRgb) {
    // STEP 6: Declare a new local variable called newColor
    var newColor = 'rgb(';

    // STEP 7: Create a while loop
    var i = 0;
    while (i < newRgb.length) {
        // STEP 8: For each element of the array, add to the string newColor
        newColor += newRgb[i] + ',';
        i++;
    }

    // STEP 9: Slice off the last comma
    newColor = newColor.slice(0, -1);

    // STEP 10: Finish off the newColor string
    newColor += ')';

    // STEP 11: Return the string newColor back to the event handler
    return newColor;
}
