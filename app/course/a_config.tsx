import { Chapters } from "../interfaces/general";
import TimeAndSpace from "./time_and_space.mdx";
import CodeLimit from "./code_limit.mdx";
import Logarithm from "./logarithm.mdx";
import Introduction from "./introduction.mdx";

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
        markdown: <TimeAndSpace />,
        problems: [],
      },
      "static_arrays" : {
        title: "Computer memory and static arrays",
        markdown: <TimeAndSpace />,
        problems: [],
      },
      "dynamic_arrays" : {
        title: "Dynamic arrays and amortized constant",
        markdown: <TimeAndSpace />,
        problems: [],
      },
      "design_thinking" : {
        title: "Design thinking: which algorithm is better",
        markdown: <TimeAndSpace />,
        problems: [],
      },
    },
  },
  "arrays_and_strings" : {
    title : "Arrays & Strings manipulation",
    pages : {
      "move_zeros" : {
        title: "Move the zeros: metaphor of memory management",
        markdown: <TimeAndSpace />,
        problems: [],
      },
      "string_n2" : {
        title: "Don't do this to strings! Or how your O(n) algorithm is suddenly O(n^2)",
        markdown: <TimeAndSpace />,
        problems: [],
      },
      "prefix_sum" : {
        title: "Let's add some space and save some time: concept of prefix sums",
        markdown: <TimeAndSpace />,
        problems: [],
      },
      "prefix_sum_apply" : {
        title : "Apply concept of prefix sums to save the day",
        markdown: <TimeAndSpace />,
        problems: [],
      }
    }
  }, 
  "linked_lists" : {
    title : "Linked lists",
    pages : {
      "why" : {
        title : "Why do we even need linked lists?",
        markdown: <TimeAndSpace />,
        problems: [],
      },
      "doubly_linked_list" : {
        title : "Doubly linked list vs Singly linked list",
        markdown: <TimeAndSpace />,
        problems: [],
      },
      "reverse_linked_list" : {
        title : "Reverse linked list",
        markdown: <TimeAndSpace />,
        problems: [],
      },
      "sum_two_numbers" : {
        title : "Sum of two numbers",
        markdown: <TimeAndSpace />,
        problems: [],
      },
      "cycle" : {
        title : " Detection of a cycle",
        markdown: <TimeAndSpace />,
        problems: [],
      }

    }
  }
};
