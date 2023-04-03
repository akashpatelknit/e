import React, { useState } from 'react';
import {VStack,Image} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
  loading,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />

      <HStack>
        <Text
          fontWeight={'bold'}
          textTransform="uppercase"
          children={'Creator'}
        />

        <Text
          fontFamily={'body'}
          textTransform="uppercase"
          children={creator}
        />
      </HStack>

      <Heading
        textAlign={'center'}
        size="xs"
        children={`Lectures - ${lectureCount}`}
        textTransform="uppercase"
      />

      <Heading
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />

      <Stack direction={['column', 'row']} alignItems="center">
        <Link to={`/course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};
const Courses = () => {
  const categories = [
    'app developement',
    'web development',
    'machine learning',
    'data science',
  ];
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children="All Courses" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a Course..."
        type="text"
        // focusBorderColor='yellow.200'
      />
      <HStack
        overflowX={'auto'}
        padding={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button
            key={index}
           
            minW={'60'}
            onClick={e => setCategory(e.target.value)}
          >
            <Text children={item} textAlign={'center'} />
          </Button>
        ))}
      </HStack>
      <Stack
      direction={['column','row']}
      flexWrap={'wrap'}
      justifyContent={['center','flex-start']}
      alignItems={['center','flex-start']}
      >
      
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      <Course/>
      </Stack>
    </Container>
  );
};

export default Courses;
