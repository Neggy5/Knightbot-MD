// commands/owner.js
const settings = require('../settings');

module.exports = async (sock, chatId, message) => {
    try {
        const buttonMessage = {
            text: `👑 *Bot Owner Information* 👑\n\n*Owner:* Mr Unique Hacker\n*Channel:* ${settings.channelLink || 'https://whatsapp.com/channel/0029Va90zAnIHphOuO8Msp3A'}\n*YouTube:* ${settings.ytch || 'Mr Unique Hacker'}\n\nFor any issues or queries, please contact the owner through the official channel.`,
            buttons: [
                { buttonId: settings.channelLink || 'https://whatsapp.com/channel/0029Va90zAnIHphOuO8Msp3A', buttonText: { displayText: '📢 Join Channel' }, type: 1 },
                { buttonId: '.help', buttonText: { displayText: '📚 Commands' }, type: 1 },
                { buttonId: '.settings', buttonText: { displayText: '⚙️ Settings' }, type: 1 }
            ],
            headerType: 1
        };

        await sock.sendMessage(chatId, buttonMessage, { quoted: message });
    } catch (error) {
        console.error('Error in owner command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Failed to load owner information.',
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363161513685998@newsletter',
                    newsletterName: 'KnightBot MD',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });
    }
};
