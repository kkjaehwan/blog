import { site_default } from '@/constants/constants';
import Image from 'next/image';

export default function SearchIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image
        src="/images/icon_magnifier.svg"
        alt="search"
        title="search"
        width={24}
        height={24}
      />
    </div>
  );
}
