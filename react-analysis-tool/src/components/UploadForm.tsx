// src/components/UploadForm.tsx
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { extractFilesFromZip } from '../services/fileService';
import { analyzeFiles } from '../services/analysisService';
import { AnalysisResultsType } from './AnalysisResults'; // Import the type here

interface UploadFormProps {
  setResults: React.Dispatch<React.SetStateAction<AnalysisResultsType | null>>;
}

const UploadForm: React.FC<UploadFormProps> = ({ setResults }) => {
  const [error, setError] = useState<string | null>(null);

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      try {
        // Extract files from the ZIP
        const extractedFiles = await extractFilesFromZip(file);
        // Analyze the extracted files
        const analysisResults = analyzeFiles(extractedFiles);
        // Set the results to display
        setResults(analysisResults);
      } catch (error) {
        setError('Error processing the file.');
        console.error('Error processing the file:', error);
      }
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/zip': ['.zip'],
    },
    noClick: false, // Allow folder selection via click
    noKeyboard: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`drag-drop-container ${isDragActive ? 'drag-active' : ''}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-center text-lg">Drop the file here...</p>
      ) : (
        <p className="text-center text-lg drag-here">Drag & drop a ZIP file here, or click to select one</p>
      )}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default UploadForm;
