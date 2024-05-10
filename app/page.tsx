import { Flex } from '@mantine/core';
import { RecordPlayer } from '@/components/RecordPlayer';
import Wanted from '@/components/Wanted/Wanted';

export default function HomePage() {
  return (
    <>
      <RecordPlayer />
      <Flex justify="center" align="center" mt={250}>
        <Wanted />
      </Flex>
    </>
  );
}
