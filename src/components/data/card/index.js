import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Index = () => {
    const dispatch = useDispatch();
    const { strings } = useSelector(state => state);
    const removeComment = useCallback(values => dispatch({ type: 'REMOVE_COMMENT', values }), [dispatch])

    console.log(strings)
    let cards
    if (strings.length > 0 && strings !== undefined) {
        cards = strings.map((res, key) => {
            return (
                <div key={key}>
                    {res.data}
                    <span style={{ width: '30px', height: '30px', borderRadius: '50%', color: 'white', backgroundColor: 'black', cursor: 'pointer' }} onClick={() => removeComment(key)}>x</span>
                </div>
            )
        })
    }
    return (
        <div>
            {cards}
        </div>
    );
};

export default Index;