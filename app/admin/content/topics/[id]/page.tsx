interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  return (
    <main>
      <h1>Topic: {id}</h1>
    </main>
  );
};

export default Page;
