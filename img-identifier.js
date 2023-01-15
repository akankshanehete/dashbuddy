function identifier() {
    const axios = require("axios");
    const fs = require("fs");

    const image = fs.readFileSync("tire-test.png", {
        encoding: "base64"
    });

    axios({
        method: "POST",
        url: "",
        params: {
            api_key: ""
        },
        data: image,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    .then(function(response) {
        // console.log(response.data);
        symbol = getSymbol(response.data);
    })
    .catch(function(error) {
        console.log(error.message);
    });

}

function getSymbol(data) {
    predictions = data.predictions;
    console.log(predictions)
    if (predictions.length == 1) {
        return predictions[0].class;
    }
    else {
        return null;
    }
}

function test () {
    console.log("test");
}
//getSymbol();
identifier();