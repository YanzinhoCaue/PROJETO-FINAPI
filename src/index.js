const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

const customers = [];

// Middleware
function verifyIfExistsAccountCPF(req, res, next) {
  const { cpf } = req.headers;
  const customer = customers.find(customer => customer.cpf === cpf);
  if(!customer) {
    return res.status(400).json({error: "Customer not found!"});
  }
  req.customer = customer
  return next();
}

function getBalance(statement) {
  const balance = statement.reduce((acc, operation) => {
    if(operation.type == "credit") {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0);
  return balance;
}

/*
  - cpf = string
  - name = string
  - id = uuid
  - statement = array
*/
app.post("/account", (req, res) => {
  const { cpf, name } = req.body;
  const custumerAlreadyExists = customers.some((custumer) => custumer.cpf === cpf);
  if(custumerAlreadyExists) {
    return res.status(400).json({error: "Customers already exists!"});
  };
  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  });
  return res.status(201).send();
});

// app.use(verifyIfExistsAccountCPF);

app.get("/statement", verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  return res.json(customer.statement);
})

app.post("/deposit", verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  const { description, amount } = req.body;
  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit"
  }
  customer.statement.push(statementOperation);
  return res.status(201).send()
});

app.post("/withdraw", verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  const { amount } = req.body;
  const balance = getBalance(customer.statement);
  if(balance < amount) {
    return res.status(400).json({error: "Insufficient funds!"});
  }
  const statementOperation = {
    amount,
    created_at: new Date(),
    type: "debit"
  }
  customer.statement.push(statementOperation);
  return res.status(201).send();
});

app.get("/statement/date", verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  const { date } = req.query;
  const dateFormat = new Date(date + " 00:00");
  const statement = customer.statement.filter((statement) => statement.created_at.toDateString() === new Date(dateFormat).toDateString());
  return res.json(statement);
})

app.put("/account", verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  const { name } = req.body;
  customer.name = name;
  return res.status(201).send();
})

app.get("/account", verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  return res.json(customer);
})

app.get("/balance", verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  const balance = getBalance(customer.statement);
  return res.json(balance);
})

app.delete("/account", verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  customers.splice(customer, 1);
  return res.status(200).json(customers);
});

app.listen(3333);