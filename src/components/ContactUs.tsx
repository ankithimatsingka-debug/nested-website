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
                aria-label='Sign Up' 
                frameBorder="0" 
                style={{ height: '500px', width: '99%', border: 'none' }}
                src='https://forms.zohopublic.com/ankithimatsingkagm1/form/SignUp/formperma/PpY4yuUeJ3KQbk5I0zO8t3Cnf1vg_D1bAKwqAVS-fDo'
                title="Sign Up Form"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
