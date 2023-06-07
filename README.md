# React Native Dialog
- - -
# Content
1. [Props](#props)
2. [Importing the component](#importing-the-component)
3. [Usage example](#usage-example)
- - -
# Props
The component has multiple props, which two on them are required
- `onClose` - A **void callback function** than executes when `dialog` will close.
- `open` - A **boolean** variable that indicates when the dialog is open.

An optional children, anything that will be inside your dialog component.
- `children` - An **any** type variable. This will be inside your dialog tag.

The rest of props are dialog tag attributes (`HTMLDialogAttributes`).
- - -
# Importing the component
```tsx
import Dialog from 'native-react-modal';
```
- - -
# Usage example
![dialog-example](https://github.com/Kykal/native-react-dialog/assets/54295964/1f2b027c-4226-4c25-b062-6dab81e57ef3)
```tsx

//React
import React from 'react';

//Components
import Dialog from 'native-react-modal';

//Your component
const SomeComponent = () => {

  //...

  //States
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  //Handlers
  conts closeDialogHandler = () => {
    setIsOpen(false);
  }
  
  conts openDialogHandler = () => {
    setIsOpen(true);
  }

  //...

  return (
    <>
      <button
        onClose={openDialogHandler}
      >
        Open dialog!
      </button>
      <Dialog
        onClose={closeDialogHandler}
        open={isOpen}
      >
        This is a dialog!
      </Dialog>
    </>
  );
}
```
