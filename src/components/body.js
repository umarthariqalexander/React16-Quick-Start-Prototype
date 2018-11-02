import React from 'react';


class Body extends React.Component{
    constructor(props){
        super(props);
        this.state = {orderList: []};
    }
    static getDerivedStateFromProps(nextProps, prevState){
        return{
            orderList: nextProps.orderList
        }
    }
    getOrderList(){
        return this.state.orderList.map((item, index)=>{
           return <li key={index}>{item.name} - {item.price}</li>
        })
    }
    render(){
        return(
            <>
                <h3>Order List</h3>
                <ol>
                    {this.getOrderList()}
                </ol>
            </>
        );
    }
}

export default Body;