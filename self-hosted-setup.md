# Self-Hosting Spline Projects (Remove Watermark)

## How to Self-Host Your Spline Project

### Step 1: Export Your Spline Project
1. Open your Spline project
2. Click "Export" → "Web"
3. Select "Download" instead of "Publish"
4. Download the ZIP file containing your project

### Step 2: Extract and Host
1. Extract the ZIP file to a folder
2. Upload the contents to your web server or hosting service
3. Your project will be available at: `https://yourdomain.com/your-project-folder/`

### Step 3: Update Configuration
Update your `config.js` file:

```javascript
models: {
    model1: {
        name: "OSD System",
        type: "3D Interface",
        url: "https://yourdomain.com/your-project-folder/", // Self-hosted URL
        icon: "fas fa-cube",
        description: "OSD System 3D Interface"
    }
}
```

## Hosting Options

### Free Hosting Services:
- **GitHub Pages** - Free static hosting
- **Netlify** - Free hosting with custom domains
- **Vercel** - Free hosting for static sites
- **Firebase Hosting** - Google's free hosting service

### Paid Hosting Services:
- **AWS S3** - Very cheap static hosting
- **Cloudflare Pages** - Fast global CDN
- **DigitalOcean App Platform** - Simple deployment

## Example: GitHub Pages Setup

1. **Create a GitHub repository**
2. **Upload your Spline project files**
3. **Enable GitHub Pages** in repository settings
4. **Your URL will be**: `https://username.github.io/repository-name/`

## Benefits of Self-Hosting:
- ✅ **No Watermarks** - Complete branding control
- ✅ **Better Performance** - Faster loading times
- ✅ **Custom Domain** - Use your own domain name
- ✅ **Full Control** - Modify and customize as needed
- ✅ **No Dependencies** - Not tied to Spline's hosting

## Alternative: CSS Overlay (Temporary Solution)

If you can't self-host immediately, you can add a CSS overlay to partially hide the watermark:

```css
.model-container {
    position: relative;
}

.watermark-overlay {
    position: absolute;
    bottom: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    padding:1vh;
    border-radius: 5px;
    font-size: 12px;
    color: #666;
    z-index: 1000;
    width:100%;
    height:10%;
}
```

Add this to your HTML:
```html
<div class="watermark-overlay">Custom Branding</div>
```

## Recommended Approach:
1. **Short-term**: Use CSS overlay to minimize watermark visibility
2. **Long-term**: Self-host your projects for complete control
3. **Professional**: Consider Spline Pro for commercial projects 