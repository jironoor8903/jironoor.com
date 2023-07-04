import { ChakraProvider, Button, Grid, Box, Avatar, VStack, Heading, Text, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Link } from '@chakra-ui/react';
import '@fontsource/inter'; // Import the Inter font
import React, { useState } from 'react';
import project2 from './1.png';
import project3 from './3.png'
import powerbi from './powerbi.png';
import notiom from './notiom.svg';
import lokalsayur from './lokalsayur.webp';
import gitlogo from './gitlogo.png';

function App() {
  const projects = [
    {
      id: 1,
      name: 'RPA Dashboard',
      description: 'Power BI Dashboard for the Robotic Process Automation team at Caterpillar',
      avatarUrl: powerbi, // Customize the avatar URL per project
      explanation: 'Description: Coded R scripts to visualize data from the Robotics Process Automation team at Caterpillar inc. to help them understand their performance and identify areas of improvement using Microsoft Power B.I.'
    },
    {
      id: 2,
      name: 'Automated Team Time Reporting System',
      description: 'Automated reminder system for internal Team Time Reporting System',
      avatarUrl: project2, // Customize the avatar URL per project
      explanation: 'Description: Utilized DAX to query over 1000 rows of data to identify missing time entries and send automated reminders to the team to complete their time entries. The software automatically identiifes employee supervisors and reports to them if they excessively miss time entries. Automation is still currently in use for the IT division.'
    },
    {
      id: 3,
      name: 'The Office GPT',
      description: 'AI impersonation of your favorite characters from the famous TV Show "The Office".',
      avatarUrl: project3, // Customize the avatar URL per project
      explanation: 'Fine-tuned the "davinci" model using over 100 famous movie quotes from the character Michael Scott from the TV show "The Office" to develop a real-time AI messaging chat system. Implemented the web application using React, Node.js, and MongoDB.',
      link: 'https://theofficegpt.herokuapp.com/'
    },
    {
      id: 4,
      name: 'Notiom',
      description: 'Google Docs and Notion hybrid',
      avatarUrl: notiom, // Customize the avatar URL per project
      explanation: 'Created a Google Docs and Notion hybrid using Next.js for the frontend. Developed the backend by using Node.js and MongoDB to include features such as authentication, authorization, and cloud backup.',
      link:'https://notiombyjiro.vercel.app/'
    },
    {
      id: 5,
      name: 'Gitlet',
      description: 'Git in Java',
      avatarUrl: gitlogo, // Customize the avatar URL per project
      explanation: 'Utilized Java to implement a version-control system with basic git commands such as init, add, commit, merge, branch, and checkout. Used sha-1 and a parallel representation of classes as serialized files to ensure persistence.',
      link: 'https://github.com/jironoor8903/Git-Java'
    },
    {
      id: 6,
      name: 'Lokal Sayur',
      description: 'Connecting local farmers during COVID-19',
      avatarUrl: lokalsayur, // Customize the avatar URL per project
      explanation: 'Developed an Android-based application that aims to maintain the flow of the affected food supply chain of Indonesia due to the COVID crisis. The app connected street vendors with local customers so that local farmers could still sell their crops and earn money.',
      link: 'https://play.google.com/store/apps/details?id=com.madanidigital.lokalsayur'
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
      <ChakraProvider>
        <Flex justify="center" align="center" h="100vh">
          <Grid templateColumns="repeat(3, 1fr)" gap={4}>
            {projects.map((project) => (
              <Box
                key={project.id}
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="md"
                cursor="pointer"
                onClick={() => openModal(project)} // Open the modal on click
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                transition="all 0.2s"
                _hover={{ transform: 'scale(1.05)' }}
                maxW="240px"
                w="100%"
                h="100%"
                mx="auto"
              >
                <Avatar name={project.name} src={project.avatarUrl} size="lg" /> {/* Use the avatarUrl property */}
                <VStack mt={4} spacing={2} align="center">
                  <Heading as="h3" size="md" fontWeight="800" fontFamily="Inter">
                    <Link href={project.link} color="blue.500" isExternal>
                      <strong>{project.name}</strong>
                    </Link>
                  </Heading>
                  <Text fontFamily="'Untitled Sans', -apple-system, system-ui, sans-serif" fontWeight="400" fontSize="sm">
                    {project.description}
                  </Text>
                  <Text fontSize="xs" color="rgba(0, 0, 0, 0.4)">
                    Click to read more
                  </Text>
                </VStack>
              </Box>
            ))}
          </Grid>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProject?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>{selectedProject?.explanation}</Text>
              {selectedProject?.link && (
                <>
                  <br />
                  <Link href={selectedProject.link} color="blue.500" isExternal>
                    <strong>Project Link</strong>
                  </Link>
                </>
              )}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
  );
}

export default App;
