import React from 'react';
import '../styles.css';
import * as typeformEmbed from '@typeform/embed';

class TypeForm extends React.Component {
    constructor(props) {
        super(props);
        this.el = null;
    }

    componentDidMount() {
        if (this.el) {
            typeformEmbed.makeWidget(this.el, "https://hackharvard.typeform.com/to/z7ZJvM", {
                hideFooter: false,
                hideHeaders: false,
                opacity: 100
            });
        }

    }

    render() {
        return (
            <div id="tform" ref={(el) => this.el = el} />
        );
    }
}

export default TypeForm;
