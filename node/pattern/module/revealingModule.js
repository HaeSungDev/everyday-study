// revealing module 패턴
// 원하는 일부 변수 함수를 외부에서 접근 가능하게 공개하는 module 패턴 변형

const RevealingModule = (() => {
    let privateCount = 1;

    const setCount = (count) => {
        privateCount = count;
    };

    const getCount = () => {
        return privateCount;
    };

    return {
        setCount,
        getCount,
    }
})();

for (let i = 0;i < 10;i++) {
    let count = RevealingModule.getCount();
    console.log(count);
    RevealingModule.setCount(count+1);
}

console.log(`Cannot access RevealingModule.privateCount: ${RevealingModule.privateCount}`);