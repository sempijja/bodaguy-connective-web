
import { useState, useRef } from "react";
import { Camera, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PhotoUploaderProps {
  onPhotoSelected: (file: File) => void;
}

export function PhotoUploader({ onPhotoSelected }: PhotoUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let stream: MediaStream | null = null;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processSelectedFile(file);
    }
  };

  const processSelectedFile = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onPhotoSelected(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const startCamera = async () => {
    try {
      setIsCapturing(true);
      stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: "user",
          width: { ideal: 640 },
          height: { ideal: 480 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access camera. Please check permissions or try uploading a photo instead.");
      setIsCapturing(false);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      // Draw video frame to canvas
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        // Convert canvas to blob
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "camera-photo.jpg", { type: "image/jpeg" });
            processSelectedFile(file);
            stopCamera();
          }
        }, "image/jpeg", 0.8);
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCapturing(false);
  };

  const removePhoto = () => {
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    // Inform parent component that the photo is removed
    // You might want to handle this differently based on your requirements
  };

  return (
    <div className="space-y-4">
      {!isCapturing && !previewUrl && (
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
          <Button 
            type="button" 
            variant="outline" 
            className="flex-1"
            onClick={handleUploadClick}
          >
            <Upload size={16} className="mr-2" />
            Upload Photo
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            className="flex-1"
            onClick={startCamera}
          >
            <Camera size={16} className="mr-2" />
            Take Photo
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      )}

      {isCapturing && (
        <div className="relative border rounded-md overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full aspect-[4/3] bg-gray-100"
          />
          <canvas ref={canvasRef} className="hidden" />
          
          <div className="absolute bottom-0 inset-x-0 p-4 flex justify-center bg-black/30">
            <Button 
              type="button" 
              onClick={takePhoto}
              className="mx-2 bg-white text-black hover:bg-gray-200"
            >
              Take Photo
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={stopCamera}
              className="mx-2 border-white text-white hover:bg-white/20"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {previewUrl && (
        <div className="relative">
          <div className="border rounded-md overflow-hidden">
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="w-full object-cover aspect-[4/3]"
            />
          </div>
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 rounded-full"
            onClick={removePhoto}
          >
            <X size={16} />
          </Button>
        </div>
      )}
    </div>
  );
}
