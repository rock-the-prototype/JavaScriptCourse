$(document).ready(function() {
    function handleFileSelect() {
        const file = document.getElementById('fileInput').files[0];
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function() {
            const binaryString = reader.result;
            const asciiString = convertBinaryToAscii(binaryString);
            const unicodeString = convertBinaryToUnicode(binaryString);
            // Gib die Ergebnisse aus oder tue etwas anderes damit
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
        for (let i = 0; i < binaryString.length; i += 16) {
            // Teile die Binärzeichenkette in 16-Bit-Chunks auf
            const chunk = binaryString.substr(i, 16);
            // Wandele jeden 16-Bit-Chunk in Unicode-Code um
            const charCode = parseInt(chunk, 2);
            // Konvertiere Unicode-Code in Zeichen und füge es zur Ausgabezeichenkette hinzu
            unicodeString += String.fromCharCode(charCode);
        }
        return unicodeString;
    }

    $('#fileInput').change(handleFileSelect);
});