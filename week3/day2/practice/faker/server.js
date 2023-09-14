const express = require("express")

const PORT = 5000
console.log("hello express")

const app = express()

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api",(req,res) => {
    res.send("Our Express File says Hello")
})

const server = app.listen(PORT,() => {
    console.log(`Server is locked and loaded on port : ${PORT}`)
})
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
    return newUser;
};
   
const user= createUser();
console.log(user);
app.get("/api/users/new", (req, res) => {
    res.json(user);
  });

const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.commerce.productName(),
        address : {
        street : faker.location.street() ,
        city : faker.location.city() ,
        state : faker.location.state() ,
        zipCode :faker.location.zipCode() ,
        country : faker.location.county() ,}
    };
    return newCompany;
};
   
const company = createCompany();
console.log(company);
app.get("/api/companies/new", (req, res) => {
     res.json(company);
  });

  app.get("/api/user/company", (req, res) => {
    const informations ={
    user :user,
    company : company , };
    res.json(informations);

 });








