
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
}
  

  const myString = new MyString("Hello, world!");
  
  console.log(myString.endsWith("world!")); 
  console.log(myString.endsWith("world")); 
  console.log(myString.endsWith("world!", 13))