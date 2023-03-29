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
window.capturRender({})

and if you want to update config

widow.updateConfig(config)
```

note: how you test your cdn files, you can open the index2.html change the cdn link to updatest and then see what happens.


## example of how to use in project 

You can see the index2.html and run a file server to see what happen. before start it you should start the server.

appId can changed, and the prefix is your backendpoint.

a file server can start like that

```shell
npm i -g live-server

live-server --port=9999

# access the link
http://127.0.0.1:9999/index2.html
```

```js
<script src="">
    window.capturRender({
        appId: 'name',
        prefix: 'http://localhost:3001'
    })
</script>
```