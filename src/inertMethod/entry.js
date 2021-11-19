const core = require('@babel/core');
const babelPluginImport = require('./babel-plugin-import');

const fs = require('fs')
const path = require('path')

const sourceCode = `
  export default XPage({
    show(){
    },
    hide(){
    },
  })
`;

const parseCode = core.transform(sourceCode, {
    plugins: [
        babelPluginImport({
            libraryName: 'hy-store',
        }),
    ],
});

console.log(path.dirname())


console.log(parseCode)
