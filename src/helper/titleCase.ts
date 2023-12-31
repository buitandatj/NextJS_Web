export function titleCase(str?: string) {
    if (!str) return undefined;
    let convertToArray = str.toLowerCase().split(" ");
    let result = convertToArray.map(function (val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
  
    return result.join(" ");
  }