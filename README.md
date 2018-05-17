## 理解react-redux中的connect, provider

### connect()方法:

[connect](https://github.com/LPink777/Deep-understanding-of-react-redux/blob/master/connect.js?1526569104077)是react-redux提供的方法，用于生成容器组件。

```javascript
    import { connect } from 'react-redux';
    const App = connect(mapStateToProps,mapDispatchToProps)(Component)
```
connect方法接受两个参数 mapStateToProps和mapDispatchToProps，分别将state和dispatch转换为props，返回值是一个函数，这个函数接受一个Componet为参数，props属性将添加到Component上，从而生成一个容器组件。