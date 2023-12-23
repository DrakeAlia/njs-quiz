```sql
CREATE TABLE IF NOT EXISTS quizzes (
    quiz_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    question_text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
);

CREATE TABLE IF NOT EXISTS answers (
    answer_id SERIAL PRIMARY KEY,
    quiz_id INT REFERENCES quizzes(quiz_id) ON DELETE CASCADE,
    answer_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
);
```

Here's the query:

```sql
CREATE TABLE IF NOT EXISTS quizzes (
    quiz_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    question_text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS answers (
    answer_id SERIAL PRIMARY KEY,
    quiz_id INT REFERENCES quizzes(quiz_id) ON DELETE CASCADE,
    answer_text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL
);

-- Query to insert a quiz


INSERT INTO quizzes (title, description, question_text)
VALUES ('Quiz Title', 'Quiz Description', 'Question Text');

INSERT INTO quizzes (title, description, question_text)
VALUES ('General Knowledge', 'A basic general knowledge quiz', 'What is the capital of France?');

-- Query to insert answers

INSERT INTO answers (quiz_id, answer_text, is_correct)
VALUES (1, 'Your Answer Text', TRUE);

INSERT INTO answers (quiz_id, answer_text, is_correct)
VALUES (1, 'Paris', TRUE);

```
