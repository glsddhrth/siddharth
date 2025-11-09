'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image src="/images/me.jpg" alt="Siddharth Goel" width={200} height={200} priority />
        </Link>
        <header>
          <h2>Siddharth Goel</h2>
          <p>
            <a href="mailto:siddharth.goel7@gmail.com">siddharth.goel7@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hi, I'm Siddharth. I am a <a href="https://www.cics.umass.edu/">UMass CICS</a>{' '}
          graduate, and a software engineer at{' '}
          <a href="https://walmartconnect.com">Walmart Global Tech</a>. Previously, 
          I was a Senior Software Engineer at{' '}
          <a href="https://goldmansachs.com">Goldman Sachs</a>
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Siddharth Goel <Link href="/">glsddhrth.github.io</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
