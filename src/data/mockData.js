export const generateMockData = () => {
  return {
    translations: [
      { languagePair: "English-Spanish", count: Math.floor(Math.random() * 50) },
      { languagePair: "French-German", count: Math.floor(Math.random() * 50) },
      { languagePair: "Spanish-Portuguese", count: Math.floor(Math.random() * 50) },
    ],
    usage: {
      daily: [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)],
      weekly: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
      averageTime: Math.floor(Math.random() * 30),
    },
    translationsType: {
      voiceToText: Math.floor(Math.random() * 50),
      textToText: Math.floor(Math.random() * 50),
    },
  };
};
