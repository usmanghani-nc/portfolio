import { useContext, useEffect, useState } from 'react';
import { authService } from 'firebase-config/service';

export default function Auth() {
  const [state, setState] = useState({
    user: null,
    loading: true,
  });

  useEffect(() => {}, []);

  return <div value={{ state }}></div>;
}
