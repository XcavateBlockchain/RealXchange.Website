import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
// const cache = new Map<ImageProps, string>();

export default async function getBase64ImageUrl(image: string): Promise<string> {
  let url = '';
  if (url) {
    return url;
  }
  const response = await fetch(`${image}`);
  const buffer = await response.arrayBuffer();
  const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [imageminJpegtran()]
  });

  url = `data:image/jpeg;base64,${Buffer.from(minified).toString('base64')}`;

  return url;
}
