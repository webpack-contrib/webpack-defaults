import { getOptions } from 'loader-utils';
import { validate } from 'schema-utils';

import schema from './options.json';

export const raw = true;

export default function loader(source) {
  const { version, webpack } = this;

  const options = getOptions(this) || {};

  validate(schema, options, { name: 'Loader name' });

  const newSource = `
  /**
   * Loader API Version: ${version}
   * Is this in "webpack mode": ${webpack}
   */
  /**
   * Original Source From Loader
   */
  ${source}`;

  return `${newSource}`;
}
