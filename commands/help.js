// commands/help.js
const fs = require('fs');

module.exports = async (sock, chatId, message, channelLink) => {
    try {
        const buttonMessage = {
            text: `🤖 *KnightBot MD Menu* 🤖\n\n📚 *Available Commands:*\n• .help - Show this menu\n• .owner - Bot owner info\n• .settings - Bot settings\n• .groupinfo - Group information\n• .ping - Check bot speed\n• .alive - Check if bot is running\n\n🎮 *Fun Commands:*\n• .meme - Random memes\n• .joke - Funny jokes\n• .quote - Inspirational quotes\n• .fact - Interesting facts\n• .tts - Text to speech\n\n⚙️ *Utility Commands:*\n• .sticker - Create stickers\n• .weather - Weather info\n• .translate - Language translation\n• .lyrics - Song lyrics\n• .ai - AI chat\n\n📥 *Download Commands:*\n• .play - Download audio\n• .video - Download video\n• .instagram - IG download\n• .tiktok - TikTok download\n\n👥 *Group Commands:*\n• .tagall - Mention all members\n• .promote - Promote users\n• .demote - Demote users\n• .kick - Remove users\n• .mute - Mute group\n\n🔧 *Admin Only:*\n• .ban - Ban users\n• .unban - Unban users\n• .antilink - Link protection\n• .antibadword - Filter bad words`,
            buttons: [
                { buttonId: '.owner', buttonText: { displayText: '👑 Owner' }, type: 1 },
                { buttonId: '.settings', buttonText: { displayText: '⚙️ Settings' }, type: 1 },
                { buttonId: '.groupinfo', buttonText: { displayText: '👥 Group Info' }, type: 1 }
            ],
            headerType: 1
        };

        await sock.sendMessage(chatId, buttonMessage, { quoted: message });
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Failed to load help menu. Please try again.',
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
