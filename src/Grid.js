import React from 'react';
import Image from 'react-bootstrap/Image';

class Grid extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            images: [
                {name:'Image 1',src:'https://i.pinimg.com/originals/e0/08/aa/e008aa179049ed1a8168436bbd2ab471.png',desc:'This describes this image..'},
                {name:'Image 3',src:'https://i.pinimg.com/originals/e0/c6/3b/e0c63b8c1f9888b6f8785ecfac09ba45.png',desc:'This describes this image 3 ..'},
                {name:'Image 3',src:'https://i.pinimg.com/originals/b9/3d/53/b93d532f3bf2c55aa46c22604ab41e47.png',desc:'This describes this image 3 ..'},
                {name:'Image 3',src:'https://i.pinimg.com/originals/df/d6/0e/dfd60e5e409484e6ba39d8b2010feb26.png',desc:'This describes this image 3 ..'},
                {name:'Image 2',src:'https://i.pinimg.com/originals/6b/29/c2/6b29c2d84e5de08648f23a046dcf962b.png',desc:'This describes this image 2..'},
            ],
            currentSelection: {},
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        // set first image selected
        this.setState({ currentSelection: this.state.images[0] });
    }
    
    handleClick(val) {
        //console.log(val)
        this.setState({ currentSelection: val });
    }
    
    render(){
        var { images, currentSelection } = this.state;
        return(
        <div>
            <div className="row">
                <div className="col-xxl">
                    <div className="row no-gutters">
                    {images.map((val, k) => {
                        return (
                        <div className="img-fluid rounded mx-auto d-block shadow-lg mb-5" key={k}>
                            <img src={val.src} 
                            className={'img-fluid rounded mx-auto d-block shadow-lg mb-5 '} />
                        </div>)
                        })
                    }
                     </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Grid;