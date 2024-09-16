import JSZip from 'jszip';

export const unzipFile = async (file: File): Promise<string[]> => {
  const zip = new JSZip();
  const content = await zip.loadAsync(file);
  const fileNames: string[] = [];

  content.forEach((relativePath, file) => {
    if (!file.dir) {
      fileNames.push(relativePath);
    }
  });

  return fileNames;
};
