import { useState } from 'react';

import IntroGreeting from '../components/IntroGreeting';
import SelectedProjects from '../components/SelectedProjects';

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  if (!introComplete) return <IntroGreeting onComplete={() => setIntroComplete(true)} />;

  return (
    <>
      <span className="intro-text-home" dir="auto">
        Hello, World!
      </span>
      <div className="hero-reveal">
        <section>
          <h1 className="hero-title">I'm Sean McConville</h1>
          <h1 className="hero-title-2">Full Stack Software Engineer</h1>
          <p className="hero-subtitle">
            I design and build reliable, scalable applications. Available to be part of your team.
          </p>
        </section>
        <aside>
          <SelectedProjects />
        </aside>
      </div>
    </>
  );
}
