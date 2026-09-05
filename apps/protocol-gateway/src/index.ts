import { NodeStateEngine } from '@prismlink/core-mesh';

const engine = new NodeStateEngine();
console.log("PrismLink Gateway running!");
console.log("Generated Key length:", engine.identityKeys.publicKey.length);
