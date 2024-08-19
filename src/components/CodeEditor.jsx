import { useRef, useState } from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";
import '../App.css'; // Adjust the path as needed
import "/Users/arhaankeshwani/Downloads/codele/src/components/CodeEditor.css"
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import {useNavigate} from "react-router-dom";



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

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.error('Sign out error', error);
    });
  };
  const navigate = useNavigate()



  return (
  <div className="code-edi">  
    <Box >
      <div className="log-out">
        <Button colorScheme="red" bg="#FF1744" onClick={handleLogout}>Logout</Button>
      </div>
      <header className="logo-container">
      <a href="/"> 
      <img className="header-image" src="codele.png" alt="Logo" width={100} />
      </a>
    </header>
      <HStack spacing={3} bg={"#0f0a19"}>
        <Box w="50%" paddingLeft={3}>
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
      <a href="https://github.com/akeshwani2" target="_blank">
      <p className="names">Made by Arhaan Keshwani</p>
      </a>
      <Text className="copyright">© 2024 Codele. All rights reserved.</Text>
    </Box>
    </div>
  );
};

export default CodeEditor;