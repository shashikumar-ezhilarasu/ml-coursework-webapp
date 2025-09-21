-- Insert sample course data
INSERT INTO public.courses (id, title, description, syllabus, level) VALUES
(
  gen_random_uuid(),
  'Machine Learning Fundamentals',
  'Complete introduction to Machine Learning concepts, algorithms, and applications for SRM Ramapuram students.',
  'Module 1: Introduction to ML\nModule 2: Supervised Learning\nModule 3: Unsupervised Learning\nModule 4: Neural Networks\nModule 5: Deep Learning\nModule 6: Model Evaluation\nModule 7: Real-world Applications',
  'beginner'
);

-- Get the course ID for further inserts
DO $$
DECLARE
    course_uuid UUID;
BEGIN
    SELECT id INTO course_uuid FROM public.courses WHERE title = 'Machine Learning Fundamentals' LIMIT 1;
    
    -- Insert sample course materials
    INSERT INTO public.course_materials (course_id, title, description, type, content) VALUES
    (course_uuid, 'Introduction to Machine Learning', 'Basic concepts and overview of ML', 'notes', 'Machine Learning is a subset of artificial intelligence that focuses on algorithms that can learn from data...'),
    (course_uuid, 'Supervised Learning Algorithms', 'Linear regression, decision trees, SVM', 'notes', 'Supervised learning uses labeled data to train models...'),
    (course_uuid, 'ML Fundamentals PPT', 'Comprehensive presentation on ML basics', 'ppt', 'Slide 1: What is Machine Learning?\nSlide 2: Types of Learning...'),
    (course_uuid, 'Python for Machine Learning', 'Essential Python libraries and tools', 'book', 'Chapter 1: NumPy and Pandas\nChapter 2: Scikit-learn...'),
    (course_uuid, 'ML Previous Year Questions 2023', 'Important questions from last year', 'pyq', 'Q1: Explain the difference between supervised and unsupervised learning...');
    
    -- Insert sample learning paths
    INSERT INTO public.learning_paths (title, description, level, modules) VALUES
    ('Beginner ML Path', 'Perfect for students new to machine learning', 'beginner', 
     '[
       {"title": "Python Basics", "duration": "2 weeks", "topics": ["Variables", "Functions", "Libraries"]},
       {"title": "Statistics Fundamentals", "duration": "1 week", "topics": ["Mean", "Median", "Standard Deviation"]},
       {"title": "Introduction to ML", "duration": "2 weeks", "topics": ["What is ML", "Types of Learning", "Applications"]},
       {"title": "First ML Model", "duration": "1 week", "topics": ["Linear Regression", "Model Training", "Evaluation"]}
     ]'::jsonb),
    ('Intermediate ML Path', 'For students with basic programming knowledge', 'intermediate',
     '[
       {"title": "Advanced Python", "duration": "1 week", "topics": ["OOP", "Data Structures", "Algorithms"]},
       {"title": "Data Preprocessing", "duration": "2 weeks", "topics": ["Cleaning", "Feature Engineering", "Scaling"]},
       {"title": "Classification Algorithms", "duration": "3 weeks", "topics": ["Decision Trees", "SVM", "Random Forest"]},
       {"title": "Model Evaluation", "duration": "1 week", "topics": ["Cross-validation", "Metrics", "Hyperparameter Tuning"]}
     ]'::jsonb),
    ('Advanced ML Path', 'For experienced students ready for deep learning', 'advanced',
     '[
       {"title": "Neural Networks", "duration": "3 weeks", "topics": ["Perceptron", "Backpropagation", "Architectures"]},
       {"title": "Deep Learning", "duration": "4 weeks", "topics": ["CNNs", "RNNs", "Transformers"]},
       {"title": "Advanced Topics", "duration": "3 weeks", "topics": ["GANs", "Reinforcement Learning", "Transfer Learning"]},
       {"title": "Capstone Project", "duration": "2 weeks", "topics": ["Project Planning", "Implementation", "Presentation"]}
     ]'::jsonb);
    
    -- Insert sample YouTube videos
    INSERT INTO public.youtube_videos (course_id, title, video_id, description, category) VALUES
    (course_uuid, 'Machine Learning Explained', 'dQw4w9WgXcQ', 'Great introduction to ML concepts', 'fundamentals'),
    (course_uuid, 'Python for Data Science', 'dQw4w9WgXcQ', 'Essential Python skills for ML', 'programming'),
    (course_uuid, 'Linear Regression Tutorial', 'dQw4w9WgXcQ', 'Step-by-step linear regression guide', 'algorithms'),
    (course_uuid, 'Neural Networks Basics', 'dQw4w9WgXcQ', 'Understanding neural networks', 'deep-learning');
END $$;
