/**
 {
    "api":1,
    "name":"Unescape string",
    "description":"Unescapes string.",
    "author":"",
    "icon":"quote",
    "tags":"string,unescape,escape",
    "bias": 0.2
}
 **/

function main(state) {
  const doubleBackslashReplacement = '____DOUBLE_BACKSLASH_REPLACEMENT___';
  const newLineReplacement = '____NEW_LINE_REPLACEMENT___';

  try {
    const result = state.text
      .replace(/\\\\/g, doubleBackslashReplacement)
      .replace(/\\n/g, newLineReplacement)
      .replace(/\\([^\\]|$)/g, '$1')
      .replace(new RegExp(doubleBackslashReplacement, 'g'), '\\')
      .replace(new RegExp(newLineReplacement, 'g'), '\n');

    state.text = result;
  } catch (error) {
    state.text = error;
    state.postError("Unescaping failed");
  }
}
