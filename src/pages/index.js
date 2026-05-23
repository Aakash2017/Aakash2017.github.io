import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coming Shortly</title>
        <html lang="en" />
        <meta name="description" content="Coming shortly." />
      </Helmet>
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 24px',
          color: '#e7e5dc',
          background:
            'linear-gradient(135deg, #080807 0%, #10100e 42%, #17150f 100%)',
          textAlign: 'center',
        }}
      >
        <section
          style={{
            width: 'min(760px, 100%)',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(3rem, 12vw, 7.5rem)',
              fontWeight: 500,
              letterSpacing: 0,
              lineHeight: 0.9,
            }}
          >
            Coming shortly.
          </h1>
          <div
            aria-hidden="true"
            style={{
              width: '72px',
              height: '1px',
              margin: '34px auto 0',
              background: '#b9a86f',
              opacity: 0.72,
            }}
          />
        </section>
      </main>
    </>
  );
};
