const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const express = require('express')

const app = express()

const stripe = require('stripe')(functions.config().stripe.token)

const charge = req => stripe.charges.create(JSON.parse(req.body))

app.post('/', (req, res) => {
  charge(req)
    .then(response => {
      return res.json(response)
    })
    .catch(err => {
      res.json(err)
      res.status(500).end()
    })
})

exports.charge = functions.https.onRequest(app)
