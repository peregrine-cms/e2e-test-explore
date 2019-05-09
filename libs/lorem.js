
const { LoremIpsum } = require('lorem-ipsum');

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

module.exports = {

    generateWords(numWords) {
        return lorem.generateWords(numWords);
    },

    generateSentences(numSentences) {
        return lorem.generateSentences(numSentences);
    },

    generateParagraphs(numParagraphs) {
        return lorem.generateParagraphs(numParagraphs);
    }
}
