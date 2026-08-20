interface Student {
  name: string;
  marks: number[];
}

function getStudentResult(student: Student): {
  name: string;
  average: number;
  result: string;
} {
  let totalMark: number = student.marks.reduce((sum, item) => sum + item, 0);
  let average: number = totalMark / student.marks.length;
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
