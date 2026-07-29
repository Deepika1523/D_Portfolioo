const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public', 'assets', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

const avatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="750" viewBox="0 0 600 750">
  <rect width="600" height="750" fill="#1a1a1a"/>
  <circle cx="300" cy="300" r="140" fill="#2a2a2a" stroke="#333333" stroke-width="4"/>
  <path d="M150 620 C 150 460, 450 460, 450 620 Z" fill="#2a2a2a" stroke="#333333" stroke-width="4"/>
  <circle cx="300" cy="270" r="70" fill="#3a3a3a"/>
  <rect x="50" y="650" width="500" height="50" rx="8" fill="#252525" stroke="#444444"/>
  <text x="300" y="682" font-family="'Work Sans', sans-serif" font-size="18" font-weight="600" fill="#ffffff" text-anchor="middle">[AVATAR_PLACEHOLDER] - Swap in public/assets/images/</text>
</svg>`;

const project1Svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#111827"/>
  <rect x="40" y="40" width="720" height="520" rx="12" fill="#1F2937" stroke="#374151" stroke-width="2"/>
  <circle cx="80" cy="80" r="8" fill="#EF4444"/>
  <circle cx="105" cy="80" r="8" fill="#F59E0B"/>
  <circle cx="130" cy="80" r="8" fill="#10B981"/>
  <text x="400" y="85" font-family="'Work Sans', sans-serif" font-size="14" fill="#9CA3AF" text-anchor="middle">LegalMind – Contract Intelligence Platform</text>
  <rect x="80" y="130" width="280" height="180" rx="8" fill="#111827" stroke="#4B5563"/>
  <text x="220" y="230" font-family="'Playfair Display', serif" font-size="24" fill="#60A5FA" text-anchor="middle">LangGraph + AI</text>
  <rect x="390" y="130" width="330" height="22" rx="4" fill="#374151"/>
  <rect x="390" y="170" width="290" height="16" rx="4" fill="#4B5563"/>
  <rect x="390" y="200" width="310" height="16" rx="4" fill="#4B5563"/>
  <rect x="390" y="230" width="250" height="16" rx="4" fill="#4B5563"/>
  <rect x="80" y="350" width="640" height="160" rx="8" fill="#111827" stroke="#374151"/>
  <text x="400" y="430" font-family="'Work Sans', sans-serif" font-size="22" font-weight="600" fill="#F3F4F6" text-anchor="middle">LegalMind Platform Mockup</text>
  <text x="400" y="465" font-family="'Work Sans', sans-serif" font-size="14" fill="#9CA3AF" text-anchor="middle">Replace in public/assets/images/project-legalmind.svg</text>
</svg>`;

const project2Svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#0F172A"/>
  <rect x="40" y="40" width="720" height="520" rx="12" fill="#1E293B" stroke="#334155" stroke-width="2"/>
  <circle cx="80" cy="80" r="8" fill="#EF4444"/>
  <circle cx="105" cy="80" r="8" fill="#F59E0B"/>
  <circle cx="130" cy="80" r="8" fill="#10B981"/>
  <text x="400" y="85" font-family="'Work Sans', sans-serif" font-size="14" fill="#94A3B8" text-anchor="middle">Event Management System</text>
  <rect x="80" y="130" width="640" height="380" rx="8" fill="#0F172A" stroke="#334155"/>
  <text x="400" y="300" font-family="'Playfair Display', serif" font-size="32" font-weight="bold" fill="#38BDF8" text-anchor="middle">Event Management App</text>
  <text x="400" y="345" font-family="'Work Sans', sans-serif" font-size="16" fill="#94A3B8" text-anchor="middle">Django • MySQL • Role Authentication</text>
  <text x="400" y="450" font-family="'Work Sans', sans-serif" font-size="14" fill="#64748B" text-anchor="middle">Replace in public/assets/images/project-event.svg</text>
</svg>`;

const project3Svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#18181B"/>
  <rect x="40" y="40" width="720" height="520" rx="12" fill="#27272A" stroke="#3F3F46" stroke-width="2"/>
  <circle cx="80" cy="80" r="8" fill="#EF4444"/>
  <circle cx="105" cy="80" r="8" fill="#F59E0B"/>
  <circle cx="130" cy="80" r="8" fill="#10B981"/>
  <text x="400" y="85" font-family="'Work Sans', sans-serif" font-size="14" fill="#A1A1AA" text-anchor="middle">Donor Management System</text>
  <rect x="80" y="130" width="640" height="380" rx="8" fill="#18181B" stroke="#3F3F46"/>
  <text x="400" y="300" font-family="'Playfair Display', serif" font-size="32" font-weight="bold" fill="#F43F5E" text-anchor="middle">Donor Management System</text>
  <text x="400" y="345" font-family="'Work Sans', sans-serif" font-size="16" fill="#A1A1AA" text-anchor="middle">Django • MySQL • Search & Filtering</text>
  <text x="400" y="450" font-family="'Work Sans', sans-serif" font-size="14" fill="#71717A" text-anchor="middle">Replace in public/assets/images/project-donor.svg</text>
</svg>`;

fs.writeFileSync(path.join(imgDir, 'avatar-placeholder.svg'), avatarSvg);
fs.writeFileSync(path.join(imgDir, 'project-legalmind.svg'), project1Svg);
fs.writeFileSync(path.join(imgDir, 'project-event.svg'), project2Svg);
fs.writeFileSync(path.join(imgDir, 'project-donor.svg'), project3Svg);

console.log('SVG Placeholders created successfully in public/assets/images/');
