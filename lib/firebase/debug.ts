// Debug Firebase configuration
console.log('Firebase Config Check:');
console.log('API Key:', process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'Set' : 'Missing');
console.log('Auth Domain:', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'Set' : 'Missing');
console.log('Project ID:', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ? 'Set' : 'Missing');
console.log('App ID:', process.env.NEXT_PUBLIC_FIREBASE_APP_ID ? 'Set' : 'Missing');

export {};