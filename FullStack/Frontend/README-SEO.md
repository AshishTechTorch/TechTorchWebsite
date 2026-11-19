# SEO + WebP patch (TechTorch Frontend)

1. Is zip ke andar ki files apne project me same paths par copy/replace karo.
2. PowerShell (Frontend folder me):
   npm run check:images        # webp check
   npm run build               # postbuild khud SEO pages + sitemap + robots banata hai
3. Domain alag ho to src/seo/seoConfig.js me SITE.url badlo (ya VITE_SITE_URL set karo).
