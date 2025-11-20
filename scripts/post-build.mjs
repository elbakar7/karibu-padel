#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const htaccessContent = `RewriteEngine On
RewriteBase /
RewriteRule ^index\\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
`;

const distPath = path.resolve(process.cwd(), 'dist');
const htaccessPath = path.join(distPath, '.htaccess');

// Write .htaccess file
fs.writeFileSync(htaccessPath, htaccessContent);
console.log('✅ .htaccess file created successfully for Hostinger deployment');
