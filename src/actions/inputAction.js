export default function userInput(text) {
  // console.log("action payload is: ", text);
  return {
    type: "USER_INPUT",
    payload: text
  };
}

export function clearArea(clear) {
	console.log("action is:", clear);
	return {
		type: "CLEAR_AREA",
		payload: clear
	}
}