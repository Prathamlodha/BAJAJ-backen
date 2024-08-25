class DataModel {
    constructor(data) {
      this.numbers = [];
      this.alphabets = [];
      this.highestLowercaseAlphabet = '';
      this.isSuccess = true;
  
      // Processing the data
      data.forEach(item => {
        if (!isNaN(item)) {
          this.numbers.push(item);
        } else if (typeof item === 'string' && item.length === 1) {
          this.alphabets.push(item);
          if (item === item.toLowerCase()) {
            if (this.highestLowercaseAlphabet < item) {
              this.highestLowercaseAlphabet = item;
            }
          }
        } else {
          this.isSuccess = false;
        }
      });
  
      this.highestLowercaseAlphabet = this.highestLowercaseAlphabet ? [this.highestLowercaseAlphabet] : [];
    }
  }
  
  module.exports = DataModel;
  