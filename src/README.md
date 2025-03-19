
# Bodaguy Connect - DeliverJS Integration Guide

This guide explains how to set up and connect DeliverJS CMS to this Bodaguy Connect application for managing blog posts and newsroom content.

## DeliverJS Setup

### 1. Installation

First, install DeliverJS in your project:

```bash
npm install deliverjs deliverjs-client
```

### 2. Configuration

DeliverJS is already pre-configured in this project in the `src/cms/config.ts` file. The configuration defines the content types and fields required for blog posts and news items.

### 3. Environment Variables

Create a `.env` file in the root of your project with the following variables:

```
VITE_DELIVERJS_API_KEY=your_api_key_here
VITE_DELIVERJS_PROJECT_ID=your_project_id_here
VITE_DELIVERJS_ENVIRONMENT=production
```

### 4. Content Schema

The DeliverJS schema is configured with the following content types:

#### Blog Posts
- `title`: String
- `excerpt`: Text
- `date`: Date
- `readTime`: String
- `image`: Image
- `category`: String
- `content`: Rich Text
- `author`: Object (name, avatar)

#### News Items
- `title`: String
- `excerpt`: Text
- `date`: Date
- `image`: Image
- `category`: String
- `content`: Rich Text

### 5. Content Creation

1. Log in to your DeliverJS dashboard
2. Navigate to the content section
3. Create new blog posts and news items as needed

## Integration with Bodaguy Connect

### 1. Content Fetching

The application uses the DeliverJS client to fetch content. This is already implemented in the `src/cms/index.ts` file:

```typescript
import { initializeDeliverJs } from './config';

const cms = initializeDeliverJs();

export const fetchBlogPosts = async () => {
  try {
    return await cms.getContent('blogPost', { limit: 100 });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

export const fetchNewsItems = async () => {
  try {
    return await cms.getContent('newsItem', { limit: 100 });
  } catch (error) {
    console.error('Error fetching news items:', error);
    return [];
  }
};
```

### 2. Displaying Content

The Blog and Newsroom pages are already set up to fetch and display content from DeliverJS:

- `src/pages/Blog.tsx` - Displays blog posts
- `src/pages/BlogPost.tsx` - Displays a single blog post
- `src/pages/Newsroom.tsx` - Displays news items
- `src/pages/NewsItem.tsx` - Displays a single news item

### 3. Development vs. Production

During development, the application uses mock data. In production, it will fetch real data from DeliverJS.

To toggle between development and production modes, update the `VITE_DELIVERJS_ENVIRONMENT` variable in your `.env` file.

## Advanced Usage

### Custom Content Types

To add more content types:

1. Update the `contentTypes` section in `src/cms/config.ts`
2. Create new fetch methods in `src/cms/index.ts`
3. Create new TypeScript types in `src/types/`
4. Create new components to display the content

### Content Preview

DeliverJS supports content previews before publishing. To enable this:

1. Enable the preview feature in your DeliverJS dashboard
2. Set up a preview route in your application
3. Configure the preview secret in your DeliverJS settings

### Image Optimization

DeliverJS provides image optimization features. To use them:

1. Enable image optimization in your DeliverJS dashboard
2. Use the optimized image URLs in your components

## Troubleshooting

If you encounter issues:

1. Check that your API key and project ID are correct
2. Verify that your content types match the schema in `src/cms/config.ts`
3. Check the console for error messages
4. Ensure your content has all required fields filled out

## Additional Resources

- [DeliverJS Documentation](https://deliverjs.com/docs)
- [Content Modeling Guide](https://deliverjs.com/guides/content-modeling)
- [API Reference](https://deliverjs.com/docs/api-reference)
