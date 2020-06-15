import React from 'react';
import '../css/basic-footer.css';
import {
    NotDealWithBtn,
    ToPayFor,
} from '../components/footerBtn/footerBtn';

export class BasicFooter extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <footer className='basic-footer'>
                <NotDealWithBtn/>
                <ToPayFor/>
            </footer>
        );
    }

}