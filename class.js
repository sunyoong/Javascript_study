'use strict';
// 자바스크립트에는 class가 없었음
// - ES6 때부터 class가 도입됨
// - 기존 프로토타입(prototype) 에서 문법만 추가된 것으로 볼 수 있다

// 객체지향 프로그래밍(Object-oriendted programming)
// class : 템플릿
// object : 클래스의 인스턴스


// 1. Class declarations
class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }


    //methods
    speak() {
    console.log(`${this.name}: hello`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);