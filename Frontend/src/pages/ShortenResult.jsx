import { useLocation, Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  Typography,
  Link,
  Button,
  Snackbar,
  Alert,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useClipboard } from 'use-clipboard-copy';

export default function ShortenResult() {
  const { state } = useLocation();
  const clipboard = useClipboard();
  const [snackbar, setSnackbar] = useState({ open: false, message: '' });

  if (!state?.shortUrl) {
    return <Typography>No data — go back <RouterLink to="/">home</RouterLink>.</Typography>;
  }

  const { shortUrl } = state;

  const handleCopy = () => {
    clipboard.copy(shortUrl);
    setSnackbar({ open: true, message: 'Copied to clipboard!' });
  };

  const handleClose = () => setSnackbar((s) => ({ ...s, open: false }));

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Stack spacing={3} alignItems="center">
        <Typography variant="h6">Your Shortened URL:</Typography>
        <Link href={shortUrl} target="_blank" rel="noopener">
          {shortUrl}
        </Link>
        <Button
          startIcon={<ContentCopyIcon />}
          variant="outlined"
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Copy URL
        </Button>
        <Button component={RouterLink} to="/" variant="text">
          Shorten another
        </Button>
      </Stack>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </motion.div>
  );
}
