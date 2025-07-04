
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Code, 
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Globe
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Blantyre, Malawi", "Southern Region"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+265 XXX XXX XXX", "+265 YYY YYY YYY"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@brightpath.mw", "contact@brightpath.mw"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-sky-400 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-blue-900">Brightpath Technologies</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-blue-900 hover:text-blue-600 transition-colors">Home</a>
              <a href="/about" className="text-blue-900 hover:text-blue-600 transition-colors">About</a>
              <a href="/services" className="text-blue-900 hover:text-blue-600 transition-colors">Services</a>
              <a href="/contact" className="text-blue-600 font-medium">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Get in touch with our team of experts. 
              We're here to help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <info.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <MapPin className="w-6 h-6 mr-3" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-100 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-blue-600">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-medium">Interactive Map of Blantyre</p>
                      <p className="text-sm">Google Maps Integration</p>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Visit Our Office</h4>
                    <p className="text-gray-600">
                      Located in the heart of Blantyre, we're easily accessible and ready to meet 
                      with you to discuss your project requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-900">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium text-blue-900">Call Us</p>
                      <p className="text-gray-600">For immediate assistance</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-green-600 mr-3" />
                    <div>
                      <p className="font-medium text-blue-900">WhatsApp</p>
                      <p className="text-gray-600">Quick messages and updates</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-sky-50 rounded-lg">
                    <Mail className="w-6 h-6 text-sky-600 mr-3" />
                    <div>
                      <p className="font-medium text-blue-900">Email</p>
                      <p className="text-gray-600">Detailed project discussions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">What's your typical project timeline?</h3>
              <p className="text-gray-600 mb-4">
                Project timelines vary based on complexity, but most web projects take 2-8 weeks, 
                while mobile apps typically require 6-16 weeks.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-600 mb-4">
                Yes, we offer comprehensive maintenance and support packages to keep your 
                applications running smoothly after launch.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Can you work with my existing team?</h3>
              <p className="text-gray-600 mb-4">
                Absolutely! We're experienced in collaborating with in-house teams and 
                can integrate seamlessly into your existing workflows.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">What's included in your hosting services?</h3>
              <p className="text-gray-600 mb-4">
                Our hosting packages include SSL certificates, daily backups, 24/7 monitoring, 
                and technical support to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Our team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg">
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-sky-400 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Brightpath Technologies</span>
              </div>
              <p className="text-blue-200">
                Illuminating your digital future with innovative technology solutions from Blantyre, Malawi.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Blantyre, Malawi</li>
                <li>+265 XXX XXX XXX</li>
                <li>info@brightpath.mw</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Brightpath Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
