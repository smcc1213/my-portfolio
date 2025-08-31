import { useEffect } from 'react';

type SnackbarProps = {
  message: string;
  type: 'success' | 'error' | 'info';
  open: boolean;
  onClose: () => void;
  duration?: number;
};

export default function Snackbar({
  message,
  type = 'success',
  open,
  onClose,
  duration = 4000,
}: SnackbarProps) {
  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [open, onClose, duration]);

  return <div className={`snackbar ${open ? 'show' : ''} ${type}`}>{message}</div>;
}
