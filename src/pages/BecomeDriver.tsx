import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { UserCheck } from "lucide-react";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { PhotoUploader } from "@/components/PhotoUploader";
import { supabase } from "@/lib/supabaseClient";

export const uploadPhoto = async (file: File): Promise<string | null> => {
  try {
    const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const { data, error } = await supabase.storage
      .from("driver-photos")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Error uploading photo:", error);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from("driver-photos")
      .getPublicUrl(fileName);

    return publicUrlData?.publicUrl || null;
  } catch (error) {
    console.error("Error in uploadPhoto function:", error);
    return null;
  }
};

// Validation schema
const formSchema = z
  .object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),
    nationalId: z.string().min(6, "National ID number must be at least 6 characters"),
    phoneNumber: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .regex(/^\+?[0-9]+$/, "Phone number must contain only numbers"),
    vehicleType: z.enum(["bicycle", "motorbike"], "Vehicle type is required"),
    licenseNumber: z.string().optional(), // Initially optional
    photo: z.instanceof(File, { message: "Photo is required" }),
  })
  .superRefine((data, ctx) => {
    // Conditionally validate licenseNumber
    if (data.vehicleType === "motorbike" && (!data.licenseNumber || data.licenseNumber.length < 6)) {
      ctx.addIssue({
        path: ["licenseNumber"],
        message: "Driver's license is required for motorbike drivers and must be at least 6 characters",
      });
    }
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
      vehicleType: "bicycle",
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
      const { error } = await supabase.from("drivers").insert({
        full_name: data.fullName,
        national_id: data.nationalId,
        phone_number: data.phoneNumber,
        vehicle_type: data.vehicleType,
        license_number: data.vehicleType === "motorbike" ? data.licenseNumber : null,
        photo_url: photoUrl,
      });

      if (error) {
        console.error("Error inserting driver data:", error);
        throw error;
      }

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

  const handlePhotoSelected = (file: File) => {
    setPhotoFile(file);
    form.setValue("photo", file, { shouldValidate: true });
  };

  return (
    <MainLayout>
      <PageHeader
        title="Become a Bodaguy Driver"
        description="Join Uganda's top delivery service. Earn competitive pay while delivering packages across Kampala and beyond."
        backgroundImage="https://res.cloudinary.com/dlkdmqaj3/image/upload/z_1.5/v1234567890/pexels-artempodrez-8989331_u5y5o1"
        className="text-center"
      />

      <section className="container px-4 py-12 md:py-16 mx-auto max-w-3xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                name="vehicleType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vehicle Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(value) => field.onChange(value)}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bicycle">Bicycle</SelectItem>
                          <SelectItem value="motorbike">Motorbike</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
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
                      Required only for motorbike drivers.
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
                  {isSubmitting ? "Processing..." : "Submit Application"}
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
