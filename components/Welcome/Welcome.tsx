import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100} mb={300}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'white', to: 'black' }}>
          Welcome
        </Text>
      </Title>
    </>
  );
}