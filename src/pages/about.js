// Step 1: Import React
import * as React from 'react';
import { Link } from 'gatsby';

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to="/">
        <button>
          Voltar
        </button>
      </Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}

export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage