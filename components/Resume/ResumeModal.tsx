'use client';

import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconFileTypePdf } from '@tabler/icons-react';
import Link from 'next/link';
import Resume from './Resume';
import classes from './ResumeModal.module.css';

export default function ResumeModal() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size={1000}
        classNames={{ content: classes.modalBackground, header: classes.modalHeader }}
      >
        <Resume />
      </Modal>
      <Group justify="center" align="center">
        <Link href="https://www.linkedin.com/in/lauren-n-pappas/" passHref>
          <Button leftSection={<IconBrandLinkedin size={18} />}>LinkedIn</Button>
        </Link>
        <Button leftSection={<IconFileTypePdf size={18} />} bg="#99b56d" onClick={open}>
          Resume
        </Button>
        <Link href="https://github.com/LNPappas" passHref>
          <Button bg="black" leftSection={<IconBrandGithub size={18} />}>
            GitHub
          </Button>
        </Link>
      </Group>
    </>
  );
}
