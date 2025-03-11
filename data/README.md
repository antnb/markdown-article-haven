
# Article Data Directory

This directory is intended to store markdown (.md) files for articles displayed on the website.

## File Structure

Each article should be in its own .md file with a unique name, preferably based on the article slug.

## Frontmatter

Each markdown file should include frontmatter at the top of the file, which provides metadata about the article. The frontmatter should be enclosed in triple dashes (`---`).

Example:

```md
---
title: My First Article
description: This is a short description of the article
date: 2023-10-25
author: John Doe
tags: ['markdown', 'tutorial']
---

# My First Article

Article content goes here...
```

## Required Frontmatter Fields

- `title`: The title of the article
- `description`: A short description (1-2 sentences)
- `date`: The publication date (YYYY-MM-DD format)

## Optional Frontmatter Fields

- `author`: The name of the author
- `tags`: An array of tags for the article
- `readingTime`: The estimated reading time (e.g., "5 min read")

## Article Content

After the frontmatter, include your article content written in markdown format.
