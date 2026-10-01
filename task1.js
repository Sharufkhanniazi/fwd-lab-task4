// Task #1

var name = "Sharuf Zaryab Khan";
var age = 22;
var university = "Air University";
var semester = 5;
var isStudent = true;


var biography = {
    name: name,
    age: age,
    university: university,
    semester: semester,
    isStudent: isStudent,

    address: {
        city: "Islamabad",
        country: "Pakistan"
    },

    degreeProgram: {
        degree: "BS Computer Science",
        field: "Computer Science"
    }
};

// Print biography on console
console.log("Name:", biography.name);
console.log("Age:", biography.age);
console.log("University:", biography.university);
console.log("Semester:", biography.semester);
console.log("Student:", biography.isStudent);

console.log("City:", biography.address.city);
console.log("Country:", biography.address.country);

console.log("Degree:", biography.degreeProgram.degree);
console.log("Field:", biography.degreeProgram.field);