import { Problem } from "../interfaces/general";


import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Code = () => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};

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
