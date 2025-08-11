export default function About(){
  return (
    <article className="prose prose-invert max-w-none">
      <h1>How Fan Market Works</h1>
      <p><strong>Contracts</strong> represent yes/no outcomes on sports statistics or events. Prices between 0 and 1 reflect market‑implied probability; settlement pays $1 or $0 per share.</p>
      <p><strong>Orders</strong> are limit‑style. This demo fills immediately to illustrate UX; production will support order books and partial fills.</p>
      <h2>Roadmap</h2>
      <ul>
        <li>Q1: SOC 2 cloud; official player tracking feeds.</li>
        <li>Q2: iOS/Android beta; 24/7 support.</li>
        <li>Q3: NBA & Premier League; ACH withdrawals; on‑chain audit log.</li>
        <li>Q4: Automated rebalancing; localization for CA & UK.</li>
      </ul>
    </article>
  );
}
