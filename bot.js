// poggo#2538 (Poggo; Pog Bot)
// 1.0: June 03 2021
// Author: FlyingLobster69#1861 (LooOOooL YT)

// Import the discord.js modules
const Discord = require('discord.js')
const {MessageEmbed} = require('discord.js')
const fs = require('fs')
const { exitCode } = require('process')
// const commands = new Discord.Collection()

// Connect Config file
const config = require('./config.json')

// Connect Version tracker
const currentVersion = require('./commands/version.json')

// Connect singles
const dad = require('./singles/dad.json')

// Math commands
const add = require('./commands/add')
const subtract = require('./commands/subtract')
const multiply = require('./commands/multiply')
const divide = require('./commands/divide')
const power = require('./commands/power')
const root = require('./commands/root')

// Connect commands
const pog = require('./commands/pog')
const poggies = require('./commands/poggies')
const poggers = require('./commands/poggers')
const start = require('./commands/start')
const helpcmd = require('./commands/help')
const test = require('./commands/test')
const profile = require('./commands/profile')
const ping = require('./commands/ping')
const code = require('./commands/code')
const version = require('./commands/version')
const readme = require('./commands/readme')
const horny = require('./commands/horny')
const exe = require('./commands/exe')
const butter = require('./commands/butter')
const count = require('./commands/count')
const ecount = require('./commands/ecount')
const wish = require('./commands/wish')
const isearthround = require('./commands/isearthround')
const die = require('./commands/die')
const invite = require('./commands/invite')
const suscount = require('./commands/suscount')
const ship = require('./commands/ship')
const remind = require('./commands/remind')
const server = require('./commands/server')
const rng = require('./commands/rng')
const she = require('./commands/she') 
const b = require('./commands/b')
const warp = require('./commands/warp')
// const music = require('./commands/music')

// Moderation commands
const purge = require('./modcmds/purge')

// Initialize lists
const susTxtList = ['sus', 'imposter', 'amogus']
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

// Connect client
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, 
    Discord.Intents.FLAGS.GUILD_MEMBERS, 
    Discord.Intents.FLAGS.GUILD_MESSAGES, 
    Discord.Intents.FLAGS.GUILD_WEBHOOKS, 
    Discord.Intents.FLAGS.GUILD_PRESENCES, 
    Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Discord.Intents.FLAGS.GUILD_INTEGRATIONS, 
    Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS]}
) // Specify intents

// Gets called when our bot is successfully logged in and connected
client.on('ready', () => {
    console.log(`${client.user.tag} is connected on Version ${currentVersion.version}`)

    client.user.setActivity('pog help') // Activity status on Discord
})

// On message from any user
client.on('messageCreate', receivedMessage => {
    lowered = receivedMessage.content.toLowerCase()
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return // kekw
    }
    
    if (lowered.startsWith(config.prefix)) { // If first 3 letters = 'pog', process receivedMessage function
        processCommand(receivedMessage)
    }

    if (lowered == 'e') { // e
        var uid = 'ecount' + parseInt(receivedMessage.author.id).toString() + '.txt' // takes the message author uid and puts it into the file name

                fs.open('./ecount/' + uid, 'r+', function(error, fd) { // opens the user's e count file
                    if (error) { // if user has no pog count file, create one
                        fs.writeFile('./ecount/' + uid, '1', 'utf8', function(error, data) { // start user with 1 e
                            null
                        })
                    }
                    else { // if user has a pog count file
                        fs.readFile('./ecount/' + uid, 'utf8', function(error, data) { // read the value in the e count file
                            if (error) { // if file does not exist, create one (this is unlikely to be needed)
                                fs.writeFile('./ecount/' + uid, '1', 'utf8', function(error, data) { // start user with 1 e
                                    null
                                })
                            }
                            else { // log e
                                let ecount = data // initialize e count variable and assign it to data from fs.readFile()
                                var eint = parseInt(ecount) // convert e count to an int variable
                                var etotal = eint + 1 // add 1 to the e count
                                var etotalstring = etotal.toString() // convert new e count back to string value
                                fs.write(fd, etotalstring, 0, 'utf8', function(error, writtenbytes) { // overwrite the old e count value with the new one
                                })
                            }
                        })
                    }
                })
    }
    if (lowered == 'help') { // help
        receivedMessage.channel.send(helpGen())
    }
    if (receivedMessage.content.includes('69 ') && (receivedMessage.author.bot == false)) { // 69
        receivedMessage.channel.send('nice')
    }
    if (lowered.includes('paimon')) { // paimon 
        receivedMessage.channel.send(emergencyFoodGen())
    }
    if (lowered == 'dewit') { // dewit
        const embed = new MessageEmbed()
        .setImage('https://media.discordapp.net/attachments/852751760324821042/863226637460963364/dewit.gif')
        .setColor('#00ADEF')
        receivedMessage.channel.send({ embeds: [embed]})
    }
    if (lowered == 'kekw') { // kekw
        receivedMessage.channel.send('<:kekw:852782062607401032>')
    }
    if (lowered == 'ehe') { // ehe
        receivedMessage.channel.send({ embeds: [ehePranked()]})
    }
    if (susTxtList.includes(lowered)) { // sus
        receivedMessage.channel.send(susGen())
        var uid = 'suscount' + parseInt(receivedMessage.author.id).toString() + '.txt' // takes the message author uid and puts it into the file name

                fs.open('./suscount/' + uid, 'r+', function(error, fd) { // opens the user's sus count file
                    if (error) { // if user has no sus count file, create one
                        fs.writeFile('./suscount/' + uid, '1', 'utf8', function(error, data) { // start user with 1 amogus
                            null
                        })
                    }
                    else { // if user has a sus count file
                        fs.readFile('./suscount/' + uid, 'utf8', function(error, data) { // read the value in the sus count file
                            if (error) { // if file does not exist, create one (this is unlikely to be needed)
                                fs.writeFile('./suscount/' + uid, '1', 'utf8', function(error, data) { // start user with 1 amogus
                                    null
                                })
                            }
                            else { // log sus
                                let suscount = data // initialize sus count variable and assign it to data from fs.readFile()
                                var susint = parseInt(suscount) // convert sus count to an int variable
                                var sustotal = susint + 1 // add 1 to the sus count
                                var sustotalstring = sustotal.toString() // convert new sus count back to string value
                                fs.write(fd, sustotalstring, 0, 'utf8', function(error, writtenbytes) { // overwrite the old sus count value with the new one
                                })
                            }
                        })
                    }
                })
    } 
    if (lowered.startsWith(dad.im) && (receivedMessage.content.length < 14)) { // dad
        var name = receivedMessage.content.substr(3)
        receivedMessage.channel.send(dad.hi + name + dad.dad)
    }
    else {
        null
    }
})

// Command function
function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    // Basic Commands
    if (pog.checkPog(receivedMessage)) { // pog
        return
    }
    else if (poggies.checkPoggies(receivedMessage)) { // poggies
        return
    }
    else if (poggers.checkPoggers(receivedMessage)) { // poggers
        return
    }
    else if (start.checkStart(receivedMessage)) { // pog start
        return
    }
    else if (helpcmd.checkHelp(receivedMessage)) { // pog help
        return
    }
    else if (test.checkTest(receivedMessage)) { // pog test
        return
    }
    else if (profile.checkProfile(receivedMessage)) { // pog profile
		return
	}
    else if (ping.checkPing(receivedMessage)) { // pog ping
        return
    }
    else if (code.checkCode(receivedMessage)) { // pog code
        return
    }
    else if (version.checkVersion(receivedMessage)) { // pog version
        return
    }
    else if (readme.checkReadme(receivedMessage)) { // pog readme
        return
    }
    else if (horny.checkHorny(receivedMessage)) { // pog horny
        return
    }
    else if (exe.checkExe(receivedMessage)) { // pog exe
        return
    }
    else if (butter.checkButter(receivedMessage)) { // pog butter
        return
    }
    else if (count.checkCount(receivedMessage)) { // pog count
        return
    }
    else if (ecount.checkEcount(receivedMessage)) { // pog ecount
        return
    }
    else if (wish.checkWish(receivedMessage)) { // pog wish
        return
    }
    else if (isearthround.checkIsearthround(receivedMessage)) { // pog isearthround
        return
    }
    else if (die.checkDie(receivedMessage)) { // pog die
        return
    }
    else if (invite.checkInvite(receivedMessage)) { // pog invite
        return
    }
    else if (suscount.checkSuscount(receivedMessage)) { // pog suscount
        return
    }
    else if (ship.checkShip(receivedMessage)) { // pog ship
        return
    }
    else if (remind.checkRemind(receivedMessage)) { // pog remind
        return
    }
    else if (server.checkServer(receivedMessage)) { // pog server
        return
    }
    else if (rng.checkRng(receivedMessage)) { // pog rng
        return
    }
    else if (she.checkShe(receivedMessage)) { // pog she
        return
    }
    else if (b.checkB(receivedMessage)) { // pog b
        return
    }
    else if (warp.checkWarp(receivedMessage)) { // pog warp
        return
    }
    // else if (dm.checkDm(receivedMessage)) { // pog dm
    //     return
    // }
    // else if (music.checkMusic(receivedMessage)) { // pog music
    //     return
    // }
    
    // Math
    if (add.checkAdd(receivedMessage)) { // pog add
        return
    }
    else if (subtract.checkSubtract(receivedMessage)) { // pog subtract
        return
    }
    else if (multiply.checkMultiply(receivedMessage)) { // pog multiply
        return
    }
    else if (divide.checkDivide(receivedMessage)) { // pog divide
        return
    }
    else if (power.checkPower(receivedMessage)) { // pog power
        return
    }
    else if (root.checkRoot(receivedMessage)) { // pog root
        return
    }

    // let receivedCommand = receivedMessage.toString().split(' ')[0]
    // let command = require(`./commands/${receivedCommand}.js`)
    // if (receivedMessage.toString().toLowerCase() == receivedCommand) {
    //     return command.check
    // }


    // Moderation commands
    if (purge.checkPurge(receivedMessage)) { // pog purge
        return
    }
    
    // If command doesn't exist
    else {
        return null // do nothing lmao
    }
}

// Deleted Message quoting system
client.on('messageDelete', receivedMessage => { // called whenever a message is deleted

    if (receivedMessage.author == client.user) { // Do nothing if itself
        null
    }
    else if (receivedMessage.content.startsWith(':')) { // Do nothing if nqn emote
        null
    }
    else if (receivedMessage.content.includes('@')) { // Do nothing if ping
        null
    }
    else {
        const random = Math.floor(Math.random() * 10) // generate a random number

        if (random == 5) { // if random number (luck) is 5, quote delete message 
            receivedMessage.channel.send(`\'${receivedMessage.content}\' - ${receivedMessage.author.username}`)
        }
        else {
            null
        }
    }
})

// Random 'sus' text selector
function susGen() {
    let susList = ['ඞ', 'ඞු්ි', 'ඩ', 'ඹ', 'ඩිුා', 'ච', 'ඞී', 'ඪ', 'ඖ', 'ණ', 'ඝ', 'ඬ', 'ඣ', 'ය']
    return susList[Math.floor(Math.random() * susList.length)]
}
// Random Paimon reply generator
function emergencyFoodGen() {
    let paimonReplyList = ['*Eat it.* ***Eat it now.***', 'Emergency Food!']
    return paimonReplyList[Math.floor(Math.random() * paimonReplyList.length)]
}
// Random Help reponse
function helpGen() {
    let helpList = ['no :)', 'Unfortunately I am a bot and am unable to help :(', 'pweese UwU', 'Starting help.exe...', 'Sure, what do you need help with?']
    return helpList[Math.floor(Math.random() * helpList.length)]
}
// Random Ehe response
function ehePranked() {
    let eheRNG = Math.floor(Math.random() * 10)
    if (eheRNG == 6) {
        const embed = new MessageEmbed()
        .setTitle('**You\'ve been pranked!**')
        .setThumbnail('https://c.tenor.com/mZxwB9vnUeMAAAAd/hu-tao-pranked.gif')
        .setColor('#FF0000')
        return embed
    }
    else {
        const embed = new MessageEmbed()
        .setTitle('**Ehe te nandayo!**')
        .setThumbnail('https://c.tenor.com/zdVAouVjlBgAAAAC/genshin-impact-eheh-te-nandayo.gif')
        .setColor('#00ADEF')
        return embed
    }
}

process.on('unhandledRejection', (reason, promise) => {
    // literally nothing lmao
})

client.login(config.token)