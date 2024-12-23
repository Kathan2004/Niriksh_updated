import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Lock, Server, LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features = [
  {
    icon: Shield,
    title: 'Impersonation Protection',
    desc: 'Safeguard your digital identity with advanced AI-driven impersonation detection and prevention.',
  },
  {
    icon: Lock,
    title: 'Takedown Services',
    desc: 'Quick and efficient removal of phishing sites and malicious content targeting your business.',
  },
  {
    icon: Server,
    title: '24/7 Cybersecurity Monitoring',
    desc: 'Stay protected round-the-clock with robust monitoring and compliance-ready solutions.',
  },
];

export function Hero() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #1a1a2e, #6a0572, #1a1a2e)',
        overflow: 'hidden',
      }}
    >
      {/* Background animation */}
      <div
        style={{
          position: 'absolute',
          inset: '0',
          background: 'url("path/to/grid-image.png")',
          opacity: '0.3',
          animation: 'slide 10s linear infinite',
          backgroundRepeat: 'repeat',
        }}
      ></div>

      {/* Main Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: '8rem 1rem',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h3
          style={{
            color: '#9f7aea',
            fontWeight: 600,
            marginBottom: '1rem',
            animation: 'fadeIn 0.8s ease-out',
          }}
        >
          सुरक्षा हमारी प्राथमिकता
        </h3>
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            color: '#fff',
            lineHeight: 1.2,
            animation: 'slideUp 0.8s ease-out',
          }}
        >
          Protect Against{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #9f7aea, #d53f8c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Impersonation & Cyber Threats
          </span>
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: '#cbd5e0',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto',
            animation: 'fadeIn 0.8s ease-out 0.3s',
          }}
        >
          Empowering Indian businesses with next-generation cybersecurity solutions. From impersonation protection to takedown services, we safeguard your digital assets and protect against phishing threats.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem',
            animation: 'fadeIn 0.8s ease-out 0.6s',
          }}
        >
          <button
            onClick={() => navigate('/contact')}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#6a0572',
              color: '#fff',
              borderRadius: '0.5rem',
              transform: 'scale(1)',
              transition: 'all 0.2s ease-in-out',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Request Demo
          </button>
          <button
            onClick={() => navigate('/about')}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'transparent',
              border: '2px solid #9f7aea',
              color: '#9f7aea',
              borderRadius: '0.5rem',
              transform: 'scale(1)',
              transition: 'all 0.2s ease-in-out',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Learn More
          </button>
        </div>

        {/* Feature Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            animation: 'fadeIn 0.8s ease-out 0.9s',
          }}
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>

      {/* Wave Animation */}
      <WaveAnimation />
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }: FeatureCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'rgba(31, 41, 55, 0.5)',
        backdropFilter: 'blur(10px)',
        padding: '1.5rem',
        borderRadius: '1rem',
        border: '1px solid rgba(159, 122, 234, 0.2)',
        transition: 'all 0.2s ease-in-out',
        textAlign: 'center',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.border = '1px solid rgba(159, 122, 234, 0.4)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.border = '1px solid rgba(159, 122, 234, 0.2)')
      }
    >
      <div
        style={{
          width: '4rem',
          height: '4rem',
          backgroundColor: 'rgba(106, 5, 114, 0.5)',
          borderRadius: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
        }}
      >
        <Icon style={{ width: '2rem', height: '2rem', color: '#9f7aea' }} />
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: '#a0aec0' }}>{desc}</p>
    </div>
  );
}

function WaveAnimation() {
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
      <svg
        style={{ width: '100%', height: '15vh', marginBottom: '-7px' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g>
          <use href="#wave" x="48" y="0" fill="rgba(159, 122, 234, 0.7)" />
          <use href="#wave" x="48" y="3" fill="rgba(159, 122, 234, 0.5)" />
          <use href="#wave" x="48" y="5" fill="rgba(159, 122, 234, 0.3)" />
          <use href="#wave" x="48" y="7" fill="rgba(159, 122, 234, 0.2)" />
        </g>
      </svg>
    </div>
  );
}
