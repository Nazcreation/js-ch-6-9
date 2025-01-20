//Ch6-9: Q1
let a = 10;
document.getElementById("a").innerHTML = `Result: <br> The value of a is: ${a} <hr>`;
++a;
document.getElementById("b").innerHTML += `The value of ++a is: ${a}`;
document.getElementById("c").innerHTML += `Now the value of is: ${a}`;
a++;
document.getElementById("d").innerHTML += `The value of a++ is: ${a}`;
document.getElementById("e").innerHTML += `Now the value of a is: ${a}`;
--a;
document.getElementById("f").innerHTML += `The value of --a is: ${a}`;
document.getElementById("g").innerHTML += `Now the value of a is: ${a}`;
a--;
document.getElementById("h").innerHTML += `The value of a-- is: ${a}`;
document.getElementById("i").innerHTML += `Now the value of a is: ${a}`;

// Q2:
let b = 2;
let c = 1;
let result = --b - --c + ++c + c--;
document.getElementById("j").innerHTML = `j is : ${b}`;
document.getElementById("k").innerHTML = `k is : ${c}`;
document.getElementById("l").innerHTML = `result is : ${result}`;

//Q3:
//Write a program that takes input a name from user & greet the user.
let namee = prompt("Enter your name");
alert(`Hello ${namee}!`);

// Ch6-9 Q4
let number = prompt("Enter a number for the multiplication table:");
if (!number) {
    number = 5;
} else {
    number = parseInt(number, 10);
}
document.write(`<h3>Multiplication Table of ${number}</h3>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${number} x ${i} = ${number * i}<br>`);
}

// Ch6-9 Q5
let subject1 = prompt("Enter the name of the first subject:");
let subject2 = prompt("Enter the name of the second subject:");
let subject3 = prompt("Enter the name of the third subject:");
const totalMarksPerSubject = 100;
let obtained1 = parseInt(prompt(`Enter marks obtained in ${subject1} (out of ${totalMarksPerSubject}):`), 10);
let obtained2 = parseInt(prompt(`Enter marks obtained in ${subject2} (out of ${totalMarksPerSubject}):`), 10);
let obtained3 = parseInt(prompt(`Enter marks obtained in ${subject3} (out of ${totalMarksPerSubject}):`), 10);
let totalObtained = obtained1 + obtained2 + obtained3;
let totalMaxMarks = totalMarksPerSubject * 3;
let percentage = (totalObtained / totalMaxMarks) * 100;
document.write(`
    <h3>Marks Sheet</h3>
    <table border="1" cellspacing="0" cellpadding="5">
        <tr>
            <th>Subject</th>
            <th>Obtained Marks</th>
            <th>Total Marks</th>
        </tr>
        <tr>
            <td>${subject1}</td>
            <td>${obtained1}</td>
            <td>${totalMarksPerSubject}</td>
        </tr>
        <tr>
            <td>${subject2}</td>
            <td>${obtained2}</td>
            <td>${totalMarksPerSubject}</td>
        </tr>
        <tr>
            <td>${subject3}</td>
            <td>${obtained3}</td>
            <td>${totalMarksPerSubject}</td>
        </tr>
        <tr>
            <td colspan="2"><b>Total Marks Obtained</b></td>
            <td>${totalObtained}</td>
        </tr>
        <tr>
            <td colspan="2"><b>Percentage</b></td>
            <td>${percentage.toFixed(2)}%</td>
        </tr>
    </table>
`);

