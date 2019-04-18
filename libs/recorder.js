const I = actor();

module.exports = {

    start() {
       I.startRecording();
       I.say('>>>> starting to record session');
    },

    say(message) {
        I.say('>>>> I say out loud: '+message);
    },

    stop() {
       I.stopRecording();
       I.say('>>>> done recording session');
    }

}
