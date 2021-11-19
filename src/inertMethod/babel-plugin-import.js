const t = require('@babel/types');
function babelPluginImport(options) {

    return {
        visitor: {
           ObjectExpression(path){
                 const node = path.node;
                 node.properties.push(t.expressionStatement(t.stringLiteral(` showPop(){
                                                                                     this.getComponent('pop').show();
                                                                                 }`)))
           }
        }
    }
}

module.exports = babelPluginImport;
