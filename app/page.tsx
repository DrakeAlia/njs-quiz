import Link from "next/link";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!);

// create a quiz type to represent the data from the database
type Quiz = {
  quiz_id: number;
  title: string;
};

async function Quizzes() {
  // get all the quizzes from the database
  const quizzes: Quiz[] = await sql`SELECT * FROM quizzes`;

  return (
    <ul>
      {quizzes.map((quiz) => (
        <li key={quiz.quiz_id} className="underline">
          <Link href={`/quiz/${quiz.quiz_id}`}>{quiz.title}</Link>
        </li>
      ))}
    </ul>
  );
}

// The Home component will render the list of quizzes
export default function Home() {
  return (
    <section className="flex flex-col items-center text-center mt-2 py-5 and mx-auto">
      <h1 className="text-4xl font-bold">All Quizzes</h1>
      {/* <Quizzes /> */}
    </section>
  );
}
