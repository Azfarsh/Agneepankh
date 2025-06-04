// MCQ QUESTIONS TABLE QUERY
CREATE TABLE mcq_questions (
    id INTEGER PRIMARY KEY,
    role VARCHAR(50) NOT NULL,
    question TEXT NOT NULL,
    option_a TEXT NOT NULL,
    option_b TEXT NOT NULL,    
    option_c TEXT NOT NULL,
    option_d TEXT NOT NULL
);

// INSERT QUERY FOR MCQ QUESTIONS
INSERT INTO mcq_questions (id, role, question, option_a, option_b, option_c, option_d) VALUES
(1, 'guru', 'What is your primary teaching method?', 'Lecture', 'Discussion', 'Project-based', 'Other'),
(2, 'guru', 'How often do you use technology in class?', 'Daily', 'Weekly', 'Rarely', 'Never'),
(3, 'guru', 'How do you assess student progress?', 'Tests', 'Assignments', 'Projects', 'Other'),
(4, 'guru', 'What is your biggest challenge as a teacher?', 'Time', 'Resources', 'Student engagement', 'Other'),
(5, 'student', 'How do you prefer to learn?', 'Visual', 'Auditory', 'Kinesthetic', 'Reading/'),
(6, 'student', 'How often do you participate in class?', 'Always', 'Sometimes', 'Rarely', 'Never'),
(7, 'student', 'What motivates you to study?', 'Grades', 'Interest', 'Parents', 'Peers'),
(8, 'student', 'What is your biggest challenge as a student?', 'Time management', 'Understanding', 'Motivation', 'Other'),
(9, 'tree', 'How does your institution support teachers?', 'Workshops', 'Resources', 'Mentoring', 'Other'),
(10, 'tree', 'How does your institution support students?', 'Counseling', 'Clubs', 'Scholarships', 'Other')
(11, 'tree', 'What initiatives help in faculty development?', 'Training', 'Research grants', 'Peer learning', 'Other'),
(12, 'tree', 'How does your institution promote student well-being?', 'Counseling', 'Wellness programs', 'Awareness campaigns', 'Other');

// USER ANSWERS TABLE QUERY
CREATE TABLE user_answers (
    id INTEGER PRIMARY KEY,
    uid VARCHAR(128) NOT NULL,
    email VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    answers JSONB NOT NULL,
    answered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    uid VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    feedback TEXT NOT NULL
);