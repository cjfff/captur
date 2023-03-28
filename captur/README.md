# Capture

## start dev
the entry file is the dev/App.tsx

```shell
yarn

yarn dev
```

## usage


You should according to the unpkg form to access the cdn files

This is a example
```
<link  rel="stylesheet" href="https://unpkg.com/@chenxxx/captur@0.0.3-beta3/dist/style.css"></link>
<script src="https://unpkg.com/@chenxxx/captur@0.0.3-beta3/dist/Captur.js"></script>
```

run this function can render the feedback component in another project, and the config is the component's config, you should at least pass the appId onto it let it can work.

```js
window.capturRender(config)

and if you want to update config

widow.updateConfig(config)
```

note: how you test your cdn files, you can open the index2.html change the cdn link to updatest and then see what happens.
