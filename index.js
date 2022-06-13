function telephoneCheck(str) {
  // (555)555-5555
  for (let i = 0; i < str.length; i++) {
    if (str[0] === "1") {
      if (str[5] === "-") {
        return /\d\s\d\d\d-\d\d\d-\d\d\d\d/.test(str);
      }
      if (str[2] === "(") {
        return /\d\s\D\d\d\d\D\s\d\d\d-\d\d\d\d/.test(str);
      }
      if (str[1] === "(") {
        return /\d\D\d\d\d\D\d\d\d-\d\d\d\d/.test(str);
      }
      if (str[1] === " " && str[5] === " ") {
        return /\d\s\d\d\d\s\d\d\d\s\d\d\d\d/.test(str);
      }
    }
    if (str[i] === "(") {
      if (str[i + 4] !== ")") {
        return false;
      }
      for (let j = i; j < str.length; j++) {
        if (str[j] === " ") {
          return /\D\d\d\d\D\s\d\d\d-\d\d\d/.test(str);
        }
      }
      return /\D\d\d\d\D\d\d\d-\d\d\d/.test(str);
    }
    if (str[3] === "-") {
      return /\d\d\d-\d\d\d-\d\d\d/.test(str);
    }
    if (str.split(" ").join("").length === 10) {
      for (let k = i; k < str.length; k++) {
        if (str[k] === " ") {
          return /\d\d\d\s\d\d\d\s\d\d\d/.test(str);
        }
      }
      return /\d\d\d\d\d\d\d\d\d\d/.test(str);
    } else {
      return false;
    }
  }
  //   return true;
}

console.log(telephoneCheck("(555)555-5555"));

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
