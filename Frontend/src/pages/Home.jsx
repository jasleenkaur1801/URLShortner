import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Snackbar,
  Alert,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
const MotionForm = motion('form');
import api from '../api/api';

const MotionButton = motion(Button);

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const navigate = useNavigate();

  const handleClose = () => setSnackbar((s) => ({ ...s, open: false }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await api.post('/shorten', { url });
      console.log(data);
      setSnackbar({ open: true, message: 'Link shortened!', severity: 'success' });
      navigate(`/result/${data.shortCode}`, { state: { shortUrl: data.shortUrl } });
    } catch (err) {
      const msg = err.response?.data?.error || 'Error shortening URL';
      setSnackbar({ open: true, message: msg, severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <MotionForm
      component="form"
      onSubmit={handleSubmit}
      sx={{ width: '100%' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      as={motion.div}
      transition={{ duration: 0.4 }}
    >
      <Stack spacing={2}>
        <TextField
          label="Enter URL to shorten"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          fullWidth
        />
        <MotionButton
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {loading ? 'Shortening…' : 'Shorten URL'}
        </MotionButton>
      </Stack>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </MotionForm>
  );
}
