import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Snackbar from '../components/Snackbar';

type FormState = 'idle' | 'submitting';
export default function Contact() {
  const [state, setState] = useState<FormState>('idle');
  const [toast, setToast] = useState({
    open: false,
    type: 'success' as 'success' | 'error',
    message: '',
  });
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error(`Request Failed: ${res.status}`);
      setToast({
        open: true,
        type: 'success',
        message: 'Message sent successfully!',
      });
      form.reset();
    } catch {
      setToast({
        open: true,
        type: 'error',
        message: 'Could not send message. Please try again.',
      });
    } finally {
      setState('idle');
    }
  }

  return (
    <section>
      <h2>Contact</h2>
      <p>Let's talk. Send me a note and I'll get back to you.</p>

      <form className="contact-form" onSubmit={onSubmit} autoComplete="off" noValidate>
        <div className="row">
          <label>
            Name <input name="name" type="text" required />
          </label>
          <label>
            Email <input name="email" type="email" required />
          </label>
        </div>
        <label>
          Message <textarea name="message" rows={6} required />
        </label>
        <input type="hidden" name="_subject" value="Portfolio Contact" />
        <button className="submit-button" disabled={state === 'submitting'} type="submit">
          {state === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="contact-socials">
        <p>Or Find Me On:</p>
        <div className="social-links">
          <a
            href="https://linkedin.com/in/seanmcconville1213"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/smcc1213" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

      <Snackbar
        open={toast.open}
        type={toast.type}
        message={toast.message}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
      />
    </section>
  );
}
