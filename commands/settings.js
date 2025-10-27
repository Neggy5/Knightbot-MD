// commands/settings.js
const fs = require('fs');

module.exports = async (sock, chatId, message) => {
    try {
        // Read current mode
        let data;
        try {
            data = JSON.parse(fs.readFileSync('./data/messageCount.json'));
        } catch (error) {
            data = { isPublic: true };
        }

        const currentMode = data.isPublic ? '🌐 Public' : '🔒 Private';
        
        const buttonMessage = {
            text: `⚙️ *Bot Settings Panel* ⚙️\n\n*Current Mode:* ${currentMode}\n*Version:* ${require('../settings').version || '1.0.0'}\n\nUse the buttons below to manage bot settings:`,
            buttons: [
                { buttonId: '.mode public', buttonText: { displayText: '🌐 Public Mode' }, type: 1 },
                { buttonId: '.mode private', buttonText: { displayText: '🔒 Private Mode' }, type: 1 },
                { buttonId: '.autostatus on', buttonText: { displayText: '📊 Auto Status' }, type: 1 }
            ],
            headerType: 1
        };

        await sock.sendMessage(chatId, buttonMessage, { quoted: message });
    } catch (error) {
        console.error('Error in settings command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Failed to load settings.',
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
