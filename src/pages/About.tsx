import { useEffect, useState } from 'react';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 475);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: 340,
          padding: '32px 0',
        }}
      >
        <img
          src="/bey-the-dog.jpg"
          alt="Bey McConville portrait top"
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '3px solid #e2e8f0',
            objectFit: 'cover',
            background: '#fff',
            marginBottom: 16,
          }}
        />
        <div style={{ maxWidth: 340, width: '100%' }}>
          <h2 style={{ textAlign: 'center' }}>About Me</h2>
          <p
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.6,
              margin: '0 auto',
              maxWidth: 340,
              textAlign: 'left',
            }}
          >
            I'm Sean McConville, a passionate Full Stack Software Engineer focused on building
            reliable, scalable, and secure applications. I love building smooth user experiences,
            hardening Linux boxes, and shipping delightful tools.
          </p>
          <p
            style={{
              fontSize: '1.08rem',
              lineHeight: 1.6,
              margin: '16px auto 0',
              maxWidth: 340,
              textAlign: 'left',
              zIndex: 9999,
            }}
          >
            When I'm not coding, I enjoy hiking, playing the guitar, and spending time with my
            amazing dog, Bey (short for Beyonce). Let's connect and create something amazing
            together!
          </p>
        </div>
        <img
          src="/sean-about-pic-bw.jpg"
          alt="Sean McConville portrait bottom"
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            border: '3px solid #e2e8f0',
            objectFit: 'cover',
            background: '#fff',
            marginTop: 16,
          }}
        />
      </section>
    );
  }

  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr minmax(0, 420px) 1fr',
        alignItems: 'center',
        justifyItems: 'center',
        minHeight: '340px',
        gap: '0',
        position: 'relative',
        padding: '32px 0',
      }}
    >
      <div style={{ gridColumn: 1, justifySelf: 'end', alignSelf: 'start' }}>
        <img
          src="/bey-the-dog.jpg"
          alt="Bey McConville portrait left"
          style={{
            width: '175px',
            height: '175px',
            borderRadius: '50%',
            border: '3px solid #e2e8f0',
            objectFit: 'cover',
            background: '#fff',
          }}
        />
      </div>
      <div style={{ gridColumn: 2, textAlign: 'left', maxWidth: 420 }}>
        <h2 style={{ textAlign: 'center' }}>About Me</h2>
        <p
          style={{
            fontSize: '1.08rem',
            lineHeight: 1.6,
            margin: '0 auto',
            maxWidth: 340,
            textAlign: 'left',
          }}
        >
          I'm Sean McConville, a passionate Full Stack Software Engineer focused on building
          reliable, scalable, and secure applications. I love building smooth user experiences,
          hardening Linux boxes, and shipping delightful tools.
        </p>
        <p
          style={{
            fontSize: '1.08rem',
            lineHeight: 1.6,
            margin: '16px auto 0',
            maxWidth: 340,
            textAlign: 'left',
            zIndex: 9999,
          }}
        >
          When I'm not coding, I enjoy hiking, playing the guitar, and spending time with my amazing
          dog, Bey (short for Beyonce). Let's connect and create something amazing together!
        </p>
      </div>
      <div style={{ gridColumn: 3, justifySelf: 'start', alignSelf: 'end' }}>
        <img
          src="/sean-about-pic-bw.jpg"
          alt="Sean McConville portrait right"
          style={{
            width: '115px',
            height: '115px',
            borderRadius: '50%',
            border: '3px solid #e2e8f0',
            objectFit: 'cover',
            background: '#fff',
          }}
        />
      </div>
    </section>
  );
}
