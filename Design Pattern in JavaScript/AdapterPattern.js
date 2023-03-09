// Adaptee class
class ThirdPartyLibrary {
    printText(text) {
        console.log(text);
    }
}

// Target interface
class TextPrinter {
    displayText(text) {}
}

// Adapter class
class TextPrinterAdapter extends TextPrinter {
    constructor(thirdPartyLibrary) {
        super();
        this.thirdPartyLibrary = thirdPartyLibrary;
    }

    displayText(text) {
        this.thirdPartyLibrary.printText(text);
    }
}

// Client code
const text = "Hello, world!";
const thirdPartyLibrary = new ThirdPartyLibrary();
const textPrinter = new TextPrinterAdapter(thirdPartyLibrary);
textPrinter.displayText(text);