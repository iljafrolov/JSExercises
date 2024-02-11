function Course(name, hours, description){
    this.name = name,
    this.hours = hours,
    this.description = description
}

function Student(name, surname, age, courses) {
    this.name = name
    this.surname = surname
    this.age = age
    this.courses = courses

    this.copy = function() {
        var courses = []

        for (let i = 0; i < this.courses.length; i++) courses.push(new Course(this.courses[i].name, this.courses[i].hours, this.courses[i].description))
        
        return new Student(this.name, this.surname, this.age, courses)
    }
}

var studentExample = new Student("Example", "Test", 20, [new Course("Javascript", 80, "Javascript Course")])
var studentExample2 = studentExample.copy()
studentExample2.name = "Updated"
studentExample2.courses[0].name = "Course updated!"

console.log(JSON.stringify(studentExample))
console.log(JSON.stringify(studentExample2))

