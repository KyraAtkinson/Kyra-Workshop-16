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

// create a function 
// use one parameter 
// set the presciption price total equal to the pricePerRefill multiplied by how many refills they need. (use "let" to do so)
// Create a if/else statement, If the customer has a subscription multiply the prescription price by .75 and if the customer has a coupon subtract 10 from the prescription price. 
// return 'your grand total is' + prescription price.
// console.log the total price of each customer. 

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