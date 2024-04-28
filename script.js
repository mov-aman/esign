const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    drawSignature(e.offsetX, e.offsetY);
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
    isDrawing = false;
});

function drawSignature(x, y) {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();
}

function clearSignature() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
    const dataUrl = canvas.toDataURL(); // Convert canvas to data URL
    localStorage.setItem('signature', dataUrl); // Save to localStorage
    alert('Signature saved!');
}

function downloadSignature() {
    const dataUrl = localStorage.getItem('signature'); // Get signature from localStorage
    if (dataUrl) {
        const fileName = prompt("Enter the file name:", "signature.png");
        if (fileName) {
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            alert('Please enter a valid file name.');
        }
    } else {
        alert('No signature found. Please save your signature before downloading.');
    }
}
