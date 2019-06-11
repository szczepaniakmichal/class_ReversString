class ReversString {
    reversString(txt) {
        let arr = [];
        let arrRev = [];
            for ( let i = 0; i < txt.length; i++ ){
                arr.push(txt.charAt([i]))
            }
        arrRev = arr.reverse();
        arrRev = arrRev.join('');
        return arrRev;
    }
}

const text = new ReversString();
console.log(text.reversString('yrreJ dna moT'));