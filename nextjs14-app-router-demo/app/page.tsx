import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Easy Email Editor - Next.js 14 App Router Demo</h1>
      <p style={{ marginTop: '1rem' }}>
        This demo showcases the easy-email-editor running natively in Next.js 14
        with the App Router and Server Components support.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Key Features:</h2>
        <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
          <li>✅ No dynamic imports with ssr: false required</li>
          <li>✅ No iframe isolation needed</li>
          <li>✅ Full Next.js 14 App Router compatibility</li>
          <li>✅ Works with both development and production builds</li>
          <li>✅ Server Components friendly</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Demos:</h2>
        <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
          <li>
            <Link href="/editor" style={{ color: 'blue', textDecoration: 'underline' }}>
              Standard Editor with Extensions
            </Link>
          </li>
          <li>
            <Link href="/editor/simple" style={{ color: 'blue', textDecoration: 'underline' }}>
              Simple Editor (Core Only)
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Migration Highlights:</h3>
        <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
          <li>Fixed module-level DOM access issues</li>
          <li>Added 'use client' directives to 35+ components</li>
          <li>Created SSR-safe lazy initialization for browser APIs</li>
          <li>Provided clean Next.js 14 exports via /next entry points</li>
        </ul>
      </div>
    </main>
  );
}
