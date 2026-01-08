import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/blogData";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Nested - Smart Investing for Your Child's Future</title>
        <meta 
          name="description" 
          content="Expert insights on mutual fund investing, tax planning, and building wealth for your child's education. Read our latest articles and guides." 
        />
        <meta name="keywords" content="mutual funds, investing, tax planning, child education, SIP, financial planning" />
        <link rel="canonical" href="https://nested.money/blog" />
      </Helmet>

      <Header />

      <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Nested Blog
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert insights and guides to help you make smarter investment decisions for your family's future.
            </p>
          </header>

          {/* Blog Grid */}
          <section aria-label="Blog posts" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </section>

          {/* Empty State - shown when no posts */}
          {blogPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
