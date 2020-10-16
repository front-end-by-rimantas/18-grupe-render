const john = {
    name: 'John',
    marks: [10, 10, 10]
}

const peter = {
    name: 'Peter',
    marks: [2, 4, 6, 8]
}

const marie = {
    name: 'Marie',
    marks: [8, 9, 10]
}

const ona = {
    name: 'Ona',
    marks: []
}

const studentsData = {
    selector: '#students',
    students: [john, peter, marie, ona]
}

const PO = 4.2526;

// export { john, marie }



const zmogus = {
    name: 'Vardenis',
    age: 99,
    gender: true,
    color: '#fff',
    chidrenCount: 2,
    children: {
        pirmas: {
            name: 'Vaikis',
            age: 2,
            gender: true,
            luckyNumber: 7
        },
        antras: {
            name: 'Vaikezas',
            age: 1,
            gender: false,
            luckyNumber: 13
        }
    }
}


export { studentsData, zmogus }