const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const sgMail = require("@sendgrid/mail")

// const uri = 'mongodb+srv://egrigoryan264:Czx7tyvdbR7MufNb@cluster0.yxwxw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const uri =
  process.env.NODE_ENV === "production"
    ? process.env.PROD_DB
    : "mongodb+srv://admin-panel:Zq0jaerHMMjENhsS@cluster0.myade.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const app = express()
app.use(cors())

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const contactSchema = new mongoose.Schema({
  title: String,
  phone: String,
  gmail: String,
  picture: String,
})

const navbarSchema = new mongoose.Schema({
  home: String,
  about: String,
  services: String,
  testimonials: String,
  faqs: String,
  truckstop: String,
  contact: String,
  setup: String,
  picture: String,
})

const aboutSchema = new mongoose.Schema({
  title: String,
  text: String,
  carriersnumber: Number,
  brokersnumber: Number,
  loadsnumber: Number,
  carrierstext: String,
  brokerstext: String,
  loadstext: String,
})

const questionsSchema = new mongoose.Schema({
  title: String,
  questions1: String,
  questions2: String,
  questions3: String,
  questions4: String,
  questions5: String,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  answer5: String,
})

const servicesSchema = new mongoose.Schema({
  titleServices: String,
  LoadSearch: String,
  Booking: String,
  BrokerSetup: String,
  Detention: String,
  Invoicing: String,
  Factoring: String,
  Support: String,
})
const trucktypesSchema = new mongoose.Schema({
  titleTruck: String,
  DryVan: String,
  Reefer: String,
  BoxTruck: String,
  Flatbed: String,
  StepDeck: String,
  PowerOnlyng: String,
})
const requestSchema = new mongoose.Schema({
  titlefirst: String,
  titlesecond: String,
})
const customerSchema = new mongoose.Schema({
  titlefirst: String,
  titlesecond: String,
})
const homeSchema = new mongoose.Schema({
  titlesmall: String,
  titlelarge: String,
  text: String,
})
const followSchema = new mongoose.Schema({
  title: String,
  facelink: String,
  instagramlink: String,
  linkedlink: String,
})
const truckstopSchema = new mongoose.Schema({
  title: String,
  picture1: String,
})

const videobackgroundallInfoSchema = new mongoose.Schema({
  videodispatch: String,
  videobackground: String,
})
const messageInfoSchema = new mongoose.Schema({
  to: String,
  name: String,
  email: String,
  message: String,
})

const Contact = mongoose.model("Contact", contactSchema)
const Navbar = mongoose.model("Navbar", navbarSchema)
const About = mongoose.model("About", aboutSchema)
const Questions = mongoose.model("Questions", questionsSchema)
const Services = mongoose.model("Services", servicesSchema)
const TruckTypes = mongoose.model("TruckTypes", trucktypesSchema)
const Request = mongoose.model("Request", requestSchema)
const Customer = mongoose.model("Customer", customerSchema)
const Home = mongoose.model("Home", homeSchema)
const Follow = mongoose.model("Follow", followSchema)
const TruckTypesStop = mongoose.model("TruckTypesStop", truckstopSchema)
const VideoTypesAll = mongoose.model(
  "VideoTypesAll",
  videobackgroundallInfoSchema,
)
const Message = mongoose.model("Message", messageInfoSchema)

app.get("/api/navbarinfo", async (req, res) => {
  try {
    const navbars = await Navbar.find()
    res.json(navbars)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})
app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find()
    res.json(contacts)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})
app.get("/api/aboutinfo", async (req, res) => {
  try {
    const about = await About.find()
    res.json(about)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})
app.get("/api/questions", async (req, res) => {
  try {
    const questions = await Questions.find()
    res.json(questions)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})
app.get("/api/services", async (req, res) => {
  try {
    const services = await Services.find()
    res.json(services)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})

app.get("/api/trucktypes", async (req, res) => {
  try {
    const trucktypes = await TruckTypes.find()
    res.json(trucktypes)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})
app.get("/api/request", async (req, res) => {
  try {
    const request = await Request.find()
    res.json(request)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})

app.get("/api/customer-reviews", async (req, res) => {
  try {
    const customer = await Customer.find()
    res.json(customer)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})
app.get("/api/homeinfo", async (req, res) => {
  try {
    const home = await Home.find()
    res.json(home)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})
app.get("/api/follow-us", async (req, res) => {
  try {
    const follow = await Follow.find()
    res.json(follow)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})
app.get("/api/truckStop", async (req, res) => {
  try {
    const truckstop = await TruckTypesStop.find()
    res.json(truckstop)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})
app.get("/api/upload-videoheader", async (req, res) => {
  try {
    const videodispatch = await VideoTypesAll.find()
    res.json(videodispatch)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})
app.get("/api/message", async (req, res) => {
  try {
    const messages = await Message.find()
    res.json(messages)
  } catch (err) {
    res.status(500).json({ error: "Server error" })
  }
})

app.use(cors())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
