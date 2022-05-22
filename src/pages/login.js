import { authService } from 'firebase-config/service';
import { useEffect } from 'react';

export default function Login() {
  useEffect(() => {
    // authService.authUser();
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          authService.googleServise();
        }}>
        Google Login
      </button>
      <button
        onClick={() => {
          authService.signoutAuth();
        }}>
        Sign out
      </button>
    </div>
  );
}
