function handleFileSelect(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function() {
        const binaryString = reader.result.replace(/\s/g, ''); // entferne alle Leerzeichen
        const asciiString = convertBinaryToAscii(binaryString);
        const unicodeString = convertBinaryToUnicode(binaryString);
        // Gib die Ergebnisse aus oder tue etwas anderes damit
        console.log('ASCII: ' + asciiString);
        console.log('Unicode: ' + unicodeString);
        const output = document.getElementById('output');
        output.innerHTML = `ASCII: ${asciiString}<br>Unicode: ${unicodeString}`;
    };
}

function convertBinaryToAscii(binaryString) {
    let asciiString = '';
    // Schleife durch die Binärzeichenkette
    for (let i = 0; i < binaryString.length; i += 8) {
        // Teile die Binärzeichenkette in 8-Bit-Chunks auf
        const chunk = binaryString.substr(i, 8);
        // Wandele jeden 8-Bit-Chunk in ASCII-Code um
        const charCode = parseInt(chunk, 2);
        // Konvertiere ASCII-Code in Zeichen und füge es zur Ausgabezeichenkette hinzu
        asciiString += String.fromCharCode(charCode);
    }
    return asciiString;
}

function convertBinaryToUnicode(binaryString) {
    let unicodeString = '';
    // Schleife durch die Binärzeichenkette
    for (let i = 0; i < binaryString.length; i += 8) {
        // Wenn das nächste Zeichen ein 16-Bit-Zeichen ist, verarbeite es als solches
        if (binaryString.charAt(i) === '1' && binaryString.charAt(i+1) === '0') {
            const chunk = binaryString.substr(i, 16);
            const charCode = parseInt(chunk, 2);
            unicodeString += String.fromCharCode(charCode);
            i += 8; // überspringe das zweite Byte des 16-Bit-Zeichens
        } else {
            // sonst verarbeite das Zeichen als 8-Bit-Zeichen
            const chunk = binaryString.substr(i, 8);
            const charCode = parseInt(chunk, 2);
            unicodeString += String.fromCharCode(charCode);
        }
    }

    // Wenn das erste Zeichen der Unicode-Zeichenkette das BOM ist, entferne es
    if (unicodeString.charCodeAt(0) === 65279) {
        unicodeString = unicodeString.slice(1);
    }

    return unicodeString;
}

const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', handleFileSelect);