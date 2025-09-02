document.addEventListener('DOMContentLoaded', function() {
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const hex1Input = document.getElementById('hex1');
    const hex2Input = document.getElementById('hex2');
    const directionSelect = document.getElementById('direction');
    
    const solid1Preview = document.getElementById('solid1');
    const solid2Preview = document.getElementById('solid2');
    const gradientPreview = document.getElementById('gradient');
    
    const info1 = document.getElementById('info1');
    const info2 = document.getElementById('info2');
    const gradientCss = document.getElementById('gradient-css');

    function isValidHex(hex) {
        return /^#[0-9A-Fa-f]{6}$/.test(hex);
    }

    function updatePreviews() {
        const color1 = color1Input.value;
        const color2 = color2Input.value;
        const direction = directionSelect.value;

        solid1Preview.style.backgroundColor = color1;
        solid2Preview.style.backgroundColor = color2;
        
        const gradientStyle = `linear-gradient(${direction}, ${color1}, ${color2})`;
        gradientPreview.style.background = gradientStyle;
        
        info1.textContent = `Hex: ${color1.toUpperCase()}`;
        info2.textContent = `Hex: ${color2.toUpperCase()}`;
        
        gradientCss.value = `background: ${gradientStyle};`;
        
        hex1Input.value = color1.toUpperCase();
        hex2Input.value = color2.toUpperCase();
    }

    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    function updateColorInfo() {
        const color1 = color1Input.value;
        const color2 = color2Input.value;
        
        const rgb1 = hexToRgb(color1);
        const rgb2 = hexToRgb(color2);
        
        if (rgb1) {
            info1.innerHTML = `Hex: ${color1.toUpperCase()}<br>RGB: rgb(${rgb1.r}, ${rgb1.g}, ${rgb1.b})`;
        }
        
        if (rgb2) {
            info2.innerHTML = `Hex: ${color2.toUpperCase()}<br>RGB: rgb(${rgb2.r}, ${rgb2.g}, ${rgb2.b})`;
        }
    }

    color1Input.addEventListener('input', function() {
        updatePreviews();
        updateColorInfo();
    });

    color2Input.addEventListener('input', function() {
        updatePreviews();
        updateColorInfo();
    });

    hex1Input.addEventListener('input', function() {
        let value = this.value.trim();
        if (!value.startsWith('#')) {
            value = '#' + value;
            this.value = value;
        }
        
        if (isValidHex(value)) {
            color1Input.value = value;
            updatePreviews();
            updateColorInfo();
            this.style.borderColor = '#ddd';
        } else {
            this.style.borderColor = '#ff4757';
        }
    });

    hex2Input.addEventListener('input', function() {
        let value = this.value.trim();
        if (!value.startsWith('#')) {
            value = '#' + value;
            this.value = value;
        }
        
        if (isValidHex(value)) {
            color2Input.value = value;
            updatePreviews();
            updateColorInfo();
            this.style.borderColor = '#ddd';
        } else {
            this.style.borderColor = '#ff4757';
        }
    });

    directionSelect.addEventListener('change', function() {
        updatePreviews();
    });

    gradientCss.addEventListener('click', function() {
        this.select();
        document.execCommand('copy');
        
        const originalBorderColor = this.style.borderColor;
        this.style.borderColor = '#2ed573';
        setTimeout(() => {
            this.style.borderColor = originalBorderColor;
        }, 1000);
    });

    hex1Input.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.which);
        if (!/[0-9a-fA-F#]/.test(char) && e.which !== 8) {
            e.preventDefault();
        }
    });

    hex2Input.addEventListener('keypress', function(e) {
        const char = String.fromCharCode(e.which);
        if (!/[0-9a-fA-F#]/.test(char) && e.which !== 8) {
            e.preventDefault();
        }
    });

    updatePreviews();
    updateColorInfo();
});