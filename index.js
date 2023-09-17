document.getElementById("calculate").addEventListener("click", function () {
    var list = document.getElementById("main-input").value;
    list = list.replaceAll(' ', '');  // remove all whites and new lines from the input element
    list = list.split(',');   // convert string to array

    list.map((item, index) => {
        return parseInt(item); // convert string to number
    })
    console.log(list);
    var operator = document.getElementById('operator').value;

    switch (operator) {
      case "sum":
        var sum = 0;
        for (var i = 0; i < list.length; i++) {
          sum += parseInt(list[i]);
        }
        document.getElementById("output").innerHTML = sum;
        break;

      case "average":
        var sum = 0;
        for (var i = 0; i < list.length; i++) {
          sum += parseInt(list[i]);
        }
        document.getElementById("output").innerHTML = sum / list.length;
        break;

      case "min":
        var min = list[0];
        for (var i = 0; i < list.length; i++) {
          if (list[i] < min) {
            min = list[i];
          }
        }
        document.getElementById("output").innerHTML = min;
        break;

      case "max":
        var max = list[0];
        for (var i = 0; i < list.length; i++) {
          if (list[i] > max) {
            max = list[i];
          }
        }
        document.getElementById("output").innerHTML = max;
        break;

      case "median":
        // convert list elements from string to number
        var list = list.map((item, index) => {
          return parseInt(item); // convert string to number
        });
        // sort list
        for (var i = 0; i < list.length; i++) {
          for (var j = 0; j < list.length; j++) {
            if (list[i] < list[j]) {
              var temp = list[i];
              list[i] = list[j];
              list[j] = temp;
            }
          }
        }
        // get median
        var median = 0;
        if (list.length % 2 == 0) {
          median = (list[list.length / 2] + list[list.length / 2 - 1]) / 2;
        } else {
          median = list[Math.floor(list.length / 2)];
        }
        document.getElementById("output").innerHTML = median;
        break;

      case "mode":
        // sort the list so items are arranged in ascending order in result
        // this is to ensure that multimodal list results are arranged in ascending order
        list.sort();

        // create a new array and filter out duplicates
        let trimmedList = list.filter(
          (item, index) => list.indexOf(item) === index
        );
        console.log(trimmedList);

        let modeMap = {};
        let maxCount = 0;

        // Initialize modes to empty array
        let modes = [];

        // handle empty array
        if (list.length === 0) {
          modes = 0;
        }

        for (let num of list) {
          if (!modeMap[num]) {
            modeMap[num] = 1;
          } else {
            modeMap[num]++;
          }

          if (modeMap[num] > maxCount) {
            maxCount = modeMap[num];
            modes = [num];
          } else if (modeMap[num] === maxCount) {
            modes.push(num);
          }
        }

        if (modes.length === 1) {
          modes = modes[0]; // If there's a single mode
        } else if (
          modes.length === trimmedList.length &&
          modes.every((value, index) => value === trimmedList[index])
        ) {
          modes = 0; // If all items in the given list occur an equal number of times, in statistics the mode is zero
        } else {
          modes = modes; // If there are multiple modes
        }

        document.getElementById("output").innerHTML = modes;
        break;

      case "range":
        var min = list[0];
        var max = list[0];
        for (var i = 0; i < list.length; i++) {
          if (list[i] < min) {
            min = list[i];
          }
          if (list[i] > max) {
            max = list[i];
          }
        }
        document.getElementById("output").innerHTML = max - min;
        break;

      default:
        document.getElementById("output").innerHTML = "Invalid operator";
        break;
    }
});

