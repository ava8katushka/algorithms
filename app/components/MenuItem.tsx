export default function MenuItem({text, link, isActive} : {text : string, link : string, isActive : boolean}) {
    return (
      <li>
        <a href={link} className={isActive? "is-active" : ""}>{text}</a>
      </li>
    );
  }
  