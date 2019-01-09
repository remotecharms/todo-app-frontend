import React from 'react';

class Header extends React.Component {
 render () {
     return (<h1 style= {styles.header}>Emma's Wish List</h1>); 
 }
}

const styles = {
    header : {
        color: "blue"
    }
};
export default Header; 