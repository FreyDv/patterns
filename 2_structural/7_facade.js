class Complaints {
    constructor() {
        this.complaints = []
    }

    replay(complaint){}

    add(complaint){
        this.complaints.push(complaint)
        return this.replay(complaint)
    }
}
class ProductComplaint extends  Complaints{
    replay({id,customer,details}) {
        return `Product ${id}: ${customer} (${details})`
    }
}
class ServiceComplaint extends  Complaints{
    replay({id,customer,details}) {
        return `Service ${id}: ${customer} (${details})`
    }
}
class UnknownComplaint extends  Complaints{
    replay({id,customer,details}) {
        return `Unknown reason ${id}: ${customer} (${details})`
    }
}

class ComplaintResty {
    register(customer,type,details){
        const id = Date.now()
        let complaint
        switch (type) {
            case 'service':{
                complaint = new ServiceComplaint()
                break
            }
            case 'product':{
                complaint = new ProductComplaint()
                break
            }
            default:{
                complaint = new UnknownComplaint()
                break
            }
        }
        return complaint.add({id,customer,details})
    }
}

const registry = new ComplaintResty()

console.log(registry.register('Vladilen','service','недоступен'))
console.log(registry.register('Elena','product','вылизает ощибка'))
console.log(registry.register('Daniil','asdwqe','Упало приложение'))