import React, { useState } from 'react';
import { Box, Grid, List, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';

// Dummy Components
const PostJob = () => <Typography>📝 Post a New Job Form</Typography>;
const ManageJobs = () => <Typography>📋 List of Posted Jobs</Typography>;
const Applicants = () => <Typography>👥 List of Applicants</Typography>;
const CompanyProfile = () => <Typography>🏢 Company Profile Info</Typography>;

const CompanyPanel = () => {
  const [selectedSection, setSelectedSection] = useState('Post Job');

  const renderContent = () => {
    switch (selectedSection) {
      case 'Post Job':
        return <PostJob />;
      case 'Manage Jobs':
        return <ManageJobs />;
      case 'Applicants':
        return <Applicants />;
      case 'Company Profile':
        return <CompanyProfile />;
      default:
        return <PostJob />;
    }
  };

  const menuItems = ['Post Job', 'Manage Jobs', 'Applicants', 'Company Profile'];

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {/* Left Menu */}
        <Grid item xs={12} sm={3}>
          <Paper elevation={3}>
            <List>
              {menuItems.map((item) => (
                <ListItemButton
                  key={item}
                  selected={selectedSection === item}
                  onClick={() => setSelectedSection(item)}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Right Content */}
        <Grid item xs={12} sm={9}>
          <Paper elevation={3} sx={{ p: 2, minHeight: '400px' }}>
            <Typography variant="h6" gutterBottom>{selectedSection}</Typography>
            {renderContent()}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyPanel;
