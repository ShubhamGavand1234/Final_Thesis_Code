import JSZip from 'jszip';

export const extractFilesFromZip = async (file: File) => {
  const zip = new JSZip();
  const extractedFiles: { [filename: string]: string } = {};

  try {
    const content = await zip.loadAsync(file);
    for (const filename of Object.keys(content.files)) {
      if (!content.files[filename].dir) {
        const fileData = await content.files[filename].async('text');
        extractedFiles[filename] = fileData;
      }
    }
  } catch (error) {
    console.error('Error extracting files:', error);
  }

  return extractedFiles;
};
