import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';

import noresult from '../assets/images/noresult.svg';

const ErrorMessage = ({ message }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      marginTop="5"
      marginBottom="5"
    >
      <Image src={noresult} />
      <Text fontSize="xl" marginTop="3">
        {message}
      </Text>
    </Flex>
  );
};

export default ErrorMessage;
