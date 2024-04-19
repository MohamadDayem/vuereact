class MyString {
  constructor(str = '') {
      this.str = str;
  }

  slice(indexStart = 0, indexEnd = this.str.length) {
      const negativeIndex = index => index >= 0 ? index : this.str.length + index;
      
      let newStr = '';
      indexEnd = negativeIndex(indexEnd);
      for (let i = negativeIndex(indexStart); i < indexEnd; i++) {
          newStr += this.str[i];
      }
      return newStr;
  }

  splice(index, num, ...obj) {
    let newTab = [];

    for (let i = 0; i < index; i++) {
      newTab.push(this.tab[i]);
    }

    if (obj !== undefined) {
      newTab.push(...obj);
    }

    let newIndex = num !== 0 ? index + num : index;

    for (let i = newIndex; i < this.tab.length; i++) {
      newTab.push(this.tab[i]);
    }

    return newTab;
  }

  startsWith(str, position = 0) {
    if (this.str.length - position < str.length)
      return false;
    for (let i = 0; i < str.length; i++) {
      if (this.str[i + position] !== str[i])
        return false;
    }
    return true;
  }
  
  endsWith(str, position = this.str.length) {
    if (position - str.length < 0)
      return false;
    for (let i = 0; i < str.length; i++) {
      if (this.str[position - str.length + i] !== str[i])
        return false;
    }
    return true;
  }

  includes(substring, position = 0) {
    if (position < 0) {
      position = Math.max(this.str.length + position, 0);
    }
    return this.str.indexOf(substring, position) !== -1;
  }

  includes(str, position = 0) {
    for(let i = position; i < this.str.length; i++) {
      let count = 0;
      while(this.str[i + count] === str[count])
        count += 1;
      if (count === str.length)
        return true;
    }
    return false;
  }

  trimStart() {
    let i = 0;
    while (i < this.str.length && this.str[i] === ' ')
      i = i + 1;
    let str = '';
    while (i < this.str.length)
      str += this.str[i++];
    return str;
  }

  trimEnd() {
    let i = this.str.length - 1;
    while (i >= 0 && this.str[i] === ' ')
      i--;
    let str = '';
    for (let j = 0; j <= i; j++)
      str += this.str[j];
    return str;
  }

  trim() {
    return this.trimStart().trimEnd();
  }   

  subString(start, end = null) {
    if (
      start === end ||
      end === null ||
      start < 0 ||
      end < 0||
      isNaN(start) ||
      isNaN(end) 
    )
      return "";

    if (end < start) {
      let swap = start;
      start = end;
      end = swap;
    }

    let str = "";
    for (let i = start; i < this.str.length && i < end; i++) {
      str += this.str[i];
    }
    return str;
  }

}





//const myStr = new MyString('Hello World');
//console.log(myStr.includes('Hello')); 
//console.log(myStr.includes('World')); 
//console.log(myStr.includes('lo')); 
//console.log(myStr.includes('lo', 3)); 
//console.log(myStr.includes('Goodbye')); //

