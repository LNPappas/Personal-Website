import { Image, Flex } from '@mantine/core';
import classes from './RecordPlayer.module.css';

export default function RecordPlayer() {
  return (
    <Flex justify="center" align="center" pos="relative">
      <Image
        src="/personal-website/Record.png"
        alt="Record"
        className={classes.record}
        pos="absolute"
      />
      <Image
        src="/personal-website/RecordPlayerNeedle.png"
        alt="RecordPlayerNeedle"
        className={classes.recordPlayerNeedle}
        pos="absolute"
      />
      <Image
        src="/personal-website/RecordPlayer.png"
        alt="RecordPlayer"
        className={classes.recordPlayer}
        pos="absolute"
      />
    </Flex>
  );
}
