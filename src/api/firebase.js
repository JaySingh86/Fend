import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export const saveUserToDatabase = async (user: any) => {
  try {
    await database().ref(`/users/${user.uid}`).set({
      name: user.displayName,
      email: user.email,
      profilePicture: user.photoURL,
      createdAt: new Date().toISOString(),
    });
    console.log('User saved successfully');
  } catch (error) {
    console.error('Error saving user:', error);
  }
};


export const getUserData = async (uid: string) => {
  try {
    const snapshot = await database().ref(`/users/${uid}`).once('value');
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('User not found in database');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

