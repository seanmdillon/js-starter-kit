Choose an Editor
Editorconfig
. For the whole team to use a standard config for critical project level settings

Start by selecting a good editor
The larger an editor is, the slower it will be to add support for things
. like transpiler support for new languages, etc.
. does it autocomplete ES2015?
. does it parse ES6 imports
. Report unused imports?
. Automatically refactor?

Framework intelligence?
. built in node debugging?

Built-in terminal
. important!
. some editors, like Atom, let you add in a terminal if it doesnt exist

FOUR PRIMARY:
. Atom
. WebStorm
. Brackets
. VSCode

Not-exactly JavaScript Editors
. Visual Studio
. Eclipse
. Netbeans

These can handle JavaScript and are okay options, but aren't as focused on supporting latest features in JavaScript
. Don't feel obligated to use the same editor for ALL languages/dev
. If you're using front and back-end code, it's okay to use different editors for either

### Automated Consistency via Editorconfig
.editorconfig in the root of your project is a standard convention for maintaining consistent coding styles between different editors and IDEs.

For example
```
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

PS author typically uses:

```
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