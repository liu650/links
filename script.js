// // var fs = require("fs");
// import * as fs from 'fs';

// var text = fs.readFileSync("./list.txt","utf-8");
// var output_array = text.split("\r\n")
// // output_array = fs.readFile("list.txt", function(text){
// //     var textByLine = text.split("\n")
// // });
// console.log(output_array)
// data = output_array.map(s => s.replace('./public_html/',''))

let raw_string = "./public_html/cpsc422a3.pdf./public_html/11.pdf./public_html/cpsc422_2020w2_a2.pdf";
let public_data = parse(raw_string, "./public_html/")
let box_data = parse('box/Financial_Reporting_and_Analysis_7th_Edition_－_Lawrence_Revsine.pdfbox/Creativity_Inc.Pixel.pdfbox/a355.pdfbox/Corporate Finance For Dummies.pdfbox/A Random Walk Down Wall Street by Burton G. Malkiel.pdfbox/a355b.pdf', "box/")
// console.log(data.map(x => create_href(x)))
// console.log(data)
box_data = box_data.sort((a,b)=>{return a.toUpperCase() <= b.toUpperCase()?  -1 : 1 })
console.log(box_data)
function generate(){
    make_list("public_files",public_data);
    make_list("box_files", box_data);
    function make_list(id, array) {
        let list = document.getElementById(id);
        for (each of array) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.href = create_href(each);
            a.innerText = each;
            li.appendChild(a);
            list.appendChild(li);
        }
    }
}
function parse(raw,str) {
    let result = raw.split(str);
    return result.map(s => s.trim()).filter(s => s.length > 0);
}
function create_href(str) {
    return "https://www.students.cs.ubc.ca/~liu650/"+str
}


/* known bug
for (var i of result){
    i = i.trim();
}
for (var i in result){
    result[i] = result[i].trim();
}
*/

