const express = require("express");
const router = express.Router();
const axios = require("axios");


router.put("/login", async (req, res) => {
    const { username, password } = req.body;
    axios
        .put("http://3.87.153.70:8080/TaskForce2/user", {
            username: username,
            password: password,
        })
        .then((response) => {
            res.json(response.data);
            console.log(response.data);
        })
        .catch((err) => console.log(err));
    
    
});

router.get("/getTasks", async (req, res) => {
    const { username } = req.body;
    axios
      .get("http://3.87.153.70:8080/TaskForce2/task", {
        username: username
      })
        .then((response) => {
             res.json(response.data);
            console.log(response.data);
        }
        
    )
        .catch((err) => console.log(err));
    
   
})

module.exports = router;