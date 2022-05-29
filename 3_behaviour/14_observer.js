class Subject{
    constructor() {
        this.observers = []
    }

    subscribe(observer){
        this.observers.push(observer)
    }

    unsubscribe(observer){
        this.observers = this.observers.filter((obs)=>obs !== observer)
    }

    fire(changes){
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}
class Observer {
    constructor(state) {
        this.state = state
        this.initialState = state
    }
    update(chenges){
        switch (chenges.type) {
            case'INCREMENT':
                this.state = this.state++
                break
            case 'DECREMENT':
                this.state = this.state--
                break
            case 'ADD':
                this.state += action.payload
                break
            default: this.state = this.initialState
        }
    }
}