-- Add admin role to profiles table
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'student' CHECK (role IN ('student', 'admin'));

-- Create admin policies for courses
CREATE POLICY "courses_admin_all" ON public.courses FOR ALL TO authenticated USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- Create admin policies for course materials
CREATE POLICY "course_materials_admin_all" ON public.course_materials FOR ALL TO authenticated USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- Create admin policies for learning paths
CREATE POLICY "learning_paths_admin_all" ON public.learning_paths FOR ALL TO authenticated USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- Create admin policies for YouTube videos
CREATE POLICY "youtube_videos_admin_all" ON public.youtube_videos FOR ALL TO authenticated USING (
  EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
  )
);

-- Insert a default admin user (you can change this email)
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'admin@srmramapuram.edu.in',
  crypt('admin123', gen_salt('bf')),
  NOW(),
  NOW(),
  NOW()
) ON CONFLICT (email) DO NOTHING;

-- Create admin profile
INSERT INTO public.profiles (id, full_name, student_id, role, level)
SELECT 
  id,
  'ML Course Admin',
  'ADMIN001',
  'admin',
  'advanced'
FROM auth.users 
WHERE email = 'admin@srmramapuram.edu.in'
ON CONFLICT (id) DO UPDATE SET role = 'admin';
