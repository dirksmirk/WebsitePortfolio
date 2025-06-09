
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about design and development. Drop me a line!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-muted-foreground">hello@yourname.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200">
                <Linkedin className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-muted-foreground">linkedin.com/in/yourname</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors duration-200">
                <Github className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="text-muted-foreground">github.com/yourname</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="Project inquiry" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
                size="lg"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
