import { Clothing } from './clothing.class';

export class Jacket extends Clothing {
  public wear(): void {
    super.wear();
    console.warn('wear a jacket');
  }
}
