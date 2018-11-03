const defaultState = {
  init:
    "# Heading One \n\n## Heading Two \n\n`<div>`\n\n```<div> Hello There</div>```\n\n[I'm an inline-style link](https://www.google.com)\n\n > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.\n\n <img src='https://via.placeholder.com/150C'/>\n\n**asterisks**"
};

export default (state = defaultState, action) => {
  if (action.type === "USER_INPUT") {
    // console.log('reducer action is: ', action);
    return action.payload;
  }
  return state;
};
