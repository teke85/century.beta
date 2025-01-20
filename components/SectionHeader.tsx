import React from "react";

interface SectionHeaderProps {
  title: string;
  heading: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  heading,
  description,
}) => {
  return (
    <section className="section-header w-full flex items-center flex-col gap-2">
      <h4 className="section-title font-semibold text-gray-600 font-[family-name:var(--font-rethink)] text-xl mx-auto">{title}</h4>
      <h2 className="section-heading text-gray-600 font-[family-name:var(--font-rethink)] text-3xl">{heading}</h2>
      <p className="section-description text-gray-600 font-[family-name:var(--font-rethink)]">{description}</p>
    </section>
  );
};

export default SectionHeader;
