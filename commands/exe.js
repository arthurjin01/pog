module.exports = {
    checkExe: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let filename = receivedMessage.content.substr(8)

    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog exe'
            case 'exe' :
                if (filename.length < 21) {

                    const embed = new MessageEmbed()
                    .setTitle(filename + '.exe')
                    .setDescription('sussy baka!')
                    .setThumbnail('https://aux2.iconspalace.com/uploads/448592549.png')
                    .setURL('https://bit.ly/3h872Sg')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]}) // send arguments with '.exe' at the end of it

                }
                else {
                    const embed = new MessageEmbed()
                    .setTitle('Explorer.exe')
                    .setDescription('The file name is too long.')
                    .setThumbnail('http://www.rw-designer.com/icon-view/17086.png')
                    .setURL('https://bit.ly/3h872Sg')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}