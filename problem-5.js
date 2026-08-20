"use strict";
function getStudentResult(student) {
    let totalMark = student.marks.reduce((sum, item) => sum + item, 0);
    let average = totalMark / student.marks.length;
    const result = average >= 40 ? "passed" : "fail";
    return {
        name: student.name,
        average,
        result,
    };
}
const result = getStudentResult({
    name: "Rafi",
    marks: [80, 75, 90, 85],
});
console.log(result);
