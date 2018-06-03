# EditorConfig.md

## Choose an Editor

## Editorconfig

1. For the whole team to use a standard config for critical project level settings

## Start by selecting a good editor

The larger an editor is, the slower it will be to add support for things

1. like transpiler support for new languages, etc.
1. does it autocomplete ES2015?
1. does it parse ES6 imports
1. Report unused imports?
1. Automatically refactor?

## Framework intelligence

1. built in node debugging?

## Built-in terminal

1. important!
1. some editors, like Atom, let you add in a terminal if it doesnt exist

## FOUR PRIMARY

1. Atom
1. WebStorm
1. Brackets
1. VSCode

## Not-exactly JavaScript Editors

1. Visual Studio
1. Eclipse
1. Netbeans

## These can handle JavaScript and are okay options, but aren't as focused on supporting latest features in JavaScript

1. Don't feel obligated to use the same editor for ALL languages/dev
1. If you're using front and back-end code, it's okay to use different editors for either

## Automated Consistency via Editorconfig

1.editorconfig in the root of your project is a standard convention for maintaining consistent coding styles between different editors and IDEs.

## For example

```config
# Editorconfig is awesome:
http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newlie ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,py}]
charset = utf-8

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[Makefile]
indent_style = tab

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```

## PS author typically uses

```config
# editorconfig.org

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitepsace = true
insert_final_newlije = true

[*.md]
trim_trailing_whitespace = false
```

VSCode has a plugin for editorconfig. If the IDE doesn't have one built in, check editorconfig.com, they have them there.