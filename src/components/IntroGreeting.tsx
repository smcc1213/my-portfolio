import { useEffect, useMemo, useRef, useState } from 'react';

type Props = { onComplete: () => void };

export default function IntroGreeting({ onComplete }: Props) {
  const greetings = useMemo(
    () => [
      'Hello ', // English
      'Hola ', // Spanish
      'Bonjour ', // French
      'Ciao ', // Italian
      'こんにちは ', // Japanese
      '안녕하세요 ', // Korean
      'Hallo ', // German
      'مرحبا ', // Arabic
      'नमस्ते ', // Hindi
      'Salam ', // Persian
      'Hello, World!', // English (programming tradition)
    ],
    []
  );

  const [greetingIndex, setGreetingIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const rafRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number>(0);
  const delayRef = useRef(0);

  useEffect(() => {
    const reduceText = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceText) onComplete();
  }, [onComplete]);

  useEffect(() => {
    const typeSpeed = 15;
    const deleteSpeed = 25;
    const holdFullMs = 650;
    const holdEmptyMs = 250;

    const tick = (now: number) => {
      const elapsed = now - lastFrameRef.current;
      if (elapsed < 16) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      lastFrameRef.current = now;

      if (delayRef.current > 0) {
        delayRef.current -= elapsed;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const phrase = greetings[greetingIndex];
      if (!isDeleting) {
        const next = phrase.slice(0, text.length + 1);
        setText(next);
        if (next === phrase) {
          if (phrase === 'Hello, World!') {
            delayRef.current = holdFullMs;
            setTimeout(onComplete, holdFullMs);
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
          setGreetingIndex((i) => Math.min(i + 1, greetings.length - 1));
        } else {
          delayRef.current = deleteSpeed;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [greetings, isDeleting, onComplete, greetingIndex, text]);

  return (
    <div className="intro" role="dialog" aria-label="Introduction Greeting" aria-live="polite">
      <div className="intro-card">
        <span className="intro-text" dir="auto">
          {text}
          <span className="cursor" aria-hidden>
            |
          </span>
        </span>
      </div>
    </div>
  );
}
