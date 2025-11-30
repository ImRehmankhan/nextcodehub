const { PrismaClient } = require("../src/generated/prisma");

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const admin = await prisma.user.upsert({
    where: { email: 'admin' },
    update: {},
    create: {
      email: 'admin',
      password: 'admin', // In production, this should be hashed
      name: 'Administrator',
      role: 'ADMIN',
      bio: 'Default admin user'
    },
  });
  console.log('Created admin user:', admin);

  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: 'javascript' },
      update: {},
      create: {
        name: 'JavaScript',
        slug: 'javascript'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'react' },
      update: {},
      create: {
        name: 'React',
        slug: 'react'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'nextjs' },
      update: {},
      create: {
        name: 'Next.js',
        slug: 'nextjs'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'typescript' },
      update: {},
      create: {
        name: 'TypeScript',
        slug: 'typescript'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'nodejs' },
      update: {},
      create: {
        name: 'Node.js',
        slug: 'nodejs'
      }
    }),
    prisma.category.upsert({
      where: { slug: 'css' },
      update: {},
      create: {
        name: 'CSS',
        slug: 'css'
      }
    })
  ]);
  console.log(`Created ${categories.length} categories`);

  // Create tags
  const tags = await Promise.all([
    prisma.tag.upsert({
      where: { slug: 'beginner' },
      update: {},
      create: { name: 'Beginner', slug: 'beginner' }
    }),
    prisma.tag.upsert({
      where: { slug: 'tutorial' },
      update: {},
      create: { name: 'Tutorial', slug: 'tutorial' }
    }),
    prisma.tag.upsert({
      where: { slug: 'advanced' },
      update: {},
      create: { name: 'Advanced', slug: 'advanced' }
    }),
    prisma.tag.upsert({
      where: { slug: 'best-practices' },
      update: {},
      create: { name: 'Best Practices', slug: 'best-practices' }
    }),
    prisma.tag.upsert({
      where: { slug: 'performance' },
      update: {},
      create: { name: 'Performance', slug: 'performance' }
    }),
    prisma.tag.upsert({
      where: { slug: 'hooks' },
      update: {},
      create: { name: 'Hooks', slug: 'hooks' }
    }),
    prisma.tag.upsert({
      where: { slug: 'api' },
      update: {},
      create: { name: 'API', slug: 'api' }
    }),
    prisma.tag.upsert({
      where: { slug: 'security' },
      update: {},
      create: { name: 'Security', slug: 'security' }
    })
  ]);
  console.log(`Created ${tags.length} tags`);

  // Create blog posts
  const posts = [
    {
      title: 'Getting Started with JavaScript ES6+ Features',
      slug: 'getting-started-javascript-es6',
      content: `<h2>Introduction to ES6+</h2>
<p>JavaScript ES6 (ECMAScript 2015) introduced revolutionary features that changed how we write JavaScript code. In this comprehensive guide, we'll explore the essential features you need to master.</p>

<h3>Let and Const</h3>
<p>The introduction of <code>let</code> and <code>const</code> gave us block-scoped variables:</p>
<pre><code>let mutableVariable = 'Can be changed';
const immutableVariable = 'Cannot be reassigned';
</code></pre>

<h3>Arrow Functions</h3>
<p>Arrow functions provide a concise syntax and lexical this binding:</p>
<pre><code>const greet = (name) => \`Hello, \${name}!\`;
console.log(greet('Developer'));
</code></pre>

<h3>Destructuring</h3>
<p>Extract values from arrays and objects easily:</p>
<pre><code>const { name, age } = user;
const [first, second] = array;
</code></pre>

<h3>Template Literals</h3>
<p>Create dynamic strings with embedded expressions:</p>
<pre><code>const message = \`User \${name} is \${age} years old\`;
</code></pre>

<h3>Spread and Rest Operators</h3>
<p>Work with arrays and objects more effectively:</p>
<pre><code>const newArray = [...oldArray, newItem];
const mergedObject = { ...obj1, ...obj2 };
</code></pre>

<h2>Conclusion</h2>
<p>These ES6+ features are fundamental to modern JavaScript development. Practice using them in your projects to write cleaner, more maintainable code.</p>`,
      published: true,
      authorId: admin.id,
      views: 1250,
      likes: 89,
      shares: 15
    },
    {
      title: 'React Hooks Complete Guide: useState and useEffect',
      slug: 'react-hooks-complete-guide',
      content: `<h2>Understanding React Hooks</h2>
<p>React Hooks revolutionized how we write React components by allowing us to use state and lifecycle features in functional components.</p>

<h3>useState Hook</h3>
<p>The useState hook lets you add state to functional components:</p>
<pre><code>import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;
        Increment
      &lt;/button&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h3>useEffect Hook</h3>
<p>Handle side effects like data fetching, subscriptions, or DOM manipulation:</p>
<pre><code>import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId]); // Dependency array
  
  return user ? &lt;div&gt;{user.name}&lt;/div&gt; : &lt;div&gt;Loading...&lt;/div&gt;;
}
</code></pre>

<h3>Best Practices</h3>
<ul>
  <li>Always include all dependencies in useEffect dependency array</li>
  <li>Clean up side effects by returning a cleanup function</li>
  <li>Don't call hooks inside loops, conditions, or nested functions</li>
  <li>Use multiple useEffect hooks to separate concerns</li>
</ul>

<h2>Conclusion</h2>
<p>React Hooks make functional components powerful and clean. Master these fundamentals before moving to advanced hooks like useReducer and useContext.</p>`,
      published: true,
      authorId: admin.id,
      views: 2340,
      likes: 156,
      shares: 42
    },
    {
      title: 'Building a Full-Stack App with Next.js 15 and Prisma',
      slug: 'nextjs-prisma-fullstack-app',
      content: `<h2>Introduction</h2>
<p>Next.js 15 with the App Router provides an excellent foundation for building full-stack applications. Combined with Prisma ORM, you get type-safe database access and seamless integration.</p>

<h3>Setting Up Your Project</h3>
<p>Start by creating a new Next.js project:</p>
<pre><code>npx create-next-app@latest my-app
cd my-app
npm install prisma @prisma/client
npx prisma init
</code></pre>

<h3>Defining Your Schema</h3>
<p>Create your database schema in <code>prisma/schema.prisma</code>:</p>
<pre><code>model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
}
</code></pre>

<h3>Creating API Routes</h3>
<p>Use Next.js Route Handlers for your API:</p>
<pre><code>// app/api/posts/route.js
import { prisma } from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany({
    include: { author: true }
  });
  return Response.json(posts);
}
</code></pre>

<h3>Server Components</h3>
<p>Fetch data directly in Server Components:</p>
<pre><code>// app/posts/page.js
import { prisma } from '@/lib/prisma';

export default async function PostsPage() {
  const posts = await prisma.post.findMany();
  
  return (
    &lt;div&gt;
      {posts.map(post => (
        &lt;article key={post.id}&gt;
          &lt;h2&gt;{post.title}&lt;/h2&gt;
        &lt;/article&gt;
      ))}
    &lt;/div&gt;
  );
}
</code></pre>

<h2>Conclusion</h2>
<p>Next.js 15 and Prisma provide a powerful, type-safe stack for building modern web applications. The App Router's Server Components eliminate much of the boilerplate traditionally required.</p>`,
      published: true,
      authorId: admin.id,
      views: 3120,
      likes: 234,
      shares: 28
    },
    {
      title: 'TypeScript Generics: A Practical Guide',
      slug: 'typescript-generics-practical-guide',
      content: `<h2>What are Generics?</h2>
<p>Generics allow you to write flexible, reusable code that works with multiple types while maintaining type safety.</p>

<h3>Basic Generic Function</h3>
<pre><code>function identity&lt;T&gt;(arg: T): T {
  return arg;
}

const result1 = identity&lt;string&gt;("Hello");
const result2 = identity&lt;number&gt;(42);
</code></pre>

<h3>Generic Interfaces</h3>
<pre><code>interface ApiResponse&lt;T&gt; {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const response: ApiResponse&lt;User&gt; = {
  data: { id: 1, name: "John" },
  status: 200,
  message: "Success"
};
</code></pre>

<h3>Generic Constraints</h3>
<p>Restrict generics to specific types:</p>
<pre><code>interface HasLength {
  length: number;
}

function logLength&lt;T extends HasLength&gt;(arg: T): void {
  console.log(arg.length);
}

logLength("Hello"); // Works
logLength([1, 2, 3]); // Works
// logLength(123); // Error: number doesn't have length
</code></pre>

<h3>Generic Classes</h3>
<pre><code>class DataStore&lt;T&gt; {
  private data: T[] = [];
  
  add(item: T): void {
    this.data.push(item);
  }
  
  get(index: number): T | undefined {
    return this.data[index];
  }
}

const numberStore = new DataStore&lt;number&gt;();
numberStore.add(42);
</code></pre>

<h2>Best Practices</h2>
<ul>
  <li>Use meaningful generic parameter names (T for Type, K for Key, V for Value)</li>
  <li>Apply constraints when necessary to ensure type safety</li>
  <li>Keep generics simple and don't over-engineer</li>
  <li>Use default generic types when appropriate</li>
</ul>`,
      published: true,
      authorId: admin.id,
      views: 1890,
      likes: 145,
      shares: 22
    },
    {
      title: 'Node.js Express REST API Best Practices',
      slug: 'nodejs-express-rest-api-best-practices',
      content: `<h2>Building Robust REST APIs</h2>
<p>Creating a production-ready REST API requires following established patterns and best practices.</p>

<h3>Project Structure</h3>
<pre><code>src/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── middleware/
  ├── utils/
  └── app.js
</code></pre>

<h3>Error Handling Middleware</h3>
<pre><code>// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;
</code></pre>

<h3>Async Error Handling</h3>
<pre><code>const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
router.get('/users', asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
}));
</code></pre>

<h3>Request Validation</h3>
<pre><code>const { body, validationResult } = require('express-validator');

router.post('/users',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Process request
  }
);
</code></pre>

<h3>Security Best Practices</h3>
<ul>
  <li>Use helmet for security headers</li>
  <li>Implement rate limiting</li>
  <li>Validate and sanitize all inputs</li>
  <li>Use environment variables for secrets</li>
  <li>Enable CORS properly</li>
  <li>Implement proper authentication/authorization</li>
</ul>

<h2>Conclusion</h2>
<p>Following these best practices will help you build scalable, maintainable, and secure REST APIs with Node.js and Express.</p>`,
      published: true,
      authorId: admin.id,
      views: 2670,
      likes: 198,
      shares: 35
    },
    {
      title: 'CSS Grid vs Flexbox: When to Use Each',
      slug: 'css-grid-vs-flexbox',
      content: `<h2>Understanding Layout Systems</h2>
<p>CSS Grid and Flexbox are powerful layout tools, but they serve different purposes.</p>

<h3>Flexbox: One-Dimensional Layouts</h3>
<p>Perfect for arranging items in a single direction:</p>
<pre><code>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.item {
  flex: 1;
}
</code></pre>

<h3>CSS Grid: Two-Dimensional Layouts</h3>
<p>Ideal for complex layouts with rows and columns:</p>
<pre><code>.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
}

.sidebar {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}
</code></pre>

<h3>When to Use Flexbox</h3>
<ul>
  <li>Navigation bars</li>
  <li>Vertical or horizontal lists</li>
  <li>Centering elements</li>
  <li>Equal-height columns</li>
  <li>Small-scale layouts</li>
</ul>

<h3>When to Use CSS Grid</h3>
<ul>
  <li>Page layouts</li>
  <li>Card grids</li>
  <li>Complex responsive designs</li>
  <li>Overlapping elements</li>
  <li>Magazine-style layouts</li>
</ul>

<h3>Combining Both</h3>
<p>Use Grid for overall page structure and Flexbox for component internals:</p>
<pre><code>.page {
  display: grid;
  grid-template-columns: 250px 1fr;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</code></pre>

<h2>Conclusion</h2>
<p>Both Grid and Flexbox are essential modern CSS tools. Understanding their strengths helps you choose the right tool for each layout challenge.</p>`,
      published: true,
      authorId: admin.id,
      views: 1560,
      likes: 112,
      shares: 18
    },
    {
      title: 'Advanced React Patterns: Compound Components',
      slug: 'react-compound-components-pattern',
      content: `<h2>What are Compound Components?</h2>
<p>Compound components is a pattern where multiple components work together to form a complete UI element, giving users more control over rendering.</p>

<h3>Basic Example: Tabs Component</h3>
<pre><code>import { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    &lt;TabsContext.Provider value={{ activeTab, setActiveTab }}&gt;
      &lt;div className="tabs"&gt;{children}&lt;/div&gt;
    &lt;/TabsContext.Provider&gt;
  );
}

function TabList({ children }) {
  return &lt;div className="tab-list"&gt;{children}&lt;/div&gt;;
}

function Tab({ id, children }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  return (
    &lt;button
      className={activeTab === id ? 'active' : ''}
      onClick={() => setActiveTab(id)}
    &gt;
      {children}
    &lt;/button&gt;
  );
}

function TabPanel({ id, children }) {
  const { activeTab } = useContext(TabsContext);
  return activeTab === id ? &lt;div&gt;{children}&lt;/div&gt; : null;
}

Tabs.List = TabList;
Tabs.Tab = Tab;
Tabs.Panel = TabPanel;

export default Tabs;
</code></pre>

<h3>Usage</h3>
<pre><code>function App() {
  return (
    &lt;Tabs defaultTab="home"&gt;
      &lt;Tabs.List&gt;
        &lt;Tabs.Tab id="home"&gt;Home&lt;/Tabs.Tab&gt;
        &lt;Tabs.Tab id="profile"&gt;Profile&lt;/Tabs.Tab&gt;
        &lt;Tabs.Tab id="settings"&gt;Settings&lt;/Tabs.Tab&gt;
      &lt;/Tabs.List&gt;
      
      &lt;Tabs.Panel id="home"&gt;
        &lt;h2&gt;Home Content&lt;/h2&gt;
      &lt;/Tabs.Panel&gt;
      &lt;Tabs.Panel id="profile"&gt;
        &lt;h2&gt;Profile Content&lt;/h2&gt;
      &lt;/Tabs.Panel&gt;
      &lt;Tabs.Panel id="settings"&gt;
        &lt;h2&gt;Settings Content&lt;/h2&gt;
      &lt;/Tabs.Panel&gt;
    &lt;/Tabs&gt;
  );
}
</code></pre>

<h3>Benefits</h3>
<ul>
  <li>Flexible API that's easy to understand</li>
  <li>Separation of concerns</li>
  <li>Reduced prop drilling</li>
  <li>Better component composition</li>
</ul>

<h2>Conclusion</h2>
<p>The compound component pattern creates flexible, reusable components with intuitive APIs. It's perfect for building UI libraries and design systems.</p>`,
      published: true,
      authorId: admin.id,
      views: 980,
      likes: 87,
      shares: 12
    },
    {
      title: 'Securing Your Node.js Application',
      slug: 'securing-nodejs-application',
      content: `<h2>Security Fundamentals</h2>
<p>Security should be a top priority when building Node.js applications. Here are essential practices to follow.</p>

<h3>Environment Variables</h3>
<p>Never hardcode sensitive data:</p>
<pre><code>// Bad
const apiKey = 'sk-1234567890abcdef';

// Good
require('dotenv').config();
const apiKey = process.env.API_KEY;
</code></pre>

<h3>Input Validation</h3>
<pre><code>const validator = require('validator');

app.post('/user', (req, res) => {
  const { email, username } = req.body;
  
  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }
  
  if (!validator.isAlphanumeric(username)) {
    return res.status(400).json({ error: 'Invalid username' });
  }
  
  // Process valid input
});
</code></pre>

<h3>SQL Injection Prevention</h3>
<pre><code>// Bad - vulnerable to SQL injection
const query = \`SELECT * FROM users WHERE id = \${req.params.id}\`;

// Good - using parameterized queries
const query = 'SELECT * FROM users WHERE id = ?';
db.execute(query, [req.params.id]);
</code></pre>

<h3>XSS Protection</h3>
<pre><code>const helmet = require('helmet');
const xss = require('xss-clean');

app.use(helmet());
app.use(xss());
</code></pre>

<h3>Rate Limiting</h3>
<pre><code>const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
</code></pre>

<h3>HTTPS and CORS</h3>
<pre><code>const cors = require('cors');

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(','),
  credentials: true
}));
</code></pre>

<h2>Security Checklist</h2>
<ul>
  <li>✓ Use HTTPS in production</li>
  <li>✓ Validate all user inputs</li>
  <li>✓ Use parameterized queries</li>
  <li>✓ Implement rate limiting</li>
  <li>✓ Keep dependencies updated</li>
  <li>✓ Use security headers (helmet)</li>
  <li>✓ Hash passwords (bcrypt)</li>
  <li>✓ Implement CSRF protection</li>
</ul>`,
      published: true,
      authorId: admin.id,
      views: 2150,
      likes: 167,
      shares: 25
    }
  ];

  // Insert posts with their relationships
  for (let i = 0; i < posts.length; i++) {
    const postData = posts[i];
    const categoryForPost = categories[i % categories.length]; // Cycle through categories
    
    const post = await prisma.post.upsert({
      where: { slug: postData.slug },
      update: {},
      create: {
        ...postData,
        categories: {
          connect: { id: categoryForPost.id }
        }
      }
    });

    // Assign random tags to each post (2-4 tags per post)
    const numTags = Math.floor(Math.random() * 3) + 2;
    const shuffledTags = tags.sort(() => 0.5 - Math.random());
    const selectedTags = shuffledTags.slice(0, numTags);

    for (const tag of selectedTags) {
      await prisma.post.update({
        where: { id: post.id },
        data: {
          tags: {
            connect: { id: tag.id }
          }
        }
      });
    }

    console.log(`Created post: ${post.title}`);
  }

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });