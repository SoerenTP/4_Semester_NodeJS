const express = require("express");

const app = express();

let fingerBones = [
    { id: "1", name: "Proximal Phalanx", finger: "Index", length: "3.8cm" },
    { id: "2", name: "Middle Phalanx", finger: "Middle", length: "2.5cm" },
    { id: "3", name: "Distal Phalanx", finger: "Thumb", length: "2.1cm" }
];

app.get('/fingerbones', (req, res) => {
    res.json({
        status: "success",
        data: fingerBones
    });
});

app.get('/fingerbones/:id', (req, res) => {
    const fingerBone = fingerBones.find(bone => bone.id === req.params.id);
    
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


