import Basic from "@/app/components/Basic";
import Menu from "@/app/components/Menu";
import { pagesConfig } from "@/app/course/a_config";
import React from "react";

export default function Chapter({ params }: { params: { name: string, chunk : string } }) {
  return  <div className="columns">
  <section className="column is-one-quarter">
    <Menu chapter={params.name} chunk={params.chunk}/>
  </section>
  <section className="column is-three-quarters">
    <Basic
      title={pagesConfig[params.name].pages[params.chunk].title}
      markdown={pagesConfig[params.name].pages[params.chunk].markdown}
      problems={pagesConfig[params.name].pages[params.chunk].problems}
    />
  </section>
</div>;
}
