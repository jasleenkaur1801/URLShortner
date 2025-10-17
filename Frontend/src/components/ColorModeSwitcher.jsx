import { IconButton, useColorMode } from '@chakra-ui/react';import { FaSun, FaMoon } from 'react-icons/fa';

export default function ColorModeSwitcher(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      {...props}
    />
  );
}
