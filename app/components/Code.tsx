import SyntaxHighlighter from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';


export default function Code(props) {
  return (
    <SyntaxHighlighter language="python" style={agate}>
      {props.children}
    </SyntaxHighlighter>
  );
};