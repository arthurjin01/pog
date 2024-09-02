module.exports = {
    checkB: function(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let message = fullCommand.substr(2)
    let messageSplit = message.split(' ')
    let messageLength = messageSplit.length
    let messageB = []
    let wordB = ''


    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog b'
            case 'b' :
            
                for (b = 0; b < messageLength; b++) {
                    // Iterate through messageSplit list
                    // Deletes first letter of word
                    // Append 🅱️ to front of word
                    wordB = '🅱️' + messageSplit[b].substr(1)
                    messageB.push(wordB)
                }

                receivedMessage.channel.send(messageB.toString().replaceAll(',', ' '))

        }
        // value of 'found' will be returned in bot.js
        return found
    }
}