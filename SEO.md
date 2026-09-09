# Search visibility for Saroj Bhandari

The canonical public site is https://sarojbhandari100.com.np/. Metadata,
structured data and the sitemap share this origin in `data/seo.ts`.
The homepage is prerendered, so its identity, projects and research can be
read without running JavaScript. SEO improvements cannot guarantee a position.

## After deployment

1. Check that the public domain resolves and serves the updated homepage with
   HTTP 200, without a login, crawler challenge or `X-Robots-Tag: noindex`.
   Configure permanent redirects from HTTP and www to the canonical HTTPS host
   at your production hosting provider. Avoid redirecting local previews.
2. Verify a Domain property in [Google Search Console](https://search.google.com/search-console)
   using Google's DNS TXT record. Alternatively, create an HTTPS URL-prefix
   property, choose HTML-tag verification, and set `GOOGLE_SITE_VERIFICATION`
   to the supplied content value in the build environment. Rebuild and deploy
   before clicking Verify. No token is emitted when the variable is unset.
3. Submit `https://sarojbhandari100.com.np/sitemap.xml` in Search Console.
   Inspect the homepage URL, run the live test, and request indexing. Check
   Google's selected canonical and any reported indexing exclusions.
4. Validate the public URL with [Rich Results Test](https://search.google.com/test/rich-results).
   Structured data describes the real profile; Google decides whether to use
   it in search features.
5. Link this exact domain from your GitHub, LinkedIn and Google Scholar profiles.
   Where appropriate, add an author/profile link from your company and college
   websites. Keep your name and professional information consistent.
6. Monitor the query “saroj bhandari” in Search Console's Performance report.
   Publish substantive project case studies and research updates as your work
   develops. Do not buy links or add repetitive keyword pages.

Private Sites previews cannot substitute for an anonymously accessible public
domain. Deploy these changes to the host actually serving the canonical domain.
Allow time for recrawling; indexing and ranking are separate Google decisions.

References: [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide),
[title links](https://developers.google.com/search/docs/appearance/title-link),
[profile structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page).
