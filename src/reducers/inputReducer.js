const defaultState = {
  init: "# Heading One \n\n## Heading Two \n\n`<div>`\n\n``` \n\nSome Code ```\n\n[I'm an inline-style link](https://www.google.com)\n\n >> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n\n 1. First Item \n\n 2. Second Item \n\n\n\n ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')\n\n\n\n**asterisks**"
};

export default (state = defaultState, action) => {
  if (action.type === "USER_INPUT") {
    // console.log('reducer action is: ', action);
    return action.payload;
  }
  return state;
};
