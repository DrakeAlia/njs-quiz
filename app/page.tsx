import Link from "next/link";
import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!);

// create a quiz type to represent the data from the database
// quiz_id: This property is of type number. It likely represents a 
// unique identifier for each quiz.
// title: This property is of type string. It likely represents the 
// title or name of the quiz.
type Quiz = {
  quiz_id: number;
  title: string;
};

// Fetches data from a database and renders a list of quizzes.
async function Quizzes() {
  // get all the quizzes from the database
  const quizzes: Quiz[] = await sql`
  SELECT * FROM quizzes
  `;

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

// The Home component will render the list of quizzes and a form to create new quizzes.
export default function Home() {
  return (
    <section className="flex flex-col items-center text-center mt-2 py-5">
      <h1 className="text-4xl font-bold">All Quizzes</h1>
      <Quizzes />
    </section>
  );
}
