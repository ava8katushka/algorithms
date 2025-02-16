import Image from "next/image";
import Menu from "../components/Menu";
import Ava from "./ava.mdx";

export default function AboutMe() {
  const text = "# Ava Katushka";
  return (
    <div className="columns" key="landing-page">
      <section className="column is-one-quarter">
        <Menu chapter={""} chunk={""} />
      </section>
      <section className="column is-three-quarters">
        <section className="hero">
          <div className="hero-body">
            <div className="content"><Ava/></div>
          </div>
        </section>
      </section>
    </div>
  );
}
