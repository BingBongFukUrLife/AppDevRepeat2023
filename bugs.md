- ### Unable to install any npm modules:

  npm ERR! code ERESOLVE
  npm ERR! ERESOLVE unable to resolve dependency tree
  npm ERR!
  npm ERR! While resolving: my-test-app@0.0.1
  npm ERR! Found: @capacitor/core@4.7.1
  npm ERR! node_modules/@capacitor/core
  npm ERR!   @capacitor/core@"4.7.1" from the root project
  npm ERR!
  npm ERR! Could not resolve dependency:
  npm ERR! peer @capacitor/core@"^5.0.0" from @capacitor/toast@5.0.6
  npm ERR! node_modules/@capacitor/toast
  npm ERR!   @capacitor/toast@"*" from the root project
  npm ERR!
  npm ERR! Fix the upstream dependency conflict, or retry
  npm ERR! this command with --force or --legacy-peer-deps
  npm ERR! to accept an incorrect (and potentially broken) dependency resolution.


- Encapsulation / Shadow DOM / Overlay issue:

  Scrolling does not function because the website gets encapsulated in a shadow DOM

  The styling for this is not accessible, and it overrides any other styling provided

  Things tried :

  - searching through the DOM & HTML on live app
  - deleting the element, modifying the shadow dom from within the browser (this works, but it's manual...)
  - attempting to use virtual scroll (both of the above commented out do not work)
  - adding styling to the regular DOM (does not work)
  - injecting styling into the shadow DOM (does not work)
  - changing routing to try to circumvent certain encapsulation (does not work)
  - attempting to update to newer angular (works, only to realize, it is required to clone the repository with the current version)
  - asking AI and forums (also does not work lol)
  - maybe this is why newer versions came out?

    -

    -

    -

    -

    -

    -

    -

    -

    You may notice because of this issue, on desktop displays it may show an additional scrollbar on this invisible layer.

    Everything else should function normally, if only there wasn't an invisible layer stopping user interaction.

    Please review the code to verify manually if needed.

    Intended functionality: you scroll down, it generates more recipes.

    You click a button, it does what it's supposed to.

    The only layer that isn't covered is the navbar.
