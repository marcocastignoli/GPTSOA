# GPTSOA

A ChatGPT TypeScript Plugin Framework with automatic OpenAPI based on [lukeautry/tsoa](https://github.com/lukeautry/tsoa)

⭐ Please leave a star if you like it!

🐦 Follow me on twitter for more updates [castignolimarco](https://twitter.com/castignolimarco)

## Install

Just run

```bash
yarn install
```

## Configuration

You need to learn how ChatGPT plugins works in general by reading the ChatGPT plugin documentation [here](https://platform.openai.com/docs/plugins/introduction)

### Plugin files

**Do not edit**

- `public/ai-plugin.json`: The file is automatically generated, do not edit this file
- `public/openapi.yaml`: The file is automatically generated, do not edit this file

**Edit**

- `public/logo.png`: Just a simple logo for your plugin
- `./ai-plugin.json`: You can edit the information in this file but not the field `description_for_model`
- `./description_for_model.md`: You can use this md file to describe your plugin to ChatGPT, every functionality must be clear for ChatGPT

## Getting Started

Basically through the use of decorators and typescript analysis tsoa automatically generate an openAPI file for you. But you need to follow the tsoa's opinioned code structure.

Just read [lukeautry/tsoa](https://github.com/lukeautry/tsoa) documentation, there is a simple example in `src/controllers/ExampleTestController.ts`.

## Running

1. Simply run `yarn start`

## Installing the plugin on ChatGPT

1. Check your account settings in https://chat.openai.com/ there should be a `Beta Feature` tab, open it and activate `Plugins`.
2. Click on GPT-4, select plugins. In the plugin selector, select Plugin Store`
3. In the modal click on `Develop your own plugin` paste your host and port for example

```
localhost:3333
```

4. Follow the instructions

## Test it

Prompt:

```
Call the test plugin by passing my name: "Marco"
```

## Host problem (Only if you need a different port/host)

If you need to run the plugin on a different host you need to make a few manual fix.

0. Change the host in `src/server.ts`
1. Edit the `tsoa.json`: change the `"host": "localhost:3333",`
2. Edit `fixHost.yaml`, keep the `/` at the end, this file is used to exactly fix the trailing `/`.
3. Remember to update it also in `ai-plugin.json`
