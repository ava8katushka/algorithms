import { pagesConfig } from "../course/a_config";
import MenuItem from "./MenuItem";

function mapTopics(
  key: string,
  chapterSelected : string,
  chunkSelected : string
) {
  return Object.keys(pagesConfig[key].pages).map((chunk) => (
    <MenuItem key={chunk}
      text={pagesConfig[key].pages[chunk].title}
      link={`/chapter/${key}/${chunk}`}
      isActive={key == chapterSelected && chunk == chunkSelected}
    />
  ));
}

function mapMenu(chapter : string, chunk : string) {
  return Object.keys(pagesConfig).map((key) => {
    const page = pagesConfig[key];
    const firstChunk = Object.keys(page.pages)[0];
    const link = `/chapter/${key}/${firstChunk}`;
    const active = key == chapter;
    return (<ul className="menu-list" key="page-menu">
      <li>
        <a href={link} className={active? "has-background-success-light" : ""}>{page.title}</a>
        <ul>
          {active? mapTopics(key, chapter, chunk): ""}
        </ul>
      </li>
    </ul>)
});
}

export default function Menu({
  chapter,
  chunk,

}: {
  chapter : string,
  chunk : string

}) {
  console.log("menu",chapter, chunk);
  return (
    <aside className="menu">
      <p className="menu-label">ALGORITHMS & DATA STRUCTURES</p>
      {mapMenu(chapter, chunk)}
    </aside>
  );
}
