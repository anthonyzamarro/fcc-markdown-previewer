export default function userInput(text) {
  // console.log("action payload is: ", text);
  return {
    type: "USER_INPUT",
    payload: text
  };
}
