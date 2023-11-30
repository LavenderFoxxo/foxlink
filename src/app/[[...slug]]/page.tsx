import Image from 'next/image'
import { redirect } from 'next/navigation';
import { prisma } from '@/util/db';

async function checkIfRedirect(slug: string) {
  const link = await prisma.link.findUnique({
    where: {
      uid: slug[0]
    }
  });

  if (!link) return;

  await prisma.link.update({
    where: {
      uid: slug[0]
    },
    data: {
      hits: link.hits++
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
