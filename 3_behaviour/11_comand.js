
// Позваляет запоминать команды которые были выполнены над объектом

class MyMath {
    // конструктор который инициализирует начальным значением поле намбер
    constructor(initialValue=0) {
        this.number = initialValue
    }
    // первый метод
    square(){
        return this.number **2
    }
    // второй метод
    cube(){
        return this.number **3
    }
}

// класс который реализует паттерн команд
class Command {
    //конструктор который принимает subject экземпляр класа MyMath
    constructor(subject) {
        this.subject = subject // поле хранения экземпляра
        this.comandsExecuted = []  // поле запоминания команд
    }
    execute(command){
        this.comandsExecuted.push(command)  // запоминание команды
        return this.subject[command]() // возврат команды в екземпляре
    }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square')); // 4
console.log(x.execute('cube'));   // 8

console.log(x.comandsExecuted); // [ 'square', 'cube' ]
