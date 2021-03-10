import {Table} from 'antd';
import {connect} from 'dva';
import React from 'react';

function mapStateToProps(state){
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList'],
    };
}

class List extends React.Component{

    columns = [
        {
            title: '名称',
            dataIndex: 'name',
        },
        {
            title: '描述',
            dataIndex: 'desc',
        },
        {
            title: '连接',
            dataIndex: 'url',
        }
    ];

    componentDidMount(){
        this.props.dispatch({
            type: 'cards/queryList'
        });
    };

    render(){
        const{ cardsList, cardsLoading } = this.props;
        
        return (
            <div>
                <Table columns={this.columns} dataSource={cardsList} loading={cardsLoading} rowKey="id"></Table>
            </div>
        )
    }


}


export default connect(mapStateToProps)(List);
