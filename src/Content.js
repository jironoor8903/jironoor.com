import React from 'react';
import { Stack, Avatar, Flex, Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Link } from '@chakra-ui/react';
import { FaEnvelope, FaUserCircle, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from './profile-pic.png'; // Replace './src/profile-pic.jpg' with the actual path to your image

const Content = () => {
  return (
    <Stack spacing={4} align="center" mt={40}>
      <Avatar src={profilePic} name="Jiro" size="xl" />
      <Flex alignItems="center">
        <Box
          fontFamily="Inter"
          fontWeight="800"
          fontSize="38px"
          lineHeight="48px"
          color="white"
        >
          Hi{'\u{1F44B}'} my name is Jiro
        </Box>
      </Flex>
      <Box bg="white" p={4} borderRadius="md">
        <Accordion allowToggle width="350px">
          <style>
            {`
            .accordion-button {
              border-bottom: none;
            }

            .accordion-panel {
              border-top: none;
            }
          `}
          </style>
          <AccordionItem>
            <h2>
              <AccordionButton
                fontFamily="'Untitled Sans', -apple-system, system-ui, sans-serif"
                fontWeight="400"
              >
                <Box as="span" flex="1" textAlign="left" color="#5746af">
                  About me
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              fontFamily="'Untitled Sans', -apple-system, system-ui, sans-serif"
              fontWeight="400"
              pb={4}
            >
              I'm a double major Computer Science and Data science student at UC Berkeley. 
              I love building web applications and learning new frameworks. Ultimately, my goal is to build applications that improve lifestyles.
              Currently, I am exploring the world of full stack development and am looking for opportunities to grow as a developer.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                fontFamily="'Untitled Sans', -apple-system, system-ui, sans-serif"
                fontWeight="400"
              >
                <Box as="span" flex="1" textAlign="left" color="#5746af">
                  Education
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              fontFamily="'Untitled Sans', -apple-system, system-ui, sans-serif"
              fontWeight="400"
              pb={4}
            >
              UC Berkeley. B.A. Computer Science and Data Science (Domain Emphasis: Business Analytics)
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                fontFamily="'Untitled Sans', -apple-system, system-ui, sans-serif"
                fontWeight="400"
              >
                <Box as="span" flex="1" textAlign="left" color="#5746af">
                  Work Experience
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              fontFamily="'Untitled Sans', -apple-system, system-ui, sans-serif"
              fontWeight="400"
              pb={4}
            >
             Present - Software Engineer Intern @<a href="https://www.uber.com/us/en/uber-for-business/">Caterpillar</a>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Flex justify="center" mt={4}>
          <Link href="mailto:jiro.noor@berkeley.edu" isExternal>
            <FaEnvelope size={24} color="#5746af" />
          </Link>
          <Link href="https://www.linkedin.com/in/jiro-ryzard-noor" isExternal ml={4}>
            <FaLinkedin size={24} color="#5746af" />
          </Link>
          <Link href="https://github.com/jironoor8903" isExternal ml={4}>
            <FaGithub size={24} color="#5746af" />
          </Link>
          <Link href="https://read.cv/jironoor" isExternal ml={4}>
            <FaFileAlt size={24} color="#5746af" />
          </Link>
        </Flex>
      </Box>
    </Stack>
  );
};

export default Content;
