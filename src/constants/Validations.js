const reg = new RegExp("^[0-9]+$");
export const Validate = {
  checkText: (key, value) => {
    let trimmedVal = String(value).trim();
    if (trimmedVal.length == 0) {
      alert(key + " cannot be empty");
      return false;
    } else if (trimmedVal.length < 5) {
      alert(key + " must be 5 charaters or long");
      return false;
    } else {
      return true;
    }
  },
  checkNumber: (name, length, value) => {
    if (value.length !== 0) {
      if (!Number.isInteger(Number(value))) {
        alert(name + " is invalid.");
        return false;
      } else if (value.length < length) {
        alert(name + "Must be " + length + " Characters");
        return false;
      }
      return true;
    }
    alert(name + " is required.");
    return false;
  },
  checkOTP: (name, value) => {
    if (value !== "") {
      if (value.length < 6) {
        alert(name + " Must be 6 Characters");
        return false;
      }
      return true;
    } else {
      alert(name + " is required.");
      return false;
    }
  },
  compareVal: (name, val1, val2) => {
    if (val1 !== val2) {
      alert(name + " do not match. try again!");
      return false;
    }

    return true;
  },
  checkEmpty: (name, value) => {
    let trimmedVal = String(value).trim();
    if (trimmedVal.length == 0) {
      alert(name + " cannot be empty");
      return false;
    } else {
      return true;
    }
  },
};
