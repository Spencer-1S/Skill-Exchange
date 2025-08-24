import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Chip,
  Button,
  Grid,
  Avatar,
  Divider,
  Rating,
  TextField,
} from '@mui/material';
import { Download as DownloadIcon, Star as StarIcon } from '@mui/icons-material';
import { Resource } from '../types/Resource';

const ResourceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [resource, setResource] = useState<Resource | null>(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState('');

  useEffect(() => {
    // Mock data - in a real app, this would fetch from API
    setResource({
      id: parseInt(id || '1'),
      title: 'Introduction to Machine Learning',
      description: 'A comprehensive guide to machine learning fundamentals covering supervised learning, unsupervised learning, and deep learning techniques. This course includes practical examples and hands-on exercises.',
      type: 'COURSE',
      tags: ['Machine Learning', 'AI', 'Python', 'Data Science'],
      uploader: { id: 1, username: 'john_doe' },
      uploadDate: new Date('2024-01-15'),
      downloadCount: 45,
      rating: 4.5,
      reviews: [
        { id: 1, user: 'alice', rating: 5, comment: 'Excellent course! Very well explained.' },
        { id: 2, user: 'bob', rating: 4, comment: 'Great content, helped me understand ML basics.' },
      ],
    });
    setLoading(false);
  }, [id]);

  const handleDownload = () => {
    // Mock download functionality
    console.log('Downloading resource:', resource?.title);
  };

  const handleReviewSubmit = () => {
    // Mock review submission
    console.log('Submitting review:', { rating, review });
  };

  if (loading) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!resource) {
    return (
      <Container>
        <Typography>Resource not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {resource.title}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={resource.rating} readOnly precision={0.5} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({resource.rating}) • {resource.downloadCount} downloads
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                {resource.tags.map((tag) => (
                  <Chip key={tag} label={tag} size="small" />
                ))}
              </Box>

              <Typography variant="body1" paragraph>
                {resource.description}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ mr: 2 }}>{resource.uploader.username[0].toUpperCase()}</Avatar>
                <Box>
                  <Typography variant="subtitle1">{resource.uploader.username}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    Uploaded on {resource.uploadDate.toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownload}
                size="large"
              >
                Download Resource
              </Button>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Reviews
              </Typography>
              
              {resource.reviews?.map((reviewItem) => (
                <Box key={reviewItem.id} sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Rating value={reviewItem.rating} readOnly size="small" />
                    <Typography variant="subtitle2" sx={{ ml: 1 }}>
                      {reviewItem.user}
                    </Typography>
                  </Box>
                  <Typography variant="body2">{reviewItem.comment}</Typography>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}

              <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Add Your Review
                </Typography>
                <Rating
                  value={rating}
                  onChange={(_, newValue) => setRating(newValue)}
                  size="large"
                />
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Write your review..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  sx={{ mt: 2 }}
                />
                <Button
                  variant="contained"
                  onClick={handleReviewSubmit}
                  sx={{ mt: 2 }}
                  disabled={!rating || !review.trim()}
                >
                  Submit Review
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Resource Information
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Type
                </Typography>
                <Chip label={resource.type} color="primary" />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Downloads
                </Typography>
                <Typography variant="h6">{resource.downloadCount}</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Rating
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Rating value={resource.rating} readOnly size="small" />
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    {resource.rating}/5
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourceDetail;


