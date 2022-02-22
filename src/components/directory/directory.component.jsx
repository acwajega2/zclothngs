import React from 'react';

import data from '../../data/data';
import MenuItem from "../menu-item/menu-item.componet";
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {                    this.state.data.map(
                        ({ id,...otherSectionProps}) => (
                            <MenuItem key={id} {...otherSectionProps}/>
                        )
                    )
                }

            </div>
        );
    }
}


export default Directory;