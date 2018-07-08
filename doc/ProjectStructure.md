# Project Structure

## Your Starter Kit Needs a Demo App

### Why Include a Demo App

1. Examples of
- Directory structure and file naming
- Framework usage
- Testing
- Mock API
- Automated deployment
1. Codifies decisions
1. Interactive example of working with starter

## Project Structure Tips

## 1. Put JS in a .js file

"I'll just slap this JS in a script tag." - BAD NEWS

```html
<html>
  <body>
  <script>
  // slap code here...
  </script>
</html>
```

1. How do I
- Test this?
- Lint this?
- Reuse this?
- Transpile this?
- Import explicit dependencies

YOU CAN'T

```Java
protected void Page_Load(object sender, System.EventArgs e)
{
  string csName = "PopupScript";
  Type csType = this.GetType();
  ClientScriptManager csm = Page.ClientScript;

  if (!csm.IsStartupScriptRegistered(csType, csName)) {
    StringBuilder sb = new StringBuilder();
    sb.Append("<script>");
    sb.Append("function alertbox() {");
    sb.Append("if (confirm('Are you sure?') == true) ");
    sb.Append("{");
      sb.Append("document.getElementById('" + hdnYesNo.ClientID + "').value = 'YES';");
    sb.Append("}");
    sb.Append("else");
    sb.Append("{");
      sb.Append("document.getElementById('" + hdnYesNo.ClientID + "').value = 'NO';");
    sb.Append("}");
    sb.Append("</script>");

    csm.RegisterStartupScript(csType, csName, sb.ToString());
  }
}
```

1. No coloring
1. No autocompletion
1. Runtime failures
1. No testing
1. No bundling
1. No minification

We see this pattern a lot with server side developers need to do things based on data in the database, etc. It's a bad idea overall. You can always insert json into your code from the server.

## SECOND TIP: Consider organizing by feature instead of by filetype

```bash
/component
/data
/models
/views

/authors
/courses
```

## THIRD TIP: Extract as much logic as possible into plain old javascript (POJOs)

This is JavaScript that has no framework or external dependencies/concerns. For example, if you're building in REACT much of your logic should live outside of REACT code.

```coryhouse/reach-slingshot on github.```

Look at the folder called /utils. Lots of functions w/ no react code at all.

## IN SUMMARY

1. Include an example app
1. Project structure tips
- Put JS in a .js file
- Consider organizing by feature
- Extract logic into "POJOs"