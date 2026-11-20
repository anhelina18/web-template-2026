import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
import { join, parse } from 'node:path';

const SRC = 'images-src';
const OUT = 'src/assets/images';
const WIDTHS = [400, 800, 1200, 1600];

async function main() {
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));

  const jobs = files.flatMap((file) => {
    const { name } = parse(file);
    return WIDTHS.flatMap((width) => {
      const image = sharp(join(SRC, file)).resize({ width, withoutEnlargement: true });
      return [
        image.clone().webp({ quality: 78 }).toFile(join(OUT, name + '-' + width + '.webp')),
        image.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(join(OUT, name + '-' + width + '.jpg')),
      ];
    });
  });

  await Promise.all(jobs);
  console.log('Generated ' + jobs.length + ' images in ' + OUT);
}

main();
