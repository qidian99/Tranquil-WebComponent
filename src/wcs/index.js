import { BOILTERPLATE } from './BOILERPLATE';
import register from 'preact-custom-element';

export {
  BOILTERPLATE,
};

register(BOILTERPLATE, BOILTERPLATE.tagName, BOILTERPLATE.observedAttributes);
