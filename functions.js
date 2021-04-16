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
let tbody = document.querySelector('#container tbody');


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

tbody.innerHTML += tmz;