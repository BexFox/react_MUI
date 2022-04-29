import React from 'react';

function Header() {
  return (
    <header>
      <h1>welcome</h1>
    </header>
  );
}
function Nav() {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

export default function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
    </div>
  );
}
