const defaultState = {
  init: "# h1 heading \n\n## h2 heading \n\n`inline block of code`\n\n``` \n\n multi-line block of code ```\n\n[I'm an inline-style link](https://www.google.com)\n\n >> A blockquote.\n\n 1. first list item \n\n 2. second list item \n\n\n\n Here's an image: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')\n\n\n\n**Some bolded text**"
};

export default (state = defaultState, action) => {
  if (action.type === "USER_INPUT") {
    // console.log('reducer action is: ', action);
    return action.payload;
  }
  return state;
};
