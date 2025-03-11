
# Adding Articles to Your Markdown Website

This guide will walk you through the process of adding new articles to your markdown-based website.

## File Structure

All article files should be stored in the `/data` directory in the root of the project. Each article must be a markdown (`.md`) file.

## Article File Naming

1. Choose a meaningful and URL-friendly name for your file
2. Use lowercase letters
3. Replace spaces with hyphens
4. Use only alphanumeric characters and hyphens
5. Include the `.md` extension

Example: `getting-started-with-react.md`

## Article Content Structure

Each article must include:

1. **Frontmatter** - metadata at the top of the file enclosed in triple dashes (`---`)
2. **Content** - the main body of the article in markdown format

### Required Frontmatter Fields

The following frontmatter fields are required for each article:

```md
---
title: Your Article Title
description: A short description of your article (1-2 sentences)
date: YYYY-MM-DD
---
```

### Optional Frontmatter Fields

You can also include these optional fields:

```md
---
author: Your Name
tags: ['tag1', 'tag2', 'tag3']
readingTime: X min read
---
```

### Full Example

Here's a complete example of an article file:

```md
---
title: Getting Started with React
description: Learn the basics of React and build your first component
date: 2023-10-01
author: React Expert
tags: ['react', 'javascript', 'frontend']
---

# Getting Started with React

React is a popular JavaScript library for building user interfaces...

## Installation

To get started with React, you'll need to...

## Creating Your First Component

Let's create a simple React component...
```

## Adding a New Article

To add a new article to the website:

1. Create a new `.md` file in the `/data` directory
2. Add the required frontmatter at the top of the file
3. Write your article content using markdown syntax
4. Save the file

The new article will automatically appear on the website after the build process completes.

## Tips for Writing Good Articles

- Use clear, descriptive titles
- Break content into logical sections with headings
- Use lists, code blocks, and other markdown features to improve readability
- Include code examples when relevant
- End with a conclusion or summary

## Markdown Syntax Reference

For a refresher on markdown syntax, refer to the "Getting Started with Markdown" article on the website or visit [The Markdown Guide](https://www.markdownguide.org/).
