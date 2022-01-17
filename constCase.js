/**
 {
    "api":1,
    "name":"CONST_CASE string",
    "description":"Constcases string (fooBar => FOO_BAR)",
    "author":"",
    "icon":"quote",
    "tags":"string,constCase",
    "bias": 0.2
}
 **/
const { snakeCase } = require('@boop/lodash.boop');
function main(state) {
  try {
    const result = state.text
      .replace(
        /(\w+)/g,
        value => snakeCase(value).toUpperCase()
      );

    state.text = result;
  } catch (error) {
    state.text = error;
    state.postError("Constcasing failed");
  }
}
