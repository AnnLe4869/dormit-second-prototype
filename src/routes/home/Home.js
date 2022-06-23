import { useSignUp } from "../../context/user/auth-handler";

export default function HomePage() {
  const signUp = useSignUp();
  return (
    <main>
      <button onClick={signUp}>Sign up</button>
    </main>
  );
}
