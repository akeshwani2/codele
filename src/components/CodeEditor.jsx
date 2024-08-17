import { useRef, useState } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import '../App.css'; // Adjust the path as needed
import "/Users/arhaankeshwani/Downloads/codele/src/components/CodeEditor.css"




const CodeEditor = ({className}) => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
  <div className="code-edi">  
    <Box >
      <header className="logo-container">
      <img className="header-image" src="codele.png" alt="Logo" width={100} />
    </header>
      <HStack spacing={2} bg={"#0f0a19"}>
        <Box w="50%">
          <LanguageSelector language={language} onSelect={onSelect} />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="70vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
      <Text className="names">Made by Arhaan Keshwani, Andi</Text>
      <Text className="copyright">© 2024 Codele. All rights reserved.</Text>
    </Box>
    </div>
  );
};

export default CodeEditor;