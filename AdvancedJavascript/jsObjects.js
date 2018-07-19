function students_list(students){
    for(i in students){
        console.log('Name: ' + students[i].name + ', Cohort: ' + students[i].cohort)
    }
}

students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
]

a = students_list(students)

function employees_ers(users){
    console.log('Employees:')
    for(i in users.employees){
        var len = users.employees[i].first_name.length + users.employees[i].last_name.length
        var num = parseInt(i,10)+1
        console.log(num + ' - ' + users.employees[i].last_name +','+ users.employees[i].first_name +' - '+ len)
    }
    console.log('Managers:')
    for(i in users.managers){
        var len = users.managers[i].first_name.length + users.managers[i].last_name.length
        var num = parseInt(i,10)+1
        console.log(num + ' - ' + users.managers[i].last_name +','+ users.managers[i].first_name +' - '+ len)
    }
}

users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

b = employees_ers(users)

console.log(hello);                                   
var hello = 'world'; 

var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}   
console.log(brendan);

var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);



console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}