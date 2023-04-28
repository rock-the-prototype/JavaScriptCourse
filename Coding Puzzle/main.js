// Event-Handler für die Dateiauswahl
function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Wenn die Datei geladen wurde
    reader.onload = function() {
        const arrayBuffer = reader.result;
        const uint8Array = new Uint8Array(arrayBuffer);
        const binaryString = arrayBufferToBinaryString(uint8Array);
        const unicodeString = convertBinaryToUnicode(binaryString, 'UTF-8'); // Konvertierung in UTF-8

        // Ergebnis ausgeben oder anderweitig verwenden
        console.log('Unicode: ' + unicodeString);

        const output = document.getElementById('output');
        output.innerHTML = `Unicode: ${htmlEncode(unicodeString)}`;
    };

    reader.readAsArrayBuffer(file);
}

// Dateieingabe überwachen
document.getElementById('fileInput').addEventListener('change', handleFileSelect);

// Funktion zur HTML-Kodierung von Zeichen
function htmlEncode(str) {
    return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
}

// Konvertiert eine binäre Zeichenkette in einen Unicode-String basierend auf dem Zeichensatz
function convertBinaryToUnicode(binaryString, charset) {
    let unicodeString = '';

    // Schleife durch die Binärzeichenkette
    for (let i = 0; i < binaryString.length; i += 8) {
        const chunk = binaryString.substr(i, 8);
        const charCode = parseInt(chunk, 2);

        // Konvertiere den CharCode in den Unicode-String, abhängig vom Zeichensatz
        if (charset === 'UTF-8') {
            unicodeString += String.fromCharCode(charCode);
        }
    }

    return unicodeString;
}

// Konvertiert ein Array-Puffer-Objekt in eine binäre Zeichenkette
function arrayBufferToBinaryString(arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    let binaryString = '';
    for (let i = 0; i < byteArray.byteLength; i++) {
        binaryString += String.fromCharCode(byteArray[i]);
    }
    return binaryString;
}