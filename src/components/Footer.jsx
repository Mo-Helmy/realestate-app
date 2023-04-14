import { Box } from '@chakra-ui/layout';

import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.100"
    >
      Copyright © {new Date().getFullYear()} All rights reserved | This project
      is made with{' '}
      <span style={{ color: 'tomato', fontWeight: 'bold', fontSize: '24px' }}>
        ♡
      </span>{' '}
      by{' '}
      <a
        href="https://mohelmy-portfolio.vercel.app/"
        style={{ color: 'tomato', fontWeight: 'bold' }}
      >
        Mo.Helmy
      </a>
    </Box>
  );
};

export default Footer;
