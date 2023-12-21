'use server';

export async function getImageAsFile(imageUrl: string) {
  const response = await fetch(imageUrl, { cache: 'no-store' });
  if (!response.ok) throw new Error('Network response was not ok.');
  const imageBlob = await response.blob();

  const formData = new FormData();
  formData.append('file', imageBlob, 'image.jpg');
  return formData;
}

export async function uploadImageToIPFS(
  imageUrl: string,
  authHeader: string,
  uploadUrl: string
) {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error('Network response was not ok.');
    const imageBlob = await response.blob();

    const formData = new FormData();
    formData.append('file', imageBlob, 'image.jpg');

    const requestOptions = {
      method: 'POST',
      headers: {
        Authorization: `Basic ${authHeader}`
      },
      body: formData
    };

    const uploadResponse = await fetch(uploadUrl, requestOptions);
    if (!uploadResponse.ok) throw new Error('Upload failed.');
    const data = await uploadResponse.json();
    return data;
  } catch (error) {
    console.error('Error during image upload:', error);
    throw error;
  }
}
