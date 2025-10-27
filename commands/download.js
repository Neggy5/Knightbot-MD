module.exports = async (sock, chatId, message) => {
    try {
        const buttonMessage = {
            text: `📥 *Download Commands* 📥\n\nDownload media from various platforms.`,
            buttons: [
                { buttonId: '.play', buttonText: { displayText: '🎵 Audio' }, type: 1 },
                { buttonId: '.video', buttonText: { displayText: '🎬 Video' }, type: 1 },
                { buttonId: '.instagram', buttonText: { displayText: '📷 Instagram' }, type: 1 },
                { buttonId: '.tiktok', buttonText: { displayText: '🎵 TikTok' }, type: 1 },
                { buttonId: '.facebook', buttonText: { displayText: '📘 Facebook' }, type: 1 },
                { buttonId: '.spotify', buttonText: { displayText: '🎧 Spotify' }, type: 1 }
            ],
            headerType: 1
        };

        await sock.sendMessage(chatId, buttonMessage, { quoted: message });
    } catch (error) {
        console.error('Error in download command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to load download menu.' }, { quoted: message });
    }
};
