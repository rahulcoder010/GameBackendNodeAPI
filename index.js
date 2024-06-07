const express = require('express');
const app = express();
const cors = require('cors');
const staticData = require('./staticData.json');

app.use(express.json());
app.use(cors());

app.get('/j', (req, res) => {
    res.json({ "message": "test in /j" })
})


app.post('/operator/bet', (req, res) => {

    const generateUniqueBigInt = () => {
        const timestamp = BigInt(Date.now());
        const randomPart = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER));
        const uniqueBigInt = (timestamp << BigInt(20)) | randomPart;
        return uniqueBigInt;
    }

    try {
        // throw new Error('Simulated error');
        const requestBody = req.body;
        const { token } = requestBody;
        const txId = generateUniqueBigInt();
        const responsePayload = staticData.operatorBetResponse;
        res.status(200).json({ ...responsePayload, txId: txId.toString(), token });

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ errorCode: 5, message: 'Other error', error: errorMessage });
    }
});

app.post('/operator/cancelBet', (req, res) => {
    try {
        const requestBody = req.body;
        const { token } = requestBody;
        const responsePayload = staticData.operatorCancelBetResponse;
        // res.json({ ...responsePayload, token });
        // res.json(createResponse(200, { ...responsePayload, token }));
        res.status(200).json({ ...responsePayload, token });


    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        // res.status(500).json({ errorCode: 5, message: 'Other error', error: errorMessage });
        // res.json(createResponse(500, { errorCode: 5, message: 'Other error', error: errorMessage }));
        res.status(500).json({ errorCode: 5, message: 'Other error', error: errorMessage });


    }
});


app.get('/operator/auth', (req, res) => {
    try {
        const responsePayload = staticData.operatorAuthResponse;
        res.status(200).json(responsePayload);

    } catch (error) {
        console.error("Error in operatorAuthController:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        res.status(500).json({ errorCode: 3, message: "Internal Server Error", error: errorMessage });

    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});