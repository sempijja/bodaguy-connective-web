import { ArrowRight, Package, Clock, Shield, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import FeatureCard from '@/components/FeatureCard';
import DownloadApp from '@/components/DownloadApp';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <MainLayout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-24 pb-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center gap-12">
              <div className="lg:w-1/2 space-y-8 animate-fade-in">
                <div>
                  <div className="inline-flex items-center rounded-full bg-bodaguy-50 px-3 py-1 text-sm text-bodaguy-600 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-bodaguy-600 mr-2"></span>
                    Fast, reliable delivery service across Uganda
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                    Connect, deliver, <br className="hidden md:block" />
                    <span className="text-bodaguy-600">simplify your life</span>
                  </h1>
                  <p className="mt-6 text-lg text-gray-600 max-w-md">
                    Bodaguy connects drivers with customers for fast, reliable package delivery services across Uganda's cities.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="rounded-full bg-bodaguy-600 hover:bg-bodaguy-700">
                    <Link to="/download-app">
                      Download the App
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full">
                    <Link to="/become-driver">Become a Driver</Link>
                  </Button>
                </div>
                
                <div className="pt-4 flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                          <img
                            src={`https://source.unsplash.com/random/100x100?face&sig=${i}`}
                            alt="User"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">1,000+</span>
                      <span className="text-xs text-gray-500">Active Drivers</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">4.9/5</span>
                      <span className="text-xs text-gray-500">Customer Rating</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative animate-slide-up">
                <div className="relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1200&q=80" 
                    alt="Bodaguy delivery app" 
                    className="w-full h-auto rounded-3xl border border-gray-200 shadow-xl"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 h-64 w-64 rounded-full bg-bodaguy-100 blur-3xl opacity-70 -z-10"></div>
                <div className="absolute -top-6 -right-6 h-64 w-64 rounded-full bg-bodaguy-100 blur-3xl opacity-70 -z-10"></div>
              </div>
            </div>
          </div>
          
          {/* Trusted by section */}
          <div className="container px-4 md:px-6 mx-auto mt-20">
            <div className="text-center mb-8">
              <h2 className="text-lg font-medium text-gray-600">Trusted by businesses across Uganda</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              {Array(5).fill(0).map((_, i) => (
                <div key={i} className="h-8 w-32">
                  <div className="h-full w-full bg-gray-300 rounded-md animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why choose Bodaguy?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a seamless delivery experience with features designed to make your life easier.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Package size={24} />}
                title="Fast Delivery"
                description="Get your packages delivered in record time with our network of trusted drivers across Kampala and Uganda."
                className="animate-slide-in"
                iconClassName="bg-orange-50 text-orange-600"
              />
              <FeatureCard
                icon={<Clock size={24} />}
                title="Real-time Tracking"
                description="Follow your package's journey in real-time with our advanced tracking system that works even with limited connectivity."
                className="animate-slide-in [animation-delay:100ms]"
                iconClassName="bg-blue-50 text-blue-600"
              />
              <FeatureCard
                icon={<Shield size={24} />}
                title="Secure & Insured"
                description="All deliveries are insured and handled with the utmost care and security throughout Uganda."
                className="animate-slide-in [animation-delay:200ms]"
                iconClassName="bg-green-50 text-green-600"
              />
              <FeatureCard
                icon={<MapPin size={24} />}
                title="Wide Coverage"
                description="Our extensive network of drivers ensures wide coverage across Kampala, Entebbe, Jinja, and other major cities in Uganda."
                className="animate-slide-in [animation-delay:300ms]"
                iconClassName="bg-purple-50 text-purple-600"
              />
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How it works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Sending a package with Bodaguy is simple and straightforward.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Request a pickup',
                  description: 'Open the app, enter pickup and dropoff locations, and select your package type.',
                  image: 'https://images.unsplash.com/photo-1611746869696-d09bce200020?auto=format&fit=crop&w=600&q=80',
                  delay: 0
                },
                {
                  step: '02',
                  title: 'Get matched with a driver',
                  description: 'Our system automatically matches you with the closest available driver in your area.',
                  image: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=crop&w=600&q=80',
                  delay: 100
                },
                {
                  step: '03',
                  title: 'Track & receive your package',
                  description: 'Track your delivery in real-time and receive notifications on delivery status.',
                  image: 'https://images.unsplash.com/photo-1622675363311-3e1904dc1885?auto=format&fit=crop&w=600&q=80',
                  delay: 200
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200 animate-slide-up [animation-delay:${item.delay}ms]`}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="p-8">
                    <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-bodaguy-50 text-bodaguy-600 font-bold text-lg mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Download App Section */}
        <section className="py-24 bg-bodaguy-600 text-white relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 max-w-lg animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold">Get the Bodaguy app today</h2>
                <p className="text-lg text-white/80">
                  Download our app to send packages on-demand, track deliveries in real-time, and connect with reliable drivers in your area.
                </p>
                
                <ul className="space-y-4">
                  {[
                    'Fast, reliable delivery at your fingertips',
                    'Real-time tracking and notifications',
                    'Secure payment processing',
                    'Rate and review your experience'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4">
                  <DownloadApp variant="light" />
                </div>
              </div>
              
              <div className="relative animate-float lg:ml-auto">
                <div className="relative z-10 bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-800 p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80" 
                    alt="Bodaguy app"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 h-64 w-64 rounded-full bg-bodaguy-500 blur-3xl opacity-30 -z-10"></div>
                <div className="absolute -top-6 -right-6 h-64 w-64 rounded-full bg-bodaguy-500 blur-3xl opacity-30 -z-10"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-bodaguy-500 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-bodaguy-500 rounded-full mix-blend-multiply blur-3xl opacity-20"></div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What our customers say
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it — here's what customers and drivers in Uganda have to say about their Bodaguy experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Bodaguy has been a game-changer for my small business in Kampala. The delivery is always on time and the drivers are professional.",
                  author: "Sarah Nakato",
                  position: "Small Business Owner",
                  avatar: "https://source.unsplash.com/random/100x100?face&sig=1",
                  delay: 0
                },
                {
                  quote: "I've been a Bodaguy driver for 6 months now and the flexibility is amazing. I can work when I want and earn good money across Kampala.",
                  author: "Michael Okello",
                  position: "Bodaguy Driver",
                  avatar: "https://source.unsplash.com/random/100x100?face&sig=2",
                  delay: 100
                },
                {
                  quote: "The tracking feature is fantastic. I always know exactly where my package is and when it will arrive, even in Ugandan traffic. No more waiting around!",
                  author: "Alex Mugisha",
                  position: "Regular Customer",
                  avatar: "https://source.unsplash.com/random/100x100?face&sig=3",
                  delay: 200
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-50 rounded-3xl p-8 border border-gray-200 animate-slide-up [animation-delay:${testimonial.delay}ms]`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-gray-900">{testimonial.author}</h4>
                        <p className="text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="text-bodaguy-500">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 4.5V9.5C11 10.3284 10.3284 11 9.5 11H7.5C6.67157 11 6 10.3284 6 9.5V7.5C6 6.67157 6.67157 6 7.5 6H9.5C9.5 5.17157 8.82843 4.5 8 4.5H7.5C5.84315 4.5 4.5 5.84315 4.5 7.5V9.5C4.5 11.1569 5.84315 12.5 7.5 12.5H9.5C11.1569 12.5 12.5 11.1569 12.5 9.5V4.5H11Z" fill="currentColor"/>
                        <path d="M21.5 4.5V9.5C21.5 10.3284 20.8284 11 20 11H18C17.1716 11 16.5 10.3284 16.5 9.5V7.5C16.5 6.67157 17.1716 6 18 6H20C20 5.17157 19.3284 4.5 18.5 4.5H18C16.3431 4.5 15 5.84315 15 7.5V9.5C15 11.1569 16.3431 12.5 18 12.5H20C21.6569 12.5 23 11.1569 23 9.5V4.5H21.5Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready to simplify your deliveries in Uganda?</h2>
              <p className="text-lg text-white/80">
                Join thousands of happy customers who trust Bodaguy for their delivery needs across Uganda.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild size="lg" className="rounded-full bg-white text-gray-900 hover:bg-gray-100">
                  <Link to="/download-app">
                    Download App
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10">
                  <Link to="/become-driver">Become a Driver</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-bodaguy-500 rounded-full mix-blend-multiply blur-3xl opacity-10"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-bodaguy-500 rounded-full mix-blend-multiply blur-3xl opacity-10"></div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default Index;
