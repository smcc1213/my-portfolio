import { useEffect, useState } from 'react';
import IntroGreeting from '../components/IntroGreeting';
import SelectedProjects from '../components/SelectedProjects';

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('introDone') === 'true';
    if (seen) {
      setIntroDone(true);
      setAnimate(true); // skip intro if already seen this session
    }
  }, []);

  const handleIntroDone = () => {
    sessionStorage.setItem('introDone', 'true');
    setIntroDone(true);
    // trigger reveal on next frame so animation plays
    requestAnimationFrame(() => setAnimate(true));
  };

  if (!introDone) return <IntroGreeting onDone={handleIntroDone} />;

  return (
    <>
      <span className="intro-text-home" dir="auto">
        Hello, World!
      </span>

      <div className={`hero ${animate ? 'reveal' : ''}`}>
        <section className="hero-row">
          <h1 className="hero-title">I'm Sean McConville.</h1>
          <img className="my-portrait" src={`${import.meta.env.BASE_URL}me-bw-no-bg.jpg`} alt="Portrait of Sean McConville" />
        </section>
        <h1 className="hero-title-2">Full Stack Software Engineer.</h1>
        <p className="hero-subtitle">I design and build reliable, scalable applications.</p>
        <p className="hero-subtitle-2">Available to be part of your team.</p>
      </div>

      <section className="selected-block">
        <SelectedProjects />
      </section>
    </>
  );
}
