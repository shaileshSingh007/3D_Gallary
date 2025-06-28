# 3D Model Viewer

A beautiful, responsive web application for viewing 3D models created with Spline. Features a modern UI with a dropdown menu for model selection and seamless iframe integration for reliable 3D model viewing.

## Features

- 🎨 **Beautiful Modern UI** - Glassmorphism design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎯 **Model Selection** - Dropdown menu to switch between different 3D models
- 🖼️ **Iframe Integration** - Reliable 3D model viewing using Spline iframes
- ⚡ **Fast Loading** - Optimized for smooth performance
- 🔄 **Real-time Updates** - Live model information and status updates
- 🛡️ **Error Handling** - Graceful error handling and loading states

## How It Works

This application uses **iframe embedding** to display Spline 3D models, which provides:

- ✅ **Reliable Loading** - No runtime dependencies or compatibility issues
- ✅ **Full Interactivity** - All Spline interactions work natively
- ✅ **Cross-Platform** - Works on all devices and browsers
- ✅ **Easy Setup** - Just add your Spline iframe URLs

## Getting Started

### 1. Setup
1. Open the `index.html` file in a modern web browser
2. The application will load with a beautiful interface
3. Use the dropdown menu in the top-right corner to select a model

### 2. Adding Your Own Models

To add your own Spline models, edit the `config.js` file and update the `models` object:

```javascript
this.models = {
    model1: {
        name: "Your Model Name",
        type: "3D Object",
        url: "https://my.spline.design/your-project-name/",
        icon: "fas fa-cube"
    },
    // Add more models here...
};
```

### 3. Getting Your Spline Iframe URL

1. Open your Spline project
2. Click on "Export" in the top menu
3. Select "Web" as the export option
4. Copy the iframe URL (it should look like: `https://my.spline.design/your-project-name/`)
5. Replace the placeholder URLs in the `config.js` file

## File Structure

```
3D Model Viewer/
├── index.html          # Main HTML file with iframe container
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality (iframe-based)
├── config.js           # Model configuration file
└── README.md           # This file
```

## Controls

The 3D model controls are handled natively by Spline within the iframe:

### Desktop/Laptop
- **Left Click + Drag** - Rotate the model
- **Mouse Wheel** - Zoom in/out
- **Right Click + Drag** - Pan the camera

### Mobile/Touch
- **Single Finger Drag** - Rotate the model
- **Pinch Gesture** - Zoom in/out
- **Two Finger Drag** - Pan the camera

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adding More Models
1. Add new model entries to the `models` object in `config.js`
2. Add corresponding dropdown items in `index.html`
3. Update the model information as needed

### Modifying Settings
Edit the `settings` object in `config.js`:

```javascript
settings: {
    defaultModel: "model1",    // Model to load by default
    autoLoad: true,           // Auto-load default model
    showControls: true,       // Show control instructions
    showInfo: true           // Show model information panel
}
```

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize your Spline models** - Reduce polygon count for better performance
2. **Use compressed textures** - Smaller file sizes load faster
3. **Test on target devices** - Ensure smooth performance on mobile devices
4. **Use reliable hosting** - Ensure your Spline projects are hosted on stable servers

## Troubleshooting

### Model Not Loading
- Check that the Spline iframe URL is correct and accessible
- Ensure your model is published and publicly accessible
- Check browser console for error messages
- Verify the URL format: `https://my.spline.design/your-project-name/`

### Performance Issues
- Try reducing the model complexity in Spline
- Check if other browser tabs are consuming resources
- Ensure you're using a modern browser
- Check your internet connection speed

### Iframe Not Displaying
- Make sure the iframe URL is accessible
- Check if your browser blocks iframes
- Try refreshing the page
- Check for any Content Security Policy (CSP) restrictions

## Technologies Used

- **HTML5** - Structure and iframe embedding
- **CSS3** - Styling and responsive design
- **JavaScript (ES6+)** - Interactivity and model management
- **Spline Iframes** - 3D model rendering
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## Advantages of Iframe Approach

- 🚀 **No Runtime Dependencies** - No need to load external libraries
- 🔒 **Better Security** - Isolated execution environment
- 📱 **Universal Compatibility** - Works on all devices and browsers
- ⚡ **Faster Loading** - No additional JavaScript to load
- 🛠️ **Easier Maintenance** - Simpler codebase and fewer potential issues

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions:
1. Check the browser console for error messages
2. Ensure all files are in the same directory
3. Verify that your Spline iframe URLs are correct
4. Test with a different browser
5. Check if your Spline project is publicly accessible

---

**Happy 3D Viewing! 🎉** 