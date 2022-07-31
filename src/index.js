const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    'space':  ' ',
};

const MORSE_BINAR = {
    '10': '.',
    '11': '-',
    '*': 'space',
} ;

function decode(expr) {
   let result = [];
   let morse;
   let local = '';
   for(let i = 0; i < expr.length; i+= 10){
    let acc = expr.substr(i,10);
    acc = [acc.slice(acc.indexOf('1'))];
    result.push(acc);
    

   }
  morse = result.map(function(item){
    let string = '';
    for(let i = 0; i < item[0].length; i+=2){
        string += MORSE_BINAR[item[0].substr(i, 2)];
        
    }
    return string;
   });

  result = morse.map(function(item){
    return (MORSE_TABLE[item]) ;
   });
  return (result.join(''));
  


}

module.exports = {
    decode
};

