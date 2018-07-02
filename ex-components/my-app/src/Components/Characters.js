import React from 'react';
import Roster from './Roster';
import Details from './Details';
import fetcher from '../fetcher';
const ROSTER_ENDPOINT = '/roster/';
const DETAILS_ENDPOINT = '/character/';
export default class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            details: {
                name: "Select a character for more info",
                id: null,
                url: "/favicon.ico",
                bio: null
            }
        }
    }

    componentDidMount = () => {
        this.fetchRoster()
    };
    mapImages = (data) => {
        return {
            images: data.map(i => {
                return {
                    id: i.id,
                    url: i.url
                }
            })
        }
    };
    fetchRoster = () => {
        fetcher.get(ROSTER_ENDPOINT, data => this.setState(
            this.mapImages(data)
        ));
    };
    selectCharacter =id =>
    {
        this.fetchDetails(id);
    };
        fetchDetails = (id) => {
            fetcher.get(DETAILS_ENDPOINT+id, data => this.setState(
                {details: data}
            ));
        };
        render = () => (
            <div>
                <Roster images={this.state.images} select = {this.selectCharacter}/>
                <Details {...this.state.details}/> {/*name = {this.state.details.name} image = {this.state.details.url} ....*/}

            </div>
        )
    }
