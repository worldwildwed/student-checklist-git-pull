
//     SETUP
// get args from shell script
const args = process.argv;
const filePath = args[2]

// readFile <- student.txt
const { readFileSync } = require('fs');
const raw = readFileSync(filePath);
console.log('raw =', raw.toString())

// --------------------------------------

const studentTrack = {};
const text = raw.toString();
const re = /(bellezarocha|joenattapon|tonchawan|ougrid|chonnikan|jordanbae|tanarakchuns|panupong|son1122|maharnnop)/g;
const match = text.matchAll(re)

console.log();
console.log(`Matched Result of' ${filePath}.txt`)
const arrMatch = [...match]
arrMatch.forEach ((m) => {
    console.log(`Found match github@${m[0]} at index: ${m?.index || 'Not Found'}`)
    if (m?.index > 0) {

        if(studentTrack[`${m[0]}`]) {
            studentTrack[`${m[0]}`] += 1
        }
        else {
            studentTrack[`${m[0]}`] = 1
        }
    }
})
console.log('-----------------------------------');
// console.log();
console.log(studentTrack);
// console.log();
console.log('-----------------------------------');

const getStudentTemplate = () => {
    const allStudentGit = [
        'bellezarocha', 'joenattapon', 'tonchawan',
        'ougrid', 'chonnikan', 'jordanbae', 'tanarakchuns', 'panupong', 'son1122', 'maharnnop'
    ]
    let template = {}
    allStudentGit.forEach((s) => {
        template[s] = 0
    })
    return template
}

const logSumAssStudent = (studentObj) => {
    let total = 0
    for (let student in studentObj) {
        total += studentObj[student]
    }
    console.log('Total Student Submited Pull Request:', total)
}

logSumAssStudent(studentTrack)
const studentTemplate = getStudentTemplate()

// console.log(studentTrack, studentTemplate)
// console.log({  ...studentTemplate, ...studentTrack })

console.log('Compared Student Track ...')
console.log('Who is missing is value with (zero)');
console.log({  ...studentTemplate, ...studentTrack })
console.log('--------------------------------');