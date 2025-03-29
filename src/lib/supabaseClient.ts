import { createClient } from '@supabase/supabase-js';

// Load environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const uploadPhoto = async (file: File): Promise<string | null> => {
  const fileName = `${Date.now()}-${file.name}`;
  const { data, error } = await supabase.storage
    .from('driver-photos')
    .upload(fileName, file);

  if (error) {
    console.error('Error uploading photo:', error.message);
    return null;
  }

  // Return the public URL of the uploaded photo
  const { publicUrl } = supabase.storage.from('driver-photos').getPublicUrl(fileName);
  return publicUrl;
};

export const saveDriverApplication = async (data: {
  fullName: string;
  nationalId: string;
  phoneNumber: string;
  licenseNumber: string;
  photoUrl: string | null;
}) => {
  const { error } = await supabase.from('drivers').insert([
    {
      full_name: data.fullName,
      national_id: data.nationalId,
      phone_number: data.phoneNumber,
      license_number: data.licenseNumber,
      photo_url: data.photoUrl,
    },
  ]);

  if (error) {
    console.error('Error saving driver application:', error.message);
    throw new Error('Failed to save application');
  }
};