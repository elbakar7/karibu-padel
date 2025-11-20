# Hostinger hPanel Deployment Guide - Optimized for Performance

This project is a high-performance Vite + React application optimized specifically for Hostinger hPanel hosting. All optimizations have been implemented to ensure fast loading times and excellent user experience.

## 🚀 Performance Optimizations Implemented

### Build Optimizations
- ✅ **Gzip & Brotli Compression**: Pre-compressed files for fastest delivery
- ✅ **Code Splitting**: Intelligent vendor chunking (React, Radix UI, animations, etc.)
- ✅ **Tree Shaking**: Dead code elimination for smaller bundles
- ✅ **Minification**: Terser with console.log removal in production
- ✅ **Lazy Loading**: React components load on-demand via Suspense
- ✅ **Image Optimization**: WebP and AVIF formats with responsive sizes
- ✅ **CSS Code Splitting**: Separate CSS chunks for better caching

### Server Optimizations
- ✅ **Advanced .htaccess**: Compression, caching, and security headers
- ✅ **Browser Caching**: 1-year cache for assets, 10-minute for HTML
- ✅ **Preload Hints**: Critical resources loaded faster
- ✅ **Font Optimization**: Async font loading with fallbacks

### Bundle Analysis
- Build includes bundle analyzer at `dist/stats.html`
- View after building to see chunk sizes and dependencies

---

## 1. Prerequisites

- **Node.js 20.x** (matches project configuration)
- **npm 10+**
- **Hostinger hPanel account** with `public_html` access
- SSL certificate enabled (recommended for HTTPS)

---

## 2. Build the Production Assets

### Standard Build
```bash
npm install
npm run build
```

### With Bundle Analysis
```bash
npm run build:analyze
```

### Quick Deploy Command
```bash
npm run deploy:hpanel
```

**Build Output:**
- Optimized files in `dist/` directory (approx. 48MB with images)
- Gzip files (`.gz`) for older browsers
- Brotli files (`.br`) for modern browsers (40-60% smaller than gzip)
- Bundle analysis at `dist/stats.html`
- Organized assets:
  - `assets/js/` - JavaScript chunks
  - `assets/css/` - Stylesheets
  - `assets/images/` - Optimized images

**Build Results:**
- React vendor: ~146KB (46KB gzipped, 40KB brotli)
- Animation vendor: ~146KB (47KB gzipped, 41KB brotli)
- Main bundle: ~30KB (9KB gzipped, 7KB brotli)
- CSS: ~48KB (7KB gzipped, 6KB brotli)

---

## 3. Files to Upload to Hostinger

### Upload Method 1: File Manager (Recommended for Small Updates)

1. Login to Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html/`
4. Upload **ALL contents** of the `dist/` folder:
   ```
   public_html/
   ├── assets/
   │   ├── js/
   │   │   ├── *.js (JavaScript files)
   │   │   ├── *.js.gz (Gzip compressed)
   │   │   └── *.js.br (Brotli compressed)
   │   ├── css/
   │   │   ├── *.css
   │   │   ├── *.css.gz
   │   │   └── *.css.br
   │   └── images/ (optimized images)
   ├── index.html
   ├── .htaccess (CRITICAL - must be uploaded!)
   ├── logo.png
   ├── favicon.svg
   └── robots.txt
   ```

5. **IMPORTANT**: Make sure `.htaccess` is uploaded (it may be hidden by default)

### Upload Method 2: FTP/SFTP (Recommended for Full Deployments)

```bash
# Example with lftp
lftp -u your-username,your-password ftp.your-domain.com
cd public_html
mirror --reverse --delete --verbose dist/ ./
```

### Upload Method 3: Git Deployment (Most Automated)

Set up Git deployment in hPanel and add a post-receive hook:
```bash
#!/bin/bash
cd /home/your-user/public_html
npm ci --production
npm run build
rsync -av --delete dist/ ./
```

---

## 4. Configure .htaccess for Optimal Performance

The `.htaccess` file is **automatically included** in your build. It includes:

### Features Included:
- ✅ **HTTPS Redirect** (commented out - uncomment when SSL is active)
- ✅ **SPA Routing** (redirects all requests to index.html)
- ✅ **Brotli & Gzip Compression** (serves pre-compressed files)
- ✅ **Browser Caching** (1 year for assets, 10 minutes for HTML)
- ✅ **Security Headers** (XSS, clickjacking, MIME-sniff protection)
- ✅ **MIME Types** (WebP, AVIF, WOFF2, etc.)
- ✅ **Performance** (Keep-Alive, ETag removal)

### Enable HTTPS Redirect (After SSL Setup)

Edit `public_html/.htaccess` and uncomment these lines:
```apache
# Force HTTPS (uncomment if SSL is enabled)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]
```

---

## 5. Post-Deployment Configuration

### Update Domain URLs

1. **Update index.html** (in your source, then rebuild):
   ```html
   <link rel="canonical" href="https://YOUR-DOMAIN.com/" />
   <meta property="og:url" content="https://YOUR-DOMAIN.com/" />
   ```

2. **Update robots.txt** in `public/robots.txt`:
   ```
   Sitemap: https://YOUR-DOMAIN.com/sitemap.xml
   ```

3. **Rebuild and redeploy**:
   ```bash
   npm run build
   # Upload dist/ contents again
   ```

---

## 6. Verify Deployment & Performance

### Essential Checks

1. **Load Homepage**: `https://YOUR-DOMAIN.com/`
   - Verify navigation, hero carousel, images load
   
2. **Test Compression**:
   ```bash
   curl -H "Accept-Encoding: br,gzip,deflate" -I https://YOUR-DOMAIN.com/assets/js/index-*.js
   # Look for: Content-Encoding: br (or gzip)
   ```

3. **Check Caching**:
   ```bash
   curl -I https://YOUR-DOMAIN.com/assets/js/react-vendor-*.js
   # Look for: Cache-Control: public, max-age=31536000, immutable
   ```

4. **Test SPA Routing**: Try direct navigation to hash routes
   - `https://YOUR-DOMAIN.com/#events`
   - `https://YOUR-DOMAIN.com/#gallery`

### Performance Testing

1. **PageSpeed Insights**: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
   - Target: 90+ score for Performance
   - Expected: Excellent FCP/LCP due to lazy loading

2. **GTmetrix**: [https://gtmetrix.com/](https://gtmetrix.com/)
   - Check waterfall for parallel downloads
   - Verify Brotli/Gzip compression

3. **WebPageTest**: [https://www.webpagetest.org/](https://www.webpagetest.org/)
   - Test from multiple locations
   - Verify caching effectiveness

### Browser DevTools Check

1. Open **Network tab**
2. Reload page (Ctrl+Shift+R / Cmd+Shift+R)
3. Verify:
   - JS files show `br` or `gzip` encoding
   - Cached resources show `(from disk cache)`
   - Lazy-loaded components load after scroll

---

## 7. Updating Content

### For Code/Content Changes:

1. Make edits locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Upload only changed files:
   - New hashed files in `assets/`
   - `index.html` (always upload)
   - `.htaccess` (if modified)

### For Image Changes:

1. Add new images to `src/assets/originals/gallery/`
2. Run optimization: `npm run optimize` (if needed)
3. Rebuild: `npm run build`
4. Upload new images from `dist/assets/images/`

---

## 8. Performance Monitoring

### Key Metrics to Track

- **First Contentful Paint (FCP)**: < 1.8s (Good)
- **Largest Contentful Paint (LCP)**: < 2.5s (Good)
- **Time to Interactive (TTI)**: < 3.8s (Good)
- **Total Bundle Size**: ~350KB compressed
- **Total Page Weight**: Varies by images loaded

### Optimization Tips

1. **Images**: Already optimized with WebP/AVIF
2. **Fonts**: Loaded asynchronously
3. **JavaScript**: Code-split and lazy-loaded
4. **CSS**: Minified and split
5. **Caching**: Long-term for assets, short for HTML

---

## 9. Troubleshooting

### Issue: 404 Errors on Refresh

**Solution**: Ensure `.htaccess` is uploaded and mod_rewrite is enabled in hPanel

### Issue: Slow Loading

**Solution**: 
- Verify Brotli/Gzip files are uploaded
- Check browser Network tab for compression headers
- Ensure hPanel CDN is enabled

### Issue: Images Not Loading

**Solution**:
- Check file permissions (should be 644)
- Verify image paths in Network tab
- Ensure all files in `assets/images/` are uploaded

### Issue: Styles Not Applied

**Solution**:
- Clear browser cache (Ctrl+F5)
- Verify `.css` files in `assets/css/` are uploaded
- Check for CORS errors in Console

---

## 10. Security Best Practices

✅ **Implemented in .htaccess:**
- X-Frame-Options (clickjacking protection)
- X-XSS-Protection
- X-Content-Type-Options (MIME sniffing)
- Referrer-Policy
- Permissions-Policy

**Additional Recommendations:**
1. Keep dependencies updated: `npm audit fix`
2. Enable SSL/HTTPS in hPanel
3. Use strong passwords for hPanel
4. Regular backups via hPanel

---

## 11. Quick Reference Commands

```bash
# Development
npm run dev                    # Start dev server

# Build
npm run build                  # Production build
npm run build:analyze          # Build with bundle analysis
npm run deploy:hpanel          # Build with deployment reminder

# Preview
npm run preview                # Preview production build locally

# Optimization
npm run optimize               # Optimize images (if needed)
```

---

## 12. Support & Resources

- **Hostinger Knowledge Base**: [https://support.hostinger.com/](https://support.hostinger.com/)
- **Vite Documentation**: [https://vitejs.dev/](https://vitejs.dev/)
- **React Documentation**: [https://react.dev/](https://react.dev/)

---

## Summary

This deployment is **production-ready** with all modern optimizations:
- 🚀 Pre-compressed assets (Brotli + Gzip)
- ⚡ Lazy loading for optimal initial load
- 📦 Intelligent code splitting
- 🎨 CSS optimization
- 🖼️ Image optimization (WebP/AVIF)
- 🔒 Security headers
- 💾 Aggressive caching
- 📱 Mobile-optimized

**Expected Performance**: 90+ PageSpeed score with proper hPanel configuration!
