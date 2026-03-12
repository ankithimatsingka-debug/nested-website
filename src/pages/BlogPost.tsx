import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogPost, getRelatedPosts } from "@/data/blogData";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = new Date(post.publishedAt + "T00:00:00").toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const relatedPosts = getRelatedPosts(post.slug, 2);

  return (
    <>
      <Helmet>
        <title>{post.title} | Nested Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="author" content={post.author} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        <link rel="canonical" href={`https://nested.money/blog/${post.slug}`} />
        {post.slug === "best-mutual-fund-for-children-india" && (
          <>
            <script type="application/ld+json">{JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Best Mutual Fund for Children in India (2026 Guide)",
              "description": "Learn the best investment strategy for children, including goal-based investing, future education cost planning, and diversified mutual fund portfolios.",
              "author": { "@type": "Person", "name": "Ankit Himatsingka" },
              "publisher": { "@type": "Organization", "name": "Nested" },
              "datePublished": "2026-03-09",
              "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/best-mutual-fund-for-children-india" }
            })}</script>
            <script type="application/ld+json">{JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "What is the best mutual fund for child education in India?", "acceptedAnswer": { "@type": "Answer", "text": "There is no single best mutual fund for children. A diversified portfolio aligned with the goal timeline works better." } },
                { "@type": "Question", "name": "How much should parents invest for their child's future?", "acceptedAnswer": { "@type": "Answer", "text": "The required investment depends on the child's age, timeline, expected inflation, and the future cost of education." } }
              ]
            })}</script>
          </>
        )}
        {post.slug === "sip-for-child-education-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "SIP for Child Education: How Much Should You Invest?",
            "author": { "@type": "Person", "name": "Ankit Himatsingka" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-09",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/sip-for-child-education-india" }
          })}</script>
        )}
        {post.slug === "education-inflation-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Education Inflation in India: Future Cost of College",
            "author": { "@type": "Person", "name": "Ankit Himatsingka" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-09",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/education-inflation-india" }
          })}</script>
        )}
        {post.slug === "child-education-planning-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Child Education Planning in India: How Much Should You Invest for Your Child's Future?",
            "description": "A complete guide to child education planning in India including future education cost calculations, required SIP, and mutual fund strategy.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/child-education-planning-india" }
          })}</script>
        )}
        {post.slug === "sip-for-child-education" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "SIP for Child Education: How Much Should You Invest Every Month?",
            "description": "Learn how much SIP you need to invest for your child's education, how to calculate the goal amount, and the best investment strategy for long-term planning.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/sip-for-child-education" }
          })}</script>
        )}
        {post.slug === "how-much-save-for-child-education-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How Much Should Parents Save for Child Education in India?",
            "description": "Learn how much parents should save for child education in India including future cost estimates, SIP calculations, and investment strategies.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/how-much-save-for-child-education-india" }
          })}</script>
        )}
        {post.slug === "best-investment-plan-for-child-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best Investment Plan for Child in India",
            "description": "Complete guide to building the best investment plan for your child including education planning, SIP calculations, and portfolio strategy.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/best-investment-plan-for-child-india" }
          })}</script>
        )}
        {post.slug === "mutual-funds-vs-ppf-child-education" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Mutual Funds vs PPF for Child Education",
            "description": "Compare mutual funds and PPF for child education planning including returns, risks, and tax benefits.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-10",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/mutual-funds-vs-ppf-child-education" }
          })}</script>
        )}
        {post.slug === "investment-plan-for-newborn-baby-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Investment Plan for Newborn Baby in India",
            "description": "Learn how to build a smart investment plan for a newborn baby including SIP, PPF and long-term education planning strategies.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-10",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/investment-plan-for-newborn-baby-india" }
          })}</script>
        )}
        {post.slug === "build-1-crore-child-education" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Build ₹1 Crore for Your Child's Education",
            "description": "Step-by-step guide to building ₹1 crore for your child's education using SIP, compounding and goal-based investing.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-10",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/build-1-crore-child-education" }
          })}</script>
        )}
        {post.slug === "best-sip-plans-child-education-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Best SIP Plans for Child Education in India",
            "description": "Learn how SIP investing can help parents build a strong education fund for their child with disciplined long-term investing.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-11",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/best-sip-plans-child-education-india" }
          })}</script>
        )}
        {post.slug === "how-to-plan-child-education-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Child Education Planning in India: Complete Guide for Parents",
            "description": "Complete guide for parents on planning investments for their child's education including SIP strategies and goal planning.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-12",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/how-to-plan-child-education-india" }
          })}</script>
        )}
      </Helmet>

      <Header />

      <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Back Link */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Blog</span>
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" aria-hidden="true" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={post.publishedAt}>{formattedDate}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg dark:prose-invert max-w-none font-body
              prose-headings:font-heading prose-headings:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:font-semibold
              prose-ul:list-disc prose-ol:list-decimal
              prose-li:marker:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
            <h3 className="font-heading text-xl font-semibold mb-2">
              Start Your Investment Journey
            </h3>
            <p className="text-muted-foreground mb-4">
              Download the Nested app and start building your child's education corpus today.
            </p>
            <Button size="lg">
              Download App
            </Button>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="container mx-auto px-4 mt-16">
            <h2 className="font-heading text-2xl font-bold mb-6 text-center">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
