// working with files
const fileSystem = require('fs');

//create a file
fileSystem.writeFileSync('./demo.txt','Welcome to Genesys');


//Asyncronus way of creating a file - call back approach

fileSystem.writeFile('./demo2.txt','I am Async',(err,result)=>{
    if(err){
        console.log('Error in creating a file');
    }else{
        console.log('File has been created successfully');  
    }
})

// Reading the file

fileSystem.writeFile('./demo2.txt','I am Async',(err,result)=>{
    if(err){
        console.log('Error in reading a file');
    }else{
        console.log(result.toString());   
    }
})


//Creating a new directory
fileSystem.mkdir('NewDir',(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File has been created successfully')
    }
})