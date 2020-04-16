import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Button, Divider, Flex, Icon, Relative } from 'pcln-design-system';

// eslint-disable-next-line no-unused-vars
const Home = props => {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push('/product');
  }

  return (
    <div>
      <h2>Home</h2>
      <Divider borderColor="blue" />
      <Flex alignItems="center" justifyContent="center">
        <Box width={1} mb={2}>
          <Button radius={4} size="large" mr={2} color="primary" disabled>
            <Relative p={2}>
              <Icon name="Document" size="20" />
            </Relative>
            Catálogo
          </Button>
        </Box>
        <Box width={1} mb={2}>
          <Button radius={4} size="large" mr={2} color="primary" onClick={handleSubmit}>
            <Relative p={2}>
              <Icon name="Document" size="20" />
            </Relative>
            Producto
          </Button>
        </Box>
        <Box width={1} mb={2}>
          <Button radius={4} size="large" mr={2} color="primary" disabled>
            <Relative p={2}>
              <Icon name="Document" size="20" />
            </Relative>
            Ficha
          </Button>
        </Box>
        <Box width={1} mb={2}>
          <Button radius={4} size="large" mr={2} color="primary" disabled>
            <Relative p={2}>
              <Icon name="Document" size="20" />
            </Relative>
            Listados
          </Button>
        </Box>
      </Flex>
      <Divider borderColor="blue" />
    </div>
  );
};

export default Home;
