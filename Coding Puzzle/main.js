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

});