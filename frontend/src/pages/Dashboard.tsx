import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  Avatar,
} from '@mui/material';
import { Add as AddIcon, School as SchoolIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Resource } from '../types/Resource';

const Dashboard: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    // Mock data for now - in a real app, this would fetch from API
    setResources([
      {
        id: 1,
        title: 'Introduction to Machine Learning',
        description: 'A comprehensive guide to ML fundamentals',
        type: 'COURSE',
        tags: ['Machine Learning', 'AI', 'Python'],
        uploader: { id: 1, username: 'john_doe' },
        uploadDate: new Date('2024-01-15'),
        downloadCount: 45,
        rating: 4.5,
      },
      {
        id: 2,
        title: 'Web Development Best Practices',
        description: 'Modern web development techniques and patterns',
        type: 'DOCUMENT',
        tags: ['Web Development', 'JavaScript', 'React'],
        uploader: { id: 2, username: 'jane_smith' },
        uploadDate: new Date('2024-01-10'),
        downloadCount: 32,
        rating: 4.2,
      },
    ]);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Welcome back, {user?.username}!
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/upload')}
        >
          Upload Resource
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Recent Resources
          </Typography>
          <Grid container spacing={2}>
            {resources.map((resource) => (
              <Grid item xs={12} key={resource.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" gutterBottom>
                          {resource.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {resource.description}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                          {resource.tags.map((tag) => (
                            <Chip key={tag} label={tag} size="small" />
                          ))}
                        </Box>
                        <Typography variant="caption" color="text.secondary">
                          By {resource.uploader.username} • {resource.uploadDate.toLocaleDateString()} • {resource.downloadCount} downloads
                        </Typography>
                      </Box>
                      <Chip
                        icon={<SchoolIcon />}
                        label={resource.type}
                        color="primary"
                        variant="outlined"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom>
            Quick Stats
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Resources</Typography>
              <Typography variant="h4" color="primary">
                {resources.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
