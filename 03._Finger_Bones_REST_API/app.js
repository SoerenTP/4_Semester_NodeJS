const express = require('express');

const app = express();

const fingerBones = [
    {
        id: 1,
        artistName: "Phalange Knowles"
    },
    {
        id: 2,
        artistName: "Distal Phalange"
    }
];

app.get("/fingerbones", (req, res) => {
    res.json({
        status: "success",
        data: fingerBones
    });
});

app.get("/fingerbones/:id", (req, res) => {
    const fingerBone = fingerBones.find((fingerBone) => fingerBone.id === +req.params.id);
    
    if (!fingerBone) {
        return res.status(404).json({
            status: "error",
            message: "FingerBone not found"
        });
    }
    
    res.json({
        status: "success",
        data: fingerBone
    });
});

const PORT = 8080;
app.listen(PORT);


