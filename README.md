# Hex Color Picker

A modern, interactive web application for picking hex colors with real-time solid and gradient previews. Built with vanilla HTML, CSS, and JavaScript for lightweight performance and easy deployment.

## Features

- 🎨 **Dual Color Selection**: Two independent color pickers with hex input fields
- 🌈 **Live Gradient Preview**: Real-time gradient visualization with customizable directions
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎯 **RGB Conversion**: Automatic RGB values display for both colors
- 📋 **CSS Code Generation**: Copy-ready CSS gradient code with click-to-copy functionality
- ⚡ **Lightweight**: Pure vanilla JavaScript, no dependencies
- 🐳 **Docker Ready**: Containerized deployment configuration included

## Demo

![Hex Color Picker Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Hex+Color+Picker+Preview)

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/lon-metrix/hex-color-picker.git
cd hex-color-picker
```

2. Start a local server:
```bash
python3 -m http.server 8000
```

3. Open http://localhost:8000 in your browser

### Docker Deployment

1. Build the Docker image:
```bash
docker build -t hex-color-picker .
```

2. Run the container:
```bash
docker run -p 80:80 hex-color-picker
```

3. Access at http://localhost

## Usage

1. **Select Colors**: Use the color pickers or enter hex values directly
2. **Preview Gradients**: Choose from 6 different gradient directions
3. **Copy CSS**: Click the CSS code textarea to copy gradient styles
4. **View RGB**: See automatic RGB conversion for both colors

### Gradient Directions

- Left to Right
- Right to Left  
- Top to Bottom
- Bottom to Top
- Top-Left to Bottom-Right
- Top-Right to Bottom-Left

## Files Structure

```
├── index.html      # Main HTML structure
├── style.css       # Responsive CSS styling
├── script.js       # Interactive JavaScript functionality
├── Dockerfile      # Docker deployment configuration
├── .dockerignore   # Docker build optimization
└── README.md       # Project documentation
```

## Browser Support

- Chrome/Chromium 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Deployment Options

### GitHub Pages
1. Go to repository Settings > Pages
2. Select "Deploy from a branch"
3. Choose `main` branch and `/` (root) folder
4. Your app will be available at `https://lon-metrix.github.io/hex-color-picker`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every commit

### Vercel
1. Import your GitHub repository to Vercel  
2. Deploy with zero configuration

---

**Built with ❤️ using vanilla web technologies**