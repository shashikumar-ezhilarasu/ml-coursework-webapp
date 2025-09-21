import { auth } from './config';
import './debug'; // Debug Firebase config
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';

export const createBrowserClient = () => auth;

// Auth helper functions
export const signUp = async (email: string, password: string) => {
  try {
    console.log('Attempting Firebase sign up...');
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Sign up successful');
    return result;
  } catch (error: any) {
    console.error('Sign up error:', error.code, error.message);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    console.log('Attempting Firebase sign in...');
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log('Sign in successful');
    return result;
  } catch (error: any) {
    console.error('Sign in error:', error.code, error.message);
    throw error;
  }
};

export const logOut = async () => {
  return await signOut(auth);
};

export const resetPassword = async (email: string) => {
  return await sendPasswordResetEmail(auth, email);
};

export const updateUserProfile = async (user: User, profile: { displayName?: string; photoURL?: string }) => {
  return await updateProfile(user, profile);
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Database compatibility layer (placeholder)
export const createClient = () => ({
  auth: {
    getUser: async () => ({ 
      data: { user: auth.currentUser }, 
      error: null 
    })
  },
  from: (table: string) => ({
    select: (columns: string, options?: any) => {
      let query = {
        eq: (column: string, value: any) => query,
        order: (column: string, options?: any) => query,
        single: () => Promise.resolve({ data: null, error: null })
      }
      
      // Make it thenable to work with await
      return Object.assign(query, {
        then: (resolve: any) => {
          const result = options?.count 
            ? { count: 0, data: [], error: null }
            : { data: [], error: null }
          return Promise.resolve(result).then(resolve)
        }
      })
    },
    insert: async (data: any) => ({ 
      data: null, 
      error: null,
      select: () => ({
        single: async () => ({ data: null, error: null })
      })
    }),
    update: (data: any) => {
      let query = {
        eq: (column: string, value: any) => query
      }
      
      return Object.assign(query, {
        then: (resolve: any) => {
          return Promise.resolve({ data: null, error: null }).then(resolve)
        }
      })
    },
    delete: () => ({
      eq: (column: string, value: any) => Promise.resolve({ data: null, error: null })
    })
  })
});