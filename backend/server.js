const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())

app.get('/api/product/:barcode', async (req, res) => {
    try {
        console.log(`Request received for barcode: ${req.params.barcode}`)
        const barcode = req.params.barcode
        const response = await axios.get(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`)
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: "Error fetching product data"})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})