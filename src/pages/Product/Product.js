import React from 'react';

import Search from '../../components/Search';
import AddProduct from '../../components/AddProduct';
import ViewCard from '../../components/ViewCard';

import { Flex, Box, Button, Container, Divider, Icon, Relative } from 'pcln-design-system';

// eslint-disable-next-line no-unused-vars
const Product = props => {
  function changeView(nameViewParam) {
    switch (nameViewParam) {
      case 'addProduct':
        return <AddProduct />;
      case 'viewCard':
        return <ViewCard />;
      default:
        return <AddProduct />;
    }
  }

  return (
    <div>
      <h2>Product</h2>
      <Divider borderColor="blue" />
      <Flex>
        <Box width={1} mb={2}>
          <Button
            radius={4}
            size="large"
            mr={2}
            color="primary"
            onClick={() => changeView('addProduct')}
          >
            <Relative p={2}>
              <Icon name="Document" size="20" />
            </Relative>
            Añadir
          </Button>
        </Box>
        <Box width={1} p={0} mb={2} color="white">
          <Button
            radius={4}
            size="large"
            mr={2}
            color="primary"
            onClick={() => changeView('viewCard')}
          >
            <Relative p={2}>
              <Icon name="Document" size="20" />
            </Relative>
            Ficha
          </Button>
        </Box>
        <Box width={1} p={0} mb={2} color="white">
          <Button radius={4} size="large" mr={2} color="primary" disabled>
            <Relative p={2}>
              <Icon name="Document" size="20" />
            </Relative>
            Listados
          </Button>
        </Box>
      </Flex>
      <Flex>
        <Box width={1} p={0} mb={2} mt={2} color="white">
          <Search />
        </Box>
      </Flex>
      <Divider borderColor="blue" />
      <Flex>
        <Container>
          <Box p={3}>{changeView()}</Box>
        </Container>
      </Flex>
    </div>
  );
};

export default Product;
