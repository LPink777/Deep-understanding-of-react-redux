//把store里的状态对象映射属性
let mapStateToProps = (state) => {
    //你需要的返回的属性
    value: state.value
}

let mapDispatchToProps = (dispatch) => {
    //将dipatch方法映射成属性
    onClick: () => dispatch({type:Click}),
}

let connect  = (mapStateToProps,mapDispatchToProps) => (_Component) => {
    Class Proxy extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                ...mapStateToProps(store.getState()),
            }
        }
        render(){
            return <_Component {...this.state} {...mapDispatchToProps(store.dispatch)}/>
        }
    }
    return Proxy;
}

connect(mapStateToProps,mapDispatchToProps)(Component);