const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

function totalPrice(customer) {
    let prescriptionPrice = customer.pricePerRefill * customer.refills;
    if (customer.subscription){
        prescriptionPrice = prescriptionPrice * .75
    }
    if (customer.coupon){
        prescriptionPrice = prescriptionPrice - 10
    }
    return `your grand total is ${prescriptionPrice}`
}
    console.log(totalPrice(timmy))
    console.log(totalPrice(rocky))
    console.log(totalPrice(sarah))