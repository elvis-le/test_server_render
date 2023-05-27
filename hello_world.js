const { File } = require('buffer');
const hello = require('fs');
const file1content = hello.readFileSync('file1.txt')
const file2content = hello.readFileSync('file2.txt')
hello.writeFileSync('file3.txt', file1content + ' ' + file2content, (err) => {
    if(err){
        throw err;
    }
})
hello.readFile('./file3.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});

