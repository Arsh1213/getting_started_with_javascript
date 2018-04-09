// This is our unit test function
// Often, tests are written before the actual code.
// This philosophy is called "Test Driven Development"
function test_calcSqRoot() {
  var test_inputs = [999999, 0.0065, 0/0, -1.8/0, -2, -0.7, 
                    "test", true, false, null, undefined];                     
  for (var input in test_inputs) {  
    var result = calcSqRoot(input);
    var error_string = "Invalid input! Try with a non-negative number!"; 
    var expected_input_condition = (typeof(input) == "number") 
                                  && (input >= 0)
                                  && (typeof(result) == "number") 
                                  && (result == Math.sqrt(input));                                      
    var unexpected_input_condition = (input < 0) 
                                    || (typeof(input) != "number") 
                                    && (result == error_string);
    if ((expected_input_condition) || (unexpected_input_condition)) {
      return "OK; test pass.";
    }
    else {
      return "Test FAIL!";
    }
  }
};


// This is a correct square root calculator function
function calcSqRoot(num) {
  if ((typeof(num) == "number") && (num >= 0)) {
    return Math.sqrt(num);
    }
  else {
    var error_message = "Invalid input! Try with a non-negative number!";
    return error_message;
    }
  };

// This is a modified square root calculator function which does not operate correctly.
// The test should fail on this
function calcSqRoot(num) {
  if ((typeof(num) == "number") && (num >= 0)) {
    return Math.sqrt(number); // WRONG PARAMETER NAME
    }
  else {
    var error_message = "Another message"; // WRONG ERROR STRING
    return error_message;
    }
  };
