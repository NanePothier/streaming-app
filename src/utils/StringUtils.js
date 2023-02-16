export const StringUtils = {
  containsNumber: (text) => {
    let hasNumber = false;

    for (let i = 0; i <= 9; i++) {
      if (text.includes(i)) {
        hasNumber = true;
      }
    }
    return hasNumber;
  },
  containsLowerOrUpperCase: (text, lowerCase = false) => {
    let hasCase = false;
    let low = 65;
    let high = 90;

    if (lowerCase) {
      low = 97;
      high = 122;
    }

    for (let i = 0; i < text.length; i++) {
      const letterCode = text.charCodeAt(i);

      if (letterCode >= low && letterCode <= high) {
        hasCase = true;
      }
    }
    return hasCase;
  },
};
