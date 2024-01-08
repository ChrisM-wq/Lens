import { Box, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

const RandomText = () => {
  const [parentArray, setParentArray] = useState([
    ['L', 'E', 'N', 'S', '_', 'S', 'N', 'L', '_', '_', '_', '_', '_', '_', '_', 'E', 'L', 'N', '_', 'S', 'S','_', '_', '_', '_', '_','S', '_', '_', 'N', 'E'],
    ['_', '_', 'N', 'S', 'E', '_', 'L', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
    ['_', '_', 'S', '_', '_', 'N', 'E', 'L', 'E', '_', 'S', 'N', 'L', '_', 'E', 'N', 'N', 'L', '_', 'S'],
    ['_', '_', 'N', 'E', 'S', 'L', 'N', '_', 'S', '_', '_', '_', '_', '_'],
    ['S', '_', 'E', 'L', 'N', '_', 'S', 'S','_', '_', '_', '_', '_','S', '_', '_', 'N', 'E', '_', 'E', 'L', 'N', '_', 'S', 'S','_', '_', '_', '_', '_','S', '_', '_', 'N', 'L'],
    ['_', 'L', 'N', 'E', 'S', '_', '_', '_', '_', 'S', '_', 'E', '_', '_', 'N', '_', 'N', '_', 'E', 'L', 'N', '_', 'S', 'S','_', '_', '_', '_', '_','S', '_', '_', 'N', 'S'],
    ['_', '_', '_', 'L', '_', 'N', 'L', 'E', 'S', '_', 'N', 'L', '_', 'L', '_', 'L', 'N', '_', 'L', 'S', '_', '_'],
    ['E', 'S', '_', 'N', '_', 'N', 'E', '_', '_', '_', '_', '_', '_', '_', 'N', '_', 'S', '_', 'S', '_', '_', '_', 'E', 'L', 'N', '_', 'S', 'S','_', '_', '_', '_', '_','S', '_', '_', 'N', 'E'],
    ['L', 'E', 'E', '_', 'N', '_', '_', 'N', 'L', 'S', '_', 'L', 'E', '_', '_', 'E', 'N', '_', 'L', '_', 'S', '_'],
    ['_', '_', 'S', 'N', '_', 'E', '_', 'L', 'N', 'E', '_', 'S', '_', 'S', '_', 'L', 'E', '_', 'N', 'E', 'S'],
    ['_', '_', 'S', '_', '_', 'N', 'E', 'L', 'E', '_', 'S', 'N', 'L', '_', 'E', 'N', 'N', 'L', '_', 'S', '_', 'E', 'L', 'N', '_', 'S', 'S','_', '_', '_', '_', '_','S', '_'],
    ['_', '_', 'N', 'E', 'S', 'L', 'N', '_', 'S', '_', '_', '_', '_', '_'],
    ['S', '_', 'E', 'L', 'N', '_', 'S', 'S','_', '_', '_', '_', '_','S', '_', '_', 'E'],
    ['_', 'L', 'N', 'E', 'S', '_', '_', '_', '_', 'S', '_', 'E', '_', '_', 'N', '_', 'N', 'S', '_', '_', '_', '_', 'S', '_', 'E', '_','N', '_', 'S', '_', 'S', '_', '_', '_'],
    ['_', '_', '_', 'L', '_', 'N', 'L', 'E', 'S', '_', 'N', 'L', '_', 'L', '_', 'L', 'N', '_', 'L', 'S', '_', '_', '_', 'E', 'L', 'N', '_', 'S', 'S','_', '_', '_', '_', '_','S', '_', '_', 'N'],
    ['E', 'S', '_', 'N', '_', 'N', 'E', '_', '_', '_', '_', '_', '_', '_', 'N', '_', 'S', '_', 'S', '_', '_', '_', 'E', 'L', 'N', '_', 'S', 'S','_', '_', '_', '_', '_','S', '_', '_', 'L']
  ]);

  const [hiddenIndexes, setHiddenIndexes] = useState([]);
  const [isRevealing, setIsRevealing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRevealing) {
        // Hiding letters
        const randomLineIndex = Math.floor(Math.random() * parentArray.length);
        const randomLetterIndex = Math.floor(Math.random() * parentArray[randomLineIndex].length);

        setHiddenIndexes((prevHiddenIndexes) => {
          const updatedHiddenIndexes = [...prevHiddenIndexes, [randomLineIndex, randomLetterIndex]];

          if (updatedHiddenIndexes.length >= 60) {
            setIsRevealing(true);
          }

          return updatedHiddenIndexes;
        });
      } else {
        // Revealing letters
        setHiddenIndexes((prevHiddenIndexes) => {
          const updatedHiddenIndexes = [...prevHiddenIndexes];
          const lastHiddenIndex = updatedHiddenIndexes.pop();

          if (updatedHiddenIndexes.length === 0) {
            setIsRevealing(false);
          }

          return updatedHiddenIndexes;
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [parentArray, isRevealing]);

  return (
    <Box sx={{ textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', userSelect: 'none'}}>
      {parentArray.map((line, index) => (
        <div key={index} style={{ display: 'flex', gap: 4 }}>
          {line.map((letter, subIndex) => (
            <Typography
              key={subIndex}
              sx={
                ['L', 'E', 'N', 'S'].includes(letter)
                  ? {
                      opacity: hiddenIndexes.some(([lineIndex, letterIndex]) => index === lineIndex && subIndex === letterIndex)
                        ? 0
                        : 1,
                      transition: 'opacity 0.4s ease',
                      fontFamily: 'sans-serif',
                      fontSize: '20px'
                    }
                  : { opacity: 0 }
              }
            >
              {letter}
            </Typography>
          ))}
        </div>
      ))}
    </Box>
  );
};

export default RandomText;