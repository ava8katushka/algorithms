export default function MenuItem({text, link, isActive} : {text : string, link : string, isActive : boolean}) {
    return (
      <li>
        <a href={link} className={isActive? "has-background-warning-light" : ""}>{text}</a>
      </li>
    );
  }
  