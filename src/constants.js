// Specific language versions that are compatible with editor, DO NOT CHANGE
export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  cpp: "10.2.0",
};

export const CODE_SNIPPETS = {
  // JAVASCRIPT
  javascript: `\nfunction greet(name) { \n\tconsole.log("Hello, " + name + "!");\n}\ngreet("Arhaan");`,

  // TYPESCRIPT
  typescript: `\ntype Params = { \n\tname: string;\n}\nfunction greet(data: Params) { \n\tconsole.log("Hello, " + data.name + "!");\n}\ngreet({ name: "Arhaan" });`,

  // PYTHON
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Arhaan")`,

  // JAVA
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}`,

  // C++
  cpp: `\n#include <iostream>\nusing namespace std; \n\nint main() {
        cout << "Hello, Arhaan!" << endl;
        return 0;
    }`,
};
