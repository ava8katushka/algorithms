import { Chapters } from "../interfaces/general";
import TimeAndSpace from "./time_and_space.mdx";
import CodeLimit from "./code_limit.mdx";
import Logarithm from "./logarithm.mdx";
import UnderConstruction from "./under_constuction.mdx";
import TimeComplexities from "./time_complexities.mdx";
import StaticArrays from "./static_arrays.mdx";
import DynamicArrays from "./dynamic_arrays.mdx"
import DesignThinking from "./design_thinking.mdx"

export const pagesConfig: Chapters = {
  time_and_space: {
    title: "Time and Space Complexity",
    pages: {
      about: {
        title: "What is Time and Space Complexity, exactly?",
        markdown: <TimeAndSpace />,
        problems: [],
      },
      code_limit: {
        title: "How to never have a code limit",
        markdown: <CodeLimit />,
        problems: [],
      },
      logarithm: {
        title: "What is a logarithm?",
        markdown: <Logarithm />,
        problems: [],
      },
      // o_n: {
      //   title:
      //     "How to make sense of O(1), O(n), O(n log n), O(a^n) and similar",
      //   markdown: <TimeComplexities />,
      //   problems: [],
      // },
      static_arrays: {
        title: "Computer memory and static arrays",
        markdown: <StaticArrays />,
        problems: [],
      },
      dynamic_arrays: {
        title: "Dynamic arrays and amortized constant",
        markdown: <DynamicArrays />,
        problems: [],
      },
      design_thinking: {
        title: "Design thinking: which algorithm is better",
        markdown: <DesignThinking />,
        problems: [],
      },
    },
  },
  arrays_and_strings: {
    title: "Arrays & Strings manipulation",
    pages: {
      move_zeros: {
        title: "Move the zeros: metaphor of memory management",
        markdown: <UnderConstruction />,
        problems: [],
      },
      string_n2: {
        title:
          "Don't do this to strings! Or how your O(n) algorithm is suddenly O(n^2)",
        markdown: <UnderConstruction />,
        problems: [],
      },
      prefix_sum: {
        title:
          "Let's add some space and save some time: concept of prefix sums",
        markdown: <UnderConstruction />,
        problems: [],
      },
      prefix_sum_apply: {
        title: "Apply concept of prefix sums to save the day",
        markdown: <UnderConstruction />,
        problems: [],
      },
    },
  },
  linked_lists: {
    title: "Linked lists",
    pages: {
      why: {
        title: "Why do we even need linked lists?",
        markdown: <UnderConstruction />,
        problems: [],
      },
      doubly_linked_list: {
        title: "Doubly linked list vs Singly linked list",
        markdown: <UnderConstruction />,
        problems: [],
      },
      reverse_linked_list: {
        title: "Reverse linked list",
        markdown: <UnderConstruction />,
        problems: [],
      },
      sum_two_numbers: {
        title: "Sum of two numbers",
        markdown: <UnderConstruction />,
        problems: [],
      },
      cycle: {
        title: " Detection of a cycle",
        markdown: <UnderConstruction />,
        problems: [],
      },
    },
  },
  binary_search: {
    title: "Binary search",
    pages: {
      //Why log(n) complexity is super freaking cool
      logn: {
        title: " Why log(n) complexity is super freaking cool",
        markdown: <UnderConstruction />,
        problems: [],
      },
      //Recursive algorithm vs iterative algorithm
      recursive_vs_iterative: {
        title: "Recursive algorithm vs iterative algorithm",
        markdown: <UnderConstruction />,
        problems: [],
      },
      //Simple algorithm but the devil in the details
      simple_but_devil_in_details: {
        title: "Simple algorithm but the devil in the details",
        markdown: <UnderConstruction />,
        problems: [],
      },
      //Binary search in a broken array
      broken_array: {
        title: "Binary search in a broken array",
        markdown: <UnderConstruction />,
        problems: [],
      },
    },
  },

  stack_queue_deque : {
    title: "Stacks, Queues and Dequeues",
    pages: {
      // What is a stack, exactly? And why should I care?
      what: {
        title: " What is a stack, exactly? And why should I care?",
        markdown: <UnderConstruction />,
        problems: [],
      },

      stack_implementation: {
        title: "How you can implement a stack: linked list vs dynamic array",
        markdown: <UnderConstruction />,
        problems: [],
      },

      valid_parenthesis: {
        title: "Classic stack: valid parenthesis",
        markdown: <UnderConstruction />,
        problems: [],
      },

      calculator: {
        title: "Classic stack: calculator",
        markdown: <UnderConstruction />,
        problems: [],
      },

      queue: {
        title: "Favorite past time: standing in the queue",
        markdown: <UnderConstruction />,
        problems: [],
      },

      queue_implementation: {
        title: "How an intelligent person could implement a queue",
        markdown: <UnderConstruction />,
        problems: [],
      },
      typewriter : {
        title : "Typewriter task",
        markdown: <UnderConstruction />,
        problems: [],
      },
      deque : {
        title : "Best of the both worlds: the dequeue",
        markdown: <UnderConstruction />,
        problems: [],
      },
      lru_cache : {
        title : "And now we are capable enough to the LRU: Least Recently Used cache!",
        markdown: <UnderConstruction />,
        problems: [],
      }
    }
  }
// Stacks, Queues and Dequeues

// What is a stack, exactly? And why should I care?

// How you can implement a stack: linked list vs dynamic array

// Classic stack: valid parenthesis

// Classic stack: calculator

// Favorite past time: standing in the queue

// How an intelligent person could implement a queue

// Typewriter task

// Best of the both worlds: the dequeue

// And now we are capable enough to the LRU: Least Recently Used cache!
};
