// Create a JavaScript object, representing a student.
// Student has: name, surname, age.
// Student has also an array of courses.
// Each course has a name, number of hours and a short description.


// Write a function that will create a sample Course object and fill it with some data.

var Course = function(name, number, description){
    this.name = name;
    this.number = number;
    this.description = description;
}

var courses = [];
courses[0] = new Course("Basics Of Programming", 20, "test");
courses[1] = new Course("Structured Programming", 30, "test");

// Write a function that will create a sample Student object and fill it with some data.

var Student = function(name, surname, age, courses){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.courses = courses;
}

var firstStudent = new Student("John", "Doe", 33, courses);

// Write another function that will copy the previously created Student and make a new one.
function copy(oldOne){
    
    //we must copy also the courses; if we don't, the copied student will share the courses with the original one
    var newCourses = [];
    var course;
    for(var i of oldOne.courses){
        course = new Course(i.name, i.number, i.description);
        newCourses.push(course);
    }
    
    //creating a student
    var newOne = new Student(oldOne.name, oldOne.surname, oldOne.age, newCourses);
    
    return newOne;
}

var secondStudent = copy(firstStudent);

//Check if the students is properly copied - including his courses (change in copied student's courses should not affect the original ones)!


//changing name of one student, the other one should remain unchanged
secondStudent.name = "Changed";

//changing name of one student's course, the courses of the other student should remain unchanged
secondStudent.courses[0].name = "updated";

console.log(firstStudent);
console.log(secondStudent);

