// Event-Handler für die Dateiauswahl
function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    // Wenn die Datei geladen wurde
    reader.onload = function() {
        const arrayBuffer = reader.result;
        const uint8Array = new Uint8Array(arrayBuffer);
        const binaryString = arrayBufferToBinaryString(uint8Array);
        const asciiString = convertBinaryToAscii(binaryString);
        const unicodeString = convertBinaryToUnicode(binaryString, 'UTF-8'); // Konvertierung in UTF-8
        const isoString = convertBinaryToUnicode(binaryString, 'ISO-8859-1'); // Konvertierung in ISO-8859-1

        // Ergebnisse ausgeben oder anderweitig verwenden
        console.log('ASCII: ' + asciiString);
        console.log('Unicode: ' + unicodeString);
        console.log('ISO-8859-1: ' + isoString);

        const output = document.getElementById('output');
        output.innerHTML = `ASCII: ${htmlEncode(asciiString)}<br>Unicode: ${htmlEncode(unicodeString)}<br>ISO-8859-1: ${htmlEncode(isoString)}`;
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
    let byte1, byte2, byte3, byte4, charCode;

    // Schleife durch die Binärzeichenkette
    for (let i = 0; i < binaryString.length; i += 8) {

        // Wenn das nächste Zeichen ein 16-Bit-Zeichen ist, verarbeite es als solches
        if (binaryString.charAt(i) === '1' && binaryString.charAt(i + 1) === '0') {
            const chunk = binaryString.substr(i, 16);
            charCode = parseInt(chunk, 2);
            i += 8; // überspringe das zweite Byte des 16-Bit-Zeichens
        } else {
            // sonst verarbeite das Zeichen als 8-Bit-Zeichen
            const chunk = binaryString.substr(i, 8);
            charCode = parseInt(chunk, 2);
        }

        // Konvertiere den CharCode in den Unicode-String, abhängig vom Zeichensatz
        if (charset === 'UTF-8') {
            if (charCode < 128) {
                // 1 Byte
                unicodeString += String.fromCharCode(charCode);
            } else if (charCode < 2048) {
                // 2 Bytes
                byte1 = 192 + (charCode >> 6);
                byte2 = 128 + (charCode & 63);
                unicodeString += String.fromCharCode(byte1, byte2);
            } else if (charCode < 65536) {
                // 3 Bytes
                byte1 = 224 + (charCode >> 12);
                byte2 = 128 + ((charCode >> 6) & 63);
                byte3 = 128 + (charCode & 63);
                unicodeString += String.fromCharCode(byte1, byte2, byte3);
            } else {
                // 4 Bytes
                byte1 = 240 + (charCode >> 18);
                byte2 = 128 + ((charCode >> 12) & 63);
                byte3 = 128 + ((charCode >> 6) & 63);
                byte4 = 128 + (charCode & 63);
                unicodeString += String.fromCharCode(byte1, byte2, byte3, byte4);
            }
        } else if (charset === 'ISO-8859-1') {
            unicodeString += String.fromCharCode(charCode);
        } else {
            // Standardmäßig wird UTF-8 verwendet
            unicodeString += String.fromCharCode(charCode);
        }
    }
    return unicodeString;
}

// Konvertiert eine binäre Zeichenkette in eine ASCII-Zeichenkette
function convertBinaryToAscii(binaryString) {
    let asciiString = '';

    // Schleife durch die Binärzeichenkette in Blöcken von 8 Zeichen
    for (let i = 0; i < binaryString.length; i += 8) {
        const chunk = binaryString.substr(i, 8);
        const charCode = parseInt(chunk, 2); // Konvertiere den binären Block in eine Dezimalzahl

        // Konvertiere die Dezimalzahl in das entsprechende ASCII-Zeichen
        asciiString += String.fromCharCode(charCode);
    }

    return asciiString;
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

// Konvertiert ein Uint8Array-Objekt in eine binäre Zeichenkette
function convertUint8ArrayToBinaryString(uint8Array) {
    let binaryString = '';
    for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
    }
    return decodeURIComponent(escape(binaryString));
}
