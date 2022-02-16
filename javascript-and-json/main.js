const array1 = {
  isbn: 1231,
  title: "book one",
  author: "one"
}
const array2 = {
  isbn: 1232,
  title: "book two",
  author: "two"
}
const array3 = {
  isbn: 1233,
  title: "book three",
  author: "three"
}

console.log(array1, typeof array1)
console.log(JSON.stringify(array1), typeof JSON.stringify(array1))

const student = {
  "id": 123444,
  "name": "Semi"
}

const studentStringfy = JSON.stringify(student)

console.log(JSON.parse(studentStringfy), typeof JSON.parse(studentStringfy))
