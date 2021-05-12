// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { LuisRecognizer } = require('botbuilder-ai');
const { ComponentDialog, DialogSet, DialogTurnStatus, TextPrompt, WaterfallDialog } = require('botbuilder-dialogs');
const {tripSearchResponse} = require('../request/tripSearchApi')
// const {tripIdResponse} = require('../response/tripSearchResponse')
const MAIN_WATERFALL_DIALOG = 'mainWaterfallDialog';

class TripSearchDialog extends ComponentDialog {
    constructor(luisRecognizer) {
        super('TripSearchDialog');

        if (!luisRecognizer) throw new Error('[TripSearchDialog]: Missing parameter \'luisRecognizer\' is required');
        this.luisRecognizer = luisRecognizer;

        // if (!bookingDialog) throw new Error('[TripSearchDialog]: Missing parameter \'bookingDialog\' is required');

        // Define the main dialog and its related components.
        // This is a sample "book a flight" dialog.
        this.addDialog(new TextPrompt('TextPrompt'))
            .addDialog(new WaterfallDialog(MAIN_WATERFALL_DIALOG, [
                this.LuisConnect.bind(this),
                this.callTripApi.bind(this),
                this.buildResponse.bind(this)
            ]));

        this.initialDialogId = MAIN_WATERFALL_DIALOG;
    }

    /**
     * The run method handles the incoming activity (in the form of a TurnContext) and passes it through the dialog system.
     * If no dialog is active, it will start the default dialog.
     * @param {*} turnContext
     * @param {*} accessor
     */
    async run(turnContext, accessor) {
        const dialogSet = new DialogSet(accessor);
        dialogSet.add(this);

        const dialogContext = await dialogSet.createContext(turnContext);
        const results = await dialogContext.continueDialog();
        if (results.status === DialogTurnStatus.empty) {
            await dialogContext.beginDialog(this.id);
        }
    }

    
    async LuisConnect(stepContext) {
        // Call LUIS and gather any potential booking details. (Note the TurnContext has the response to the prompt)
        const luisResult = await this.luisRecognizer.executeLuisQuery(stepContext.context);
        // console.log("Luis Result", typeof(luisResult))
        // console.log(luisResult)
        // let userIntent = LuisRecognizer.topIntent(luisResult)
        stepContext.values.userIntent = LuisRecognizer.topIntent(luisResult)
        console.log(LuisRecognizer.topIntent(luisResult))
        // return await stepContext.context.sendActivity(`${ LuisRecognizer.topIntent(luisResult) }. Luis connected`);
        return await stepContext.next();
    }

    async callTripApi(stepContext){
        console.log("Inside call Trip API")
        stepContext.values.tripSearchResponse = tripSearchResponse()
        console.log("Response from search API",stepContext.values.tripSearchResponse)
        return await stepContext.next();

    }

    async buildResponse(stepContext){
        console.log("Inside build response")
        // let response = tripIdResponse(userIntent: stepContext.values.userIntent, apiResponse: stepContext.values.tripSearchResponse)
        return await stepContext.context.sendActivity(`${ stepContext.values.userIntent }. Luis connected`);
    }


  
}

module.exports.TripSearchDialog = TripSearchDialog;
