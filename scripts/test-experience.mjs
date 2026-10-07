import assert from 'node:assert/strict';
import { experience } from '../src/content.mjs';

const lawrence = experience.find((entry) => entry.organization === 'Lawrence Berkeley Lab');
assert.equal(lawrence.role, 'Undergraduate Researcher');
assert.equal(lawrence.date, '2026–present');
assert.equal(lawrence.state, 'In progress');

const ucsd = experience.find((entry) => entry.organization === 'UC San Diego');
assert.equal(ucsd.role, 'Undergraduate Researcher');

const uvex = experience.find((entry) => entry.organization === 'UC Berkeley' && entry.team === 'UltraViolet EXplorer (UVEX)');
assert.ok(uvex, 'UVEX should appear as a UC Berkeley experience');
assert.equal(uvex.role, 'Researcher');
assert.equal(uvex.date, 'Sep 2026–present');
assert.equal(uvex.state, 'In progress');
assert.equal(uvex.description, 'Mapping UV transient duration–luminosity phase space from literature data to identify underexplored discovery regions for UVEX.');

console.log('PASS: LBL, UCSD, and UVEX experience details match the current résumé.');
