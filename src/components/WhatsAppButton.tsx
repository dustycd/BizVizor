import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: 'floating' | 'inline' | 'button';
  size?: 'sm' | 'md' | 'lg';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  message = "Hello! I'm interested in your UAE business setup services. Can you help me?",
  className = "",
  variant = "button",
  size = "md"
}) => {
  const phoneNumber = "971564960040"; // WhatsApp number without + sign
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const baseClasses = "flex items-center justify-center transition-all duration-200 font-semibold";
  
  const variantClasses = {
    floating: "fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl transform hover:scale-105",
    inline: "bg-green-500 text-white hover:bg-green-600",
    button: "bg-green-500 text-white rounded-lg hover:bg-green-600"
  };

  const sizeClasses = {
    sm: variant === 'floating' ? "w-12 h-12" : "px-4 py-2 text-sm",
    md: variant === 'floating' ? "w-14 h-14" : "px-6 py-3",
    lg: variant === 'floating' ? "w-16 h-16" : "px-8 py-4 text-lg"
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className={`${iconSizes[size]} ${variant !== 'floating' ? 'mr-2' : ''}`} />
      {variant !== 'floating' && (
        <span>{size === 'sm' ? 'WhatsApp' : 'Chat on WhatsApp'}</span>
      )}
    </a>
  );
};

export default WhatsAppButton;