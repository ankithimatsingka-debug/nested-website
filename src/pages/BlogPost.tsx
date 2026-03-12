import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogCard } from "@/components/blog/BlogCard";
import { getBlogPost, getRelatedPosts } from "@/data/blogData";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EducationCalculator } from "@/components/EducationCalculator";
import { SIPCalculator } from "@/components/blog/SIPCalculator";

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
        )}
        {post.slug === "best-mutual-fund-for-children-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is the best mutual fund for child education in India?", "acceptedAnswer": { "@type": "Answer", "text": "There is no single best mutual fund for children. A diversified portfolio aligned with the goal timeline works better." } },
              { "@type": "Question", "name": "How much should parents invest for their child's future?", "acceptedAnswer": { "@type": "Answer", "text": "The required investment depends on the child's age, timeline, expected inflation, and the future cost of education." } }
            ]
          })}</script>
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
        {post.slug === "rising-cost-of-education-in-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Rising Cost of Education in India: What Parents Must Know (2026)",
            "description": "Understand how education costs are rising in India, what college will cost in 10-15 years, and how parents can plan ahead with smart investing strategies.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-12",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/rising-cost-of-education-in-india" }
          })}</script>
        )}
        {post.slug === "rising-cost-of-education-in-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "How much has education cost increased in India?", "acceptedAnswer": { "@type": "Answer", "text": "Education costs in India have been growing at 8–10% annually, significantly faster than general inflation." } },
              { "@type": "Question", "name": "What will IIT cost in 2040?", "acceptedAnswer": { "@type": "Answer", "text": "Based on current growth trends, IIT B.Tech fees could reach approximately ₹50 lakh by 2040." } },
              { "@type": "Question", "name": "Is FD enough to save for education?", "acceptedAnswer": { "@type": "Answer", "text": "Fixed Deposits typically return 6–7%, which is below the education inflation rate of 8–10%." } },
              { "@type": "Question", "name": "How can I plan for my child's education expenses?", "acceptedAnswer": { "@type": "Answer", "text": "Start by estimating the future cost using an education calculator, then set up a monthly SIP in diversified mutual funds." } },
              { "@type": "Question", "name": "What is the best way to invest for rising education costs?", "acceptedAnswer": { "@type": "Answer", "text": "A diversified portfolio of equity and hybrid mutual funds, started early and reviewed periodically, is widely considered the most effective approach." } }
            ]
          })}</script>
        )}
        {post.slug === "child-education-cost-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Report",
            "headline": "Child Education Cost in India (2026 Data Report)",
            "description": "Data-driven report on the cost of child education in India including school, college and overseas education expenses.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-12",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/child-education-cost-india" }
          })}</script>
        )}
        {post.slug === "child-education-cost-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is the average cost of higher education in India?", "acceptedAnswer": { "@type": "Answer", "text": "Higher education costs typically range from ₹10 lakh to ₹50 lakh, depending on the course and institution." } },
              { "@type": "Question", "name": "How much should parents save for child education?", "acceptedAnswer": { "@type": "Answer", "text": "Many parents aim to build ₹50 lakh to ₹1 crore or more, depending on the education goal." } },
              { "@type": "Question", "name": "How early should parents start planning?", "acceptedAnswer": { "@type": "Answer", "text": "Starting when the child is born provides the longest investment horizon, reducing the required monthly investment significantly." } }
            ]
          })}</script>
        )}
        {post.slug === "sip-calculator-child-education" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "SIP Calculator for Child Education (How Much Should You Invest?)",
            "description": "Use this SIP calculator to estimate how much you need to invest monthly to fund your child's education.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-12",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/sip-calculator-child-education" }
          })}</script>
        )}
        {post.slug === "sip-calculator-child-education" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "How much SIP is needed for child education?", "acceptedAnswer": { "@type": "Answer", "text": "To build ₹1 crore for education in 18 years, the required SIP is approximately ₹14,000 per month assuming 12% returns." } },
              { "@type": "Question", "name": "What return rate should I assume for education planning?", "acceptedAnswer": { "@type": "Answer", "text": "Diversified equity mutual fund portfolios have historically delivered 10–12% annualised returns over 15+ year periods in India." } },
              { "@type": "Question", "name": "Can I adjust my SIP over time?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Many parents start with a lower SIP and increase it annually by 5–10% as their income grows. This is called a step-up SIP." } }
            ]
          })}</script>
        )}
        {post.slug === "child-pursuing-music-ai-era" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "If Your 9-Year-Old Wants to Pursue Music in the Age of AI",
            "description": "AI is changing jobs, but creativity still shines. Learn how to nurture your child's music dream with balance, patience, and planning.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-12",
            "keywords": "music parenting India, AI and creativity, music career children, creative parenting India, music schools India",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/child-pursuing-music-ai-era" }
          })}</script>
        )}
        {post.slug === "child-pursuing-music-ai-era" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Should I let my child pursue music as a career?", "acceptedAnswer": { "@type": "Answer", "text": "If your child shows genuine, consistent interest in music, nurturing that passion with structure and balance can be very rewarding. Creative careers are increasingly valuable in the AI era." } },
              { "@type": "Question", "name": "Will AI replace musicians?", "acceptedAnswer": { "@type": "Answer", "text": "AI can generate sounds, but it cannot replicate human emotion, storytelling, and creative expression — the core of music." } },
              { "@type": "Question", "name": "What are the best music schools in India?", "acceptedAnswer": { "@type": "Answer", "text": "Top institutions include KM Music Conservatory and Swarnabhoomi Academy. For international options, Berklee College of Music and Juilliard are world-renowned." } }
            ]
          })}</script>
        )}
        {post.slug === "50000-invested-child-college" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What ₹50,000 Invested Today Can Mean for Your Child's College Tomorrow",
            "description": "How ₹50,000 invested today can grow over 15 years across FD, Sukanya Samriddhi, ULIPs, and advisory-led mutual funds.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-12",
            "keywords": "education investment India, FD vs mutual fund, education planning India, compounding, Sukanya Samriddhi",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/50000-invested-child-college" }
          })}</script>
        )}
        {post.slug === "50000-invested-child-college" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "How much will ₹50,000 grow in 15 years?", "acceptedAnswer": { "@type": "Answer", "text": "At 12-15% annual returns through advisory-led mutual funds, ₹50,000 can grow to ₹2.28-3.00 lakh in 15 years. In an FD at 6%, it would grow to only ₹1.19 lakh." } },
              { "@type": "Question", "name": "Is FD enough to save for child education?", "acceptedAnswer": { "@type": "Answer", "text": "FDs typically return 6% pre-tax, which after taxation reduces to ~4.5%. This is well below education inflation of 8-10%, making FDs insufficient as the sole education savings tool." } },
              { "@type": "Question", "name": "When should parents start investing for child education?", "acceptedAnswer": { "@type": "Answer", "text": "The earlier the better. Starting when the child is born gives 15-18 years of compounding, significantly reducing the monthly investment needed." } }
            ]
          })}</script>
        )}
        {post.slug === "future-ready-skills-courses-child-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Future-Ready Skills: How Specialized Courses Can Shape Your Child's Tomorrow",
            "description": "Middle-class Indian parents can guide their children toward high-ROI future-ready courses like AI, robotics, biotech, and space tech.",
            "author": { "@type": "Organization", "name": "Nested" },
            "publisher": { "@type": "Organization", "name": "Nested" },
            "datePublished": "2026-03-12",
            "keywords": "future skills India, AI courses India, robotics education, biotech programs, space technology education",
            "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nested.money/blog/future-ready-skills-courses-child-india" }
          })}</script>
        )}
        {post.slug === "future-ready-skills-courses-child-india" && (
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What are future-ready courses for children in India?", "acceptedAnswer": { "@type": "Answer", "text": "Future-ready courses include AI & Machine Learning, Robotics, Biotechnology, and Space Technology offered at institutions like IIT Hyderabad, IIIT Delhi, and IISc Bangalore." } },
              { "@type": "Question", "name": "How can parents prepare children for new-age careers?", "acceptedAnswer": { "@type": "Answer", "text": "Parents can encourage workshops, hobby labs, and online courses during school years, track interests, and save gradually for specialized education over 10-15 years." } },
              { "@type": "Question", "name": "Are specialized degrees worth the investment?", "acceptedAnswer": { "@type": "Answer", "text": "Degrees in AI, robotics, biotech, and space tech often lead to higher-paying jobs and global opportunities compared to traditional courses, offering strong ROI." } }
            ]
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

          {post.slug === "rising-cost-of-education-in-india" ? (() => {
            const marker = `<h2 class="text-2xl font-heading font-semibold mt-10 mb-4">Try Our Education Cost Calculator</h2>`;
            const idx = post.content.indexOf(marker);
            if (idx === -1) {
              return (
                <>
                  <div className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary" dangerouslySetInnerHTML={{ __html: post.content }} />
                  <EducationCalculator />
                </>
              );
            }
            const nextH2 = post.content.indexOf('<h2', idx + marker.length);
            const beforeCalc = post.content.slice(0, idx);
            const betweenSection = nextH2 !== -1 ? post.content.slice(idx, nextH2) : post.content.slice(idx);
            const afterCalc = nextH2 !== -1 ? post.content.slice(nextH2) : '';
            return (
              <>
                <div className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary" dangerouslySetInnerHTML={{ __html: beforeCalc }} />
                <div className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary" dangerouslySetInnerHTML={{ __html: betweenSection }} />
                <EducationCalculator />
                <div className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary" dangerouslySetInnerHTML={{ __html: afterCalc }} />
              </>
            );
          })() : post.slug === "sip-calculator-child-education" ? (() => {
            const marker = `<h2 class="text-2xl font-heading font-semibold mt-10 mb-4">Try the SIP Calculator</h2>`;
            const idx = post.content.indexOf(marker);
            if (idx === -1) {
              return (
                <>
                  <div className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary" dangerouslySetInnerHTML={{ __html: post.content }} />
                  <SIPCalculator />
                </>
              );
            }
            const nextH2 = post.content.indexOf('<h2', idx + marker.length);
            const beforeCalc = post.content.slice(0, idx);
            const betweenSection = nextH2 !== -1 ? post.content.slice(idx, nextH2) : post.content.slice(idx);
            const afterCalc = nextH2 !== -1 ? post.content.slice(nextH2) : '';
            return (
              <>
                <div className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary" dangerouslySetInnerHTML={{ __html: beforeCalc }} />
                <div className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary" dangerouslySetInnerHTML={{ __html: betweenSection }} />
                <SIPCalculator />
                <div className="prose prose-lg dark:prose-invert max-w-none font-body prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary" dangerouslySetInnerHTML={{ __html: afterCalc }} />
              </>
            );
          })() : (
            <div 
              className="prose prose-lg dark:prose-invert max-w-none font-body
                prose-headings:font-heading prose-headings:font-semibold
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:font-semibold
                prose-ul:list-disc prose-ol:list-decimal
                prose-li:marker:text-primary"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}

          {/* CTA */}
          <div className="mt-12 p-6 bg-muted/50 rounded-lg text-center">
            <h3 className="font-heading text-xl font-semibold mb-2">
              Start Your Investment Journey
            </h3>
            <p className="text-muted-foreground mb-4">
              Download the Nested Money app and start building your child's education corpus today.
            </p>
            <Button size="lg" asChild>
              <a href="https://play.google.com/store/apps/details?id=com.nexted.app&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                Download App
              </a>
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
