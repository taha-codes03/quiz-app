export type Topic = 'OOP' | 'DSA' | 'Programming Fundamentals' | 'Information Security';

export interface Question {
  id: number;
  topic: Topic;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizState {
  questions: Question[];
  currentIndex: number;
  selectedAnswers: (number | null)[];
  timePerQuestion: number;
  score: number;
  isFinished: boolean;
  startTime: Date | null;
}

export interface QuizResult {
  score: number;
  total: number;
  timeTaken: number;
  breakdown: { topic: Topic; correct: number; total: number }[];
  answers: { question: Question; selected: number | null; correct: boolean }[];
}

export const ALL_QUESTIONS: Question[] = [
  // ─── OOP ───────────────────────────────────────────────────────────────────
  {
    id: 1, topic: 'OOP',
    question: 'Which OOP principle ensures that internal implementation details of a class are hidden from the outside world?',
    options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction'],
    correctIndex: 2,
    explanation: 'Encapsulation bundles data and methods together and restricts direct access to internal state using access modifiers.'
  },
  {
    id: 2, topic: 'OOP',
    question: 'In C++, what is the correct way to define a pure virtual function?',
    options: ['virtual void f() {}', 'virtual void f() = 0;', 'abstract void f();', 'void f() override = 0;'],
    correctIndex: 1,
    explanation: 'A pure virtual function is declared with "= 0" which makes the class abstract and forces derived classes to override it.'
  },
  {
    id: 3, topic: 'OOP',
    question: 'Which concept allows a subclass to provide a specific implementation of a method that is already defined in its superclass?',
    options: ['Overloading', 'Shadowing', 'Overriding', 'Delegation'],
    correctIndex: 2,
    explanation: 'Method overriding allows a derived class to replace a base class method with its own implementation.'
  },
  {
    id: 4, topic: 'OOP',
    question: 'What is the output of calling a virtual function through a base class pointer when the pointer points to a derived class object?',
    options: [
      'Calls the base class version always',
      'Calls the derived class version (runtime polymorphism)',
      'Throws a compile-time error',
      'Calls both versions sequentially'
    ],
    correctIndex: 1,
    explanation: 'Virtual functions enable runtime polymorphism — the vtable mechanism ensures the derived class version is called.'
  },
  {
    id: 5, topic: 'OOP',
    question: 'Which type of inheritance is NOT directly supported in Java to avoid the diamond problem?',
    options: ['Single inheritance', 'Multilevel inheritance', 'Multiple inheritance (via classes)', 'Hierarchical inheritance'],
    correctIndex: 2,
    explanation: 'Java does not support multiple inheritance through classes to prevent ambiguity. It uses interfaces instead.'
  },
  {
    id: 6, topic: 'OOP',
    question: 'What is the purpose of a copy constructor in C++?',
    options: [
      'To destroy the object after copying',
      'To initialize an object using another object of the same class',
      'To compare two objects',
      'To convert between data types'
    ],
    correctIndex: 1,
    explanation: 'A copy constructor creates a new object as a copy of an existing one, crucial for deep copying dynamically allocated resources.'
  },
  {
    id: 7, topic: 'OOP',
    question: 'In the SOLID principles, what does the "L" (Liskov Substitution Principle) state?',
    options: [
      'Classes should be open for extension but closed for modification',
      'Objects of a superclass should be replaceable with objects of a subclass without breaking the program',
      'A class should have only one reason to change',
      'Depend on abstractions, not concretions'
    ],
    correctIndex: 1,
    explanation: 'LSP states that derived classes must be substitutable for their base classes without altering the correctness of the program.'
  },
  {
    id: 8, topic: 'OOP',
    question: 'What is the key difference between an abstract class and an interface in Java?',
    options: [
      'Abstract classes support multiple inheritance; interfaces do not',
      'Interfaces can have constructors; abstract classes cannot',
      'Abstract classes can have instance variables and concrete methods; interfaces (pre-Java 8) cannot',
      'There is no difference between the two'
    ],
    correctIndex: 2,
    explanation: 'Abstract classes can have state (fields) and concrete method implementations, while interfaces define only contracts.'
  },
  {
    id: 9, topic: 'OOP',
    question: 'Which design pattern ensures that a class has only one instance and provides a global point of access to it?',
    options: ['Factory', 'Observer', 'Singleton', 'Decorator'],
    correctIndex: 2,
    explanation: 'The Singleton pattern restricts instantiation to a single object and provides a static access point.'
  },
  {
    id: 10, topic: 'OOP',
    question: 'What does "composition over inheritance" mean in OOP design?',
    options: [
      'Always prefer abstract classes over interfaces',
      'Favor building complex objects by combining simpler ones rather than inheriting from base classes',
      'Constructors should always call super()',
      'Use multiple inheritance whenever possible'
    ],
    correctIndex: 1,
    explanation: 'Composition produces more flexible designs by assembling behaviors from small, focused classes instead of rigid inheritance chains.'
  },

  // ─── DSA ───────────────────────────────────────────────────────────────────
  {
    id: 11, topic: 'DSA',
    question: 'What is the worst-case time complexity of QuickSort?',
    options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
    correctIndex: 1,
    explanation: 'QuickSort degrades to O(n²) when the pivot is always the smallest or largest element (e.g., sorted array with last-element pivot).'
  },
  {
    id: 12, topic: 'DSA',
    question: 'Which data structure follows the LIFO (Last In, First Out) principle?',
    options: ['Queue', 'Stack', 'Deque', 'Priority Queue'],
    correctIndex: 1,
    explanation: 'A Stack operates on LIFO — the last element pushed is the first to be popped.'
  },
  {
    id: 13, topic: 'DSA',
    question: 'In a Binary Search Tree (BST), what is the time complexity of search in the average case?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    correctIndex: 1,
    explanation: 'In a balanced BST, each comparison halves the search space, giving O(log n) average case search time.'
  },
  {
    id: 14, topic: 'DSA',
    question: 'Which algorithm is used to find the shortest path in a weighted graph with no negative edges?',
    options: ["Bellman-Ford", "Dijkstra's Algorithm", 'Floyd-Warshall', 'Prim\'s Algorithm'],
    correctIndex: 1,
    explanation: "Dijkstra's algorithm uses a greedy approach with a priority queue to find shortest paths from a source in graphs with non-negative weights."
  },
  {
    id: 15, topic: 'DSA',
    question: 'What is the space complexity of Merge Sort?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctIndex: 2,
    explanation: 'Merge Sort requires O(n) auxiliary space to hold the temporary subarrays during the merge step.'
  },
  {
    id: 16, topic: 'DSA',
    question: 'A complete binary tree with n nodes has height:',
    options: ['O(n)', 'O(log n)', 'O(√n)', 'O(n log n)'],
    correctIndex: 1,
    explanation: 'A complete binary tree is as balanced as possible, so its height is ⌊log₂(n)⌋ = O(log n).'
  },
  {
    id: 17, topic: 'DSA',
    question: 'Which of the following is TRUE about a Hash Table with chaining for collision resolution?',
    options: [
      'Worst-case search is always O(1)',
      'Average-case search is O(1) assuming a good hash function',
      'It cannot handle more elements than its initial capacity',
      'Chaining wastes more memory than open addressing in all cases'
    ],
    correctIndex: 1,
    explanation: 'With a uniform hash function and low load factor, chaining gives expected O(1) search, insert, and delete.'
  },
  {
    id: 18, topic: 'DSA',
    question: 'In dynamic programming, what condition must a problem satisfy to apply the technique?',
    options: [
      'The problem must be solvable in polynomial time',
      'The problem must have overlapping subproblems and optimal substructure',
      'The problem must be NP-complete',
      'The problem must involve sorting'
    ],
    correctIndex: 1,
    explanation: 'DP applies when a problem has overlapping subproblems (same sub-instances reused) and optimal substructure (optimal solution contains optimal sub-solutions).'
  },
  {
    id: 19, topic: 'DSA',
    question: 'What is the output order of a post-order traversal on a Binary Tree?',
    options: ['Root → Left → Right', 'Left → Root → Right', 'Left → Right → Root', 'Right → Root → Left'],
    correctIndex: 2,
    explanation: 'Post-order traversal visits Left subtree, then Right subtree, then the Root node.'
  },
  {
    id: 20, topic: 'DSA',
    question: 'Which sorting algorithm is stable AND has O(n log n) worst-case time complexity?',
    options: ['QuickSort', 'HeapSort', 'MergeSort', 'Shell Sort'],
    correctIndex: 2,
    explanation: 'MergeSort is stable (preserves relative order of equal elements) and guarantees O(n log n) in all cases.'
  },

  // ─── Programming Fundamentals ──────────────────────────────────────────────
  {
    id: 21, topic: 'Programming Fundamentals',
    question: 'What is the difference between "pass by value" and "pass by reference"?',
    options: [
      'Pass by value sends the original variable; pass by reference sends a copy',
      'Pass by value sends a copy of the value; pass by reference sends the memory address',
      'They are identical in behavior',
      'Pass by reference only applies to arrays'
    ],
    correctIndex: 1,
    explanation: 'Pass by value copies the data — changes inside the function do not affect the original. Pass by reference allows the function to modify the original variable.'
  },
  {
    id: 22, topic: 'Programming Fundamentals',
    question: 'What is a dangling pointer?',
    options: [
      'A pointer that points to NULL',
      'A pointer that has never been initialized',
      'A pointer that references memory that has already been freed',
      'A pointer to a constant value'
    ],
    correctIndex: 2,
    explanation: 'A dangling pointer still holds the address of memory that was freed/deallocated, leading to undefined behavior if dereferenced.'
  },
  {
    id: 23, topic: 'Programming Fundamentals',
    question: 'In C, what is the size of an int on a 64-bit system (with most compilers)?',
    options: ['2 bytes', '4 bytes', '8 bytes', 'Platform-independent 8 bytes always'],
    correctIndex: 1,
    explanation: 'On most 64-bit systems and compilers (LP64 model), int remains 4 bytes (32 bits) for backward compatibility.'
  },
  {
    id: 24, topic: 'Programming Fundamentals',
    question: 'What does the "static" keyword mean when applied to a local variable inside a function?',
    options: [
      'The variable is stored on the heap',
      'The variable retains its value between function calls',
      'The variable cannot be modified',
      'The variable is visible to all functions'
    ],
    correctIndex: 1,
    explanation: 'A static local variable is initialized once and persists across function calls, stored in the data segment rather than the stack.'
  },
  {
    id: 25, topic: 'Programming Fundamentals',
    question: 'What is tail recursion and why is it significant?',
    options: [
      'Recursion where the base case is at the end; no performance benefit',
      'Recursion where the recursive call is the last operation; can be optimized to a loop by the compiler',
      'Recursion that only works with strings',
      'Recursion with multiple recursive calls in the same function'
    ],
    correctIndex: 1,
    explanation: 'Tail recursion places the recursive call as the final action; compilers can apply tail-call optimization (TCO) to reuse the stack frame, preventing stack overflow.'
  },
  {
    id: 26, topic: 'Programming Fundamentals',
    question: 'What is the output of: printf("%d", 5 > 3 > 1); in C?',
    options: ['1', '0', '2', 'Undefined behavior'],
    correctIndex: 1,
    explanation: '"5 > 3" evaluates to 1 (true), then "1 > 1" evaluates to 0 (false). Left-to-right associativity applies.'
  },
  {
    id: 27, topic: 'Programming Fundamentals',
    question: 'Which of the following correctly describes a memory leak?',
    options: [
      'Accessing memory out of bounds',
      'Dynamically allocated memory that is never freed, causing heap exhaustion over time',
      'A pointer pointing to a freed block',
      'Writing to read-only memory'
    ],
    correctIndex: 1,
    explanation: 'A memory leak occurs when heap-allocated memory is no longer referenced but never released, gradually consuming available RAM.'
  },
  {
    id: 28, topic: 'Programming Fundamentals',
    question: 'What is the difference between a process and a thread?',
    options: [
      'Threads have separate memory spaces; processes share memory',
      'A process is a running instance of a program with its own memory space; threads share the memory space of their parent process',
      'Processes are faster than threads',
      'There is no meaningful difference in modern operating systems'
    ],
    correctIndex: 1,
    explanation: 'Processes are isolated with separate address spaces; threads within the same process share memory, making them lighter but requiring synchronization.'
  },
  {
    id: 29, topic: 'Programming Fundamentals',
    question: 'What does "undefined behavior" (UB) mean in C/C++?',
    options: [
      'The program always crashes with a segfault',
      'The compiler guarantees an error message',
      'The program\'s behavior is unpredictable — the compiler makes no guarantees',
      'The program returns 0 by convention'
    ],
    correctIndex: 2,
    explanation: 'UB means the C/C++ standard imposes no requirements — the compiler may crash, produce wrong results, "work," or do anything else.'
  },
  {
    id: 30, topic: 'Programming Fundamentals',
    question: 'In Python, what is the difference between "==" and "is"?',
    options: [
      'They are identical',
      '"==" checks value equality; "is" checks identity (same object in memory)',
      '"is" checks value; "==" checks type',
      '"is" is only for integers'
    ],
    correctIndex: 1,
    explanation: '"==" compares values; "is" compares object identity (same memory address). Two equal objects may not be identical.'
  },

  // ─── Information Security ──────────────────────────────────────────────────
  {
    id: 31, topic: 'Information Security',
    question: 'What is the difference between symmetric and asymmetric encryption?',
    options: [
      'Symmetric uses two keys; asymmetric uses one key',
      'Symmetric uses one shared secret key for both encryption and decryption; asymmetric uses a public/private key pair',
      'Asymmetric is always faster than symmetric',
      'Symmetric encryption cannot be cracked'
    ],
    correctIndex: 1,
    explanation: 'Symmetric (e.g., AES) uses the same key for both operations — fast but requires secure key exchange. Asymmetric (e.g., RSA) uses a key pair — solves key distribution.'
  },
  {
    id: 32, topic: 'Information Security',
    question: 'What does a SQL Injection attack exploit?',
    options: [
      'Weak passwords in the database',
      'Unsanitized user input that is concatenated directly into SQL queries',
      'Network packet sniffing',
      'Cross-site scripting vulnerabilities'
    ],
    correctIndex: 1,
    explanation: 'SQL injection inserts malicious SQL through unsanitized input fields, allowing attackers to manipulate or dump the database.'
  },
  {
    id: 33, topic: 'Information Security',
    question: 'What is the CIA Triad in information security?',
    options: [
      'Cryptography, Integrity, Authentication',
      'Confidentiality, Integrity, Availability',
      'Compliance, Isolation, Authorization',
      'Control, Inspection, Audit'
    ],
    correctIndex: 1,
    explanation: 'The CIA Triad is the foundational model: Confidentiality (data accessible only to authorized users), Integrity (data accuracy), Availability (systems accessible when needed).'
  },
  {
    id: 34, topic: 'Information Security',
    question: 'Which attack involves an adversary secretly relaying and possibly altering communication between two parties who believe they are communicating directly?',
    options: ['Phishing', 'Man-in-the-Middle (MitM)', 'Replay attack', 'Brute-force attack'],
    correctIndex: 1,
    explanation: 'A MitM attack positions the attacker between two communicating parties, intercepting and potentially modifying traffic without detection.'
  },
  {
    id: 35, topic: 'Information Security',
    question: 'What is the purpose of a cryptographic hash function in security?',
    options: [
      'To encrypt data so it can be decrypted later',
      'To produce a fixed-size digest that uniquely represents input data — any change in input produces a different hash',
      'To generate symmetric keys',
      'To compress data for storage'
    ],
    correctIndex: 1,
    explanation: 'Hash functions (SHA-256, etc.) are one-way — they produce a digest for integrity verification. The same input always yields the same hash; even a one-bit change produces a completely different output.'
  },
  {
    id: 36, topic: 'Information Security',
    question: 'What is a buffer overflow vulnerability?',
    options: [
      'Writing more data into a buffer than it can hold, potentially overwriting adjacent memory',
      'Sending too many network packets',
      'Overloading the CPU with calculations',
      'Accessing a database with too many connections'
    ],
    correctIndex: 0,
    explanation: 'Buffer overflow writes beyond a buffer\'s allocated memory boundary, allowing attackers to overwrite return addresses and execute arbitrary code.'
  },
  {
    id: 37, topic: 'Information Security',
    question: 'What distinguishes a worm from a virus in malware classification?',
    options: [
      'Worms require user interaction to spread; viruses do not',
      'Viruses self-replicate across networks independently; worms need a host file',
      'Worms spread independently across networks without needing a host file; viruses attach to existing files',
      'There is no functional difference'
    ],
    correctIndex: 2,
    explanation: 'A worm is self-contained and propagates autonomously over networks. A virus requires a host file and typically needs user action to spread.'
  },
  {
    id: 38, topic: 'Information Security',
    question: 'What is the role of a digital certificate in PKI (Public Key Infrastructure)?',
    options: [
      'To store encrypted passwords',
      'To bind a public key to an identity, verified by a trusted Certificate Authority (CA)',
      'To replace passwords entirely',
      'To encrypt network traffic directly'
    ],
    correctIndex: 1,
    explanation: 'A digital certificate (X.509) is a CA-signed document that certifies a public key belongs to a specific entity, enabling trust in TLS/SSL and other systems.'
  },
  {
    id: 39, topic: 'Information Security',
    question: 'What does "defense in depth" mean as a security strategy?',
    options: [
      'Using the strongest possible single firewall',
      'Encrypting all data at rest',
      'Implementing multiple overlapping layers of security controls so that if one fails, others remain',
      'Focusing all security efforts on the network perimeter'
    ],
    correctIndex: 2,
    explanation: 'Defense in depth layers security controls (firewalls, IDS, encryption, access controls, monitoring) so no single point of failure compromises the entire system.'
  },
  {
    id: 40, topic: 'Information Security',
    question: 'What is Cross-Site Scripting (XSS) and how does it differ from CSRF?',
    options: [
      'XSS and CSRF are the same attack with different names',
      'XSS injects malicious scripts into web pages viewed by other users; CSRF tricks users into making unintended requests using their authenticated session',
      'CSRF injects scripts; XSS forges requests',
      'Both only affect the server, not the client'
    ],
    correctIndex: 1,
    explanation: 'XSS exploits trust a user has in a website (injects scripts). CSRF exploits trust a website has in a user\'s browser (submits requests using stored credentials).'
  }
];
