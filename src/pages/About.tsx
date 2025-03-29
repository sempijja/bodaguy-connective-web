import { MapPin, Phone, Mail, Award, Users, TrendingUp } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import PageHeader from '@/components/PageHeader';
import PageTransition from '@/components/PageTransition';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Pius Onapa',
      role: 'Founder/CEO',
      bio: 'Pius has been on the Ugandan start-up scene for more than 5 years and has since founded a number of products most in the transportatin space. He leads the company direction regards products, strategy and leads the data protection team. He is also founer of Lyanda Technologies the parent company for Bodaguy',
      image: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/g_face/v1234567890/1742909629111_drdlrq'
    },
    {
      name: 'Ssempijja Charles',
      role: 'Head of Product',
      bio: 'Charles leads the product team, product design and developing product vision for the different products on the product portfolio at Bodaguy.',
      image: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/g_face/v1234567890/ssempijja-lyanda_kkqv3l'
    },
    {
      name: 'Muwonge Lawrence',
      role: 'CTO',
      bio: 'Lawrence is in charge of the engineering efforts at Bodaguy. He leads the mobile and web development teams to develop technologies that are usable at scale and secure enough for our users.',
      image: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/c_thumb,g_face,z_1.0/v1234567890/WhatsApp_Image_2025-03-28_at_10.27.20_757d8a9b_utshr6_c_fill_ar_1_1_g_auto_ciivcn'
    },
    {
      name: 'Luwaga Meshach (Mulinsike)',
      role: 'Product Manager',
      bio: 'Meshach leads the efforts to design, develop and deploy products on time and in line with the business needs. He acts as the primary liaison between development, marketing and management to ensure alignment on priorities.',
      image: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/g_face,z_1.0/v1234567890/meshack-lyanda_ejufmb'
    },
    {
      name: 'Chambaga Abdallah',
      role: 'Software Engineer',
      bio: 'Abdallah is in charge of building the frontend technologies for our different products and making sure that they are stable and scalable.',
      image: 'https://res.cloudinary.com/dlkdmqaj3/image/upload/g_face/v1234567890/Chambaga_qn7tlw'
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
          title="About Boda Guy"
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Connecting people <br className="hidden md:block" />
                    <span className="text-transit-500">through fast, reliable delivery</span>
                  </h1>
                <p className="text-lg text-gray-600">
                  Boda Guy was founded in 2024 with a simple mission: to make package delivery 
                  as easy as possible. We are a technology company that connects the physical and digital worlds to help make deliveries happen at the tap of a button. 
                </p>
                <p className="text-lg text-gray-600">
                  What started as a small operation in Kampala that is over time growing to new cities. Our platform has facilitated deliveries, helping businesses grow and individuals save time.
                </p>
              </div>
              
              <div className="relative animate-slide-up">
                <div className="relative rounded-3xl overflow-hidden shadow-xl h-[500px]">
                  <img 
                    src="https://res.cloudinary.com/dlkdmqaj3/image/upload/z_0.4/v1234567890/Phone_with_Case_Mockup_gfzgxq" 
                    alt="Bodaguy team at work"
                    className="w-full h-full object-cover"
                  />
                </div> 
                
                {/* Stats overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-bodaguy-600">100+</p>
                      <p className="text-sm text-gray-600">Deliveries</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-bodaguy-600">2+</p>
                      <p className="text-sm text-gray-600">Cities</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-bodaguy-600">50+</p>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                What drives us forward
              </h1>
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                Meet the team behind Boda Guy
              </h1>
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
                  P O BOX 171254<br />
                  Ntinda<br />
                  Kampala, Uganda
                </p>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col items-center text-center animate-slide-up [animation-delay:100ms]">
                <div className="h-14 w-14 rounded-full bg-bodaguy-50 flex items-center justify-center text-bodaguy-600 mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
                <p className="text-gray-600 mb-2">Customer Support</p>
                <a href="tel:0393102554" className="text-bodaguy-600 font-medium hover:text-bodaguy-700 transition-colors">
                0393102554
                </a>
              </div>
              
              <div className="bg-white rounded-3xl p-8 border border-gray-200 flex flex-col items-center text-center animate-slide-up [animation-delay:200ms]">
                <div className="h-14 w-14 rounded-full bg-bodaguy-50 flex items-center justify-center text-bodaguy-600 mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
                <p className="text-gray-600 mb-2">General Inquiries</p>
                <a href="mailto:lyanda.net@gmail.com" className="text-bodaguy-600 font-medium hover:text-bodaguy-700 transition-colors">
                lyanda.net@gmail.com
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
