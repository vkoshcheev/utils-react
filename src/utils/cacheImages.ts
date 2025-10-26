export const cacheImages = async (srcArray: string[]) => {
  const promises = srcArray.map((src) => {
    return new Promise<void> ((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        // console.warn(`Image loaded successfully:\r\n${src}`);
        resolve();
      }
      img.onerror = (error) => {
        const errorMessage = JSON.stringify(error);
        // console.warn(`Error loading image: ${src}\r\n${errorMessage}`);
        reject(errorMessage);
      };
    });
  });
  
  try {
    await Promise.all(promises);
  } catch (e) {
    console.log(`cacheImages - Error loading images: ${JSON.stringify(e)}`);
  }
};