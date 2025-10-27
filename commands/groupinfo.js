// commands/groupinfo.js
module.exports = async (sock, chatId, message) => {
    try {
        const buttonMessage = {
            text: `👥 *Group Information* 👥\n\nGet detailed information about this group. Use the buttons below to access group management tools:`,
            buttons: [
                { buttonId: '.staff', buttonText: { displayText: '👑 Admins' }, type: 1 },
                { buttonId: '.resetlink', buttonText: { displayText: '🔄 Reset Link' }, type: 1 },
                { buttonId: '.tagall', buttonText: { displayText: '📢 Tag All' }, type: 1 }
            ],
            headerType: 1
        };

        await sock.sendMessage(chatId, buttonMessage, { quoted: message });
    } catch (error) {
        console.error('Error in groupinfo command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Failed to load group information.',
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
