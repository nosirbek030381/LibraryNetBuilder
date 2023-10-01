import React from 'react';
import { Typography, Box, Grid, Avatar, useMediaQuery, useTheme } from '@mui/material';
import { TeamMembers } from '../../constant';
import { Footer } from '..';

const TeamSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box py={4} bgcolor="#f8f8f8" mt={isMobile ? 3:8} sx={{
      boxShadow: '5px 5px 5px rgba(0, 0, 0, .1)'
    }}>
      <Typography variant="h4" align="center" mb={4} textTransform={'uppercase'} fontSize={30}>
        Jamoamiz
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {TeamMembers.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={2}
              border="1px solid #e0e0e0"
              borderRadius="8px"
            >
              <Avatar src={member.avatar} alt={member.name} sx={{ width: 120, height: 120, mb: 2 }} />
              <Typography variant="h6" align="center" mb={1}>
                {member.name}
              </Typography>
              <Typography variant="subtitle1" align="center" color="textSecondary">
                {member.role}
              </Typography>
              <Typography variant="subtitle2" align="center" color="textSecondary">
                {member.desc}
              </Typography>

            </Box>
          </Grid>
        ))}
      </Grid>
      
    </Box>
  );
};

export default TeamSection;
