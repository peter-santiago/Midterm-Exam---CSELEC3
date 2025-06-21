-- SQL setup for students table and sample data
CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  course TEXT NOT NULL
);

INSERT INTO students (name, email, course) VALUES
  ('John Smith', 'john@example.com', 'Computer Science'),
  ('Jane Doe', 'jane@example.com', 'Information Systems'),
  ('Alice Johnson', 'alice@example.com', 'Software Engineering'),
  ('Bob Lee', 'bob@example.com', 'Data Science'),
  ('Maria Garcia', 'maria@example.com', 'Cybersecurity');
