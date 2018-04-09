





// An object that captures information relevant to the decision.
// Any change in the values of the object's properties will affect the decision.
var infoMatrix = {
  programmingAptitude : true,
  interestInWeb: false
};

// A logic bundle that helps us arrive at a good decision.
function should_i_learn_js(infoMatrix) {
  // The initial decision on whether to learn JavaScript or not!
  var focusOnJavaScript = null;
  // The following if-else block determines whether you should learn JavaScript 
  if ((infoMatrix.programmingAptitude == true) && (infoMatrix.interestInWeb == true)) {
    focusOnJavaScript = "Yes";
  }
  /* Commenting out the else block
  else {
    focusOnJavaScript = "No";
  }
  */
  return focusOnJavaScript;
};



// Call the function
should_i_learn_js(infoMatrix);


