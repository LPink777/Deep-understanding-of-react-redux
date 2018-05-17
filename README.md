## 对react-redux进行更深入的理解

* ####connect()
connect是react-redux提供的方法，用于生成容器组件。

```javascript
    import { connect } from 'react-redux';
    const App = connect(mapStateToProps,mapDispatchToProps)(Component)
```
connect方法接受两个参数mapStateToProps，mapDispatchToProps分别将state和dispatch转换为props，返回值是一个函数，这个函数接受一个Componet为参数，props属性将添加到Component上，从而生成一个容器组件。