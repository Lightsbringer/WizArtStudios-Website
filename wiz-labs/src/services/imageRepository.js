import React from 'react';
import axios from 'axios';

class ImageRepository extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }




    componentDidMount() {
        //create image repository
        this.createImageRepository()
            .then((response) => {
                this.cacheImages(response);
            })
            .then(() => {
                // setLoading(true);
            })
            .catch((error) => {

            });
    }

    componentWillUnmount() {
        //destroy image repository
        this.setState({ images: [] });
    }


}


