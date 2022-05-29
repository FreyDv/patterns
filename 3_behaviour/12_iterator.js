class MyIterator {
    constructor(data) {
        this.index=0
        this.data = data
    }
    [Symbol.iterator](){
        // Первы длиный понятный метод
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0
                    return {done: true}
                }
            }
        }

        // Второй короткий непонятный метод
        // return {
        //     next: ()=> {
        //         // if(this.index >= this.data.length) this.index=0
        //         return {
        //             done: this.index >= this.data.length,
        //             value: this.index >= this.data.length ? undefined : this.data[this.index++]
        //         }
        //     }
        // }
    }
}

function* generator(collection){
    let index =0

    while(index<collection.length){
        yield collection[index++]
    }
}

const iterator = new MyIterator(['This','is','iterator'])

console.log(String('=').repeat(50))

for (let val of iterator){
    console.log('value',val)
}
console.log(String('-').repeat(50))
const it = iterator[Symbol.iterator]()
console.log(it.next()); //
console.log(it.next()); //
console.log(it.next()); //
console.log(it.next()); //
console.log(String('=').repeat(50))

const gen = generator(['its','not','iterator','its','generator'])
for (let val of iterator){
    console.log('value',val)
}
console.log(String('-').repeat(50))

console.log(gen.next()); //
console.log(gen.next()); //
console.log(gen.next()); //
console.log(gen.next()); //
console.log(gen.next()); //
console.log(gen.next()); //
console.log(String('=').repeat(50))


