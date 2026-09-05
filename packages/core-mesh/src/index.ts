import { Kyber1024Engine } from '@prismlink/crypto-quantum';

export class NodeStateEngine {
  public identityKeys = Kyber1024Engine.generateKeyPair();
}
