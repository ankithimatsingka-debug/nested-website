export function ContactUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you soon.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-2xl bg-card rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSdQhUJMa9sDKfRUcTHbeBesjhLFonR9rgwIv7VqpzgNpatwow/viewform?embedded=true" 
                width="100%" 
                height="1043" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                title="Contact Us Form"
                className="w-full"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
