class Table{
    _header = [];
    tableId = '';
    constructor(id, header){
        this.tableId = id;
        

        this.header = header;
        return this;
    }
    addRow(data, classes) {
        let tbody = document.querySelector(`#${this.tableId} tbody`);

        let tmp = '<tr>';
        for (let j = 0; j < data.length; j++) {
            tmp += `<td class="${classes}">${data[j]}</td>`;
        }
        
        tmp += '</tr>';
        tbody.innerHTML += tmp;

        return this;
    }
    clearBody(){
        document.querySelector(`#${this.tableId} tbody`).innerHTML = '';
    }

    generateHead() {
        let thead = document.querySelector(`#${this.tableId} thead tr`);

        let tmp = '';
        for (let i = 0; i < this.header.length; i++) {
            tmp += `<th>${this.header[i]}</th>`;
        }

        thead.innerHTML = tmp;
    }
    generateFooter(){
        console.log('generate footer');
    }

    get header(){
        return this._header;
    }
    set header(value){
        this._header = value;
        this.generateHead();
        return this;
    }
}



class StudentsList extends Table{
    subjects = [];
    students = [];
    avg = [];
    constructor(students, subjects){
        let header = ['Name', 'Lastname'];
        super('container', [...header, ...subjects]);
        this.students = students;
        this.subjects = subjects;

        this.eventListeners();

        this.generateTable();

    }
    eventListeners(){
        document.getElementById('add_student_form').addEventListener('submit', this.addStudent.bind(this));
    }
    generateTable(){

        this.generateAvg();
        this.generateFooter();
        for (let i = 0; i < students.length; i++) {
            this.addRow([students[i].name, students[i].lastname, ...students[i].scores ]);
        }
    }

    generateFooter(){
        let tmp = '<tfoot>' +
            '<tr>' +
            '<td colspan="2">Avarage</td>';

        for (let i = 0; i < this.avg.length; i++) {
            tmp += `<td>${this.avg[i]}</td>`;
        }


        tmp += '</tr>' +
            '</tfoot>';
        document.querySelector('#container tfoot').innerHTML = tmp;
    }

    //generate html avarages
     generateAvg() {
        // calculate avarage
        for (let i = 0; i < this.students.length; i++) { //students[i]
            for (let j = 0; j < this.students[i].scores.length; j++) { //students[i].scores

                this.avg[j] = this.avg[j] ? this.avg[j] + this.students[i].scores[j] : this.students[i].scores[j];
            }

        }
        for (let i = 0; i < this.avg.length; i++) {
            this.avg[i] /= this.students.length;
        }


    }


    addStudent(e) {
        e.preventDefault();
        let fields = document.querySelectorAll('#add_student_form input');
        let newStudent = {
            name: '',
            lastname: '',
            scores: []
        };
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].name === 'name') {
                newStudent.name = fields[i].value;
            } else if (fields[i].name === 'lastname') {
                newStudent.lastname = fields[i].value;
            } else {
                newStudent.scores.push(parseInt(fields[i]. value) ? parseInt(fields[i].value) : 0);
            }
        }

        this.students.push(newStudent);
        this.addRow(newStudent);
        this.generateAvg();
        return true;
    }

    addSubject (name, scores){
        this.subjects.push(name);

        this.header = [...this.header, name];

        let tmp = scores.split(',');

        for(let i = 0; i< tmp.length; i++ ){
            if(this.students[i]){
                this.students[i].scores.push(Number(tmp[i]));
            }
        }
        this.clearBody();
        this.generateTable();

    }


}


let subjects = ['HTML', 'CSS', 'JS', 'PYTHON'];

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

let studentsListInstance = new StudentsList(students, subjects);

document.getElementById('add_subject').addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.querySelector('#add_subject input[name="name"]').value;
    let scores = document.querySelector('#add_subject input[name="scores"]').value;
    console.log(name, scores);
    studentsListInstance.addSubject(name, scores);
});