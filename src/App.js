import React, { useState } from 'react';
import Navbar from './Navbar';
import { ChakraProvider, Box, Stack, Avatar, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, CSSReset, Flex } from '@chakra-ui/react';
import '@fontsource/inter'; // Import the Inter font
import Content from './Content';
import Projects from './Projects';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleProjectsClick = () => {
    setCurrentPage('projects');
  };

  const handleHomeClick = () => {
    setCurrentPage('home');
  };

  const renderPage = () => {
    if (currentPage === 'projects') {
      return <Projects />;
    } else {
      return (
          <Content />
      );
    }
  };

  return (
    <ChakraProvider>
      <Box
        bg="linear-gradient(330deg, hsl(272, 53%, 50%) 0%, hsl(226, 68%, 56%) 100%)"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
      >
        <Navbar onProjectsClick={handleProjectsClick} onHomeClick={handleHomeClick} />
        {renderPage()}
      </Box>
    </ChakraProvider>
  );
}

export default App;
