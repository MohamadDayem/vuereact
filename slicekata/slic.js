class MyString {
    constructor(str = '') {
        this.str = str
    }

    slice(indexStart = 0, indexEnd = this.str.length)
    {
        const negativeIndex = index => index >= 0 ? index : this.str.length + index;
        
        let newStr = '';
        indexEnd = negativeIndex(indexEnd);
        for (let i = negativeIndex(indexStart); i < indexEnd; i++) {
            newStr += this.str[i]
        }
        return newStr;
    }

}