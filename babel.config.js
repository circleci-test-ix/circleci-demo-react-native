{
  "presets": [
    "babel-preset-react-native-stage-0/decorator-support"
  ],
  "plugins": [
    [
    "@babel/plugin-proposal-class-properties", { "loose": true }
    ]
  ],
  "env": {
    "development": {
      "plugins": [
        "transform-react-jsx-source"        
      ]
    }
  }
}