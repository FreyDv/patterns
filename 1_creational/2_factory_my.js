class Simple{
    constructor(name) {
        this.name = name
        this.type = 'Simple'
        this.cost = 0
    }
}
class Standard{
    constructor(name) {
        this.name = name
        this.type = 'Standard'
        this.cost = 100
    }
}
class Premium{
    constructor(name) {
        this.name = name
        this.type = 'Premium'
        this.cost = 600
    }
}

class FactoryMembership {
    static listOfMembership = {
        simple: Simple,
        standard: Standard,
        premium: Premium,
    }
    static listOfMember = []
    create(name,type = 'simple') {
        const membership = FactoryMembership.listOfMembership[type] || FactoryMembership.listOfMembership["simple"]
        if (!FactoryMembership.listOfMember.find(user=>user.name === name)){
            const member = new membership(name)
            member.show = function (){
                console.log(`${this.name} ${this.type} ${this.cost}`)
                const strRow = '-'.repeat(100)
                console.log(strRow)
            }
            FactoryMembership.listOfMember.push(member)
        }
        else console.log(`user ${name} is in system`)
    }
}

const megogo = new FactoryMembership()

megogo.create('Katya')
megogo.create('Daniil','standard')
megogo.create('Anna','premium')
megogo.create('Vladimir','standard')
megogo.create('Polina','premium')
megogo.create('Natalia','standard')
megogo.create('Valeria','premium')
megogo.create('Valeria','premium')


FactoryMembership.listOfMember.forEach(user => user.show())
