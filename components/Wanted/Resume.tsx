import { Button, Image, Stack } from '@mantine/core';

import { IconFileTypePdf } from '@tabler/icons-react';
import Link from 'next/link';

export default function Resume() {
  return (
    <Stack justify="center" align="center">
      <Image fit="contain" src="/personal-website/resume.png" w="95%" h="100%" />
      <Link
        onClick={(event) => {
          event.preventDefault();
          window.open('/personal-website/Lauren_Pappas_Resume.pdf');
        }}
        href="/personal-website/Lauren_Pappas_Resume.pdf"
      >
        <Button leftSection={<IconFileTypePdf size={18} />} bg="#99b56d">
          Download Resume
        </Button>
      </Link>
    </Stack>
  );
}
