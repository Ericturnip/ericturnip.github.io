import assert from 'node:assert/strict';
import { layout } from '../src/layout.mjs';

const base = { title: 'Test', description: 'Test page', body: '<h1>Test</h1>' };
const inactivePage = layout(base);
assert.doesNotMatch(inactivePage, /goatcounter|gc\.zgo\.at/i);

const endpoint = 'https://ericturnip.goatcounter.com/count';
const activePage = layout({ ...base, goatCounterEndpoint: endpoint });
assert.match(activePage, /<script data-goatcounter="https:\/\/ericturnip\.goatcounter\.com\/count" async src="https:\/\/gc\.zgo\.at\/count\.js"><\/script>/);

console.log('PASS: GoatCounter is omitted until configured and included when an endpoint is supplied.');
