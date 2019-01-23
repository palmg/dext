import React from "react";

class Loading extends React.Component {
    state = {dots: 0};

    setDots = () => {
        const {dots} = this.state;
        this.setState({dots: (dots + 1) % 12})
    };

    componentDidMount() {
        this.timer = setInterval(this.setDots, 260);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const {dots} = this.state;
        let dotStr = '', count = 0;
        while (count++ < dots) {
            dotStr += '.'
        }
        return (<div>
            <div/>
            <div>
                <p>数据加载中{dotStr}</p>
            </div>
        </div>)
    }
}

export default Loading