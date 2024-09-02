module.exports = {
    checkHelp: function(receivedMessage) {
    const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')
    const color = '#00ff00'
    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

        switch(primaryCommand.toLowerCase()) { // called when messages says 'pog help'
            case 'help' : 
                if (arguments.includes('exe')) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog exe\``)
                    .setDescription(`Takes any text input after \`pog exe\` and returns the text with \`.exe\` at the end of it.

Usage: \`pog exe [any text]\`
ex. \`pog exe virus\` → returns \`virus.exe\` in an embedded message.`)
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (arguments.includes('count')) {
                    const embed = new MessageEmbed()
                    .setTitle('Counters')
                    .setDescription(`Returns a counter value, depending on which counter is specified. Mention a user at the end of the command to see the counter for them.
Counters: \`pog count\` (counts pog), \`pog ecount\` (counts e), \`pog suscount\` (counts sus);

There are currently 3 counters in the bot, which count how many times you say each of these things.
The \`pog\` count is triggered whenever you say \`pog\` on its own.
The \`e\` count is triggered whenever you say \`e\` on its own.
The \`sus\` count is triggered whenever you say \`amogus\`, \`imposter\` or \`sus\` anywhere within a message.

Notice: If you mention another user that has no nickname, these commands might not work. 
Notice: Using \`pog suscount\` adds 1 more sus to the counter because using the command is sus.

Usage: \`pog count\` (to check your \`pog\` count); \`pog count [@user]\` (mention the user you want to check the \`pog\` count for)
\`pog ecount\` (to check your \`e\` count); \`pog ecount [@user]\` (mention the user you want to check the \`e\` count for)
\`pog suscount\` (to check your \`sus\` count); \`pog suscount [@user]\` (mention the user you want to check the \`sus\` count for)`)
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (arguments.includes('wish')) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog wish\``)
                    .setDescription(`A Genshin Impact wish simulation command.

Notice: The command only accepts single wishes or 10-wishes, as per the actual game. The pity system for 10-pulls also doesn't work (it works for singles but is a separate system).

Usage: \`pog wish\` (to do one wish); \`pog wish 10\` (to do a 10-pull wish)
Note: The Pity system is shared, so other users running the command at the same time can "steal your pity".`)
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (arguments.includes('ship')) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog ship\``)
                    .setDescription(`A "Love Calculator" lmao

Notice: This command is PURE RNG, DO NOT TAKE RESULTS SERIOUSLY. 

Usage: 
\`pog ship\` (to calculate your compatibility percentage with 'someone'); 
\`pog ship [person]\` (to calculate your compatibility percentage with the specified person); 
\`pog ship [person1] [person2]\` (to calculate the compatibility between two specified people)`)
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (arguments.includes('profile')) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog profile\``)
                    .setDescription(`Returns your Discord User Information

This command returns your Username, Discord Tag, Discord ID, and your IP address (fake lol)
If you mention someone after typing \`pog profile\`, then the bot will return the mentioned user's Discord User Information

Usage: \`pog profile\` (to check your own profile); \`pog profile [@user]\` (to check someone else's profile)`)
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (arguments.includes('math')) {
                    const embed = new MessageEmbed()
                    .setTitle('Math Commands')
                    .setDescription(`A collection of commands that do basic math.

Available Commands: \`add\`, \`subtract\`, \`multiply\`, \`divide\`, \`power\`, \`root\`

Usage:
\`pog add\` takes 2 arguments: a number, and another number that is added to it. It returns a sum.
ex. \`pog add 6 9\` → returns \`15\`

\`pog subtract\` takes 2 arguments: a number, and another number that will be subtracted from the first number. It returns a difference.
ex. \`pog subtract 9 6\` → returns \`3\`

\`pog multiply\` takes 2 arguments: a number, and another number that it is multiplied by. It returns a product.
ex. \`pog multiply 4 20\` → returns \`80\`

\`pog divide\` takes 2 arguments: a number, and another number that the first number will be divided by. It returns a quotient.
ex. \`pog divide 20 4\` → returns \`5\`

\`pog power\` takes 2 arguments: a base, and an exponent. The base is multiplied by itself the number of times specified by the exponent. 
ex. \`pog power 2 3\` → \`2³ = 2×2×2\` → returns \`8\`

\`pog root\` takes 2 arguments: a radicand, and an index. The function takes the radicand and returns it's root, depending on the index.
ex. \`pog root 8 3\` → \`³√8\` → returns \`2\`

Note: The \`power\` and \`root\` commands are a little buggy sometimes and can return a number with a lot of decimals when it isn't supposed to (ex. ³√125 returns 4.999... instead of 5)
Note: Superscripts are not enabled, therefore for powers, the exponent is denoted with a \`^\` (ex. \`2^3\` = \`2³\`)and the index of a root function is simply placed 1 space behind the root symbol (ex. \`3 √8\` = \`³√8\`)`)
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (arguments.includes('purge')) {
                    const embed = new MessageEmbed()
                    .setTitle('\`pog purge\`')
                    .setDescription(`This command mass-deletes the specified number of messages.

Usage: \`pog purge [number reason]\`
-> where \`number\` is the number of messages to purge, and \`reason\` is the reason for the purge

Note: This is a moderation command that can only be used by people with the Administrator permission.
Note: It is recommended that you purge less messages at a time and run the command multiple times so you won't accidentally purge too much.`)
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (arguments.includes('remind')) {
                    const embed = new MessageEmbed()
                    .setTitle('\`pog remind\`')
                    .setDescription(`This command is used to set a reminder for yourself in the channel. When the set timer ends, you get pinged in the channel where the command is run.

Usage: 
\`pog remind [hours minutes task]\` 
-> ex. \`pog remind 1 30 your task\` will remind you to do 'your task' with a ping in 1 hour 30 mins.
\`pog remind [minutes task]\` 
-> ex. \`pog remind 10 your task\` will remind you to do 'your task' with a ping in 10 mins.

Note: It is not recommended to purely rely on this reminder system because active reminders are cleared when the bot is rebooted for updates.`)
                    .setColor(color)
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (arguments.includes('rng')) {
                    const embed = new MessageEmbed()
                    .setTitle('\`pog rng\`')
                    .setDescription(`This command randomly generates a number between two specified values.

Usage:
\`pog rng [number] [number]\` where the first number is the minimum, and the second number is the maximum.
ex. \`pog rng 69 420\` will generate a random number between 69 and 420.`)
                }
                else if (arguments.includes('she')) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog she\``)
                    .setDescription(`This command takes 3 words for input and returns a sentence:
"She [first word] on my [second word] till I [third word]"

Usage:
\`pog she [first] [second] [third]\` where first, second, and third are the 3 words added to the sentence.
ex. \`pog she played phone AAA\` will return: \`She played on my phone until I AAA\``)
                    .setColor('#01796f')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else if (arguments.includes('b')) {
                    const embed = new MessageEmbed()
                    .setTitle(`\`pog b\``)
                    .setDescription(`This command takes every word in the rest of your message and replaces the first letter with 🅱️:
"🅱️yka 🅱️lyat"

Usage:
\`pog b [message]\` where messsage gets the first letter of every word replaced with 🅱️.
ex. \`pog b rin pen rose\` will return: \`"🅱️in 🅱️en 🅱️ose"\``)
                    .setColor('#01796f')
                    .setTimestamp()
                    receivedMessage.reply({ embeds: [embed]})
                }
                else {
                    const embed = new MessageEmbed()
                    .setTitle(`Prefix\: \`pog\``) 
                    .setDescription(`Command list\: \nUtility Commands: \`help\`, \`test\`, \`code\`, \`ping\`, \`version\`, \`readme\`, \`invite\`, \`server\`;
Troll Commands: \`start\`, \`butter\`, \`horny\`, \`isearthround\`, \`die\`;
Bigger Commands\: \`exe [insert text here]\`, \`wish [10]\`, \`ship [person1] [person2]\`, \`profile [@user]\`, \`remind [hours minutes]\`, \`rng [min max]\`, \`she [first] [second] [third]\`, \`b [message]\`;

Count Commands: \`count [@user]\`, \`ecount [@user]\`, \`suscount [@user]\`;
Type \`pog help count\` for a more in-depth overview of the different counters and how to access the data.

Math commands: \`add [number number]\`, \`subtract [number number]\`, \`multiply [number number]\`, \`divide [number number]\`, \`power [base exponent]\`, \`root [base radicand]\`;
Type \`pog help math\` for a more in-depth overview of Math commands

Moderation commands: \`purge [# of messages]\`

Please note that the bot will collect and store Discord User IDs when the user sends their first \`pog\`, \`sus\` or \`e\`. 
The most up-to-date pog logs are preserved on the Server, while backups are kept on GitHub (updated every hour)
This allows the bot to record a user's \`pog\` count, \`e\` count, and *sus* count (a core function).
No other identifiable data is stored on the server PC or GitHub.

More commands will be available over time.

Permission requirements:
- View Channels
- Send Messages
- Send Messages in Threads (optional)
- Read Message History
- Embed Links
- Use External Emoji
- Administrator (for purge command; optional)`) // lists commands and notices
                    .setColor('#00ADEF')
                    .setTimestamp()

                    const lmfao = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setURL('https://bit.ly/3h872Sg')
                        .setLabel('Need more clarification?')
                        .setStyle('LINK')
                    )

                    receivedMessage.reply({ embeds: [embed], components: [lmfao]})
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
} 