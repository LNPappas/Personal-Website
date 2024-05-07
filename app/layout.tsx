import './styles.css';
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';

export const metadata = {
  title: 'Lauren Pappas',
  description: 'Personal Website for Lauren Pappas',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/next-website/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
