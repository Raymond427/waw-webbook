const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const express = require('express')
const cors = require('cors')({ origin: true })
const app = express()

const stripe = require('stripe')(functions.config().stripe.token)

const charge = req => stripe.charges.create({
  amount: 500,
  currency: 'usd',
  description: 'A test charge',
  source: req.body
})

app.use(cors)
app.post('/', (req, res) =>
  charge(req)
    .then((response) => res.json(response))
    .catch(err => {
      res.json(err)
      res.status(500).end()
    })
)

exports.charge = functions.https.onRequest(app)
