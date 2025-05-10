import { redirect } from 'next/navigation';
import { auth } from '~/server/auth';
import { HydrateClient } from '~/trpc/server';
import SidebarLayout from './_components/SidebarLayout';

const getColorFromName = (name?: string | null) => {
  if (!name) return 'bg-gray-400';
  const colors = [
    'bg-pink-500','bg-green-500','bg-blue-500',
    'bg-yellow-500','bg-purple-500','bg-red-500','bg-indigo-500',
  ];
  let hash = 0;
  for (const ch of name) hash = ch.charCodeAt(0) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
};

export default async function Home() {
  const session = await auth();
  if (!session) redirect('/login');
  const name = session.user.name ?? "";
  const initial = name.charAt(0).toUpperCase();
  const bgColor = getColorFromName(name);

  return (
    <HydrateClient>
      <SidebarLayout initial={initial} bgColor={bgColor}>
        <h1 className="text-2xl font-bold text-gray-800">Home</h1>
        <p className="mt-4 text-gray-600">

        </p>
      </SidebarLayout>
    </HydrateClient>
  );
}
