import Box from '@mui/material/Box';
// import Header from '../components/Header';
// import Discover from '../components/Discover';
// import Trending from '../components/Trending';
// import Articles from '../components/Articles';

import TopicSelector from "../../components/TopicSelector"
import Articles from '../../components/Articles';
import { useEffect, useState } from 'react';
import Discover from '../../components/Discover';

const HomePage = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <Box sx={{ margin: '0 24px', px: 40, display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '728px'}}>
        <TopicSelector isVisible={isVisible} />
        <Box sx={{ marginTop: isVisible ? '107px' : '50px', transition: 'ease 0.1s', display: 'flex', gap: 10 }}>
          <Articles />
        </Box>
      </Box>
      <Discover />
    </Box>
      
    </>
  );
};

export default HomePage;
