import { useState } from 'react';
import { ArrowRight, Briefcase, MapPin } from 'lucide-react';
import MainLayout from '@/layouts/MainLayout';
import PageHeader from '@/components/PageHeader';
import JobCard from '@/components/JobCard';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import PageTransition from '@/components/PageTransition';
import { supabase } from '@/lib/supabaseClient';

const Careers = () => {
  // Job categories
  const departments = ['All', 'Engineering', 'Product', 'Design', 'Marketing', 'Operations', 'Customer Support'];
  const [activeDepartment, setActiveDepartment] = useState('All');
  
  // Job application dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState<any>(null);
  
  // Mock jobs data
  const jobs = [
    /* To show this job (and add more) just remove this comment and make sure the id inceases +1. Add a comm(,) at the end of each object in the array to prevent errors
    {
      id: '1',
      title: 'Senior Software Engineer',
      location: 'San Francisco, CA',
      department: 'Engineering',
      type: 'Full-Time',
      description: "Join our engineering team to build and scale our delivery platform. You'll work on challenging problems related to routing algorithms, real-time tracking, and mobile app development."
    },
    {
      id: '2',
      title: 'Product Manager',
      location: 'Remote (US)',
      department: 'Product',
      type: 'Full-Time',
      description: "Lead product initiatives from conception to launch. You'll work closely with engineering, design, and business teams to define product strategy and roadmap for our delivery platform."
    },
    {
      id: '3',
      title: 'UI/UX Designer',
      location: 'New York, NY',
      department: 'Design',
      type: 'Full-Time',
      description: "Create beautiful, intuitive designs for our mobile apps and website. You'll be responsible for the entire design process, from user research to visual design and prototyping."
    },
    {
      id: '4',
      title: 'Growth Marketing Manager',
      location: 'Los Angeles, CA',
      department: 'Marketing',
      type: 'Full-Time',
      description: "Drive customer acquisition and retention strategies. You'll be responsible for creating and executing marketing campaigns to grow our user base of both customers and drivers."
    },
    {
      id: '5',
      title: 'Operations Coordinator',
      location: 'Chicago, IL',
      department: 'Operations',
      type: 'Full-Time',
      description: "Help manage day-to-day operations, including driver onboarding, customer service escalations, and ensuring smooth delivery operations across our service areas."
    },
    {
      id: '6',
      title: 'Customer Support Specialist',
      location: 'Remote (US)',
      department: 'Customer Support',
      type: 'Full-Time',
      description: "Provide exceptional support to our customers and drivers. You'll be the first point of contact for service inquiries, helping to resolve issues and ensure a positive experience."
    },
    {
      id: '7',
      title: 'Backend Engineer',
      location: 'San Francisco, CA',
      department: 'Engineering',
      type: 'Full-Time',
      description: "Work on the core infrastructure of our delivery platform. You'll design and implement scalable services, APIs, and data pipelines to support our growing business."
    },
    {
      id: '8',
      title: 'Data Scientist',
      location: 'Remote (US)',
      department: 'Engineering',
      type: 'Full-Time',
      description: "Analyze large datasets to extract insights that drive business decisions. You'll work on predictive models for demand forecasting, optimal routing, and driver matching algorithms."
    } */
  ];
  
  // Filter jobs by department
  const filteredJobs = activeDepartment === 'All'
    ? jobs
    : jobs.filter(job => job.department === activeDepartment);
  
  // Handle job application
  const handleApply = (job: any) => {
    setCurrentJob(job);
    setIsDialogOpen(true);
  };
  
  // Handle application submit
  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const resumeFile = formData.get('resume') as File;

    let resumeUrl = null;

    try {
      if (resumeFile) {
        const fileName = `${Date.now()}-${resumeFile.name}`;
        const { data, error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(fileName, resumeFile);

        if (uploadError) {
          console.error('Error uploading resume:', uploadError);
          toast({
            title: 'Resume Upload Failed',
            description: 'There was an error uploading your resume. Please try again later.',
            variant: 'destructive',
          });
          return;
        }

        const { data: publicUrlData } = supabase.storage.from('resumes').getPublicUrl(fileName);
        resumeUrl = publicUrlData?.publicUrl || null;
        console.log('Resume uploaded successfully:', resumeUrl);
      }

      const applicationData = {
        first_name: formData.get('first-name') as string,
        last_name: formData.get('last-name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        resume_url: resumeUrl,
        cover_letter: formData.get('cover-letter') as string,
        mailing_list: formData.get('mailing-list') === 'on',
        job_title: currentJob?.title || 'General Application',
        submitted_at: new Date().toISOString(),
      };

      console.log('Submitting application data:', applicationData);

      const { error } = await supabase.from('job_applications').insert([applicationData]);

      if (error) {
        console.error('Error inserting application:', error);
        throw error;
      }

      toast({
        title: 'Application Submitted!',
        description: `Thanks for applying to ${applicationData.job_title}. We'll be in touch soon!`,
      });

      setIsDialogOpen(false);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: 'Submission Failed',
        description: 'There was an error submitting your application. Please try again later.',
        variant: 'destructive',
      });
    }
  };
  
  // Benefits data
  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'We offer salaries that are competitive with industry standards, along with equity options for all full-time employees.',
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your dependents, plus a wellness stipend for gym memberships or fitness classes.',
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    },
    {
      title: 'Flexible Work',
      description: 'We offer flexible work arrangements, including remote work options for many positions and flexible hours to help you maintain a healthy work-life balance.',
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning is encouraged with a professional development budget for conferences, courses, and books related to your field.',
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    },
    {
      title: 'Paid Time Off',
      description: 'Generous vacation policy, sick leave, and paid holidays to ensure you have time to recharge and take care of yourself.',
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
    },
    {
      title: 'Parental Leave',
      description: 'Comprehensive parental leave policy for both primary and secondary caregivers, with a smooth transition back to work program.',
      icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    }
  ];
  
  return (
    <MainLayout>
      <PageTransition>
        <PageHeader
          title="Join Our Team"
          description="We're building the future of local delivery. Are you ready to join us?"
          backgroundImage="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1920&q=80"
        >
          <Button 
            size="lg" 
            className="rounded-full bg-white text-gray-900 hover:bg-gray-100"
            onClick={() => window.scrollTo({ top: document.getElementById('open-positions')?.offsetTop, behavior: 'smooth' })}
          >
            View Open Positions
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </PageHeader>
        
        {/* About Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center rounded-full bg-bodaguy-50 px-3 py-1 text-sm text-bodaguy-600">
                  <span className="flex h-2 w-2 rounded-full bg-bodaguy-600 mr-2"></span>
                  Our Culture
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Driven by innovation, fueled by passion
                </h2>
                <p className="text-lg text-gray-600">
                  At Bodaguy, we're building a company where talented individuals can thrive and make a real impact. We believe in moving fast, taking ownership, and constantly learning from both successes and failures.
                </p>
                <p className="text-lg text-gray-600">
                  Our team is diverse, collaborative, and committed to our mission of revolutionizing local delivery. We work hard to solve complex problems, but we also know how to have fun and celebrate our wins together.
                </p>
                <p className="text-lg text-gray-600">
                  If you're looking for a place where your work matters, where you can grow professionally, and where you'll be surrounded by passionate colleagues, Bodaguy might be the right fit for you.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 animate-slide-up">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-2xl">
                  <img 
                    src="https://res.cloudinary.com/dlkdmqaj3/image/upload/c_thumb,g_face,z_1.0/v1234567890/whole_team_simaot.jpg" 
                    alt="Bodaguy team working together"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-2xl">
                  <img 
                    src="https://res.cloudinary.com/dlkdmqaj3/image/upload/c_thumb,g_face,z_1.0/v1234567890/team_scetion_gfu0ie" 
                    alt="Bodaguy office environment"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-2xl">
                  <img 
                    src="https://res.cloudinary.com/dlkdmqaj3/image/upload/c_thumb,g_face,z_1.0/v1234567890/meshSTI_jsnqaf" 
                    alt="Team brainstorming session"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-2xl">
                  <img 
                    src="https://res.cloudinary.com/dlkdmqaj3/image/upload/c_thumb,g_face,z_1.0/v1234567890/charz_confrence_ol7hgd" 
                    alt="Company celebration"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center rounded-full bg-bodaguy-50 px-3 py-1 text-sm text-bodaguy-600 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-bodaguy-600 mr-2"></span>
                Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                We take care of our team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive benefits package designed to support your health, wealth, and personal growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-12 w-12 rounded-2xl bg-bodaguy-50 flex items-center justify-center text-bodaguy-600 mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Open Positions Section */}
        <section id="open-positions" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center rounded-full bg-bodaguy-50 px-3 py-1 text-sm text-bodaguy-600 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-bodaguy-600 mr-2"></span>
                Open Positions
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Join our mission
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're looking for talented individuals to help us build the future of local delivery.
              </p>
            </div>
            
            {/* Department filter */}
            <div className="flex overflow-x-auto no-scrollbar py-2 space-x-2 mb-8 animate-fade-in">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => setActiveDepartment(department)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeDepartment === department
                      ? 'bg-bodaguy-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>
            
            {/* Jobs grid */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <JobCard
                  key={job.id}
                  title={job.title}
                  location={job.location}
                  department={job.department}
                  type={job.type}
                  description={job.description}
                  onApply={() => handleApply(job)}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
            
            {/* No results */}
            {filteredJobs.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600">
                  We don't have any open positions in this department at the moment.
                </p>
              </div>
            )}
            
            {/* Don't see a fit */}
            <div className="mt-16 text-center animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Don't see a position that fits your skills?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full"
                onClick={() => {
                  setCurrentJob({ title: 'General Application' });
                  setIsDialogOpen(true);
                }}
              >
                Submit General Application
              </Button>
            </div>
          </div>
        </section>
        
        {/* Application Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-xl">Apply for {currentJob?.title}</DialogTitle>
              <DialogDescription>
                Fill out the form below to apply. We'll review your application and get back to you soon.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmitApplication} className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" name="first-name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" name="last-name" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" name="phone" type="tel" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="resume">Resume</Label>
                <Input id="resume" name="resume" type="file" className="cursor-pointer" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cover-letter">Cover letter</Label>
                <Textarea id="cover-letter" name="cover-letter" rows={4} placeholder="Tell us why you're interested in this position and what makes you a great fit." />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch id="mailing-list" name="mailing-list" />
                <Label htmlFor="mailing-list">Join our talent network for future opportunities</Label>
              </div>
              
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Submit Application</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        
        {/* CTA Section */}
        <section className="py-16 bg-bodaguy-600 text-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold">Join us in revolutionizing local delivery</h2>
              <p className="text-lg text-white/80">
                Become part of a team that's building the future of how packages move around cities.
              </p>
              <Button 
                size="lg" 
                className="rounded-full bg-white text-gray-900 hover:bg-gray-100"
                onClick={() => window.scrollTo({ top: document.getElementById('open-positions')?.offsetTop, behavior: 'smooth' })}
              >
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default Careers;
