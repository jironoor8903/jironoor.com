// import React from 'react';
// import { Text, HStack, Spacer, useDisclosure, Button, VStack, Center } from '@chakra-ui/react';

// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from '@chakra-ui/react';
// import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

// const Navbar = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleProjectsClick = () => {
//     // Handle projects click
//     console.log('Projects button clicked');
//   };

//   return (
//     <HStack spacing="20px" bg="white" p="4" justify="flex-end">
//       <Spacer />
//       <Text
//         fontSize="md"
//         fontFamily="Inter"
//         fontWeight="600"
//         color="gray.600"
//         _hover={{ color: 'blue.500' }}
//         transition="color 0.2s"
//         cursor="pointer"
//       >
//         Home
//       </Text>
//       <Text
//         fontSize="md"
//         fontFamily="Inter"
//         fontWeight="600"
//         color="gray.600"
//         _hover={{ color: 'blue.500' }}
//         transition="color 0.2s"
//         cursor="pointer"
//         onClick={handleProjectsClick}
//       >
//         Projects
//       </Text>
//       <Text
//         fontSize="md"
//         fontFamily="Inter"
//         fontWeight="600"
//         color="gray.600"
//         _hover={{ color: 'blue.500' }}
//         transition="color 0.2s"
//         cursor="pointer"
//         onClick={onOpen}
//       >
//         Contact me
//       </Text>

//       <Modal onClose={onClose} isOpen={isOpen} isCentered>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Contact me</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             {/* Add your contact form or content here */}
//             <Center>
//               <VStack spacing={4} align="start">
//                 <a href="https://linkedin.com/in/jiro-ryzard-noor" target="_blank" rel="noopener noreferrer">
//                   <HStack>
//                     <AiFillLinkedin size={24} />
//                     <Text>Jiro Noor</Text>
//                   </HStack>
//                 </a>
//                 <a href="https://twitter.com/jiro_noor" target="_blank" rel="noopener noreferrer">
//                   <HStack>
//                     <AiOutlineTwitter size={24} />
//                     <Text>@jiro_noor</Text>
//                   </HStack>
//                 </a>
//                 <a href="https://github.com/jironoor8903" target="_blank" rel="noopener noreferrer">
//                   <HStack>
//                     <AiFillGithub size={24} />
//                     <Text>@jironoor8903</Text>
//                   </HStack>
//                 </a>
//               </VStack>
//             </Center>
//           </ModalBody>
//           <ModalFooter>
//             <Button onClick={onClose}>Close</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </HStack>
//   );
// };

// export default Navbar;

import React from 'react';
import { Text, HStack, Spacer, useDisclosure, Button, VStack, Center } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text as ChakraText } from '@chakra-ui/react';
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Navbar = ({ onProjectsClick, onHomeClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleContactClick = () => {
    onOpen();
  };

  return (
    <HStack spacing="20px" bg="white" p="4" justify="flex-end">
      <Spacer />
      <Text
        fontSize="md"
        fontFamily="Inter"
        fontWeight="600"
        color="gray.600"
        _hover={{ color: 'blue.500' }}
        transition="color 0.2s"
        cursor="pointer"
        onClick={onHomeClick}
      >
        Home
      </Text>
      <Text
        fontSize="md"
        fontFamily="Inter"
        fontWeight="600"
        color="gray.600"
        _hover={{ color: 'blue.500' }}
        transition="color 0.2s"
        cursor="pointer"
        onClick={onProjectsClick}
      >
        Projects
      </Text>
      <Text
        fontSize="md"
        fontFamily="Inter"
        fontWeight="600"
        color="gray.600"
        _hover={{ color: 'blue.500' }}
        transition="color 0.2s"
        cursor="pointer"
        onClick={handleContactClick}
      >
        Contact me
      </Text>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Add your contact form or content here */}
            <Center>
              <VStack spacing={4} align="start">
                <a href="https://linkedin.com/in/jiro-ryzard-noor" target="_blank" rel="noopener noreferrer">
                  <HStack>
                    <AiFillLinkedin size={24} />
                    <ChakraText>Jiro Noor</ChakraText>
                  </HStack>
                </a>
                <a href="https://twitter.com/jiro_noor" target="_blank" rel="noopener noreferrer">
                  <HStack>
                    <AiOutlineTwitter size={24} />
                    <ChakraText>@jiro_noor</ChakraText>
                  </HStack>
                </a>
                <a href="https://github.com/jironoor8903" target="_blank" rel="noopener noreferrer">
                  <HStack>
                    <AiFillGithub size={24} />
                    <ChakraText>@jironoor8903</ChakraText>
                  </HStack>
                </a>
              </VStack>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default Navbar;
