import { site_default } from '@/constants/constants';

export default function LogoIcon({ className }: { className?: string }) {
  return <div className={className}>{site_default.logo}</div>;
}
