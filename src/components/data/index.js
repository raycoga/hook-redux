import React, { Fragment } from 'react';
import Form from './form'
import Card from './card'
const Index = () => {
    return (
        <Fragment>
            <div className="App" style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>

                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', textAlign: 'center' }}>
                    <Form />
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', width: '50%', textAlign: 'center' }}>
                    <h1>This is what you post</h1>
                    <Card />
                </div>


            </div>

        </Fragment>

    );
};

export default Index;