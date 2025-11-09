import React from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    'Siddharth Goel is a big data engineer, backend engineer and vibe-coding enthusiast.',
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">Hey there!</Link>
            </h2>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website. Please feel free to read more <Link href="/about">about me</Link>,
          or you can check out my <Link href="/resume">resume</Link>,{' '}
          <Link href="/projects">projects</Link>, view <Link href="/stats">site statistics</Link>,
          or <Link href="/contact">contact</Link> me.
        </p>
        <p>
          {' '}
          Source available <a href="https://github.com/glsddhrth/personal-site">here</a>.
        </p>
      </article>
    </PageWrapper>
  );
}
