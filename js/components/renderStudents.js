import { generateStudent } from './generateStudent.js';

function renderStudents(data) {
    const students = data.students;
    let HTML = '';

    console.log(students);

    // logic
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        HTML += generateStudent(student);
    }

    // output
    console.log(HTML);
}

export { renderStudents }








/*
<div class="student">
    <h2>Vardenis</h2>
    <p>pazymiu kiekis: 2</p>
</div>
*/

/*
<div class="moto">
    <h2>Yamaha</h2>
    <p>tipai: a, b, c</p>
</div>
*/

/*
<div class="area">
    <h2>Rajono pavadinimas</h2>
    <p>gatviu: 3</p>
    <p>tiltu: 2</p>
    <p>ziedu: 1</p>
</div>
*/