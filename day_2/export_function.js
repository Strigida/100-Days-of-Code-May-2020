const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
//this example doesn't need a separate export, but only exports one at a time
/* export const lowercaseString = (string) => {
  return string.toLowerCase()
}*/

export {uppercaseString, lowercaseString};