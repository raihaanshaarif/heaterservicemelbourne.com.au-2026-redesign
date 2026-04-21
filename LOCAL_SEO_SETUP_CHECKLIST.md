# Local SEO Setup & Verification Checklist

## 📋 IMMEDIATE IMPLEMENTATION (Week 1)

### 1. JSON-LD & Schema Setup

- [ ] Copy `src/utils/seo/jsonLd.ts` to your project
- [ ] Add `JSONLDScript` component to root layout
- [ ] Update business info in jsonLd.ts:
  - [ ] Verify phone: 0405 133 761
  - [ ] Verify email: heating.melbourne@gmail.com
  - [ ] Verify address: 5 Frank Ave, Clayton South, VIC 3169
  - [ ] Update coordinates if needed
- [ ] Test schema at https://schema.org/validator

### 2. Metadata Configuration

- [ ] Copy `src/utils/seo/metadata.ts` to your project
- [ ] Copy `src/components/seo/` directory (all components)
- [ ] Add metadata helpers to root layout
- [ ] Add breadcrumbs to all multi-level pages
- [ ] Update all service pages with proper metadata

### 3. Image Optimization

- [ ] Replace all `Image` components with `SEOImage`
- [ ] Add keyword-rich alt text to all images
- [ ] Mark above-the-fold images with `priority={true}`
- [ ] Test mobile loading speed

### 4. Internal Linking

- [ ] Add `ServiceAreasNearYou` component to service pages
- [ ] Add `ServiceAreasNearYou` to footer
- [ ] Add breadcrumbs to dynamic pages
- [ ] Link brands to services

---

## 🔍 VERIFICATION TASKS (Week 2)

### Google Search Console

- [ ] Verify domain in GSC
- [ ] Submit sitemap.xml
- [ ] Check for crawl errors
- [ ] Review which pages are indexed
- [ ] Check for duplicate content warnings
- [ ] Monitor impressions and CTR for target keywords

### Google My Business

- [ ] Create/Verify listing
- [ ] Add complete business info
- [ ] Upload service photos
- [ ] Add service areas
- [ ] Respond to reviews

### Local SEO Audit

- [ ] Check NAP consistency (Name, Address, Phone)
- [ ] Verify across:
  - [ ] Google My Business
  - [ ] Google Maps
  - [ ] Schema markup
  - [ ] Website footer
  - [ ] Contact page
- [ ] Ensure phone number is clickable on mobile
- [ ] Check hours of operation display

### Technical SEO

- [ ] Run Lighthouse audit
  - [ ] Performance: > 90
  - [ ] SEO: 100
  - [ ] Best Practices: > 90
  - [ ] LCP: < 2.5s
- [ ] Test mobile responsiveness
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Verify mobile usability

### Structured Data Verification

- [ ] Test LocalBusiness schema
- [ ] Test Service schemas
- [ ] Test BreadcrumbList schema
- [ ] Check Google Rich Results Test
- [ ] Verify FAQ schema displays

---

## 📊 KEYWORD TRACKING (Week 2-3)

### Primary Keywords

- [ ] Track: "Gas heater repair Melbourne"
  - Current position: \_\_\_
  - Target position: 1-3
  - Monthly searches: ~500
- [ ] Track: "Split System heater repair Melbourne"
  - Current position: \_\_\_
  - Target position: 1-3
  - Monthly searches: ~400
- [ ] Track: "Hydronic repair Melbourne"
  - Current position: \_\_\_
  - Target position: 1-3
  - Monthly searches: ~300

### Local Keywords

- [ ] Track: "[Service] [Suburb]" (e.g., "Gas heater repair Clayton South")
- [ ] Track: "[Service] emergency [Suburb]"

### Tools to Use

- [ ] Google Search Console (free)
- [ ] Semrush or Ahrefs (paid)
- [ ] Moz Local (paid)

---

## 🔗 BACKLINK STRATEGY (Week 3-4)

### Local Citations

- [ ] Aussie Business Directory
- [ ] Yellow Pages Australia
- [ ] True Local
- [ ] Localizer
- [ ] Whereis

### High-Quality Backlinks

- [ ] Melbourne heating blogs
- [ ] Local directory websites
- [ ] Industry associations
- [ ] Local news outlets

### Internal Linking Audit

- [ ] Check all service pages link to each other
- [ ] Verify suburbs link to appropriate services
- [ ] Ensure home page links to top services
- [ ] Check footer has all major pages

---

## 📱 MOBILE OPTIMIZATION (Week 3)

### Mobile Testing

- [ ] Test on iPhone SE, iPhone 12, Samsung A51
- [ ] Click-to-call button works
- [ ] Forms are mobile-friendly
- [ ] Images load quickly
- [ ] No horizontal scroll required
- [ ] Buttons are easy to tap (> 44px)

### Mobile SEO

- [ ] Mobile-first indexing compatible
- [ ] Meta viewport tag present
- [ ] Responsive CSS media queries
- [ ] Mobile images are optimized
- [ ] Font sizes readable without zoom

---

## 🎯 CTA OPTIMIZATION (Week 3-4)

### Call Buttons

- [ ] Homepage: Visible CTA
- [ ] All service pages: At top and bottom
- [ ] Phone number clickable on mobile
- [ ] Alternative: Click-to-call with event tracking

### Form CTAs

- [ ] Quote form on sidebar (already done ✅)
- [ ] Contact form on contact page
- [ ] Book service buttons
- [ ] Email signup (optional)

### Tracking

- [ ] Set up Google Analytics 4
- [ ] Track phone clicks (tel: links)
- [ ] Track form submissions
- [ ] Set up goals for conversions
- [ ] Monitor bounce rate by page

---

## 🚀 ADVANCED (Week 4+)

### Content Expansion

- [ ] Write suburb-specific content pages
- [ ] Create brand-specific service pages
- [ ] Develop FAQ content
- [ ] Create before/after galleries
- [ ] Record video testimonials

### Link Building

- [ ] Guest posts on local blogs
- [ ] Broken link building
- [ ] Resource page outreach
- [ ] Local partnership links

### Performance Monitoring

- [ ] Monitor Core Web Vitals weekly
- [ ] Check crawl budget usage
- [ ] Track indexation rate
- [ ] Monitor 404 errors
- [ ] Review Search Analytics regularly

---

## ✅ MONTHLY CHECKLIST

Every month, verify:

- [ ] Google Search Console: No crawl errors
- [ ] Google My Business: Reviews & updates
- [ ] Top 5 keywords position in Search Console
- [ ] Core Web Vitals still green
- [ ] No duplicate content detected
- [ ] All internal links work (broken link checker)
- [ ] Analytics shows conversions trending up
- [ ] Competitors' positions (if tracking)

---

## 🎓 LEARNING RESOURCES

### SEO Knowledge

- Google Search Central: https://developers.google.com/search
- Moz SEO Guide: https://moz.com/beginners-guide-to-seo
- Ahrefs Academy: https://ahrefs.com/academy

### Local SEO Specific

- Google My Business Help: https://support.google.com/business
- Moz Local: https://moz.com/local
- BrightLocal: https://www.brightlocal.com

### Next.js & Performance

- Next.js Image Optimization: https://nextjs.org/docs/basic-features/image-optimization
- Web Vitals: https://web.dev/vitals
- Page Speed Insights: https://pagespeed.web.dev

---

## 📈 SUCCESS METRICS

### 3-Month Goals

- [ ] Rank in top 5 for primary keywords
- [ ] 1,000+ monthly organic users
- [ ] 5%+ organic conversion rate
- [ ] 50+ qualified leads

### 6-Month Goals

- [ ] Rank #1-3 for primary keywords
- [ ] 3,000+ monthly organic users
- [ ] 8%+ organic conversion rate
- [ ] 200+ qualified leads

### 12-Month Goals

- [ ] Rank #1 for primary keywords
- [ ] 10,000+ monthly organic users
- [ ] 10%+ organic conversion rate
- [ ] 500+ qualified leads

---

## 🔧 TECHNICAL REQUIREMENTS

### Files Created/Modified

- [x] `src/utils/seo/jsonLd.ts` ✅
- [x] `src/utils/seo/metadata.ts` ✅
- [x] `src/components/seo/JSONLDScript.tsx` ✅
- [x] `src/components/seo/SEOBreadcrumbs.tsx` ✅
- [x] `src/components/seo/SEOImage.tsx` ✅
- [x] `src/components/seo/ServiceAreasNearYou.tsx` ✅
- [x] `src/app/robots.ts` ✅
- [x] `src/app/sitemap.ts` ✅
- [x] `next.config.optimized.ts` (review and merge with existing)

### Installation Steps

1. Copy all SEO utilities and components
2. Update metadata in jsonLd.ts
3. Add components to pages gradually
4. Test each implementation
5. Monitor performance and rankings

---

## ⚠️ COMMON PITFALLS TO AVOID

- ❌ Duplicate content across suburb pages (use canonical URLs)
- ❌ Thin content pages (provide real value)
- ❌ Broken internal links (audit regularly)
- ❌ Poor mobile experience (test thoroughly)
- ❌ Slow page load times (optimize images)
- ❌ Inconsistent NAP (verify all sources)
- ❌ Keyword stuffing (write naturally)
- ❌ Neglecting local citations (maintain consistency)

---

## 📞 SUPPORT & QUESTIONS

If you have questions about implementation:

1. Check the SEO_IMPLEMENTATION_GUIDE.md
2. Review EXAMPLE_SEO_PAGE_IMPLEMENTATION.md
3. Test components individually before combining
4. Use Google Search Central for official guidance

---

Generated: April 2026
Target Market: Melbourne, Australia
Primary Keywords: Gas heater repair, Split System repair, Hydronic repair
