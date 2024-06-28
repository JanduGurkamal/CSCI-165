// const firstName = prompt("Typr your first name: ");
// console.log(firstName)

grade = prompt("What are your grades? ");

let letterGrade = "None";
if(grade >= 90){
    letterGrade = 'A';
}
else if(grade >= 80){
    letterGrade = 'B';
}

else if(grade >= 70){
    letterGrade = 'C';
}

else if(grade >= 60){
    letterGrade = 'D';
}

else {
    letterGrade = 'F'
}

document.write(letterGrade);