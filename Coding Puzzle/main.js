function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const arrayBuffer = reader.result;
        const uint8Array = new Uint8Array(arrayBuffer);
        const binaryString = arrayBufferToBinaryString(uint8Array);
        const asciiString = convertBinaryToAscii(binaryString);
        const unicodeString = convertBinaryToUnicode(binaryString, 'UTF-8'); // Umwandlung in UTF-8
        const isoString = convertBinaryToUnicode(binaryString, 'ISO-8859-1'); // Umwandlung in ISO-8859-1

        // Gib die Ergebnisse aus oder tue etwas anderes damit
        console.log('ASCII: ' + asciiString);
        console.log('Unicode: ' + unicodeString);
        console.log('ISO-8859-1: ' + isoString);

        const output = document.getElementById('output');
        output.innerHTML = `ASCII: ${htmlEncode(asciiString)}<br>Unicode: ${htmlEncode(unicodeString)}<br>ISO-8859-1: ${htmlEncode(isoString)}`;
    };

    reader.readAsArrayBuffer(file);
}

document.getElementById('fileInput').addEventListener('change', handleFileSelect);

// Funktion zur HTML-Kodierung von Zeichen
function htmlEncode(str) {
    return str.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
        return '&#' + i.charCodeAt(0) + ';';
    });
}


document.getElementById('fileInput').addEventListener('change', handleFileSelect);

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

function convertBinaryToAscii(binaryString) {
    let asciiString = '';

    // Loop through the binary string in chunks of 8
    for (let i = 0; i < binaryString.length; i += 8) {
        const chunk = binaryString.substr(i, 8);
        const charCode = parseInt(chunk, 2); // Convert the binary chunk to decimal

        // Convert the decimal charCode to ASCII character
        asciiString += String.fromCharCode(charCode);
    }

    return asciiString;
}

function arrayBufferToBinaryString(arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    let binaryString = '';
    for (let i = 0; i < byteArray.byteLength; i++) {
        binaryString += String.fromCharCode(byteArray[i]);
    }
    return binaryString;
}

function convertUint8ArrayToBinaryString(uint8Array) {
    let binaryString = '';
    for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
    }
    return decodeURIComponent(escape(binaryString));
}