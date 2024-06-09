import Image from "next/image";
import Menu from "./components/Menu";

export default function LandingPage() {
  return (
     <div className="columns" key="landing-page">
     <section className="column is-one-quarter">
       <Menu chapter={""} chunk={""}/>
     </section>
     <section className="column is-three-quarters">
     <Image
      src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Blue_walleye.jpg"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <p className="has-text-weight-medium">
    Let's learn some algorithms, now, shall we?
    </p>
     </section>
   </div>
  );
}
