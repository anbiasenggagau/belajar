const express=require('express')
const router=express.Router()

const Subscriber=require('../model/subscribers')

//Getting All
router.get('/', async (req, res) => {
    try {
        const subscribers=await Subscriber.find();
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//Getting One
router.get('/:id', getSubsriber, (req, res) => {
    res.send(`Hello Subscribers that has name = ${res.subscriber}`)
})

//Creating One
router.post('/', async (req, res) => {
    const subscriber=new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    // Checking if the user input all required properties
    try {
        const newSubscriber=await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Updating One
// PATCH berguna untuk mengedit field yang didefinisikan oleh user, sedangkan yang tidak didefinisikan tidak diubah
router.patch('/:id', getSubsriber, async (req, res) => {
    if (req.body.name!=null) {
        res.subscriber.name=req.body.name
    }
    if (req.body.subscribedToChannel!=null) {
        res.subscriber.subscribedToChannel=req.body.subscribedToChannel
    }
    try {
        const updatedSubscriber=await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//Deleting One
router.delete('/:id', getSubsriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({ message: "Deleted Subscriber" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Middleware for Finding Subscriber by ID
async function getSubsriber(req, res, next) {
    let subscriber
    try {
        subscriber=await Subscriber.findById(req.params.id)
        if (subscriber==null) {
            return res.status(404).json({ message: "Cannot Find subscriber" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.subscriber=subscriber
    next()
}

module.exports=router
