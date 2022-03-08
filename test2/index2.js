let googleTransliterate = require('google-input-tool');


let inputLanguage = 'bn-t-i0-und';
let maxResult = 12;
//let request = new XMLHttpRequest();
 let XMLHttpRequest = require('xhr2');
 let request = new XMLHttpRequest();
const fs = require('fs');
const trans = [];
const convert_trans = [];

  fs.readFile('Input.txt', (err, data) => {
    if (err) throw err;
    const result = data.toString().split(/\r?\n/);
    //result.forEach(myFunction);
    for(let i =0;i<result.length;i++){
        if(result[i] !==''){
            trans.push(result[i])
        }

       // myFunction();
       // myFunction(result[i]);
    }
    console.log(trans);
   myFunction();
    // setTimeout(console.log(trans), 10000);
})
 async function myFunction() {
      for (let x=0; x<=trans.length;x++){
         let sourceText = trans[x];
          if(sourceText !== undefined){
              // console.log(sourceText);
             await googleTransliterate(request, sourceText, inputLanguage, maxResult)
                  .then(function (response) {
                      let result = response[0][0]
                      let fine_trans= sourceText + "," + result + ","+ response[1][0]+ ","+ response[2][0]+","+ response[3][0]+","+  response[4][0]
                      convert_trans.push(fine_trans)
                      console.log(x);
                  });
          }
      }
     myFunction2();
}
function myFunction2() {
    for (let y=0; y<=convert_trans.length;y++){
        if(convert_trans[y] !== undefined){
            // console.log(convert_trans[y]);
            fs.appendFile('inputResult.txt',  convert_trans[y]+"\n", function (err) {
                if (err) {
                    return console.error(err);
                }
            });

        }

    }


}
