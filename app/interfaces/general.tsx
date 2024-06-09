import { MDXProps } from "mdx/types";

export interface Problem {
    name: string;
    link: string;
    solutionLink? : string;
  }
  export interface PageInfo {
    title: string;
    markdown: JSX.Element;
    problems: Problem[];
  }

  export interface Page {
    [index : string] : PageInfo;
  }

  export interface PageStructure {
    title : string;
    pages: Page;
  }
  
  export interface Chapters {
    [index: string]: PageStructure;
  }

