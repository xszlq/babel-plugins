const t = require('@babel/types');
function babelPluginImport(options) {

    return {
        visitor: {
           ObjectExpression(path){
                 const node = path.node;
                 // node.properties.push(t.expressionStatement())
           }
        }
    }
}

module.exports = babelPluginImport;
