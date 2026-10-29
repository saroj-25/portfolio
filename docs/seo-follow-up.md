# SEO launch and account follow-up

## Implemented
- Three project/research detail pages and one sourced technical guide.
- Unique titles, descriptions, canonicals, Open Graph/Twitter metadata and breadcrumbs.
- Homepage links and five canonical sitemap entries.
- Removed build-time sitemap dates; real content dates can be added when tracked.

## Content needing author input
The technical guide separates recommendations from documented project facts. Do not turn it into a personal retrospective without confirmed incidents and decisions.
- Aadim Chatbot: confirm embedding/model choices, chunking decisions, actual failure examples, review set and measured results.
- Kritim Guru: add verified screenshots, implementation decisions and outcomes if available.
- Research: use the original paper for sample sizes and experimental details; never apply its results to the college chatbot.

## External profiles (requires account access)
Website value: https://sarojbhandari100.com.np
- GitHub saroj-25: Settings > Public profile > URL.
- LinkedIn sarojbhandari17: edit contact information and add the portfolio as a website.
- Google Scholar OGF4reEAAAAJ: edit profile homepage URL.
- Relevant repository READMEs: link the matching case study, not unrelated projects.

Suggested README text:
[Aadim Chatbot case study](https://sarojbhandari100.com.np/projects/aadim-chatbot)
[Kritim Guru case study](https://sarojbhandari100.com.np/projects/kritim-guru)
[RAG algorithm-learning research](https://sarojbhandari100.com.np/research/rag-nepali-algorithm-learning)

## Measurement
A mobile PageSpeed API request on 2026-10-29 returned shared quota exhaustion. No performance score was obtained. Run https://pagespeed.web.dev/ for the public homepage and the new detail pages after deployment.
Record LCP, INP when field data is available, CLS, and each reported opportunity. Do not infer live speed from a successful build.
Search Console: inspect the four new URLs after deployment and check sitemap discovery. Record a 28-day baseline of clicks, impressions, queries and pages, then compare after 4–6 weeks. No Search Console account is connected in this session.
