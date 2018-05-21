## 理解react-redux中的connect, provider

### connect()方法:

[connect](https://github.com/LPink777/Deep-understanding-of-react-redux/blob/master/connect.js?1526569104077)是react-redux提供的方法，用于生成容器组件。

```javascript
    import { connect } from 'react-redux';
    const App = connect(mapStateToProps,mapDispatchToProps)(Component)
```
connect方法接受两个参数 mapStateToProps和mapDispatchToProps，分别将state和dispatch转换为props，返回值是一个函数，这个函数接受一个Componet为参数，props属性将添加到Component上，从而生成一个容器组件。

### provider

provider主要功能是接受redux的store作为props，通过context对象传递给子孙组件上的connect

```javascript
    ReactDom.render(
        <Provider store={store}>
            <APP/>
        </Provider>,
        document.getElementById('root')
    );
```
Provider初始化时，获取到props中的store对象，然后利用getChildContext方法，将外部的store对象放入context对象中，使它的children可以直接访问到context对象中的store。