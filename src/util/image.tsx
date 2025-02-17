export const generateBase64FromImage = (imageFile: Blob) => {
  const reader = new FileReader();
  const promise = new Promise((resolve, reject) => {
    reader.onload = e => resolve(e.target?.result);
    reader.onerror = () => reject(new Error());
  });

  reader.readAsDataURL(imageFile);
  return promise;
};
