import { Flex } from '@mantine/core';
import { RecordPlayer } from '@/components/RecordPlayer';
import ResumeModal from '@/components/Resume/ResumeModal';

export default function HomePage() {
  return (
    <>
      <RecordPlayer />
      <Flex justify="center" align="center" mt={250}>
        <ResumeModal />
      </Flex>
    </>
  );
}
