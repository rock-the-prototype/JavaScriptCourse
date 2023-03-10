// Abstraction
class GUIComponent {
    constructor(platform) {
        this.platform = platform;
    }

    render() {
        this.platform.render();
    }
}

// Implementation
class WindowsGUI {
    render() {
        console.log('Rendering GUI component on Windows...');
    }
}

class MacOSGUI {
    render() {
        console.log('Rendering GUI component on MacOS...');
    }
}

// Usage
const windowsGUIComponent = new GUIComponent(new WindowsGUI());
windowsGUIComponent.render(); // Output: "Rendering GUI component on Windows..."

const macosGUIComponent = new GUIComponent(new MacOSGUI());
macosGUIComponent.render(); // Output: "Rendering GUI component on MacOS..."