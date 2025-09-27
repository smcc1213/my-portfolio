import { useEffect, useMemo, useRef, useState } from 'react';

type Props = { onDone: () => void };

export default function IntroGreeting({ onDone }: Props) {
  const greetings = useMemo(
    () => [
      'Hello', // English
      'Hola', // Spanish
      'Bonjour', // French
      'Ciao', // Italian
      'Hallo', // German
      '안녕하세요', // Korean
      'مرحبا', // Arabic
      'こんにちは', // Japanese
      'Hello, World!', // final
    ],
    []
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const raf = useRef<number | null>(null);
  const delayRef = useRef(0);
  const lastFrame = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) onDone();
  }, [onDone]);

  useEffect(() => {
    const typeSpeed = 10;
    const deleteSpeed = 20;
    const holdFullMs = 650;
    const holdEmptyMs = 250;

    const tick = (now: number) => {
      const elapsed = now - lastFrame.current;
      if (elapsed < 16) {
        raf.current = requestAnimationFrame(tick);
        return;
      }
      lastFrame.current = now;

      if (delayRef.current > 0) {
        delayRef.current -= elapsed;
        raf.current = requestAnimationFrame(tick);
        return;
      }

      const phrase = greetings[phraseIndex];
      if (!isDeleting) {
        const next = phrase.slice(0, text.length + 1);
        setText(next);
        if (next === phrase) {
          if (phrase === 'Hello, World!') {
            delayRef.current = holdFullMs;
            setTimeout(onDone, holdFullMs);
            return;
          }
          delayRef.current = holdFullMs;
          setIsDeleting(true);
        } else {
          delayRef.current = typeSpeed;
        }
      } else {
        const next = phrase.slice(0, Math.max(0, text.length - 1));
        setText(next);
        if (next === '') {
          delayRef.current = holdEmptyMs;
          setIsDeleting(false);
          setPhraseIndex((i) => Math.min(i + 1, greetings.length - 1));
        } else {
          delayRef.current = deleteSpeed;
        }
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [greetings, isDeleting, onDone, phraseIndex, text]);

  return (
    <div className="intro" role="dialog" aria-label="Intro greeting" aria-live="polite">
      <div className="intro-card">
        <span className="intro-text" dir="auto">
          {text}
          <span className="cursor" aria-hidden="true">
            |
          </span>
        </span>
      </div>
    </div>
  );
}
