import { Chapters } from "../interfaces/general";
import TimeAndSpace from "./time_and_space.mdx";
import CodeLimit from "./code_limit.mdx";
import Logarithm from "./logarithm.mdx";
import UnderConstruction from "./under_constuction.mdx"
import TimeComplexities from "./time_complexities.mdx"

export const pagesConfig: Chapters = {
  "time_and_space" : {
    title: "Time and Space Complexity",
    pages: {
      "about" : {
        title: "What is Time and Space Complexity, exactly?",
        markdown: <TimeAndSpace />,
        problems: [
          {
            name: "Link to a problem",
            link: "ava-coding.com",
            solutionLink: "ava-coding.com",
          },
          { name: "Link to an other problem", link: "ava-coding.com" },
        ],
      },
      "code_limit" : {
        title: "How to never have a code limit",
        markdown: <CodeLimit />,
        problems: [],
      },
      "logarithm"  : { title: "What is a logarithm?", markdown: <Logarithm />, problems: [] },
      "o_n" : {
        title: "How to make sense of O(1), O(n), O(n log n), O(a^n) and similar",
        markdown: <TimeComplexities />,
        problems: [],
      },
      "static_arrays" : {
        title: "Computer memory and static arrays",
        markdown: <UnderConstruction />,
        problems: [],
      },
      "dynamic_arrays" : {
        title: "Dynamic arrays and amortized constant",
        markdown: <UnderConstruction />,
        problems: [],
      },
      "design_thinking" : {
        title: "Design thinking: which algorithm is better",
        markdown: <UnderConstruction />,
        problems: [],
      },
    },
  },
  "arrays_and_strings" : {
    title : "Arrays & Strings manipulation",
    pages : {
      "move_zeros" : {
        title: "Move the zeros: metaphor of memory management",
        markdown: <UnderConstruction />,
        problems: [],
      },
      "string_n2" : {
        title: "Don't do this to strings! Or how your O(n) algorithm is suddenly O(n^2)",
        markdown: <UnderConstruction />,
        problems: [],
      },
      "prefix_sum" : {
        title: "Let's add some space and save some time: concept of prefix sums",
        markdown: <UnderConstruction />,
        problems: [],
      },
      "prefix_sum_apply" : {
        title : "Apply concept of prefix sums to save the day",
        markdown: <UnderConstruction />,
        problems: [],
      }
    }
  }, 
  "linked_lists" : {
    title : "Linked lists",
    pages : {
      "why" : {
        title : "Why do we even need linked lists?",
        markdown: <UnderConstruction />,
        problems: [],
      },
      "doubly_linked_list" : {
        title : "Doubly linked list vs Singly linked list",
        markdown: <UnderConstruction />,
        problems: [],
      },
      "reverse_linked_list" : {
        title : "Reverse linked list",
        markdown: <UnderConstruction />,
        problems: [],
      },
      "sum_two_numbers" : {
        title : "Sum of two numbers",
        markdown: <UnderConstruction />,
        problems: [],
      },
      "cycle" : {
        title : " Detection of a cycle",
        markdown: <UnderConstruction />,
        problems: [],
      }

    }
  }
};
