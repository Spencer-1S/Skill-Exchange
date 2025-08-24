import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  School as SchoolIcon,
  CalendarToday as CalendarIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    bio: 'Passionate about sharing knowledge and learning new technologies.',
    department: 'Computer Science',
    year: '3rd Year',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Mock save functionality
    console.log('Saving profile:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      username: user?.username || '',
      email: user?.email || '',
      bio: 'Passionate about sharing knowledge and learning new technologies.',
      department: 'Computer Science',
      year: '3rd Year',
    });
    setIsEditing(false);
  };

  const mockStats = {
    resourcesUploaded: 12,
    totalDownloads: 156,
    averageRating: 4.2,
    memberSince: '2023-09-15',
  };

  const mockRecentActivity = [
    { id: 1, action: 'Uploaded', resource: 'Machine Learning Basics', date: '2024-01-15' },
    { id: 2, action: 'Downloaded', resource: 'Web Development Guide', date: '2024-01-10' },
    { id: 3, action: 'Rated', resource: 'Python Programming', date: '2024-01-08' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Profile Header */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  sx={{ width: 100, height: 100, mr: 3 }}
                >
                  {user?.username?.[0]?.toUpperCase() || 'U'}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" gutterBottom>
                    {user?.username}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    {user?.email}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                    <Chip label="Active Member" color="success" size="small" />
                    <Chip label="Verified" color="primary" size="small" />
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
                  onClick={isEditing ? handleSave : () => setIsEditing(true)}
                >
                  {isEditing ? 'Save' : 'Edit Profile'}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Profile Details */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Profile Information
              </Typography>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={!isEditing}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    disabled={!isEditing}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    disabled={!isEditing}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    disabled={!isEditing}
                    multiline
                    rows={3}
                    margin="normal"
                  />
                </Grid>
              </Grid>

              {isEditing && (
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  <Button variant="contained" onClick={handleSave}>
                    Save Changes
                  </Button>
                  <Button variant="outlined" onClick={handleCancel}>
                    Cancel
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              <List>
                {mockRecentActivity.map((activity) => (
                  <ListItem key={activity.id}>
                    <ListItemIcon>
                      <SchoolIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${activity.action} "${activity.resource}"`}
                      secondary={activity.date}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Stats Sidebar */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Statistics
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h4" color="primary">
                  {mockStats.resourcesUploaded}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Resources Uploaded
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h4" color="primary">
                  {mockStats.totalDownloads}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Downloads
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h4" color="primary">
                  {mockStats.averageRating}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Average Rating
                </Typography>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box>
                <Typography variant="body2" color="text.secondary">
                  Member Since
                </Typography>
                <Typography variant="body1">
                  {new Date(mockStats.memberSince).toLocaleDateString()}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;


