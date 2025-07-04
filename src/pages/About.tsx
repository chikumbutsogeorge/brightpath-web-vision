
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Award,
  TrendingUp,
  Users,
  Globe,
  BookOpen,
  Target,
  Lightbulb,
  CheckCircle
} from "lucide-react";

const About = () => {
  const technologies = [
    "React", "Node.js", "Python", "Java", "C#", "AWS", "Azure", "Docker", 
    "Kubernetes", "MongoDB", "PostgreSQL", "Machine Learning", "AI"
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "10+", label: "Team Members" }
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
              <a href="/about" className="text-blue-600 font-medium">About</a>
              <a href="/services" className="text-blue-900 hover:text-blue-600 transition-colors">Services</a>
              <a href="/contact" className="text-blue-900 hover:text-blue-600 transition-colors">Contact</a>
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
            <h1 className="text-5xl font-bold text-blue-900 mb-6">About Brightpath Technologies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a forward-thinking technology company based in the heart of Blantyre, Malawi, 
              dedicated to transforming businesses through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Journey</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2019, Brightpath Technologies emerged from a vision to bridge the digital divide 
                in Malawi and across Africa. What started as a small team of passionate developers has grown 
                into a comprehensive technology solutions provider.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began with simple web development projects, but our commitment to excellence 
                and continuous learning has enabled us to expand into cutting-edge fields like artificial 
                intelligence, cloud computing, and cybersecurity.
              </p>
              <p className="text-gray-600 mb-8">
                Today, we serve clients across various industries, from small local businesses to 
                international organizations, helping them leverage technology to achieve their goals.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                alt="Modern office workspace" 
                className="rounded-lg shadow-lg mb-6"
              />
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=300&fit=crop" 
                alt="Team collaboration" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Technology Stack</h2>
            <p className="text-xl text-gray-600">
              We work with cutting-edge technologies to deliver modern solutions
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-lg border-blue-200 text-blue-700">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Consultation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Training & Consultation Services</h2>
            <p className="text-xl text-gray-600">
              Beyond development, we offer comprehensive training and business consultation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-blue-900">Technical Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Comprehensive training programs in web development, cloud computing, 
                  data science, and cybersecurity for individuals and organizations.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-sky-500">
              <CardHeader>
                <Users className="w-12 h-12 text-sky-500 mb-4" />
                <CardTitle className="text-blue-900">Corporate Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Customized workshops for businesses looking to upskill their teams 
                  in digital technologies and modern development practices.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-l-4 border-l-blue-400">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-blue-400 mb-4" />
                <CardTitle className="text-blue-900">Strategic Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Business consultation services to help organizations make informed 
                  decisions about technology adoption and digital transformation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600">How we ensure project success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We thoroughly understand your business needs and objectives.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive strategy tailored to your goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Development</h3>
              <p className="text-gray-600">We build robust solutions using best practices and modern technologies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Growth</h3>
              <p className="text-gray-600">We provide ongoing support to ensure your solution evolves with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Brightpath Technologies can help you achieve your digital transformation goals.
          </p>
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg">
            Start Your Project Today
          </Button>
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

export default About;
