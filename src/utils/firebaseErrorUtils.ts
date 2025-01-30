export const parseFirebaseError = (error: any): string => {
    if (!error?.code) {
      return 'An unknown error occurred.';
    }
  
    switch (error.code) {
      case 'auth/missing-phone-number':
        return 'Please enter your phone number.';
      case 'auth/invalid-phone-number':
        return 'Invalid phone number format.';
      case 'auth/quota-exceeded':
        return 'SMS quota exceeded. Try again later.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please try again later.';
      case 'auth/network-request-failed':
        return 'Network error. Check your internet connection.';
      case 'auth/user-not-found':
        return 'No account found with this phone number.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  };
  