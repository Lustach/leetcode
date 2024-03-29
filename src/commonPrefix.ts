function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return '';
  }

  // Берем первую строку
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') {
        return '';
      }
    }
  }

  return prefix;
}
const strings = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strings)); // Output: "fl"
