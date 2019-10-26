/*Simple runner. uses only functions */
const {pythonPath} = require("../../config");
const {spawn} = require('child_process');

let scripts_dir = __dirname + "/../../../scripts/";

function runSimple(res){
    const hello = spawn(pythonPath, [`${scripts_dir}/hello.py`]);
    hello.stdout.on('data', data =>{
        console.log(data + "");
        res.write(data);
    });
    
    hello.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).send(`An error has occured`)
    });
    
    hello.on('close', (code) => {
        res.end();
        console.log("close")
        console.log(`child process exited with code ${code}`);
    });    
}

function runls(){
    
}


module.exports = {
    runSimple: runSimple
}