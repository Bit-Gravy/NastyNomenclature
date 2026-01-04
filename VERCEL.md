# Vercel Deployment

This project is configured to deploy on Vercel.

## How to Deploy

### Option 1: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2: Via GitHub Integration
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Vercel will auto-detect the configuration from `vercel.json`

## Configuration

The `vercel.json` file includes:
- **Static site configuration**: Routes all requests to `index.html` for client-side routing
- **Caching headers**: Long-term caching for `/js` and `/assets` directories
- **Security headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy
- **Custom domain**: Configure in Vercel dashboard and update GitHub's Pages settings

## Custom Domain

After deploying:
1. Add your custom domain in Vercel project settings
2. Update DNS records according to Vercel's instructions
3. CNAME file will be managed by Vercel if using GitHub Pages alongside

## Environment Variables

None required for this static site. If you need to add any:
1. Go to Vercel Project Settings → Environment Variables
2. Add your variables
3. Redeploy
