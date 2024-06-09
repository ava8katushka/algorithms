import { Problem } from "../interfaces/general";

function Solution ({solution} : {solution? : string}) {
  return solution? (<div><a href={solution}>See the solution</a></div>) : (<div/>);

}

function mapProblems(problems: Problem[]) {
  return problems.map((problem) => (
    <div className="box" key={problem.name}>
      <a href={problem.link}>{problem.name}</a>
      <Solution solution={problem.solutionLink}/>
    </div>
  ));
}
export default function Basic({
  title,
  markdown,
  problems,
}: {
  title: string;
  markdown: JSX.Element;
  problems: Problem[];
}) {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="content">
        {markdown}
        </div>
        {mapProblems(problems)}
      </div>
    </section>
  );
}
