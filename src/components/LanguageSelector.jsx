import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
  } from "@chakra-ui/react";
  import { LANGUAGE_VERSIONS } from "../constants";



  const languages = Object.entries(LANGUAGE_VERSIONS);
  const ACTIVE_COLOR = "#7B68EE";
  
  const LanguageSelector = ({ language, onSelect }) => {
    return (
      <Box mb={4}>
        <Menu isLazy>
          <MenuButton as={Button}>{language}</MenuButton>
          <MenuList bg="#110c1b">
            {languages.map(([lang, version]) => (
              <MenuItem
                key={lang}
                color={lang === language ? ACTIVE_COLOR : ""}
                bg={lang === language ? "gray.900" : "transparent"}
                _hover={{
                  color: ACTIVE_COLOR,
                  bg: "gray.900",
                }}
                onClick={() => onSelect(lang)}
              >
                {lang}
                &nbsp;
                
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    );
  };
  export default LanguageSelector;