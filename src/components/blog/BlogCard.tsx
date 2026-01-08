import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/30 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
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
