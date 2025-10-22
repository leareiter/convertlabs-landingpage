import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface BadgeProps {
  text: string;
  icon?: ReactNode;
  variant?: "default" | "success" | "warning" | "info";
  showArrow?: boolean;
  className?: string;
}

const Badge = ({ 
  text, 
  icon, 
  variant = "default", 
  showArrow = true, 
  className = "" 
}: BadgeProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "bg-brand-black text-white border-brand-green/20";
      case "warning":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "info":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case "success":
        return "bg-brand-green/50";
      case "warning":
        return "bg-yellow-500/50";
      case "info":
        return "bg-blue-500/50";
      default:
        return "bg-gray-500/50";
    }
  };

  const getDotStyles = () => {
    switch (variant) {
      case "success":
        return "bg-brand-green";
      case "warning":
        return "bg-yellow-500";
      case "info":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className={`inline-flex items-center gap-2 border px-4 py-2 rounded-3xl text-sm font-medium ${getVariantStyles()} ${className}`}>
      {icon || (
        <div className="relative flex items-center justify-center w-4 h-4">
          <div className={`w-4 h-4 rounded-full animate-pulse absolute ${getIconStyles()}`}></div>
          <div className={`w-2 h-2 rounded-full animate-pulse relative z-10 ${getDotStyles()}`}></div>
        </div>
      )}
      <span className="text-xs md:text-base">{text}</span>
      {showArrow && <ArrowRight size={14} />}
    </div>
  );
};

export default Badge;

