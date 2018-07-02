import React from 'react';

export default class Roster extends React.Component {

    render = () => {
        const images = this.props.images.map(i => (
            <div className="roster-image-container" key={i.id}>
                <img src={i.url} alt="roster" onClick={() => this.props.select(i.id)}/>
            </div>
        ));
        return (
            <section id="roster">
                {images}
            </section>
        );
    }
}