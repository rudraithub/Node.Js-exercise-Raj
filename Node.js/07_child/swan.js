const { spawn } = require('child_process');


const child = spawn('ls',['-lh']);

child.stdout.on('data',(data)=>{
    console.log(`stdout:${data}`)
})

child.stderr.on('data',(data)=>{
    console.log(`sterr:${data}`)
});

child.on('error', (error)  => console.log('error; ${error.meassage}'))

child.on(`exit`,(code, signal)=>{
    if(code)console.log(`process exit with code${code}`)
    if(signal)console.log(`process exit with code${signal}`)
    console.log("done:smiling_face_with_tear:")

});



