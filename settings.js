const settings = {
  packname: 'Knight Bot',
  author: '‎',
  botName: "Knight Bot",
  botOwner: 'Professor', // Your name
  ownerNumber: '919876543210', //Set your number here without + symbol, just add country code & number without any space
  giphyApiKey: 'qnl7ssQChTdPjsKta2Ax2LMaGXz303tq',
  commandMode: "public",
  maxStoreMessages: 20, 
  storeWriteInterval: 10000,
  description: "This is a bot for managing group commands and automating tasks.",
  version: "2.2.2",
  updateZipUrl: "https://github.com/mruniquehacker/Knightbot-MD/archive/refs/heads/main.zip",
  
  // ✅ ADD THESE FOR BUTTON SUPPORT:
  channelLink: "https://whatsapp.com/channel/0029Va90zAnIHphOuO8Msp3A",
  ytch: "Mr Unique Hacker",
  
  // Button-specific configurations
  buttonConfig: {
    maxButtonsPerRow: 3,
    buttonTimeout: 60000, // 1 minute for button responses
    enableInteractiveMenus: true
  },
  
  // Performance optimizations for buttons
  performance: {
    maxMemoryMB: 500, // Increased for button features
    autoRestartOnHighMemory: true,
    gcInterval: 60000 // Garbage collection every 1 minute
  }
};

module.exports = settings;
