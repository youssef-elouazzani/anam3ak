const prompts = [
  { title: 'SEO Blog Post Generator', category: 'ChatGPT', description: 'Create SEO-ready long-form posts.', text: 'Act as an SEO strategist. Create a 1,500-word blog post about [topic] targeting [keyword], include H2/H3 structure, FAQ schema ideas, CTA, and internal linking suggestions.' },
  { title: 'Cinematic Sci-Fi City', category: 'Midjourney', description: 'Generate stunning futuristic visuals.', text: 'A cinematic sci-fi city at golden hour, reflective rain streets, neon signs, crowds, ultra-detailed, volumetric lighting, shot on 35mm --ar 16:9 --stylize 250' },
  { title: '30s Product Video Script', category: 'Video AI', description: 'Fast ad concept for social channels.', text: 'Write a 30-second vertical video script for [product], hook in first 3 seconds, emotional pain point, proof, CTA, scene-by-scene directions and caption text.' },
  { title: 'Landing Page from Features', category: 'Coding', description: 'Build conversion-focused copy and code.', text: 'Generate HTML/CSS copy for a SaaS landing page using these features: [list]. Include hero, social proof, pricing teaser, FAQ, and mobile-first classes.' },
  { title: 'Email Welcome Sequence', category: 'Marketing', description: 'Improve onboarding and activation.', text: 'Create a 5-email welcome sequence for [brand], each with subject line A/B variants, preview text, objective, and CTA optimized for trial activation.' },
  { title: 'LinkedIn Thought Leadership', category: 'Writing', description: 'Consistent B2B content creation.', text: 'Draft a LinkedIn post around [industry trend] in a personal but credible voice, with one framework, one story, and a question to increase comments.' },
  { title: 'Prompt Chain for Research', category: 'ChatGPT', description: 'Get deep, structured research quickly.', text: 'Act as a research analyst. Break down [topic] into market segments, trends, opportunities, and risks. Cite assumptions and provide a summary table.' },
  { title: 'Brand Mascot Concepts', category: 'Midjourney', description: 'Explore mascot-style identities.', text: 'Friendly AI robot mascot with pencil, playful but modern, startup branding, clean white background, vector style, flat shadows --ar 1:1 --v 6' },
  { title: 'YouTube Explainer Outline', category: 'Video AI', description: 'Educational script structure.', text: 'Create a 6-minute YouTube explainer script on [topic] with hook, 3 sections, analogies, visual B-roll suggestions, and engagement prompts.' },
  { title: 'Refactor Legacy Function', category: 'Coding', description: 'Improve code quality and speed.', text: 'Refactor this JavaScript function for readability and performance, then explain changes and produce unit test cases: [paste function]' },
  { title: 'Ad Copy Variations', category: 'Marketing', description: 'Generate ad variants by intent.', text: 'Create 12 high-converting ad copy variants for [offer], grouped by awareness stage (cold/warm/hot), each with headline, primary text, CTA.' },
  { title: 'Storytelling Newsletter', category: 'Writing', description: 'Engaging audience retention format.', text: 'Write a weekly newsletter about [topic] using storytelling structure: hook, conflict, insight, takeaway, CTA. Keep under 500 words.' },
  { title: 'Technical Documentation Draft', category: 'ChatGPT', description: 'Clear docs for developers.', text: 'Create API documentation for [endpoint], including authentication, request/response examples, error codes, and best practices.' },
  { title: 'Fantasy Landscape Scene', category: 'Midjourney', description: 'Immersive artwork prompt.', text: 'Epic fantasy landscape with floating mountains, waterfalls, dramatic clouds, highly detailed matte painting, cinematic composition --ar 21:9' },
  { title: 'UGC Creator Brief', category: 'Video AI', description: 'Scale authentic short-form content.', text: 'Write a UGC brief for creators promoting [app], include persona, 3 hooks, do/don’t list, script template, and KPI goals.' },
  { title: 'SaaS Pricing Page Generator', category: 'Coding', description: 'Ship structured pricing quickly.', text: 'Generate semantic HTML and CSS for a SaaS pricing section with monthly/yearly toggle, 3 tiers, feature comparison, and highlighted recommended plan.' },
  { title: 'Product Launch Plan', category: 'Marketing', description: 'Multi-channel launch strategy.', text: 'Build a 14-day launch plan for [product] across X, LinkedIn, email, and communities. Include daily goals, assets needed, and KPI targets.' },
  { title: 'Long-form Article Improver', category: 'Writing', description: 'Edit for clarity and flow.', text: 'Improve this draft article for readability, remove fluff, strengthen transitions, and optimize for EEAT signals: [paste draft]' },
  { title: 'International SEO Localization', category: 'ChatGPT', description: 'Adapt content for global markets.', text: 'Localize this landing page for US, UK, Germany, and France audiences while keeping brand tone. Provide keyword and phrase variations per market.' },
  { title: 'Logo Concept Prompt', category: 'Midjourney', description: 'Generate logo concept ideas.', text: 'Minimalist AI startup logo, abstract neural shape with pencil motif, white background, professional brand identity style --ar 1:1 --style raw' }
];

const tools = [
  { name: 'ChatGPT', category: 'Writing Assistant', description: 'General-purpose conversational AI for content, coding, analysis.', url: 'https://chat.openai.com' },
  { name: 'Midjourney', category: 'Image Generation', description: 'High-quality artistic and photoreal image generation platform.', url: 'https://www.midjourney.com' },
  { name: 'Claude', category: 'AI Assistant', description: 'Long-context AI assistant for documents, planning, and summaries.', url: 'https://claude.ai' },
  { name: 'Runway', category: 'Video AI', description: 'Generate and edit AI video clips with cinematic effects.', url: 'https://runwayml.com' },
  { name: 'Jasper', category: 'Marketing', description: 'Marketing content automation for teams and agencies.', url: 'https://www.jasper.ai' },
  { name: 'Copy.ai', category: 'Copywriting', description: 'Fast generation for sales and social media copy.', url: 'https://www.copy.ai' },
  { name: 'Perplexity', category: 'Research', description: 'AI answer engine with web-backed research workflow.', url: 'https://www.perplexity.ai' },
  { name: 'Cursor', category: 'Coding', description: 'AI-powered code editor for developers and startup teams.', url: 'https://www.cursor.com' },
  { name: 'ElevenLabs', category: 'Voice AI', description: 'Generate realistic voices and multilingual audio content.', url: 'https://elevenlabs.io' },
  { name: 'Canva Magic Studio', category: 'Design', description: 'AI design toolkit for quick content and brand visuals.', url: 'https://www.canva.com' }
];

function copyPrompt(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const original = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(() => button.textContent = original, 1200);
  });
}

function renderPrompts(targetId, list) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = list.map((item, index) => `
    <article class="card">
      <span class="meta">${item.category}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="prompt-text" id="prompt-${targetId}-${index}">${item.text}</div>
      <button class="btn btn-yellow" data-copy="prompt-${targetId}-${index}">Copy Prompt</button>
    </article>`).join('');
}

function renderTools(targetId) {
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = tools.map((tool) => `
    <article class="card">
      <div class="tool-shot">Screenshot Placeholder</div>
      <span class="meta">${tool.category}</span>
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <a class="btn btn-sign" href="${tool.url}" target="_blank" rel="noopener noreferrer">Visit Website</a>
    </article>
  `).join('');
}

function setupInteractions() {
  document.addEventListener('click', (e) => {
    const button = e.target.closest('[data-copy]');
    if (!button) return;
    const text = document.getElementById(button.dataset.copy)?.textContent || '';
    if (text) copyPrompt(text, button);
  });

  const searchInput = document.getElementById('promptSearch');
  const filterButtons = document.querySelectorAll('[data-filter]');
  const promptHost = document.getElementById('promptLibrary');
  if (!promptHost) return;

  let activeCategory = 'All';
  const apply = () => {
    const q = (searchInput?.value || '').toLowerCase().trim();
    const filtered = prompts.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const haystack = `${p.title} ${p.description} ${p.text}`.toLowerCase();
      return matchCat && haystack.includes(q);
    });
    renderPrompts('promptLibrary', filtered);
  };

  searchInput?.addEventListener('input', apply);
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.filter;
      filterButtons.forEach((x) => x.classList.remove('btn-yellow'));
      btn.classList.add('btn-yellow');
      apply();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPrompts('featuredPrompts', prompts.slice(0, 6));
  renderPrompts('promptLibrary', prompts);
  renderTools('toolsDirectory');
  renderTools('allTools');
  setupInteractions();
});
