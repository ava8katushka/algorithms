"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    console.log(session.user);
    return (
        <div class="columns m-0  is-vcentered">
                <div class="column">
                        <figure class="image is-32x32">
            <img
              class="is-rounded"
              src={session.user.image}
              alt={session.user.name}
            />
          </figure>
          </div>
                    <div class="column is-three-quarters">
               <button class="subtitle is-6 has-text-white" onClick={() => signOut()}>
              {session.user.name}
              </button>
              </div>

          </div>
    );
  }
  return (
    <button class="subtitle is-6 has-text-white" onClick={() => signIn()}>
      Sign in
    </button>
  );
}
