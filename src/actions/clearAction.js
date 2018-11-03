export default function clearInput(clear) {
	// console.log("action is:", clear);
	return {
		type: "CLEAR_AREA",
		payload: clear
	}
}