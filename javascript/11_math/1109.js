// ## 1109 - Write a program to calculate age.


function calculateAge(birthdate) {
    const birthYear = new Date(birthdate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    console.log(`Age: ${age} years`);
}


const birthdate = '1990-05-15';
calculateAge(birthdate);

