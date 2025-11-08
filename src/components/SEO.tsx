import { useEffect } from 'react';

import defaultOgImage from '../../IMG_3097.JPG';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEO({
  title = 'Karibu Padel - No.1 Padel Court & Club in Zanzibar | Africa House Garden',
  description = 'Experience world-class padel at Karibu Padel, Zanzibar\'s premier padel club. Located in Africa House Garden with stunning ocean views. Book your court now for lessons, tournaments, and social events.',
  keywords = 'padel zanzibar, padel court zanzibar, tennis zanzibar, africa house garden, karibu padel, padel club tanzania, sports zanzibar, ocean view padel, padel lessons, padel tournaments, beach sports zanzibar',
  ogImage = defaultOgImage,
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const resolvedOgImage = ogImage.startsWith('http')
      ? ogImage
      : new URL(ogImage, window.location.origin).href;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Karibu Padel' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: resolvedOgImage },
      { property: 'og:url', content: window.location.href },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Karibu Padel' },
      { property: 'og:locale', content: 'en_US' },
      
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: resolvedOgImage },
      
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      
      { name: 'geo.region', content: 'TZ-25' },
      { name: 'geo.placename', content: 'Zanzibar' },
      { name: 'geo.position', content: '-6.163;39.185' },
      
      { name: 'theme-color', content: '#002B5B' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = property ? 'property' : 'name';
      const value = property || name;
      
      let meta = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'SportsActivityLocation',
        name: 'Karibu Padel',
        description: description,
        url: window.location.href,
        telephone: '+255760777333',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Africa House Garden',
          addressLocality: 'Shangani',
          addressRegion: 'Zanzibar',
          addressCountry: 'TZ',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -6.163,
          longitude: 39.185,
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '22:00',
        },
        sameAs: [
          'https://www.instagram.com/karibupadelclub',
        ],
        image: resolvedOgImage,
        priceRange: '$$',
      };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalLink) {
      canonicalLink.href = window.location.href;
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = window.location.href;
      document.head.appendChild(link);
    }
  }, [title, description, keywords, ogImage]);

  return null;
}
