import Image from 'next/image';

export default function WavyImage() {
    const wavyClipPath = 
    'polygon(5% 0%, 15% 3%, 25% 0%, 35% 5%, 45% 2%, 55% 6%, 65% 2%, 75% 5%, 85% 1%, 95% 4%, 100% 10%, 98% 20%, 100% 30%, 95% 40%, 98% 50%, 93% 60%, 97% 70%, 100% 80%, 95% 90%, 90% 97%, 80% 100%, 70% 96%, 60% 99%, 50% 95%, 40% 98%, 30% 100%, 20% 97%, 10% 99%, 5% 95%, 0% 85%, 3% 75%, 0% 65%, 5% 55%, 2% 45%, 0% 35%, 4% 25%, 0% 15%)';
  return (
    <div className="lg:w-1/2 flex justify-center relative">
      <div className="relative w-[500px] h-[800px]">
        <Image  
          src="/images/saifullah.png"
          alt="Saifullah"
          width={500}
          height={800}
          className="object-cover w-full h-full"
          style={{ clipPath: wavyClipPath }}
        />
        <div
          className="absolute inset-0 z-[-1] border-4 border-black"
          style={{ clipPath: wavyClipPath, transform: 'scale(1.02)' }}
        />
      </div>
    </div>
  );
}