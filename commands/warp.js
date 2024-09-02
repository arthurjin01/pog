var star5pity = 0
var star4pity = 0

module.exports = {
    checkWarp: function(receivedMessage) {
    const {MessageEmbed} = require('discord.js')

        const wikia = 'https://static.wikia.nocookie.net/houkai-star-rail/images/'
        // The spelling error of 'Honkai' in the URL bothers me

        const stellarjade = wikia + 'd/d9/Item_Stellar_Jade.png'

        const himekosplash = wikia + '8/8e/Character_Himeko_Splash_Art.png'
        const gepardsplash = wikia + '9/96/Character_Gepard_Splash_Art.png'
        const yanqingsplash = wikia + '6/6d/Character_Yanqing_Splash_Art.png'
        const weltsplash = wikia + '1/11/Character_Welt_Splash_Art.png'
        const qiqisplash = wikia + 'e/e9/Character_Bailu_Splash_Art.png'
        const svarogsplash = wikia + 'c/c2/Character_Clara_Splash_Art.png'
        const bronyasplash = wikia + '7/7c/Character_Bronya_Splash_Art.png'
        const cyyusplash = wikia + '4/48/Character_Jing_Yuan_Splash_Art.png'
        const seelesplash = wikia + '5/58/Character_Seele_Splash_Art.png'
        const luochasplash = wikia + 'a/a5/Character_Luocha_Splash_Art.png'
        const silverwolfsplash = wikia + '6/60/Character_Silver_Wolf_Splash_Art.png'
        const bladesplash = wikia + '1/16/Character_Blade_Splash_Art.png'
        const kafkasplash = wikia + '9/95/Character_Kafka_Splash_Art.png'
        const danhengsplash = wikia + '2/2c/Character_Dan_Heng_•_Imbibitor_Lunae_Splash_Art.png' // URL doesn't work in embed
        const fuxuansplash = wikia + '3/3e/Character_Fu_Xuan_Splash_Art.png'
        const scuffsplash = wikia + '9/97/Character_Jingliu_Splash_Art.png'
        const topazsplash = wikia + '9/9d/Character_Topaz_and_Numby_Splash_Art.png'
        const argentisplash = wikia + '9/90/Character_Argenti_Splash_Art.png'
        const huohuosplash = wikia + '8/82/Character_Huohuo_Splash_Art.png'
        const ratiosplash = wikia + '5/56/Character_Dr._Ratio_Splash_Art.png'
        const ruanmeisplash = wikia + 'd/d5/Character_Ruan_Mei_Splash_Art.png'
        const blackswansplash = wikia + 'f/fd/Character_Black_Swan_Splash_Art.png'
        const hutaosplash = wikia + '9/99/Character_Sparkle_Splash_Art.png'


        var color = '#191a36'
        const anemo = '#4cc285'
        const geo = '#ecc60d'
        const pyro = '#da3131'
        const quantum = '#4f48bc'
        const cryo = '#44a9ff'
        const electro = '#c154e7'
        const physical = '#9a9a9a'
        // Ignore the colour names
        // I said ignore it
        // Why are you still looking at it

        var path = null
        const erudition = wikia + '5/53/Path_Erudition.png'
        const preservation = wikia + '3/37/Path_Preservation.png'
        const thehunt = wikia + '1/1c/Path_The_Hunt.png'
        const nihility = wikia + '4/45/Path_Nihility.png'
        const abundance = wikia + '9/94/Path_Abundance.png'
        const destruction = wikia + 'd/df/Path_Destruction.png'
        const harmony = wikia + '7/7e/Path_Harmony.png'


        const himeko = ['Himeko', himekosplash, pyro, erudition]
        const gepard = ['Gepard', gepardsplash, cryo, preservation]
        const yanqing = ['Yanqing', yanqingsplash, cryo, thehunt]
        const welt = ['Welt', weltsplash, geo, nihility]
        const qiqi = ['Bailu', qiqisplash, electro, abundance]
        const svarog = ['Clara', svarogsplash, physical, destruction]
        const bronya = ['Bronya', bronyasplash, anemo, harmony]
        const cyyu = ['Jing Yuan', cyyusplash, electro, erudition]
        const seele = ['Seele', seelesplash, quantum, thehunt]
        const luocha = ['Luocha', luochasplash, geo, abundance]
        const silverwolf = ['Silver Wolf', silverwolfsplash, quantum, nihility]
        const blade = ['Blade', bladesplash, anemo, destruction]
        const kafka = ['Kafka', kafkasplash, electro, nihility]
        const danheng = ['Dan Heng • Imbibitor Lunae', 'https://media1.tenor.com/m/3vaDoMA7LSQAAAAd/dan-heng-il-imbibitor-lunae-ultimate-ult-burst-dhil.gif', geo, destruction]
        const fuxuan = ['Fu Xuan', fuxuansplash, quantum, preservation]
        const scuff = ['Jingliu', scuffsplash, cryo, destruction]
        const topaz = ['Topaz and Numby', topazsplash, pyro, thehunt]
        const argenti = ['Argenti', argentisplash, physical, erudition]
        const huohuo = ['Huohuo', huohuosplash, anemo, abundance]
        const L = ['Dr. Ratio', ratiosplash, geo, thehunt]
        const ruanmei = ['Ruan Mei', ruanmeisplash, cryo, harmony]
        const blackswan = ['Black Swan', blackswansplash, anemo, nihility]
        const hutao = ['Sparkle', hutaosplash, quantum, harmony]


        const star5 = [himeko, gepard, yanqing, welt, qiqi, svarog, bronya, cyyu,
            seele, luocha, silverwolf, blade, kafka, danheng, qiqi, fuxuan, scuff,
            topaz, argenti, huohuo, L, ruanmei, blackswan, hutao, // 5-star characters
            'Before Dawn', 'But the Battle Isn\'t Over', 'Cruising in the Stellar Sea', 
            'In the Name of the World', 'In the Night', 'Moment of Victory', 'Night on the Milky Way', 
            'On the Fall of an Aeon', 'Sleep Like the Dead', 'Something Irreplaceable',
            'Texture of Memories', 'Time Waits for No One', 'Incessant Rain', 'Echoes of the Coffin',
            'The Unreachable Side', 'Patience Is All You Need', 'Brighter Than the Sun',
            'She Already Shut Her Eyes', 'Solitary Healing', 'I Shall Be My Own Sword',
            'Worrisome, Blissful', 'Night of Fright', 'An Instant Before A Gaze',
            'Past Self in Mirror', 'Baptism of Pure Thought', 'Reforged Remembrance',
            'Earthly Escapade' // 5-star weapons
        ] 

        const star4 = ['Arlan', 'Asta', 'Dan Heng', 'Herta', 'Hook', 'March 7th', 'Natasha', 
            'Pela', 'Qingque', 'Sampo', 'Serval', 'Sushang', 'Tingyun', 'Yukong', 'Luka', 'Lynx',
            'Guinaifen', 'Hanya', 'Xueyi', 'Mischa', // 4-star characters
            'A Secret Vow', 'Carve the Moon, Weave the Clouds', 
            'Dance! Dance! Dance!', 'Day One of My New Life', 'Eyes of the Prey', 'Fermata', 
            'Geniuses\' Repose', 'Good Night and Sleep Well', 'Landu\'s Choice', 'Make the World Clamor',
            'Memories of the Past', 'Nowhere to Run', 'Only Silence Remains', 'Past and Future',
            'Perfect Timing', 'Planetary Rendezvous', 'Post-Op Conversation', 'Quid Pro Quo',
            'Resolution Shines As Pearls of Sweat', 'Return to Darkness', 'River Flows in Spring',
            'The Birth of the Self', 'The Seriousness of Breakfast', 'Shared Feeling', 'Subscribe for More!',
            'Swordplay', 'This Is Me!', 'Today Is Another Peaceful Day', 'Trend of the Universal Market',
            'Under the Blue Sky', 'Warmth Shortens Cold Nights', 'We are Wildfire', 'We Will Meet Again',
            'Woof! Walk Time!', 'Before the Tutorial Mission Starts', 'Hey, Over Here', 'Indelible Promise',
            'What Is Real?', 'Dreamville Adventure', 'Final Victor', 'Flames Afar', 'Destiny\'s Threads Forewoven',
            'The Day The Cosmos Fell', 'It\'s Showtime'
        ] // 4-star weapons

        const star3 = ['Adversarial', 'Amber', 'Arrows', 'Chorus', 'Collapsing Sky', 'Cornucopia', 
            'Darting Arrow', 'Data Bank', 'Defense', 'Fine Fruit', 'Hidden Shadow', 'Loop', 
            'Meditation', 'Meshing Cogs', 'Multiplication', 'Mutual Demise','Passkey', 'Pioneering', 
            'Sagacity', 'Shattered Home', 'Void'] // List of 3-star weapons

        const footer = 'Official art from Honkai: Star Rail Fandom Wiki'

        function random3star(star3) {
            return star3[Math.floor(Math.random() * star3.length)]
        }
        function random4star(star4) {
            return star4[Math.floor(Math.random() * star4.length)]
        }
        function random5star(star5) {
            return star5[Math.floor(Math.random() * star5.length)]
        }

        function single5starinfo(char) {
            if(typeof(char) == 'string') {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(random5star(star5))
                .setImage('https://media1.tenor.com/m/Oe4Et-Pi6SAAAAAC/dr-ratio-honkai-star-rail.gif')
                .setColor(color)
                .setThumbnail(stellarjade)
                .setTimestamp()
                .setFooter({ text: footer})
                receivedMessage.reply({ embeds: [embed]})
            }
            else {
                const embed = new MessageEmbed()
                .setTitle(goldstar)
                .setDescription(char[0])
                .setImage(char[1])
                .setColor(char[2])
                .setThumbnail(char[3])
                .setTimestamp()
                .setFooter({ text: footer})
                receivedMessage.reply({ embeds: [embed]})
            }
        }
        function single5star() {
            single5starinfo(random5star(star5))

            star5pity = 0
            star4pity += 1
        }

        function single4star() {
            const embed = new MessageEmbed()
            .setTitle(purplestar)
            .setDescription(random4star(star4))
            .setColor('#800080')
            .setThumbnail(stellarjade)
            .setTimestamp()
            receivedMessage.reply({ embeds: [embed]})
            star4pity = 0
            star5pity += 1
        }
        function ten5star() {
            char = random5star(star5)
            charimage = 'https://media1.tenor.com/m/Oe4Et-Pi6SAAAAAC/dr-ratio-honkai-star-rail.gif'
            if (typeof(char) == 'string') {
                item = goldstar + char
            }
            else {
                item = `${goldstar} ${char[0]}`
                charimage = char[1]
                color = char[2]
                path = char[3]
            }
            star5pity = 0
        }

        function ten4star() {                   
            item = purplestar + random4star(star4)
        }

        function ten3star() {
            item = normiestar + random3star(star3)
        }

        const star = '<:star:858047215952068628>'
        const star2 = '<:star2:861084656060334100>'
        const goldstar = star2 + star2 + star2 + star2 + star2
        const purplestar = star + star + star + star
        const normiestar = star + star + star

        var items = [] // Init

        var charimage = 'https://media1.tenor.com/m/8168qOP6ljcAAAAC/dr-ratio-skill-issue.gif'

    let fullCommand = receivedMessage.content.substr(4) // Remove the leading pog
    let splitCommand = fullCommand.split(' ') // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after 'pog' is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
    found = false

    
        switch(primaryCommand) { // called when messages says 'pog warp'
            case 'warp' :
                if (arguments == '10') {
                    wishCount = 0
                    for (randomCount = 0; randomCount < 10; randomCount++) {
                        const random = Math.floor(Math.random() * 90)
                        if (random < 3) { // if random number < 3
                            if (star5pity > 75) {
                                if (random < 25) {
                                    ten5star()
                                    items[wishCount] = item
                                    // tenWishHistory(randompull)
                                    star5pity = 0
                                    star4pity++
                                    wishCount++
                                }
                                else {
                                    ten5star()
                                    items[wishCount] = item
                                    // tenWishHistory(randompull)
                                    star5pity = 0
                                    star4pity++
                                    wishCount++
                                }
                            }
                            else {
                                ten5star()
                                items[wishCount] = item
                                // tenWishHistory(randompull)
                                star5pity = 0
                                star4pity++
                                wishCount++
                            }
                        }
                        else if (star5pity > 88) {
                            ten5star()
                            items[wishCount] = item
                            // tenWishHistory(randompull)
                            star5pity = 0
                            star4pity++
                            wishCount++
                        }
                        else if (random > 75) {
                            ten4star()
                            items[wishCount] = item
                            star5pity++
                            star4pity = 0
                            wishCount++
                        }
                        else if (star4pity > 8) {
                            ten4star()
                            items[wishCount] = item
                            star5pity++
                            star4pity = 0
                            wishCount++
                        }
                        else {
                            ten3star()
                            items[wishCount] = item
                            star5pity++
                            star4pity++
                            wishCount++
                        }
                    }

                    const embed = new MessageEmbed()
                    .setTitle(`10-pull:`)
                    .setDescription(`<@!${receivedMessage.author.id}> got:
${items[0]}
${items[1]}
${items[2]}
${items[3]}
${items[4]}
${items[5]}
${items[6]}
${items[7]}
${items[8]}
${items[9]}`)
                    .setImage(charimage)
                    .setThumbnail(path)
                    .setColor(color)
                    .setTimestamp()
                    .setFooter({ text: footer})
                    receivedMessage.reply({ embeds: [embed]})
                }
                
                else {
                    const random = Math.floor(Math.random() * 90) // generates a random number between 1-90
                    if (random < 2) { // if random number < 6, random 5-star
                        single5star()
                    }
                    else if (star5pity > 79) { // 5-star pity hits, automatic 5-star
                        single5star()
                    }
                    else if (random > 78) { // if random number > 78, random 4-star
                        single4star()
                    }
                    else if (star4pity > 8) { // if 4-star pity hits, automatic 4-star
                        single4star()
                    }
                    else { // 3-star items
                        const embed = new MessageEmbed()
                        .setTitle(star + star + star)
                        .setDescription(random3star(star3))
                        .setColor(color)
                        .setTimestamp()
                        receivedMessage.reply({ embeds: [embed]})
                        star4pity += 1
                        star5pity += 1
                    }
                }
        }
        // value of 'found' will be returned in bot.js
        return found
    }
}