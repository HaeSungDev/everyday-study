function Obj() {
    this.a = 1;
    this.b = 2;
    this.c = 3;

    Obj.prototype.setObjNum(Obj.prototype.getObjNum() + 1);
}

// revealing Prototype 패턴을 사용해서 값을 public, priviate으로 사용 가능
Obj.prototype = (function() {
    let objNum = 0;

    const setObjNum = (num) => {
        objNum = num;
    }

    const getObjNum = () => {
        return objNum;
    }

    return {
        setObjNum: setObjNum,
        getObjNum: getObjNum,
    }
})();

const obj1 = new Obj();
const obj2 = new Obj();
const obj3 = new Obj();

// 같은 프로토타입 함수를 이용하므로 같은 값이 나옴
console.log(obj1.getObjNum());
console.log(obj2.getObjNum());
console.log(obj3.getObjNum());