document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById('output');
  const submitButton = document.getElementById('enter');
  const conversionFrom = document.getElementById("conversionFrom");
  const conversionTo = document.getElementById("conversionTo");

  let _from = conversionFrom.value;
  let _to = conversionTo.value;
  
  const isValidHexa = (userInput) => {
    const regex = /^[A-F0-9]+$/;
    return regex.test(userInput.toUpperCase());
  }

  conversionFrom.addEventListener("change", () => {
      _from = conversionFrom.value;
  });

  conversionTo.addEventListener("change", () => {
      _to = conversionTo.value;
  });

  const decimalToBinary = (userInput) => {
    const userInputNum = Math.floor(Number(userInput));
    return userInputNum.toString(2).toUpperCase();
  }

  const decimalToOctal = (userInput) => {
    const userInputNum = Math.floor(Number(userInput));
    return userInputNum.toString(8).toUpperCase();
  }

  const decimalToHexa = (userInput) => {
    const userInputNum = Math.floor(Number(userInput));
    return userInputNum.toString(16).toUpperCase();
  }

  const binaryToDecimal = (userInput) => {
    return parseInt(userInput, 2);
  }

  const binaryToOctal = (userInput) => {
    const decimalValue = parseInt(userInput, 2);
    return decimalValue.toString(8).toUpperCase();
  }

  const binaryToHexa = (userInput) => {
    const decimalValue = parseInt(userInput, 2);
    return decimalValue.toString(16).toUpperCase();
  }

  const octalToDecimal = (userInput) => {
    const octalValue = parseInt(userInput,8);
    return octalValue.toString(10).toUpperCase();
  }

  const octalToBinary = (userInput) => {
    const octalValue = parseInt(userInput, 8);
    return octalValue.toString(2).toUpperCase();
  }

  const octalToHexa = (userInput) => {
    const octalValue = parseInt(userInput, 8);
    return octalValue.toString(16).toUpperCase();
  }

  const hexaToDecimal = (userInput) => {
    if (isValidHexa(userInput)) {
      const hexaValue = parseInt(userInput, 16);
      return hexaValue.toString(10).toUpperCase();
    } else return "Your input is invalid"
  }

  const hexaToBinary = (userInput) => {
    if (isValidHexa(userInput)) {
      const hexaValue = parseInt(userInput, 16);
      return hexaValue.toString(2).toUpperCase();
    } else return "Your input is invalid"
  }

  const hexaToOctal = (userInput) => {
    if (isValidHexa(userInput)) {
      const hexaValue = parseInt(userInput, 16);
      return hexaValue.toString(8).toUpperCase();
    } else return "Your input is invalid"
  }


  const checkValues = () => {
      const userInput = document.getElementById('value').value; 
      let result = '';
      if (_from === _to) {
        output.classList.add('text-red-800');
        result = "You cannot convert it to itself lol."
      } 

      else if (_from === "Decimal" && _to === "Binary") result = decimalToBinary(userInput);
      else if (_from === "Decimal" && _to === "Octal") result = decimalToOctal(userInput);
      else if (_from === "Decimal" && _to === "Hexadecimal") result = decimalToHexa(userInput);
      else if (_from === "Binary" && _to === "Decimal") result = binaryToDecimal(userInput);
      else if (_from === "Binary" && _to === "Octal") result = binaryToOctal(userInput);
      else if (_from === "Binary" && _to === "Hexadecimal") result = binaryToHexa(userInput);
      else if (_from === "Octal" && _to === "Decimal") result = octalToDecimal(userInput);
      else if (_from === "Octal" && _to === "Binary") result = octalToBinary(userInput);
      else if (_from === "Octal" && _to === "Hexadecimal") result = octalToHexa(userInput);
      else if (_from === "Hexadecimal" && _to === "Decimal") result = hexaToDecimal(userInput);
      else if (_from === "Hexadecimal" && _to === "Binary") result = hexaToBinary(userInput);
      else if (_from === "Hexadecimal" && _to === "Octal") result = hexaToOctal(userInput);
      
      else {
          output.classList.add('text-red-800');
          result = "Conversion not supported"; 
      }

      output.textContent = `Result: ${result}`;
      console.log(result);
  }

  submitButton.addEventListener("click", checkValues);

});
