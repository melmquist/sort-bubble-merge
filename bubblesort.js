function bubbleSort(array){
  var counter = 0;

  if(array.length === 0){
    return [];
  }

  var switchCheck = true;

  while (switchCheck === true) {
    switchCheck = false;

    for (var i = 0; i < array.length; i++) {
      var current = array[i];
      var next = array[i+1];

      if (current > next) {
        array[i] = next;
        array[i+1] = current;
        switchCheck = true;

      }
    }

    // console.log("switchCheck: ", switchCheck);
  }
  return array;

}
