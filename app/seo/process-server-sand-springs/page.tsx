import { redirect } from 'next/navigation';

export default function RedirectPage() {
  redirect('/seo/sand-springs-process-server');
  return null; // This component will not render anything
}

