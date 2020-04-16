import React from 'react';
import { useHistory } from 'react-router-dom';

import { Box, Button, Divider, Icon, Relative } from 'pcln-design-system';

import { Grid, Cell } from 'styled-css-grid';

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
      <Grid columns={2}>
        <Cell width={1}>
          <Box width={1} mb={2}>
            <Button width="100%" radius={4} size="large" mr={2} color="primary" disabled>
              <Relative p={2}>
                <Icon name="Document" size="20" />
              </Relative>
              Catálogo
            </Button>
          </Box>
        </Cell>
        <Cell width={1}>
          <Box width={1} mb={2}>
            <Button
              width="100%"
              radius={4}
              size="large"
              mr={2}
              color="primary"
              onClick={handleSubmit}
            >
              <Relative p={2}>
                <Icon name="Document" size="20" />
              </Relative>
              Producto
            </Button>
          </Box>
        </Cell>

        <Cell width={1}>
          <Box width={1} mb={1}>
            <Button width="100%" radius={4} size="large" mr={2} color="primary" disabled>
              <Relative p={2}>
                <Icon name="Document" size="20" />
              </Relative>
              Ficha
            </Button>
          </Box>
        </Cell>
        <Cell width={1}>
          <Box width={1} mb={1}>
            <Button width="100%" radius={4} size="large" mr={2} color="primary" disabled>
              <Relative p={2}>
                <Icon name="Document" size="20" />
              </Relative>
              Listados
            </Button>
          </Box>
        </Cell>
      </Grid>
      <Divider borderColor="blue" />
    </div>
  );
};

export default Home;
