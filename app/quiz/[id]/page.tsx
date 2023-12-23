import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!);

export default function QuizPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { show?: string };
}) {
  return (
    <section className="flex flex-col items-center text-center mt-2 py-5 and mx-auto">
      <h1 className="text-4xl font-bold">Quiz {params.id}</h1>
      <p>show: {searchParams.show}</p>
    </section>
  );
}
