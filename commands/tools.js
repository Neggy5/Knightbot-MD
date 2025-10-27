module.exports = async (sock, chatId, message) => {
    try {
        const buttonMessage = {
            text: `🔧 *Utility Tools* 🔧\n\nVarious useful tools and utilities.`,
            buttons: [
                { buttonId: '.sticker', buttonText: { displayText: '🖼️ Sticker' }, type: 1 },
                { buttonId: '.weather', buttonText: { displayText: '🌤️ Weather' }, type: 1 },
                { buttonId: '.translate', buttonText: { displayText: '🌐 Translate' }, type: 1 },
                { buttonId: '.lyrics', buttonText: { displayText: '🎶 Lyrics' }, type: 1 },
                { buttonId: '.ai', buttonText: { displayText: '🤖 AI Chat' }, type: 1 },
                { buttonId: '.removebg', buttonText: { displayText: '🖼️ Remove BG' }, type: 1 }
            ],
            headerType: 1
        };

        await sock.sendMessage(chatId, buttonMessage, { quoted: message });
    } catch (error) {
        console.error('Error in tools command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to load tools menu.' }, { quoted: message });
    }
};
