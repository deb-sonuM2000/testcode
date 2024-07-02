let fs = require('fs')

// fs.appendFile('mytest.txt', 'hello\n',(err)=>{
//           if(err) throw err
//           console.log('file added');
// })

// fs.readFile('fruits.json','utf-8' ,(err,data)=>{
//           if(err) throw err
//           console.log(data);
// })

// let data = fs.readFileSync('fruits.json',{encoding:'utf-8',flag:'r'})
// console.log(data);

// let data1 = fs.readFileSync('mytext.txt',{encoding:'utf-8',flag:'r'})
// console.log(data1);

// fs.unlink('mytext.txt',(err)=>{
//           if(err) throw err
//           console.log('file deleted');
// })

fs.rename('mycode.txt','mytest.txt',(err)=>{
          if(err) throw err
          console.log('file renamed');
})