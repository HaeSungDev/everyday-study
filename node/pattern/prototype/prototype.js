const Obj = function() {
    this.a = 1;
    this.b = 2;
    this.c = 3;

    this.print = () => {
        console.log(this.a, this.b, this.c);
    }
}

const obj1 = new Obj();
const obj2 = new Obj();

obj1.print();
obj2.print();
// Obj의 print 함수는 생성자를 통해 서로 다른 함수를 생성
console.log(obj1.print === obj2.print);

const ProtoObj = function() {
    this.a = 1;
    this.b = 2;
    this.c = 3;
}

ProtoObj.prototype.print = function() {
    console.log(this.a, this.b, this.c);
}

const protoObj1 = new ProtoObj();
const protoObj2 = new ProtoObj();

protoObj1.print();
protoObj2.print();
// ProtoObj의 print 함수는 prototype 체이닝을 이용해서 공통함수 print를 찾음
// 공통 함수 사용으로 성능상의 이점을 얻을수있음
console.log(protoObj1.print === protoObj2.print);