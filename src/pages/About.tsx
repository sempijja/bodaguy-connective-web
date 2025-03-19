
import { MapPin, Phone, Mail, Award, Users, TrendingUp } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'CEO & Co-Founder',
      bio: 'John has over 15 years of experience in logistics and transportation. He previously founded two successful startups.',
      image: 'https://source.unsplash.com/random/400x400?man&sig=1'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO & Co-Founder',
      bio: 'Sarah leads our engineering team with her expertise in mobile app development and distributed systems.',
      image: 'https://source.unsplash.com/random/400x400?woman&sig=2'
    },
    {
      name: 'Michael Chen',
      role: 'COO',
      bio: 'Michael oversees daily operations and ensures efficient delivery processes across all our service areas.',
      image: 'https://source.unsplash.com/random/400x400?man&sig=3'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CMO',
      bio: 'Emily drives our marketing strategy with her innovative approaches and deep understanding of customer needs.',
      image: 'https://source.unsplash.com/random/400x400?woman&sig=4'
    }
  ];
  
  // Company values
  const values = [
    {
      title: 'Reliability',
      description: 'We take pride in our commitment to reliable service, ensuring your packages arrive safely and on time.',
      icon: <Award size={24} />
    },
    {
      title: 'Community',
      description: 'We build strong relationships with our drivers and customers, creating a supportive community network.',
      icon: <Users size={24} />
    },
    {
      title: 'Innovation',
      description: 'We constantly innovate and improve our technology to provide the best possible delivery experience.',
      icon: <TrendingUp size={24} />
    }
  ];
  
  return (
    <MainLayout>
      <PageTransition>
        <PageHeader
          title="About Bodaguy"
          description="We're on a mission to revolutionize the way packages are delivered."
        />
        
        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center rounded-full bg-bodaguy-50 px-3 py-1 text-sm text-bodaguy-600">
                  <span className="flex h-2 w-2 rounded-full bg-bodaguy-600 mr-2"></span>
                  Our Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Connecting people through fast, reliable delivery
                </h2>
                <p className="text-lg text-gray-600">
                  Bodaguy was founded in 2020 with a simple mission: to make package delivery as easy as possible. We noticed a gap in the market for on-demand, reliable delivery services that could connect people who need to send packages with drivers ready to deliver them.
                </p>
                <p className="text-lg text-gray-600">
                  What started as a small operation in San Francisco has grown into a thriving network of drivers and customers across major cities. Our platform has facilitated millions of deliveries, helping businesses grow and individuals save time.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we're proud to be a leading force in revolutionizing local delivery services with our technology-first approach and commitment to quality service.
                </p>
              </div>
              
              <div className="relative animate-slide-up">
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[500px]">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" 
                    alt="Bodaguy team at work"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Stats overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-bodaguy-600">1M+</p>
                      <p className="text-sm text-gray-600">Deliveries</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-bodaguy-600">25+</p>
                      <p className="text-sm text-gray-600">Cities</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-bodaguy-600">10K+</p>
                      <p className="text-sm text-gray-600">Drivers</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 h-64 w-64 rounded-full bg-bodaguy-100 blur-3xl opacity-70 -z-10"></div>
                <div className="absolute -top-6 -right-6 h-64 w-64 rounded-full bg-bodaguy-100 blur-3xl opacity-70 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center rounded-full bg-bodaguy-50 px-3 py-1 text-sm text-bodaguy-600 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-bodaguy-600 mr-2"></span>
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What drives us forward
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our core values guide everything we do, from how we develop our technology to how we treat our customers and drivers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-14 w-14 rounded-2xl bg-bodaguy-50 flex items-center justify-center text-bodaguy-600 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Meet The Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center rounded-full bg-bodaguy-50 px-3 py-1 text-sm text-bodaguy-600 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-bodaguy-600 mr-2"></span>
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet the team behind Bodaguy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our talented team is dedicated to creating the best delivery experience for our customers and drivers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative rounded-3xl overflow-hidden mb-5 aspect-[3/4]">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-bodaguy-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center rounded-full bg-bodaguy-50 px-3 py-1 text-sm text-bodaguy-600 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-bodaguy-600 mr-2"></span>
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We'd love to hear from you
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions or want to learn more about Bodaguy? Our team is here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col items-center text-center animate-slide-up">
                <div className="h-14 w-14 rounded-full bg-bodaguy-50 flex items-center justify-center text-bodaguy-600 mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Visit Us</h3>
                <p className="text-gray-600">
                  123 Market Street<br />
                  Suite 100<br />
                  San Francisco, CA 94103
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col items-center text-center animate-slide-up [animation-delay:100ms]">
                <div className="h-14 w-14 rounded-full bg-bodaguy-50 flex items-center justify-center text-bodaguy-600 mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-2">Customer Support</p>
                <a href="tel:+18002345678" className="text-bodaguy-600 font-medium hover:text-bodaguy-700 transition-colors">
                  +1 (800) 234-5678
                </a>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col items-center text-center animate-slide-up [animation-delay:200ms]">
                <div className="h-14 w-14 rounded-full bg-bodaguy-50 flex items-center justify-center text-bodaguy-600 mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-2">General Inquiries</p>
                <a href="mailto:info@bodaguy.com" className="text-bodaguy-600 font-medium hover:text-bodaguy-700 transition-colors">
                  info@bodaguy.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default About;
