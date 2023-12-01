import { redirect } from 'next/navigation';
import { prisma } from '@/util/db';

async function checkIfRedirect(slug: string) {
  // Check if it's a redirect or page

  const link = await prisma.link.findUnique({
    where: {
      uid: slug[0]
    },
    cacheStrategy: { ttl: 60 }
  });

  // If not, return

  if (!link) return;

  // If it's a link, add one to the hit counter and update the query then redirect

  let hits = ++link.hits
  
  await prisma.link.update({
    where: {
      id: link.id
    },
    data: {
      hits
    }
  })

  return redirect(link.link)
}

export default async function Home({ params }: { params: { slug: string }}) {
  if (params.slug) await checkIfRedirect(params.slug);
  
  return (
    <div className="flex items-center bg-white justify-center align-center min-h-screen m-0 min-w-screen">
      <img
        src="https://ethn.sh/timothy.gif"
        alt="Timothy GIF"

        width={300}
        height={300}
      />
    </div>
  )
}
