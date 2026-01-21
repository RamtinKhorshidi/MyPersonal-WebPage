const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/assets/images');
const images = [
    'acting-1.jpg',
    'acting-2.jpg',
    'acting-green-mood.jpg',
    'acting-clapperboard.jpg',
    'acting-awards.jpg',
    'acting-award-ceremony.jpg',
    'acting-stage-suit.jpg',
    'acting-red-carpet.jpg',
    'coffee-shop.jpg'
];

async function optimize() {
    for (const file of images) {
        const inputPath = path.join(srcDir, file);
        const name = path.parse(file).name;
        const outputPath = path.join(srcDir, `${name}.webp`);

        try {
            if (!fs.existsSync(inputPath)) {
                console.error(`File not found: ${file}`);
                continue;
            }

            const metadata = await sharp(inputPath).metadata();
            console.log(`Processing ${file}: ${metadata.width}x${metadata.height}, ${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(2)} MB`);

            let pipeline = sharp(inputPath);

            // Resize if huge
            if (metadata.width > 1600) {
                pipeline = pipeline.resize({ width: 1600 });
            }

            await pipeline
                .webp({ quality: 80 })
                .toFile(outputPath);

            const newSize = fs.statSync(outputPath).size / 1024; // KB
            console.log(`Saved ${name}.webp: ${newSize.toFixed(2)} KB`);

        } catch (error) {
            console.error(`Error processing ${file}:`, error);
        }
    }
}

optimize();
