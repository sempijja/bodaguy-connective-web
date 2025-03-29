import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Camera, Upload, User, UserCheck } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { PhotoUploader } from "@/components/PhotoUploader";
import { uploadPhoto, saveDriverApplication } from "@/lib/supabaseClient";

// Validation schema
const formSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  nationalId: z
    .string()
    .min(6, "National ID number must be at least 6 characters"),
  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^\+?[0-9]+$/, "Phone number must contain only numbers"),
  licenseNumber: z
    .string()
    .min(6, "Driver's license must be at least 6 characters"),
  photo: z.instanceof(File, { message: "Photo is required" }), // Photo is now required
});

type FormValues = z.infer<typeof formSchema>;

const BecomeDriver = () => {
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      nationalId: "",
      phoneNumber: "",
      licenseNumber: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      // Upload photo to Supabase Storage
      let photoUrl = null;
      if (photoFile) {
        photoUrl = await uploadPhoto(photoFile);
        if (!photoUrl) {
          throw new Error("Failed to upload photo");
        }
      }

      // Save form data to Supabase
      await saveDriverApplication({
        fullName: data.fullName,
        nationalId: data.nationalId,
        phoneNumber: data.phoneNumber,
        licenseNumber: data.licenseNumber,
        photoUrl,
      });

      toast({
        title: "Application submitted!",
        description: "We'll review your information and contact you soon.",
        variant: "default",
      });

      // Redirect to homepage after successful submission
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle photo selection
  const handlePhotoSelected = (file: File) => {
    setPhotoFile(file);
    form.setValue("photo", file, { shouldValidate: true }); // Trigger validation
  };

  return (
    <MainLayout>
      <PageHeader
        title="Become a Bodaguy Driver"
        description="Join Uganda's top delivery service. Earn competitive pay while delivering packages across Kampala and beyond."
        backgroundImage="https://images.unsplash.com/photo-1635335356074-a1ddda7ac4fc?q=80&w=2000&auto=format&fit=crop"
        className="text-center"
      />

      <section className="container px-4 py-12 md:py-16 mx-auto max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Driver Application Form</h2>
            <p className="text-gray-600">
              Please provide your details below to apply as a Bodaguy delivery driver.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
            >
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter your legal full name as it appears on your ID.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nationalId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>National ID Number (NIN)</FormLabel>
                    <FormControl>
                      <Input placeholder="CM12345678ABCDE" {...field} />
                    </FormControl>
                    <FormDescription>
                      Your Ugandan National Identification Number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+256 700 123 456" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a valid Ugandan phone number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="licenseNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Driver's License Number</FormLabel>
                    <FormControl>
                      <Input placeholder="UGL1234567" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter your valid driver's license number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="photo"
                render={() => (
                  <FormItem>
                    <FormLabel>Profile Photo</FormLabel>
                    <FormControl>
                      <PhotoUploader onPhotoSelected={handlePhotoSelected} />
                    </FormControl>
                    <FormDescription>
                      Please upload or take a clear photo of your face. This will be used for identification purposes.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-bodaguy-600 hover:bg-bodaguy-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <UserCheck size={18} />
                      Submit Application
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </MainLayout>
  );
};

export default BecomeDriver;
