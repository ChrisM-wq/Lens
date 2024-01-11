
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { Divider } from '@mui/material';
import { useState } from 'react';
export default function TopicSelector({ isVisible }) {

  const [tab, setTab] = useState('For you')

  return (
    <Box sx={{ width: '100%', position: 'sticky', top: isVisible ? '58px' : '0', paddingTop: '16px', zIndex: 10, backgroundColor: '#fff', transition: 'linear 0.1s', mb: 8 }}>
      <Box sx={{ display: 'flex', gap: 3}}>
        <AddIcon sx={{ color: '#6b6b6b', paddingBottom: '16px', fontSize: '16px' }} />
        <Typography variant='topic' onClick={() => setTab('For you')} sx={{ borderBottom: tab === 'For you' && '1px solid #242021', color: tab === 'For you' && '#242021'}}>For you</Typography>
        <Typography variant='topic' onClick={() => setTab('Following')} sx={{ borderBottom: tab === 'Following' && '1px solid #242021', color: tab === 'Following' && '#242021'}}>Following</Typography>
        <Typography variant='topic' onClick={() => setTab('Software Development')} sx={{ borderBottom: tab === 'Software Development' && '1px solid #242021', color: tab === 'Software Development' && '#242021'}}>Software Development</Typography>
        <Typography variant='topic' onClick={() => setTab('Technology')} sx={{ borderBottom: tab === 'Technology' && '1px solid #242021', color: tab === 'Technology' && '#242021'}}>Technology</Typography>
        <Typography variant='topic' onClick={() => setTab('Programming')} sx={{ borderBottom: tab === 'Programming' && '1px solid #242021', color: tab === 'Programming' && '#242021'}}>Programming</Typography>
      </Box>
      <Divider sx={{ mt: '-1px'}} />
    </Box>
  );
}