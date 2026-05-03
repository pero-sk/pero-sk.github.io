import type { ReactNode } from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Sino
        </Heading>

        <p className="hero__subtitle">
          Modern syntax. Lua runtime. No compromises.
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Getting%20Started/Installation">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {

  const code = `import Str from "sino.string"

let name = "Sino"

"Welcome to: {name}!"
|> Str:template({name})
|> print()`;

  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <Layout
      title="Sino"
      description="A modern superset of Lua">
      
      <HomepageHeader />

      <main>
        <section style={{ padding: '2rem 0', textAlign: 'center' }}>

          <div style={{
            position: 'relative',
            maxWidth: '600px',
            margin: '0 auto'
          }}>

          <button
            onClick={copy}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: copied ? 'var(--ifm-color-primary-darker)' : 'var(--ifm-color-primary)',
              color: 'var(--ifm-color-primary-contrast-background)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '4px 10px',
              borderRadius: '8px',
              opacity: copied ? 1 : 0.75,
              cursor: 'pointer',
              fontSize: '0.8rem',

              transition: 'all 0.2s ease',
              transform: copied ? 'scale(0.95)' : 'scale(1)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.opacity = copied ? '1' : '0.75';
              e.currentTarget.style.transform = copied ? 'scale(0.95)' : 'scale(1)';
            }}
          >
            {copied ? 'Copied' : '⧉'}
          </button>

            <pre style={{
              textAlign: 'left',
              background: 'var(--ifm-code-background)',
              color: 'var(--ifm-font-color-base)',
              border: '1px solid var(--ifm-color-emphasis-200)',
              padding: '1rem',
              borderRadius: '8px',
              overflowX: 'auto'
            }}>
        {code}
            </pre>

          </div>

          <pre style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '1rem auto 0',
            background: 'var(--ifm-background-surface-color)',
            color: 'var(--ifm-font-color-secondary)',
            border: '1px solid var(--ifm-color-emphasis-200)',
            padding: '0.75rem',
            borderRadius: '8px',
          }}>
        {`Welcome to: Sino!`}
          </pre>

        </section>
      </main>

    </Layout>
  );
}