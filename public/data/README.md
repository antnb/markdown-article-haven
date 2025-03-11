
# How to Add Articles to Your Markdown Website

This guide explains how to add new markdown articles to your website.

## Article File Format

1. Create a markdown file (`.md`) with the following structure:

```markdown
---
title: Your Article Title
description: A brief description of the article
date: YYYY-MM-DD
author: Your Name
tags: ['tag1', 'tag2', 'tag3']
---

# Main Heading

Your article content goes here...

## Subheading

More content...
```

## Required Frontmatter Fields

Each article must include these metadata fields at the top:

- `title`: The article title
- `description`: A short summary of the article
- `date`: Publication date in YYYY-MM-DD format

## Optional Frontmatter Fields

You can also include:

- `author`: The article's author
- `tags`: An array of related topics `['tag1', 'tag2']`
- `readingTime`: Estimated reading time (will be calculated automatically if omitted)

## Adding a New Article

1. Create a new `.md` file in the `public/data` directory
2. Name the file with a URL-friendly name (e.g., `your-article-title.md`)
3. Add the required frontmatter at the top between `---` delimiters
4. Write your article content using Markdown syntax
5. Save the file
6. Update the `articleFiles` array in `src/lib/article-utils.ts` to include your new file name

## Markdown Syntax Tips

- Use `#` for headings (more `#` means smaller heading)
- Use `**text**` for bold text
- Use `*text*` for italic text
- Use `-` or `*` for unordered lists
- Use `1.`, `2.`, etc. for ordered lists
- Use ``` for code blocks
