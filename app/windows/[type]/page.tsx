type Props = {
  params: Promise<{ type: string }>;
};

export default async function WindowPage({ params }: Props) {
  const { type } = await params;

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Windows - {type}
      </h1>
    </main>
  );
}
