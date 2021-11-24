const fsPromise = require('fs/promises');
const fs = require('fs');

function createFileContent(hasPop){
    let pop = '';
    if(hasPop){
        pop = `showPop(){
                this.getComponent('pop').show();   
               },
               hidePop(){ this.getComponent('pop').hide();   },
        `
    }
    return `export default XPage({
            show(){
            },
            hide(){
            },
            ${pop}
        })
    `
}

fs.writeFile('test', createFileContent(true), function(err, data){
    if(err) console.log(err);
    console.log(data);
})
