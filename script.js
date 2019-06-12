class ReversString {
    reversString(txt) {
        txt = document.getElementById('field').value;
        if ( txt.length < 1 ) {
            return alert('Proszę wprowadzić wyraz i spróbować jeszcze raz')
        }
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

function display() {
    const text = new ReversString();
    alert(`Inwersja wyrazu brzmi: ${text.reversString()}`);
}
