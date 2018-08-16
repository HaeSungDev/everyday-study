// 이벤트를 통지하는 Subject 클래스
class Subject {
    constructor() {
        this.observers = [];
    }

    subscribeObserver(observer) {
        this.observers.push(observer);
    }

    unsubscribeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers[index].notify(index);
        }
    }

    notifyAllObservers() {
        this.observers.forEach((value, i) => {
            value.notify(i);
        });
    }
}

// 이벤트를 기다리는 Observer 클래스
class Observer {
    notify(index) {
        console.log(`Observer ${index} is notified!`);
    }
}

const subject = new Subject();
// subject에 observer들을 등록
const observers = [];
for (let i = 0;i < 5;i++) {
    observers.push(new Observer());
    subject.subscribeObserver(observers[i]);
}

// 특정 observer에게 notify
subject.notifyObserver(observers[2]);
subject.notifyObserver(observers[4]);

// 모든 observer에게 notify
subject.notifyAllObservers();