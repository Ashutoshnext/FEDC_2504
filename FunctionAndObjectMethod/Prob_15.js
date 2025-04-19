let sentenceBuilder = {
    subject: "I",
    verb: "am",
    object: "coding",

    buildSentence: function () {
        return `${this.subject} ${this.verb} ${this.object}`;
    },

    updateProperty: function (property, value) {
        if (this.hasOwnProperty(property)) {
            this[property] = value;
        } else {
            console.log(`Property "${property}" does not exist.`);
        }
    }
};

console.log(sentenceBuilder.buildSentence());
sentenceBuilder.updateProperty("subject", "We");
sentenceBuilder.updateProperty("object", "learning");
console.log(sentenceBuilder.buildSentence());
