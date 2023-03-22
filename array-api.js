// Q1. make a string out of an Array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);

}

// result = join('', fruits);
// console.log(result);


// Q2. make an array out of a string
{
    const fruits = 'apple, banana, cherry, kiwi';
    const result = fruits.split();
    console.log(result);
}


// Q3
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// Q4. make new array without the first tow elements 
{
   const array = [1, 2, 3, 4, 5]; 
   const splice_result = array.splice(0,2);
   console.log(splice_result);
   const result = array.slice();
   console.log(result);
}

class Student {
    constructor(name, age, enrolled, score){ // 4가지의 properties 가 들어있음
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const student = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a studnet with the score 90
{
    const result = student.find(function(student, index){
        return student.score === 90; // 콜백함수는 배열에 있는 모든요소를 하나씩 호출이 됨
                                     // 리턴을 true이면 멈추고 리턴, 아니면 다음 요소를 호출.
    });
    console.log(result);
}

