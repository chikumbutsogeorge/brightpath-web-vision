
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  CheckCircle,
  ArrowRight,
  Smartphone,
  Monitor,
  Search,
  BarChart
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "App Development",
      description: "Custom mobile and desktop applications tailored to your business needs",
      features: [
        "Native iOS & Android Apps",
        "Cross-platform Development",
        "Desktop Applications",
        "API Integration",
        "App Store Deployment",
        "Maintenance & Support"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Electron"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      features: [
        "Responsive Web Design",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Apps",
        "SEO Optimization",
        "Performance Optimization"
      ],
      technologies: ["React", "Next.js", "Node.js", "PHP", "WordPress"]
    },
    {
      icon: Server,
      title: "Web Hosting",
      description: "Reliable and secure hosting solutions for your online presence",
      features: [
        "Shared Hosting",
        "VPS Hosting",
        "Dedicated Servers",
        "SSL Certificates",
        "Daily Backups",
        "24/7 Monitoring"
      ],
      technologies: ["Linux", "cPanel", "CloudFlare", "Let's Encrypt", "Apache"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Creative visual solutions for your brand identity",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Materials",
        "Web Graphics",
        "Print Design",
        "UI/UX Design"
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Sketch", "Canva", "Illustrator"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic online marketing to grow your business",
      features: [
        "Social Media Marketing",
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Content Marketing",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      technologies: ["Google Ads", "Facebook Ads", "Google Analytics", "SEMrush", "Mailchimp"]
    },
    {
      icon: Users,
      title: "Project Management",
      description: "Professional project coordination and delivery",
      features: [
        "Agile Methodology",
        "Project Planning",
        "Resource Management",
        "Risk Assessment",
        "Quality Assurance",
        "Stakeholder Communication"
      ],
      technologies: ["Scrum", "Kanban", "Jira", "Trello", "Asana"]
    },
    {
      icon: Database,
      title: "Data Science Services",
      description: "Advanced analytics and data-driven insights",
      features: [
        "Data Analysis",
        "Machine Learning Models",
        "Predictive Analytics",
        "Data Visualization",
        "Business Intelligence",
        "Statistical Modeling"
      ],
      technologies: ["Python", "R", "TensorFlow", "Tableau", "Power BI"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Training",
        "Incident Response",
        "Compliance Consulting"
      ],
      technologies: ["Kali Linux", "Nessus", "Wireshark", "OWASP", "ISO 27001"]
    },
    {
      icon: Briefcase,
      title: "Business Consultation",
      description: "Strategic guidance for your business growth",
      features: [
        "Digital Transformation",
        "Technology Strategy",
        "Process Optimization",
        "Market Analysis",
        "ROI Assessment",
        "Change Management"
      ],
      technologies: ["SWOT Analysis", "Business Model Canvas", "Lean Startup", "Agile", "Design Thinking"]
    },
    {
      icon: Wrench,
      title: "Data Engineering",
      description: "Robust data infrastructure and pipeline solutions",
      features: [
        "Data Pipeline Development",
        "ETL Processes",
        "Data Warehousing",
        "Real-time Processing",
        "Data Quality Management",
        "Performance Optimization"
      ],
      technologies: ["Apache Spark", "Hadoop", "Kafka", "PostgreSQL", "MongoDB"]
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description: "Scalable cloud solutions and training services",
      features: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Container Orchestration",
        "Serverless Architecture",
        "Cloud Security",
        "Cost Optimization"
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
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
              <a href="/services" className="text-blue-600 font-medium">Services</a>
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
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward. 
              From concept to deployment, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                    <div>
                      <CardTitle className="text-2xl text-blue-900">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600 mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-900 mb-3">What We Offer:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-blue-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-blue-200 text-blue-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">How we deliver exceptional results</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Consultation</h3>
              <p className="text-gray-600">We understand your needs and requirements through detailed consultation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Planning</h3>
              <p className="text-gray-600">We create a comprehensive project plan with timelines and deliverables.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Development</h3>
              <p className="text-gray-600">Our expert team builds your solution using best practices and modern technologies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Delivery</h3>
              <p className="text-gray-600">We deliver the final product with training and ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 text-lg">
              Get Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
              Schedule Consultation
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

export default Services;
