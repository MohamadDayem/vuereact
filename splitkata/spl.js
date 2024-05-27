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

  concat(...strings) {
    let newStr = this.str;
    for (let i = 0; i < strings.length; i++) {
      newStr += strings[i];
    }
    return newStr;
  }

  flatMap(callback) {
    const flattened = [];
    for (let values of this.tab) {
      const result = callback(values);
      if (Array.isArray(result)) {
        for (let items of result) {
          flattened[flattened.length] = items;
        }
      } else {
        flattened[flattened.length] = result;
      }
    }
    return flattened;
  }


  reduceRight(callback, initValue) {
    let acc = initValue
    let initIndex = this.tab.length - 1
    if (initValue === undefined) {
        acc = this.tab[this.tab.length - 1]
        initIndex = this.tab.length - 2
    }
    for (let i = initIndex; i >= 0; i--) {
        acc = callback(acc, this.tab[i], i, this.tab)
    }
    return acc
}
}

//e 
//KATA :  Écrire une function qui renvoie true si une chaîne de caractères est un anagramme d'une autre chaîne de caractères, false sinon.


function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase
  str1 = str1.replace(/\s+/g, '').toLowerCase();
  str2 = str2.replace(/\s+/g, '').toLowerCase();
  
  // Sort the characters of both strings and compare
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Examples
console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("triangle", "integral"));  // true
console.log(isAnagram("apple", "pale"));  // false


//KATA :  Écrire une function qui renvoie true si une chaîne de caractères est un palindrome'une autre chaîne de caractères, false sinon.

function estPalindrome(chaine) {
  // Convertir la chaîne en minuscules pour éviter les problèmes de casse
  chaine = chaine.toLowerCase();
  // Comparer la chaîne originale avec sa version inversée
  return chaine === chaine.split('').reverse().join('');
}

// Exemple d'utilisation
let chaineTest = "radar";
let resultat = estPalindrome(chaineTest);
console.log(resultat); 

// **KATA :** Écrire une fonction qui renvoie **true** si un nombre est premier, **false** sinon.






//KATA : Écrire une fonction qui renvoie true si une chaîne de caractères est un pangramme, false sinon.


//let myString = new MyString("Hello, ");
//console.log(myString.concat("world!", " Have a nice day!"));



//const myStr = new MyString('Hello World');
//console.log(myStr.includes('Hello')); 
//console.log(myStr.includes('World')); 
//console.log(myStr.includes('lo')); 
//console.log(myStr.includes('lo', 3)); 
//console.log(myStr.includes('Goodbye')); //

