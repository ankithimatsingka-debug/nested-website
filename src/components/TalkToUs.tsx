import { MessageCircle } from "lucide-react";

export function TalkToUs() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Not Sure Where to <span className="text-primary block sm:inline">Start?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            We understand investing can feel overwhelming. Our team is here to answer your questions and help you find the right plan for your child's future.
          </p>
          
          <a
            href="https://wa.me/916305209273?text=Hello%20%F0%9F%91%8B"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
