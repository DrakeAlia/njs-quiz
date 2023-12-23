import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL!);

export default function QuizForm() {
  async function createQuiz(formData: FormData) {
    "use server";
    let title = formData.get("title") as string;
    let description = formData.get("description") as string;
    let question = formData.get("question") as string;
    let answers = [1, 2, 3].map((id) => {
      return {
        answer: formData.get(`answer-${id}`) as string,
        isCorrect: formData.get(`check-${id}`) === "on",
      };
    });
  }

  return (
    <form action={createQuiz}>
      <label>
        Title
        <input name="title" />
      </label>
      <label>
        Description
        <input name="description" />
      </label>
      <label>
        Question
        <input name="question" />
      </label>
      <label>
        Answer 1
        <input name="answer1" />
      </label>
      <label>
        Answer 2
        <input name="answer2" />
      </label>
      <label>
        Answer 3
        <input name="answer3" />
      </label>
      <label>
        Answer 4
        <input name="answer4" />
      </label>
      <label>
        Correct Answer
        <select name="correctAnswer">
          <option value="1">Answer 1</option>
          <option value="2">Answer 2</option>
          <option value="3">Answer 3</option>
          <option value="4">Answer 4</option>
        </select>
      </label>
      <button type="submit">Create Quiz</button>
    </form>
  );
}
