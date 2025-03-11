
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ArticleContent from '@/components/ArticleContent';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// This would be replaced with actual data in a Next.js implementation
const exampleArticles = {
  'getting-started-with-markdown': {
    title: 'Getting Started with Markdown',
    date: '2023-06-15',
    author: 'Markdown Master',
    readingTime: '4 min read',
    content: `
# Getting Started with Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.

## Why Use Markdown?

- **Easy to Learn**: The syntax is simple and intuitive.
- **Platform Independent**: You can create Markdown files on any device running any operating system.
- **Portable**: Files containing Markdown-formatted text can be opened using virtually any application.
- **Future Proof**: Even if the application you're using stops working someday, you'll still be able to read your Markdown-formatted text using a text editing application.

## Basic Syntax

### Headings

To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level.

# Heading level 1
## Heading level 2
### Heading level 3

### Emphasis

You can add emphasis by making text bold or italic.

*This text is italicized*
**This text is bold**
***This text is bold and italicized***

### Lists

You can organize items into ordered and unordered lists.

#### Unordered Lists

- First item
- Second item
- Third item

#### Ordered Lists

1. First item
2. Second item
3. Third item

### Links

To create a link, enclose the link text in brackets and then follow it immediately with the URL in parentheses.

[Visit OpenAI](https://www.openai.com)

### Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses.

![Markdown Logo](https://markdown-here.com/img/icon256.png)

### Blockquotes

To create a blockquote, add a > in front of a paragraph.

> This is a blockquote.

### Code

To denote a word or phrase as code, enclose it in backticks (\`).

`code`

### Code Blocks

To create code blocks, indent every line of the block by at least four spaces or one tab.

    const greeting = 'Hello, world!';
    console.log(greeting);

Alternatively, you can use triple backticks to create a fenced code block.

\`\`\`javascript
const greeting = 'Hello, world!';
console.log(greeting);
\`\`\`

## Conclusion

Markdown is a versatile and user-friendly way to format your text documents. With just a few simple symbols, you can create structured, easy-to-read documents that can be converted to HTML or other formats.
`
  },
  'advanced-markdown-techniques': {
    title: 'Advanced Markdown Techniques',
    date: '2023-07-22',
    author: 'Syntax Pro',
    readingTime: '7 min read',
    content: `
# Advanced Markdown Techniques

After mastering the basics of Markdown, it's time to explore some of the more advanced features and techniques that can enhance your documents even further.

## Extended Syntax

Many Markdown processors support extended syntax that provide additional features. Here are some examples:

### Tables

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Blocks with Syntax Highlighting

\`\`\`python
def hello_world():
    print("Hello, world!")
\`\`\`

### Footnotes

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading IDs

### My Heading {#custom-id}

### Definition Lists

term
: definition

### Strikethrough

~~The world is flat.~~

### Task Lists

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

:joy: :heart: :rocket:

## Advanced Formatting Tricks

### Creating Collapsible Sections

<details>
<summary>Click to expand!</summary>

This hidden content can contain all sorts of markdown formatting!

- Lists
- *Emphasis*
- **Strong emphasis**
- And more...
</details>

### Custom Containers

:::note
This is a note
:::

:::warning
This is a warning
:::

:::danger
This is a dangerous warning
:::

### Diagrams (with Mermaid or similar extensions)

\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`

## Advanced Use Cases

### Documentation

Markdown excels at creating clear, structured documentation for software projects, APIs, and other technical content.

### Scientific Writing

Combined with tools like Pandoc, Markdown can be used for academic and scientific writing, complete with citations, bibliographies, and LaTeX equations.

### Content Management

Many modern CMS platforms support Markdown, allowing for efficient content creation and editing without wrestling with WYSIWYG editors.

## Best Practices

1. **Consistency**: Adopt a consistent style throughout your documents.
2. **Readability**: Even though Markdown is designed to look good when rendered, make sure your source files are also readable.
3. **Comments**: Use HTML comments <!-- like this --> for notes that shouldn't appear in the final output.
4. **Version Control**: Markdown works exceptionally well with version control systems like Git.

## Conclusion

Mastering these advanced Markdown techniques will significantly enhance your ability to create rich, well-structured documents. While not all processors support every feature mentioned here, the ecosystem continues to grow, making Markdown an increasingly powerful tool for all kinds of writing and documentation needs.

Remember that with great power comes great responsibility—just because you can use all these features doesn't mean you should use them all at once!
`
  },
  'markdown-for-developers': {
    title: 'Markdown for Developers',
    date: '2023-08-10',
    author: 'Dev Writer',
    readingTime: '6 min read',
    content: `
# Markdown for Developers

As a developer, clear documentation is just as important as clean code. Markdown provides an excellent balance of simplicity and functionality that makes it perfect for documenting code and projects.

## Why Developers Love Markdown

- **Simplicity**: Focus on content over formatting
- **Version Control Friendly**: Plain text that works well with Git
- **Ubiquity**: Widely supported across development platforms
- **Convertibility**: Easily transform to HTML, PDF, and other formats

## Essential Markdown for READMEs

Every good project needs a README. Here's what to include:

### Project Title and Description

```markdown
# Project Name

A brief description of what this project does and who it's for.
```

### Installation Instructions

```markdown
## Installation

\`\`\`bash
npm install my-project
cd my-project
npm start
\`\`\`
```

### Usage Examples

```markdown
## Usage

\`\`\`javascript
import { myFunction } from 'my-project';

// Example usage
const result = myFunction('hello');
console.log(result);
\`\`\`
```

### API Documentation

```markdown
## API

### myFunction(input)

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| input | string | The input string to process |

Returns: \`string\` - The processed output
```

### Contributing Guidelines

```markdown
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
```

## Markdown in Code Comments

Many programming languages support documentation generators that parse markdown in code comments.

### JSDoc Example

\`\`\`javascript
/**
 * Calculates the sum of two numbers.
 * 
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 * 
 * @example
 * ```js
 * const result = add(2, 3);
 * console.log(result); // 5
 * ```
 */
function add(a, b) {
  return a + b;
}
\`\`\`

## Markdown in Issue Tracking

GitHub, GitLab, and other platforms use Markdown for issue descriptions, comments, and pull requests.

### Bug Report Template

```markdown
## Bug Description

When clicking the submit button on the login form, the application crashes.

## Steps to Reproduce

1. Navigate to the login page
2. Enter any username and password
3. Click the submit button

## Expected Behavior

The form should validate the input and either show an error or proceed to the dashboard.

## Actual Behavior

The application crashes with the following error:
\`\`\`
TypeError: Cannot read property 'value' of undefined
\`\`\`

## Environment

- Browser: Chrome 90.0.4430.212
- OS: Windows 10
- Device: Desktop
```

## Advanced GitHub Markdown Features

GitHub has extended Markdown with some special features:

### Task Lists for Project Management

```markdown
- [x] Research competitors
- [x] Draft project proposal
- [ ] Create wireframes
- [ ] Develop prototype
```

### Referencing Issues and Pull Requests

```markdown
This PR fixes #42
```

### Mentioning Users

```markdown
@username please review this section
```

## Tools for Developers

- **Visual Studio Code**: Excellent Markdown preview and extensions
- **Typora**: WYSIWYG Markdown editor
- **Markdown linters**: Enforce consistent style
- **mdx**: Markdown + JSX for interactive documentation

## Conclusion

Mastering Markdown is an essential skill for modern developers. It streamlines documentation, improves collaboration, and integrates seamlessly with the development workflow. By incorporating these practices into your projects, you'll create more maintainable code with documentation that others will actually want to read.
`
  },
  'creating-beautiful-documentation': {
    title: 'Creating Beautiful Documentation with Markdown',
    date: '2023-09-05',
    author: 'Documentation Expert',
    readingTime: '8 min read',
    content: `
# Creating Beautiful Documentation with Markdown

Documentation is often an afterthought in many projects, but well-crafted documentation can significantly enhance user experience, reduce support requests, and improve adoption. This guide will show you how to create documentation that's not just functional, but beautiful and engaging.

## The Principles of Beautiful Documentation

### 1. Clarity Above All

Clear, concise language is the foundation of good documentation. No matter how visually appealing your docs are, if readers can't understand the content, the documentation fails.

### 2. Consistent Structure

Establish a logical hierarchy and consistent structure throughout your documentation:

- Introduction/Overview
- Getting Started
- Core Concepts
- API Reference
- Tutorials/Examples
- FAQ/Troubleshooting

### 3. Visual Hierarchy

Use Markdown's heading levels to create a clear visual hierarchy:

# Main Section (H1)
## Sub-section (H2)
### Topic (H3)
#### Sub-topic (H4)

### 4. Breathing Space

Don't overcrowd your documentation. Use white space effectively:

- Add blank lines between sections
- Keep paragraphs reasonably short
- Use lists for multiple related items

## Enhancing Markdown with Tools and Extensions

Standard Markdown provides a solid foundation, but these tools can take your documentation to the next level:

### Documentation Generators

- **Docusaurus**: React-based static site generator
- **MkDocs**: Python-based documentation builder
- **VuePress**: Vue-powered static site generator
- **Jekyll**: Ruby-based static site generator with GitHub Pages integration

### Markdown Extensions

- **MDX**: Markdown + JSX for interactive documentation
- **remark/rehype**: Powerful Markdown processing ecosystem
- **Mermaid**: Diagrams and flowcharts in Markdown

## Visual Elements for Beautiful Documentation

### Callouts and Admonitions

> **Note**: This is important information that deserves attention.

> **Warning**: This is critical information that requires caution.

> **Tip**: This is helpful advice to improve usage.

### Code Examples with Syntax Highlighting

\`\`\`javascript
// This code will be syntax highlighted
function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}
\`\`\`

### Screenshots and Images

Use screenshots to illustrate concepts, but:

- Keep images at a reasonable size
- Compress images for fast loading
- Add descriptive alt text
- Consider light/dark mode versions

### Tables for Organized Data

| Feature | Basic Plan | Pro Plan | Enterprise Plan |
|---------|------------|----------|-----------------|
| Users   | 1-5        | 1-20     | Unlimited       |
| Storage | 10GB       | 100GB    | 1TB             |
| Support | Email      | Priority | 24/7 Dedicated  |

## Making Documentation Interactive

### Interactive Code Examples

Embed code playgrounds like CodePen or CodeSandbox:

<iframe src="https://codesandbox.io/embed/new" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>

### Collapsible Sections

<details>
<summary>Click to see advanced configuration options</summary>

This section contains advanced configuration options that most users won't need to modify:

\`\`\`json
{
  "advancedSetting1": true,
  "optimizationLevel": 3,
  "experimentalFeatures": false
}
\`\`\`
</details>

### Table of Contents

Use a generated table of contents to help readers navigate long documents.

## Design Considerations

### Color Schemes

Choose a color scheme that:

- Has sufficient contrast
- Complements your brand
- Works in both light and dark modes
- Highlights important information without being distracting

### Typography

- Use a readable font (system fonts or popular web fonts)
- Set comfortable line height (1.5-1.8 is often ideal)
- Ensure adequate font size (16px minimum for body text)
- Limit line length (60-80 characters per line)

### Responsive Design

Ensure your documentation looks good and functions well on:

- Desktop computers
- Tablets
- Mobile phones

## Maintaining Beautiful Documentation

### Style Guide

Create a documentation style guide covering:

- Voice and tone
- Formatting conventions
- Code example standards
- Screenshot requirements
- Terminology usage

### Version Control

- Keep documentation in the same repository as code when possible
- Version documentation to match software releases
- Clearly mark deprecated features

### Community Involvement

- Enable user feedback mechanisms
- Credit documentation contributors
- Consider open-source documentation

## Conclusion

Beautiful documentation is not just about aesthetics—it's about creating a seamless, enjoyable learning experience for your users. By combining the simplicity of Markdown with thoughtful design principles and modern tools, you can create documentation that users actually want to read.

Remember that documentation is never truly finished. Continuously gather feedback, make improvements, and keep your docs as polished as the product they describe.
`
  }
};

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // In real implementation, this would fetch from an API
  const article = slug ? exampleArticles[slug as keyof typeof exampleArticles] : null;
  
  if (!article) {
    return (
      <Layout>
        <div className="container px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/articles')}>
            <ArrowLeft size={16} className="mr-2" /> Back to Articles
          </Button>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/articles')} 
          className="mb-8 animate-in fade-in"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Articles
        </Button>
        
        <ArticleContent
          title={article.title}
          date={article.date}
          author={article.author}
          readingTime={article.readingTime}
          content={article.content}
        />
      </div>
    </Layout>
  );
};

export default ArticleDetail;
