// components/ServicesBento.jsx
import { cn } from '@/lib/utils';
import { Check } from "lucide-react";
import Image from "next/image";

interface ServiceCellProps {
  title: string;
  description?: string;
  number?: string | null;
  isApproach?: boolean;
  items?: { title: string; description: string }[];
  showImage?: boolean;
}

const ServiceCell = ({ title, description, number, isApproach = false, items = [], showImage = false }: ServiceCellProps) => {
  return (
    <div className="size-full rounded-xl p-6 bg-teal-900/20 text-white flex flex-col justify-between transition-all duration-300 hover:bg-teal-900/30">
    {showImage && (
        <div className="relative w-20 h-24 mb-4 rounded-full overflow-hidden">
            <Image
                src="/images/owner.jpeg"
                alt="Owner"
                fill
                className="object-cover"
            />
        </div>
      )}

      {number && (
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 bg-emerald-500/20 rounded-full flex items-center justify-center mr-3">
            <span className="text-emerald-400 font-bold">{number}</span>
          </div>
          <h3 className={cn(
            "font-bold text-2xl", // Increased font size for numbered titles
            isApproach ? "text-xl text-center mb-2" : showImage ? "text-3xl mb-2" : "text-lg mb-2"
          )}>
            {title}
          </h3>
        </div>
      )}
      
      {!number && title && (
        <h3 className={cn(
          "font-bold",
          isApproach ? "text-xl text-center mb-2" : showImage ? "text-3xl mb-2" : "text-lg mb-2"
        )}>
          {title}
        </h3>
      )}
      
      {description && !items.length && (
        <p className={cn(
          "text-gray-300",
          isApproach ? "text-center text-sm mb-4" : showImage ? "text-lg" : "text-sm"
        )}>
          {description}
        </p>
      )}
      
      {items.length > 0 && (
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="h-6 w-6 bg-emerald-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                <Check className="h-4 w-4 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-md text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Data for the bento grid cells (unchanged)
const servicesData = [
  {
    title: "Why You Should Join Us",
    description: "Our proven methodology has helped hundreds of businesses transform their online presence and generate consistent, qualified leads.",
    number: null,
    showImage: true,
  },
  {
    title: "Expert Guidance",
    description: "Proven Systems areustries. These systems have been proven to deliver results. They offer a roadmap for navigating challenges, streamlining processes, and achieving consistent growth. By implemention",
    number: "1",
  },
  {
    title: "Proven Systems",
    description: "Proven Systems areustries. These systems have been proven to deliver results. They offer a roadmap for navigating challenges, streamlining processes, and achieving consistent growth. By implemention",
    number: "2",
  },
  {
    title: "Our Approach",
    description: "We focus on creating authentic connections that convert into meaningful business relationships.",
    isApproach: true,
    items: [
      {
        title: "Personal Brand Development",
        description: "Create a compelling personal brand that attracts your ideal clients.",
      },
      {
        title: "Content Strategy",
        description: "Develop content that positions you as the go-to expert in your field.",
      },
      {
        title: "Sales Conversion",
        description: "Turn warm leads into paying clients with proven sales frameworks.",
      },
    ],
  },
];

// Bento Grid Component (unchanged)
export const ServicesBento = () => {
  return (
    <section className="py-16 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.05),transparent_70%)]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-4">
          {servicesData.map((service, i) => (
            <div
              key={i}
              className={cn(
                'p-2 rounded-xl h-64',
                i === 0 && 'md:col-span-3',
                i === 2 && 'md:col-start-1',
                i === 3 && 'md:col-start-2 md:col-span-3'
              )}
            >
              <ServiceCell
                title={service.title}
                description={service.description}
                number={service.number}
                isApproach={service.isApproach}
                items={service.items || []}
                showImage={service.showImage || false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;