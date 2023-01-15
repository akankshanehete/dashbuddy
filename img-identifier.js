import axios from 'axios';
import fs from 'fs';

function identifier() {
    //const axios = require("axios");
    //const fs = require("fs");
    let symbol = null

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
        symbol = getSymbol(response.data);

        if (symbol.localeCompare("tire-pressure") == 0) {
            symbol = "Tire Pressure"
        } else if (symbol.localeCompare("engine") == 0) {
            symbol = "Check Engine Light"
        }

        let prompt = 'This program identifies a vehicle issue and what action to take, given a dashboard symbol. \
        Symbol: Engine Temperature \
        Issue: This symbol indicates that your engine is overheating. This most likely has to do with your coolant (antifreeze), but it can happen for a variety of reasons. \
        Action: Pull over as soon as it is safe and turn off the vehicle. Allow the engine to cool for at least 15 minutes, and do not pop the hood. Opening the hood while the engine is hot could result in burns from spewing steam or smoke. Call roadside assistance to get your coolant topped off or get a tow to a nearby repair shop. \
        -- \
        Symbol: Oil Pressure \
        Issue: This symbol indicates that there is an issue with your vehicle’s oil pressure system. Either you’re running low on oil or your oil pump isn’t circulating enough fluid to properly lubricate the surfaces inside your engine. \
        Action: Pull over as soon as it is safe, turn off the vehicle, and check the oil. Look around the engine bay for obvious oil leaks, and then pull out the oil dipstick to check the fluid level. Bring your vehicle in to let a mechanic take a look and address whatever is causing the low oil pressure. \
        -- \
        Symbol: Traction Control \
        Issue: This symbol indicates your vehicle’s traction control system is activated. \
        Action: Continue driving, but beware of slippery conditions. \
        -- \
        Symbol: High Beams \
        Issue: This symbol indicates your vehicle’s high beams are on. \
        Action: Only use your high beams at nighttime in empty areas when no other vehicles or lighting is present. Headlights should be switched to low when other vehicles are present. \
        -- \
        Symbol: \
        ' + symbol

        const options = {
            method: 'POST',
            url: '',
            headers: {
                accept: 'application/json',
                'Cohere-Version': '2022-12-06',
                'content-type': 'application/json',
                authorization: ''
            },
            data: {
                max_tokens: 100,
                stop_sequences: ['--'],
                return_likelihoods: 'NONE',
                truncate: 'END',
                prompt: prompt
            }
        };

        axios
        .request(options)
        .then(function (response) {
        console.log(response.data);
        })
        .catch(function (error) {
        console.error(error);
        });
    })
    .catch(function(error) {
        console.log(error.message);
    });

}

function getSymbol(data) {
    let predictions = data.predictions;
    if (predictions.length == 1) {
        //console.log(predictions[0].class)
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