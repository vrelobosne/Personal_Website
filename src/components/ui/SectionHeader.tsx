/**
 * Section Header Component
 *
 * A reusable component for section titles throughout the site.
 * Provides consistent styling and reduces code duplication.
 */

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignmentClasses = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-16 ${alignmentClasses} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
