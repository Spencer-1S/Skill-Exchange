import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  Paper,
} from '@mui/material';
import {
  School,
  Upload,
  Search,
  Star,
  People,
  Book,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const features = [
    {
      icon: <Upload fontSize="large" color="primary" />,
      title: 'Share Resources',
      description: 'Upload and share lecture notes, presentations, and study materials with your university community.',
    },
    {
      icon: <Search fontSize="large" color="primary" />,
      title: 'Discover Content',
      description: 'Find relevant educational resources shared by students and professors across departments.',
    },
    {
      icon: <Star fontSize="large" color="primary" />,
      title: 'Rate & Review',
      description: 'Rate and review resources to help others find the most valuable content.',
    },
    {
      icon: <People fontSize="large" color="primary" />,
      title: 'Connect',
      description: 'Connect with fellow students and professors in your academic community.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://source.unsplash.com/random?university)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            University Skill Exchange
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Share knowledge, discover resources, and connect with your academic community.
            Join students and professors in building a collaborative learning environment.
          </Typography>
          <Box sx={{ mt: 4 }}>
            {user ? (
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/dashboard')}
                sx={{ mr: 2 }}
              >
                Go to Dashboard
              </Button>
            ) : (
              <>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/register')}
                  sx={{ mr: 2 }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{ color: 'white', borderColor: 'white' }}
                >
                  Sign In
                </Button>
              </>
            )}
          </Box>
        </Container>
      </Paper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          component="h2"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Why Choose University Skill Exchange?
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          A platform designed specifically for academic collaboration and resource sharing.
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'center',
                  p: 2,
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="h3" color="primary" gutterBottom>
                1000+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Resources Shared
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="h3" color="primary" gutterBottom>
                500+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Active Users
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="h3" color="primary" gutterBottom>
                50+
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Departments
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Start Sharing?
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Join our community of learners and educators today.
        </Typography>
        {!user && (
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/register')}
          >
            Create Account
          </Button>
        )}
      </Container>
    </Box>
  );
};

export default Home;
