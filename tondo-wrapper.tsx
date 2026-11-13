// What every example Tondo renders needs around it: Mantine's provider, as `.storybook/preview.tsx`
// gives Storybook's stories.
import type { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';

export default function TondoWrapper({ children }: { children: ReactNode }) {
  return <MantineProvider>{children}</MantineProvider>;
}
