const images = [
    { src: 'landscape01.jpg', type: ['lake', 'mountain'], year: '2020', weather: 'summer', color: 'bluesky' },
    { src: 'landscape02.jpg', type: ['farm', 'agriculture'], year: '2021', weather: 'spring', color: 'warm' },
    { src: 'landscape03.jpg', type: ['screenshot'], year: '2021', weather: 'winter', color: 'candlelight' },
    { src: 'landscape04.jpg', type: ['farm', 'agriculture'], year: '2021', weather: 'summer', color: 'bluesky' },
    { src: 'landscape05.jpg', type: ['sea', 'tropics'], year: '2021', weather: 'summer', color: 'pastel' },
    { src: 'landscape06.jpg', type: ['cityscape', 'urban', 'streetscenes'], year: '2022', weather: 'summer', color: 'candlelight' },
    { src: 'landscape07.jpg', type: ['forest'], year: '2021', weather: 'fall', color: 'incandescent' },
    { src: 'landscape08.jpg', type: ['lake'], year: '2023', weather: 'fall', color: 'coolcolors' },
    { src: 'landscape09.jpg', type: ['mountain'], year: '2020', weather: 'snow', color: 'monochrome' },
    { src: 'landscape10.jpg', type: ['forest'], year: '2020', weather: 'winter', color: 'warm' },
    { src: 'landscape11.jpg', type: ['mountain'], year: '2021', weather: 'spring', color: 'pastel' },
    { src: 'landscape12.jpg', type: ['urban', 'streetscenes'], year: '2021', weather: 'cloudy', color: 'coolcolors' },
    { src: 'landscape13.jpg', type: ['lake'], year: '2023', weather: 'summer', color: 'earthtones' },
    { src: 'landscape14.jpg', type: ['tropics'], year: '2022', weather: 'summer', color: 'vibrant' },
    { src: 'landscape15.jpg', type: ['sea'], year: '2023', weather: 'summer', color: 'bluesky' },
    { src: 'landscape16.jpg', type: ['forest', 'streetscenes'], year: '2023', weather: 'rainy', color: 'coolcolors' },
    { src: 'landscape17.jpg', type: ['forest'], year: '2023', weather: 'fall', color: 'vibrant' },
    { src: 'landscape18.jpg', type: ['farm', 'agriculture'], year: '2022', weather: 'summer', color: 'daylightdirectsun' },
    { src: 'landscape19.jpg', type: ['architectural'], year: '2021', weather: 'winter', color: 'coolcolors' },
    { src: 'landscape20.jpg', type: ['mountain', 'forest'], year: '2023', weather: 'fog', color: 'coolcolors' },
    { src: 'landscape21.jpg', type: ['urban'], year: '2022', weather: 'spring', color: 'incandescent' },
    { src: 'landscape22.jpg', type: ['cityscape'], year: '2023', weather: 'fall', color: 'coolcolors' },
    { src: 'landscape23.jpg', type: ['architectural', 'river', 'urban'], year: '2023', weather: 'summer', color: 'bluesky' },
    { src: 'landscape24.jpg', type: ['river'], year: '2023', weather: 'summer', color: 'vibrant' },
    { src: 'landscape25.jpg', type: ['cityscape', 'river'], year: '2024', weather: 'summer', color: 'warm' },
    { src: 'landscape26.jpg', type: ['book', 'urban', 'cityscape'], year: '2024', weather: 'spring', color: 'warm' },
    { src: 'landscape27.jpg', type: ['lake', 'mountain'], year: '2022', weather: 'summer', color: 'bluesky' },
    { src: 'landscape28.jpg', type: ['lake'], year: '2023', weather: 'summer', color: 'warm' },
    { src: 'landscape29.jpg', type: ['mountain', 'forest'], year: '2023', weather: 'fog', color: 'neutral' },
    { src: 'landscape30.jpg', type: ['coast', 'sea'], year: '2023', weather: 'spring', color: 'bluesky' },
    { src: 'landscape31.jpg', type: ['river', 'forest'], year: '2024', weather: 'winter', color: 'coolcolors' },
    { src: 'landscape32.jpg', type: ['forest'], year: '2024', weather: 'winter', color: 'monochrome' },
    { src: 'landscape33.jpg', type: ['coast', 'sea', 'book'], year: '2023', weather: 'summer', color: 'bluesky' },
    { src: 'landscape34.jpg', type: ['coast', 'sea'], year: '2023', weather: 'spring', color: 'warm' },
    { src: 'landscape35.jpg', type: ['coast', 'sea'], year: '2023', weather: 'summer', color: 'incandescent' },
    { src: 'landscape36.jpg', type: ['architectural'], year: '2023', weather: 'spring', color: 'coolcolors' },
    { src: 'landscape37.jpg', type: ['urban', 'cityscape'], year: '2024', weather: 'fall', color: 'warm' },
    { src: 'landscape38.jpg', type: ['architectural', 'cityscape'], year: '2024', weather: 'spring', color: 'earthtones' },
    { src: 'landscape39.jpg', type: ['farm'], year: '2023', weather: 'summer', color: 'warm' },
    { src: 'landscape40.jpg', type: ['agriculture'], year: '2020', weather: 'summer', color: 'bluesky' },
    { src: 'landscape41.jpg', type: ['forest'], year: '2023', weather: 'summer', color: 'daylightdirectsun' },
    { src: 'landscape42.jpg', type: ['cityscape'], year: '2024', weather: 'spring', color: 'coolcolors' },
    { src: 'landscape43.jpg', type: ['urban', 'cityscape'], year: '2024', weather: 'spring', color: 'candlelight' },
    { src: 'landscape44.jpg', type: ['streetscenes', 'urban'], year: '2024', weather: 'rainy', color: 'monochrome' },
    { src: 'landscape45.jpg', type: ['urban'], year: '2024', weather: 'winter', color: 'incandescent' },
    { src: 'landscape46.jpg', type: ['book'], year: '2024', weather: 'spring', color: 'monochrome' },
    { src: 'landscape47.jpg', type: ['book'], year: '2024', weather: 'spring', color: 'warm' },
    { src: 'landscape48.jpg', type: ['screenshot', 'forest'], year: '2024', weather: 'winter', color: 'coolcolors' },
    { src: 'landscape49.jpg', type: ['screenshot', 'forest'], year: '2023', weather: 'summer', color: 'daylightdirectsun' },
    { src: 'landscape50.jpg', type: ['screenshot', 'tropics', 'urban'], year: '2021', weather: 'summer', color: 'incandescent' },
];

document.addEventListener('DOMContentLoaded', () => {
    applyFilters();

    document.getElementById('landscapeType').addEventListener('change', applyFilters);
    document.getElementById('year').addEventListener('change', applyFilters);
    document.getElementById('weather').addEventListener('change', applyFilters);
    document.getElementById('color').addEventListener('change', applyFilters);

    document.getElementById('clearFilters').addEventListener('click', () => {
        // Reset all select elements to their default option (value="")
        document.getElementById('landscapeType').value = "";
        document.getElementById('year').value = "";
        document.getElementById('weather').value = "";
        document.getElementById('color').value = "";

        applyFilters(); // Reload images based on the reset filters
    });
});

function applyFilters() {
    const container = document.getElementById('imageContainer');
    container.innerHTML = ''; // Clear current images

    const typeFilter = document.getElementById('landscapeType').value;
    const yearFilter = document.getElementById('year').value;
    const weatherFilter = document.getElementById('weather').value;
    const colorFilter = document.getElementById('color').value;

    console.log("Filters Applied:");
    console.log("Type Filter:", typeFilter);
    console.log("Year Filter:", yearFilter);
    console.log("Weather Filter:", weatherFilter);
    console.log("Color Filter:", colorFilter);

    const filteredImages = images.filter(image => {
        return (!typeFilter || (Array.isArray(image.type) && image.type.includes(typeFilter))) &&
               (!yearFilter || image.year === yearFilter) &&
               (!weatherFilter || image.weather === weatherFilter) &&
               (!colorFilter || image.color === colorFilter);
    });

    console.log("Filtered Images:", filteredImages);

    shuffleArray(filteredImages); // Shuffle the array to randomize the image order

    let delay = 0;
    const interval = 250; // Set a constant interval in milliseconds

    filteredImages.forEach((image, index) => {
        setTimeout(() => {
            // Ensure a random image is positioned at the top
            const positionTop = index === 0;
            loadImage(image, container, positionTop);
        }, delay);
        delay += interval; // Increase delay by the fixed interval for each image
    });
}

function loadImage(image, container, positionTop = false) {
    const img = document.createElement('img');
    const imgWidthVw = getRandomSize(10, 20); // Image width in vw units

    img.src = `assets/images/${image.src}`;
    img.style.width = `${imgWidthVw}vw`;

    const imgWidthPercent = vwToPercent(imgWidthVw, container.offsetWidth);
    img.style.left = `${getRandomLeft(imgWidthPercent, container.offsetWidth)}%`;
    img.style.top = positionTop ? '10%' : `${getRandomPercentage()}%`; // Ensure first image is at the top with padding

    img.onload = () => {
        img.style.opacity = 1; // Ensure the image is visible once loaded
    };

    img.onclick = () => {
        const pageName = pageMapping[image.src];
        if (pageName) {
            window.location.href = pageName;
        }
    };

    container.appendChild(img);
}

function getRandomSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPercentage() {
    return Math.floor(Math.random() * 80) + 10;
}

function vwToPercent(vw, containerWidth) {
    const percent = (vw / 100) * document.documentElement.clientWidth;
    return (percent / containerWidth) * 100;
}

function getRandomLeft(imgWidthPercent, containerWidth) {
    const maxLeft = 100 - imgWidthPercent;
    return Math.random() * maxLeft;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Define a mapping between image filenames and page filenames
const pageMapping = {
    'landscape01.jpg': 'pages/inner01.html',
    'landscape02.jpg': 'pages/inner02.html',
    'landscape03.jpg': 'pages/inner03.html',
    'landscape04.jpg': 'pages/inner04.html',
    'landscape05.jpg': 'pages/inner05.html',
    'landscape06.jpg': 'pages/inner06.html',
    'landscape07.jpg': 'pages/inner07.html',
    'landscape08.jpg': 'pages/inner08.html',
    'landscape09.jpg': 'pages/inner09.html',
    'landscape10.jpg': 'pages/inner10.html',
    'landscape11.jpg': 'pages/inner11.html',
    'landscape12.jpg': 'pages/inner12.html',
    'landscape13.jpg': 'pages/inner13.html',
    'landscape14.jpg': 'pages/inner14.html',
    'landscape15.jpg': 'pages/inner15.html',
    'landscape16.jpg': 'pages/inner16.html',
    'landscape17.jpg': 'pages/inner17.html',
    'landscape18.jpg': 'pages/inner18.html',
    'landscape19.jpg': 'pages/inner19.html',
    'landscape20.jpg': 'pages/inner20.html',
    'landscape21.jpg': 'pages/inner21.html',
    'landscape22.jpg': 'pages/inner22.html',
    'landscape23.jpg': 'pages/inner23.html',
    'landscape24.jpg': 'pages/inner24.html',
    'landscape25.jpg': 'pages/inner25.html',
    'landscape26.jpg': 'pages/inner26.html',
    'landscape27.jpg': 'pages/inner27.html',
    'landscape28.jpg': 'pages/inner28.html',
    'landscape29.jpg': 'pages/inner29.html',
    'landscape30.jpg': 'pages/inner30.html',
    'landscape31.jpg': 'pages/inner31.html',
    'landscape32.jpg': 'pages/inner32.html',
    'landscape33.jpg': 'pages/inner33.html',
    'landscape34.jpg': 'pages/inner34.html',
    'landscape35.jpg': 'pages/inner35.html',
    'landscape36.jpg': 'pages/inner36.html',
    'landscape37.jpg': 'pages/inner37.html',
    'landscape38.jpg': 'pages/inner38.html',
    'landscape39.jpg': 'pages/inner39.html',
    'landscape40.jpg': 'pages/inner40.html',
    'landscape41.jpg': 'pages/inner41.html',
    'landscape42.jpg': 'pages/inner42.html',
    'landscape43.jpg': 'pages/inner43.html',
    'landscape44.jpg': 'pages/inner44.html',
    'landscape45.jpg': 'pages/inner45.html',
    'landscape46.jpg': 'pages/inner46.html',
    'landscape47.jpg': 'pages/inner47.html',
    'landscape48.jpg': 'pages/inner48.html',
    'landscape49.jpg': 'pages/inner49.html',
    'landscape50.jpg': 'pages/inner50.html',
};
