class User{
    constructor(name) {
        this.name = name
        this.room = null
    }
    send(to,message){
        this.room.send(this,to,message)
    }
    receive(from,massage){
        console.log(`${from.name} => ${this.name}: ${massage}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }
    register(user){
        this.users[user.name] = user
        user.room = this
        return this
    }
    send(from,to,massage){
        if(to){
            to.receive(from,massage)
        }
        else{
            Object.keys(this.users).forEach((key)=>{
                if (this.users[key]!==from){
                    this.users[key].receive(from,massage)
                }
            })
        }
    }
}

const  vlad = new User('Vladilen')
const  lena = new User('Lena')
const  ana = new User('Ana')
const  lera = new User('Lera')

const room = new  ChatRoom()

console.log(room.register(vlad).register(lena).register(ana).register(lera));

vlad.send(lena,'Hello!')
lena.send(vlad,'Hello! How a u?')
lera.send('','Oll Hello!')