import { resolve } from 'path';
import { write, stdout, file, argv } from 'bun';

const path = resolve(argv.at(-1));

await write(
  stdout,
  file(path)
);
