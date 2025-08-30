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
      //<button class="subtitle is-6 has-text-white" onClick={() => signOut()}>{session.user.name}</button>

      // <div class="card">
      //     <div class="card-content">
      //       <div class="media">
      //         <div class="media-left">
      //           <figure class="image is-32x32">
      //                   <img
      //                     src={session.user.image}
      //                     alt={session.user.name}
      //                   />
      //           </figure>
      //         </div>
      //         <div class="media-content">
      //           <p class="title is-6">{session.user.name}</p>
      //            <button class="subtitle is-6" onClick={() => signOut()}>Sign out</button>
      //         </div>
      // </div>
      // </div>
      // </div>
    );
  }
  return (
    <button class="subtitle is-6 has-text-white" onClick={() => signIn()}>
      Sign in
    </button>
  );
}
