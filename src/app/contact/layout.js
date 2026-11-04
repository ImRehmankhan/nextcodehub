export const metadata = {
  title: "Contact Us: Support, Feedback & Inquiries",
  description: "Get in touch with the NextCodeHub team. Send questions, feedback, calculation feature requests, or technical bug reports.",
  alternates: {
    canonical: 'https://www.nextcodehub.com/contact',
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.nextcodehub.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contact',
          item: 'https://www.nextcodehub.com/contact',
        },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://www.nextcodehub.com/contact',
      name: 'Contact NextCodeHub',
      url: 'https://www.nextcodehub.com/contact',
      description: 'Contact NextCodeHub for automotive calculation questions, suggestions, or technical support.',
    },
  ],
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
