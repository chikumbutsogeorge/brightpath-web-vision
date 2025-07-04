
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Code, 
  Globe, 
  Server, 
  Palette, 
  TrendingUp, 
  Users, 
  Database, 
  Shield, 
  Briefcase, 
  Wrench, 
  Cloud,
  Mail,
  Phone,
  MapPin,
  Star,
  CheckCircle,
  Target,
  Eye,
  Heart
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
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
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const services = [
    { icon: Code, title: "App Development", description: "Custom mobile and desktop applications tailored to your business needs" },
    { icon: Globe, title: "Web Development", description: "Modern, responsive websites and web applications" },
    { icon: Server, title: "Web Hosting", description: "Reliable and secure hosting solutions for your online presence" },
    { icon: Palette, title: "Graphic Designing", description: "Creative visual solutions for your brand identity" },
    { icon: TrendingUp, title: "Digital Marketing", description: "Strategic online marketing to grow your business" },
    { icon: Users, title: "Project Management", description: "Professional project coordination and delivery" },
    { icon: Database, title: "Data Science Services", description: "Advanced analytics and data-driven insights" },
    { icon: Shield, title: "Cybersecurity", description: "Comprehensive security solutions to protect your digital assets" },
    { icon: Briefcase, title: "Business Consultation", description: "Strategic guidance for your business growth" },
    { icon: Wrench, title: "Data Engineering", description: "Robust data infrastructure and pipeline solutions" },
    { icon: Cloud, title: "Cloud Computing", description: "Scalable cloud solutions and training services" }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=faces",
      expertise: ["Cloud Architecture", "Team Leadership"]
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
      expertise: ["Full-Stack Development", "Mobile Apps"]
    },
    {
      name: "Emily Rodriguez",
      role: "Data Science Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
      expertise: ["Machine Learning", "Analytics"]
    },
    {
      name: "David Kamwendo",
      role: "Cybersecurity Specialist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces",
      expertise: ["Security Auditing", "Risk Assessment"]
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
              <a href="#home" className="text-blue-900 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-blue-900 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-blue-900 hover:text-blue-600 transition-colors">Services</a>
              <a href="#team" className="text-blue-900 hover:text-blue-600 transition-colors">Team</a>
              <a href="#contact" className="text-blue-900 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Brightpath<span className="text-sky-400"> Technologies</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Illuminating Your Digital Future with Innovative Technology Solutions
          </p>
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg">
            Explore Our Services
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">About Brightpath Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in Blantyre, Malawi, we are a leading technology company dedicated to providing 
              innovative digital solutions that empower businesses to thrive in the digital age.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-6">
                Founded with a vision to bridge the technology gap in Africa, Brightpath Technologies 
                has grown to become a trusted partner for businesses seeking digital transformation. 
                Our team of experienced professionals combines local insights with global expertise.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">10+ Years of Combined Experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">50+ Successful Projects</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">24/7 Customer Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <Card className="text-center border-t-4 border-t-blue-600">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To deliver innovative technology solutions that drive business growth and 
                  digital transformation across Africa.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-t-4 border-t-sky-500">
              <CardHeader>
                <Eye className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the leading technology partner in Africa, empowering businesses 
                  with cutting-edge digital solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-t-4 border-t-blue-400">
              <CardHeader>
                <Heart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-blue-900">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Excellence, Innovation, Integrity, and Customer-centricity drive 
                  everything we do at Brightpath Technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Why Choose Brightpath?</h2>
            <p className="text-xl text-gray-600">We stand out from the competition with our unique approach</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Quality First</h3>
              <p className="text-gray-600">We deliver exceptional quality in every project we undertake.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Our skilled professionals bring years of experience to your project.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Timely Delivery</h3>
              <p className="text-gray-600">We respect deadlines and deliver projects on time, every time.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Customer Care</h3>
              <p className="text-gray-600">Your success is our priority with dedicated support and service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive technology solutions for your business needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The experts behind your success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-blue-900">{member.name}</CardTitle>
                  <CardDescription className="text-sky-600 font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100">Ready to start your next project? Contact us today!</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-sky-400 mr-4" />
                  <span>Blantyre, Malawi</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-sky-400 mr-4" />
                  <span>+265 XXX XXX XXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-sky-400 mr-4" />
                  <span>info@brightpath.mw</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4">Location</h4>
                <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-600">Google Maps - Blantyre, Malawi</p>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle className="text-blue-900">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
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
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-blue-200">
                <li>App Development</li>
                <li>Web Development</li>
                <li>Cloud Computing</li>
                <li>Cybersecurity</li>
                <li>Data Science</li>
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

export default Index;
