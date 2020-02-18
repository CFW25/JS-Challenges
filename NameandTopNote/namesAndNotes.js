const topNote = students => students.map(student => ({name : student.name,"topNote" : Math.max(...student.notes,0),
}));


console.log(topNote([{ name: "John", notes: [3, 5, 4]}]))