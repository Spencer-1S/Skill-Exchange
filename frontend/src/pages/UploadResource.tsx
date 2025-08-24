import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
  SelectChangeEvent,
} from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';

const UploadResource: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '',
    tags: [] as string[],
  });
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
      'video/*': ['.mp4', '.avi', '.mov'],
      'audio/*': ['.mp3', '.wav'],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypeChange = (e: SelectChangeEvent) => {
    setFormData({
      ...formData,
      type: e.target.value,
    });
  };

  const handleTagsChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      tags: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Mock upload - in a real app, this would send to API
      console.log('Uploading resource:', { ...formData, file });
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate upload
      navigate('/dashboard');
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const resourceTypes = [
    'COURSE',
    'DOCUMENT',
    'VIDEO',
    'AUDIO',
    'PRESENTATION',
    'CODE',
    'OTHER',
  ];

  const availableTags = [
    'Machine Learning',
    'Web Development',
    'Mobile Development',
    'Data Science',
    'Artificial Intelligence',
    'Python',
    'JavaScript',
    'React',
    'Java',
    'C++',
    'Database',
    'Cloud Computing',
    'DevOps',
    'Cybersecurity',
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Upload Resource
      </Typography>

      <Card>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Resource Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              margin="normal"
            />

            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              multiline
              rows={4}
              margin="normal"
            />

            <FormControl fullWidth margin="normal" required>
              <InputLabel>Resource Type</InputLabel>
              <Select
                value={formData.type}
                label="Resource Type"
                onChange={handleTypeChange}
              >
                {resourceTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Tags</InputLabel>
              <Select
                multiple
                value={formData.tags}
                onChange={handleTagsChange}
                input={<OutlinedInput label="Tags" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {availableTags.map((tag) => (
                  <MenuItem key={tag} value={tag}>
                    {tag}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box sx={{ mt: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Upload File
              </Typography>
              <Box
                {...getRootProps()}
                sx={{
                  border: '2px dashed #ccc',
                  borderRadius: 2,
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <input {...getInputProps()} />
                <CloudUploadIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
                {isDragActive ? (
                  <Typography>Drop the file here...</Typography>
                ) : (
                  <Typography>
                    {file ? `Selected: ${file.name}` : 'Drag and drop a file here, or click to select'}
                  </Typography>
                )}
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  Supported formats: PDF, DOC, DOCX, TXT, MP4, AVI, MOV, MP3, WAV
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button
                variant="outlined"
                onClick={() => navigate('/dashboard')}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={loading || !file || !formData.title || !formData.description || !formData.type}
              >
                {loading ? 'Uploading...' : 'Upload Resource'}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default UploadResource;


