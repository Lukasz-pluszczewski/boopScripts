/**
 {
    "api":1,
    "name":"camelCase string",
    "description":"Camelcase string (FOO_BAR => fooBar)",
    "author":"",
    "icon":"quote",
    "tags":"string,constCase",
    "bias": 0.2
}
 **/
const { camelCase } = require('@boop/lodash.boop');
function main(state) {
  try {
    const result = state.text
      .replace(
        /(\w+)/g,
        value => camelCase(value)
      );

    state.text = result;
  } catch (error) {
    state.text = error;
    state.postError("Camelcasing failed");
  }
}
