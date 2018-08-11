// Module 패턴. 외부에서 privateCount 접근 불가
const Module = (() => {
    let privateCount = 1;

    const privateFunc = () => {
        return privateCount++;
    }

    return {
        getCount: () => {
            return privateFunc();
        }
    }
})();

console.log('count start 1 to 10');
for (let i = 0;i < 10;i++) {
    console.log(Module.getCount());
}

console.log(`Module.privateCount: ${Module.privateCount}`);
console.log("cannot access Module's privateCount");