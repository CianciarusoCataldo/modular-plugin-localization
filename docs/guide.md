# modular-plugin-modal

![NPM](https://img.shields.io/npm/l/modular-plugin-modal?label=License&style=for-the-badge)
![npm](https://img.shields.io/npm/v/modular-plugin-modal?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![npm bundle size](https://img.shields.io/bundlephobia/min/modular-plugin-modal?label=Package%20size&style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)

---

<br>

Manage your web app modal with [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) system

<br>



---

## Getting started

<br>

### Installation

If you want to use this plugin with [modular-engine](https://github.com/CianciarusoCataldo/modular-engine), install it:

```sh
npm i modular-plugin-modal
```

<br>

### Usage

Check [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) guide to init the system

Include this plugin inside your modular-engine config file, optionally with `modal` field set, to customize onModalOpen and onModalClose callbacks:

```tsx
const { modalPlugin } = require("modular-plugin-modal");

const config = {
  appName: "custom-app",
  plugins: [modalPlugin],
  modal: {
    onModalClose: [() => alert("modal closed")],
    onModalOpen: [() => alert("modal opened")],
  },
};

module.exports = { config };
```

<br>

Then you can drive your modal component (in this example it is used [Modular-ui-components](https://github.com/CianciarusoCataldo/modular-ui-components) modal), with selectors:

```tsx
import { isModalVisible, getModalType } from "modular-plugin-modal";
import { Modal } from "modular-ui-components";

const forms = {
  formOne: () => <div>Form one</div>,
  formTwo: () => <div>Form two</div>,
};

export const CustomComponent = () => {
  const isVisible = useSelectors(isModalVisible);
  const type = useSelectors(getModalType);
  const Content = forms[type] || () => <div/>;

  return (
    <Modal hide={!isVisible}>
      <Content />
    </Modal>
  );
};
```

<br>

---

## API

With the plugin itself, some other useful selectors and actions are exported by this lib, to easily work with any component

### Actions

| Action creator    | Arguments                                                                                                       | Effect                                                                                                     |
| ----------------- | --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `openModal`       | - `type`: modal form type to open <br>- `context` : (optional) custom data associated with the given modal form | Open the modal, and optionally set the actual context                                                      |
| `closeModal`      | /                                                                                                               | Close the modal, and reset the context                                                                     |
| setModalContext   | - `context` : custom modal context to set                                                                       | (similar to openModa and closeModal, but doesn't affect the visibility or the form type)                   |
| setModalForm      | - `type` : modal form type to set                                                                               | Set modal form type (similar to openModa and closeModal, but doesn't affect the context or the visibiity)  |
| setModalVisiblity | - `visibility` : modal visibility to set                                                                        | Set modal visibility (similar to openModa and closeModal, but doesn't affect the context or the form type) |

<br>

Import them from this lib:

```tsx
import {
  closeModal,
  openModal,
  setModalContext,
  setModalForm,
  setModalVisiblity,
} from "modular-plugin-modal";
```

Then dispatch them from any part of your app:

```tsx
import { isModalVisible, getModalType } from "modular-plugin-modal";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "modular-ui-components";

export const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={() => {
        dispatch(openModal("formOne"));
      }}
    >
      Open form one
    </Button>
  );
};
```

<br>

### Selectors

| Selectors         | Returns                                                                          |
| ----------------- | -------------------------------------------------------------------------------- |
| `getModalView`    | Modal state, or default state if not enabled                                     |
| `getModalType`    | Modal type, that can be used as a key to find the right component to show        |
| `getModalContext` | Modal context, a custom object associated to the actual modal type (can be null) |
| `isModalVisible`  | Modal visibility, to determine when show or hide the Modal component             |

<br>

Import them from this lib:

```tsx
import {
  getModalContext,
  getModalType,
  getModalView,
  isModalVisible,
} from "modular-plugin-modal";
```

Then use them from any part of your app:

```tsx
import { isModalVisible, getModalType } from "modular-plugin-modal";
import { useSelector } from "react-redux";

import { Button } from "modular-ui-components";

export const ModalDebugComponent = () => {
  const type = useSelector(getModalType);
  const isVisible = useSelector(isModalVisible);

  return (
    <div>
      <p>{`Actual form type is set to ${type}`}</p>
      <p>{{`Modal is ${isVisible?"opened":"closed"}`}}</p>
  </div>
  );
};
```

| Selectors       | Returns                                                                          |
| --------------- | -------------------------------------------------------------------------------- |
| getModalView    | Modal state, or default state if not enabled                                     |
| getModalType    | Modal type, that can be used as a key to find the right component to show        |
| getModalContext | Modal context, a custom object associated to the actual modal type (can be null) |
| isModalVisible  | Modal visibility, to determine when show or hide the Modal component             |

<br>

---

## Integration with other plugins

- This plugin expose some fields to work with any other plugin. If you want to interact with it, using your custom plugin, just check the `enabledPlugins` parameter inside your `format` function for `modal`. If true, you can add your callbacks to `modal` field, that contains 2 fields:

  - onModallClose : callbacks called everytime the modal is closed
  - onModalOpen : callbacks called everytime the modal is opened

  <br>

- Additionally, if you use [modular-plugin-url-checker](https://github.com/CianciarusoCataldo/modular-pluginurl-checker) too, you can open the modal directly from URL, with query parameters, by passing the `modal` parameter with the form type you want to open. Try it with [modular-engine]() playground - https://cianciarusocataldo.github.io/modular-engine?modal=TestModal
  <br>

---

## Included libraries

- [Modular-engine-types](https://github.com/CianciarusoCataldo/modular-engine-types) - to use modular-engine type definitions inside the plugin
- [Modular-engine-tools](https://github.com/CianciarusoCataldo/modular-engine-tools) - to use modular-engine utils functions, to easily work with it
- Modular-plugin-modal is written entirely with [Typescript](https://www.typescriptlang.org/)

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
