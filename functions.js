let subject = ['HTML','CSS','JS','PYTHON'];

let students = [
 {
   name: 'Nick',
   lastname: 'Pfender',
   scores: [23, 45, 34, 65]
 },
 {
   name: 'Frank',
   lastname: 'Galagher',
   scores: [54, 45, 78, 43]
 },
 {
   name: 'Josh',
   lastname: 'Jameson',
   scores: [56, 45, 65,  45] 
 },
 {
   name: 'Lip',
   lastname: 'Eisenberg',
   scores: [99, 45, 76, 35]
 }

];

// AVG

let avg = [0, 0, 0, 0];
for (let i = 0; i < students.length; i++){
for (let j = 0; j < subject.length; j++){
   avg[j] += students[i].scores[j];
  }
  
}
for (let i = 0; i < avg.length; i++) {
  avg[i] /= subject.length;
}


// GET
let container = document.getElementById('container');
let thead = document.querySelector('#container thead tr');
let tfoot = document.querySelector('#container tfoot');
let tbody = document.querySelector('#container tbody');
let subInp = document.querySelector('.sub-inp');
let subBtn = document.querySelector('.sub-btn');


// GENERATE
let tmp = '';
for (let i = 0; i < subject.length; i++){
   tmp += `<th>${subject[i]}</th>`;

}
thead.innerHTML += tmp;

let tmk = '';
for (let i = 0; i < students.length; i++){
   tmk += `<tr>
<td>${students[i].name}</td>
<td>${students[i]['lastname']}</td> `;

for (let j = 0; j < students.length; j++) {
tmk += `<td class="${avg[j] > students[i].scores[j] ? 'red' : 'green'}">${students[i].scores[j]}</td>`; 
}
   tmk += '</tr>';


}
tbody.innerHTML += tmk;


tmz = '<tr>'+
'<td colspan="2">Average</td>';


for (let i = 0; i < avg.length; i++){
  tmz += `<td>${avg[i]}</td>`;
}
tmz += '</tr>';

tfoot.innerHTML += tmz;



//INPUTS 

let tmj = '';
for (let i = 0; i < 1; i++){
   tmj += `<input class="data1" type="text" placeholder="Date">
   <input class="data2" type="text" placeholder="Date">
   <input class="data3" type="text" placeholder="Date">
   <input class="data4" type="text" placeholder="Date">
   <input class="data5" type="text" placeholder="Date">
   <input class="data6" type="text" placeholder="Date">`;

}
let tmt = '';
for (let i = 0; i < 1; i++) {
  tmt += `<input class="btn" type="submit" name="SUBMIT" onclick="myFunction()">`;
}

subInp.innerHTML += tmj;
subInp.innerHTML += tmt;


function myFunction() {
  let DaTaa1 = document.querySelector('.data1[type="text"]').value;
  let DaTaa2 = document.querySelector('.data2[type="text"]').value;
  let DaTaa3 = parseInt(document.querySelector('.data3[type="text"]').value);
  let DaTaa4 = parseInt(document.querySelector('.data4[type="text"]').value);
  let DaTaa5 = parseInt(document.querySelector('.data5[type="text"]').value);
  let DaTaa6 = parseInt(document.querySelector('.data6[type="text"]').value);
  
  let trt = '';
  
  for (let i = 0; i < 1; i++){  
  trt += `<tr><td>${DaTaa1}</td>
  <td>${DaTaa2}</td>
  <td>${DaTaa3}</td>
  <td>${DaTaa4}</td>
  <td>${DaTaa5}</td>
  <td>${DaTaa6}</td></tr>`;  
  }
  
  
  
  tbody.innerHTML += trt;

}




//ADD SUBJECT
let add = '';
for (let i = 0; i < 1; i++){
  add += `<h3>Add Subjects</h3>
  <input class="addsub1" type="text" placeholder="Date">
 <input class="addsub" type="submit" name="addsub" onclick="addFunction()">`; 
}
subBtn.innerHTML += add;





