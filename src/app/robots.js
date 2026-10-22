export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly allow and welcome ChatGPT, Claude, and all AI web crawlers & search agents
      {
        userAgent: [
          'GPTBot',             // OpenAI training & data
          'ChatGPT-User',       // ChatGPT live browsing & custom GPT actions
          'OAI-SearchBot',      // SearchGPT search engine bot
          'ClaudeBot',          // Anthropic Claude training & crawler
          'Claude-Web',         // Anthropic Claude web browsing
          'AnthropicAI',        // Anthropic AI crawler
          'PerplexityBot',      // Perplexity AI search engine
          'Google-Extended',    // Google Gemini & Vertex AI crawler
          'Applebot',           // Apple Siri & Spotlight
          'Applebot-Extended',  // Apple Intelligence AI
          'Meta-ExternalAgent', // Meta AI crawler
          'Cohere-ai',          // Cohere AI crawler
          'CCBot',              // Common Crawl (open source AI training datasets)
          'Bytespider',         // ByteDance AI crawler
          'Diffbot',            // Diffbot knowledge graph AI
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.nextcodehub.com/sitemap.xml',
    host: 'https://www.nextcodehub.com',
  };
}

