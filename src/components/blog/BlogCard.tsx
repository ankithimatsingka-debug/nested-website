import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogData";

const categoryColors: Record<string, string> = {
  "Financial Literacy": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  "Education Planning": "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  "Parenting": "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  "Investment Planning": "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "Child Education": "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  "Investment Strategy": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300",
  "Tax Planning": "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
};

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt + "T00:00:00").toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-2">
            <span className={`inline-flex items-center rounded-full border-0 px-2.5 py-0.5 text-xs font-semibold ${categoryColors[post.category] || "bg-muted text-muted-foreground"}`}>
              {post.category}
            </span>
          </div>
          <h3 className="font-heading text-xl font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="font-body text-muted-foreground mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
