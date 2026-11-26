// Markdown and Code Formatter for Reviewer Suite
function renderFormattedText(str) {
  if (!str) return '';

  // 1. Convert fenced code blocks ```lang\ncode\n``` to <pre class="code-block"><code>...</code></pre>
  let res = str.replace(/```(?:[a-zA-Z0-9_-]+)?(?:\r?\n)([\s\S]*?)```/g, (match, code) => {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .trim();
    return `___PRE_BLOCK_START___${escaped}___PRE_BLOCK_END___`;
  });

  // Handle single-line code blocks ```code```
  res = res.replace(/```([\s\S]*?)```/g, (match, code) => {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .trim();
    return `___PRE_BLOCK_START___${escaped}___PRE_BLOCK_END___`;
  });

  // 2. Convert inline `code` to <code class="code-inline">...</code>
  res = res.replace(/`([^`\n]+)`/g, (match, code) => {
    const escaped = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    return `<code class="code-inline">${escaped}</code>`;
  });

  // 3. Convert double newlines to paragraph spacers, single newlines to <br/> outside pre blocks
  const segments = res.split(/(___PRE_BLOCK_START___[\s\S]*?___PRE_BLOCK_END___)/g);
  for (let i = 0; i < segments.length; i++) {
    if (segments[i].startsWith('___PRE_BLOCK_START___')) {
      const code = segments[i]
        .replace('___PRE_BLOCK_START___', '')
        .replace('___PRE_BLOCK_END___', '');
      segments[i] = `<pre class="code-block"><code>${code}</code></pre>`;
    } else {
      segments[i] = segments[i]
        .replace(/\r?\n\r?\n+/g, '<div style="margin-top:10px;"></div>')
        .replace(/\r?\n/g, '<br/>');
    }
  }

  return segments.join('');
}

if (typeof window !== 'undefined') {
  window.renderFormattedText = renderFormattedText;
}
