#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { coreRules } from './rules-template.js';

const targetFile = path.join(process.cwd(), '.cursorrules');

console.log('🚀 Initializing yap-less rules...');

try {
  if (fs.existsSync(targetFile)) {
    console.log('⚠️ .cursorrules already exists. Appending rules...');
    fs.appendFileSync(targetFile, '\n' + coreRules);
  } else {
    fs.writeFileSync(targetFile, coreRules.trim());
    console.log('✅ .cursorrules generated successfully!');
  }
  console.log('🔥 AI agents will now stop yapping and write pure code.');
} catch (error) {
  console.error('❌ Error creating rules file:', error.message);
}
