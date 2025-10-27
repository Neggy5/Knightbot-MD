module.exports = async (sock, chatId, message) => {
    try {
        const buttonMessage = {
            text: `🎮 *Fun & Games* 🎮\n\nChoose a fun command to play with!`,
            buttons: [
                { buttonId: '.meme', buttonText: { displayText: '😂 Meme' }, type: 1 },
                { buttonId: '.joke', buttonText: { displayText: '😄 Joke' }, type: 1 },
                { buttonId: '.quote', buttonText: { displayText: '💭 Quote' }, type: 1 },
                { buttonId: '.fact', buttonText: { displayText: '📚 Fact' }, type: 1 },
                { buttonId: '.ttt', buttonText: { displayText: '⭕ TicTacToe' }, type: 1 },
                { buttonId: '.hangman', buttonText: { displayText: '🎯 Hangman' }, type: 1 }
            ],
            headerType: 1
        };

        await sock.sendMessage(chatId, buttonMessage, { quoted: message });
    } catch (error) {
        console.error('Error in fun command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to load fun menu.' }, { quoted: message });
    }
};
