//1
// const Articles = React.createClass({
//     render() {
//         return React.createElement('div', {style: {width: '400px', fontFamily: 'Arial', lineHeight: '17px'}},
//             React.createElement('h1', {},  this.props.title),
//             React.createElement('h3', {}, `by ${this.props.author}`),
//             React.createElement('p', {}, this.props.article)
//         );
//     }
// });
//
// ReactDOM.render(
//     React.createElement(Articles, { title: "Article title", article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", author: "John Snow" }),
//     document.getElementById('root')
// );

//2
// const Articles = React.createClass({
//     render() {
//         return (
//             <div className="article_block">
//             <h1> {this.props.title} </h1>
//             <h3>by {this.props.author}</h3>
//             <p>{this.props.article}</p>
//             <br/>
//             <div className="feedback">
//                 <div className="articleFeed">
//                     <i className="fa fa-heart" />
//                     {this.props.likes}
//                 </div>
//                 <div className="articleFeed">
//                     <i className="fa fa-comment-alt" />
//                     {this.props.comments}
//                 </div>
//             </div>
//         </div>
//         )
//     }
// });
//
// const ViewArticle = React.createClass({
//     render() {
//         return (
//             <div>
//             <Articles
//                 title="Article title"
//                 article="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//                 author="John Snow"
//                 likes={121}
//                 comments={34}
//             />
//             </div>
//         )
//     }
// });
//
// ReactDOM.render(
//     <ViewArticle />,
//     document.getElementById('root')
// );

//3
// const FirstSide = React.createClass({
//     render(){
//         return (
//             <img className="firstSide"/>
//         )
//     }
// });
//
// const SecondSide = React.createClass({
//     render(){
//         return (
//             <div className="secondSide"/>
//         )
//     }
// });
//
// const MovingCard = React.createClass({
//     getInitialState() {
//         return {
//             image: false
//         };
//     },
//
//     handleClick(event) {
//         this.setState({
//             image: !this.state.image
//         });
//     },
//
//     render() {
//         const icon = this.state.image ? <FirstSide className="firstSide"/> : <SecondSide className="secondSide"/>;
//         return (
//             <div onClick={this.handleClick} className="scene">
//                 <div className="card">{icon}</div>
//             </div>
//         );
//     }
// });
//
// ReactDOM.render(
//     <MovingCard />,
//     document.getElementById('root')
// );

//4
const Tweet = React.createClass({
    getInitialState() {
        return {
            likes: 233,
            retweets: 100,
            liked: true,
            retweeted: true,
            likesColor: "red",
            retweetsColor: "green",
            fontSize: 21,
            disabled: false
        }
    },

    handleIncrementLikes () {



        this.setState({ likes: this.state.likes + 1 });

        const likes = JSON.stringify(this.state.likes);
        localStorage.setItem('likes', likes);

        if(this.liked) {
            this.setState({ color: 'red'});
            this.liked = false;
        }
    },

    handleIncrementRetweets () {
        this.setState({ retweets: this.state.retweets + 1 });
        if(this.retweeted) {
            this.setState({ color: 'green'});
        }
    },

    // saveToLocalStorage() {
    //     const likes = JSON.stringify(this.state.likes);
    //
    //     localStorage.setItem('likes', likes)
    // },
    //
    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.likes !== this.state.likes) {
    //         this.saveToLocalStorage();
    //     }
    // },

    render(){
        const popularity = this.state.likes + this.state.retweets;
        if(popularity < 100){
            this.state.fontSize = '16px'
        }
        if(popularity < 1000){
            this.state.fontSize = '18px'
        }
        if(popularity > 1000){
            this.state.fontSize = '22px'
        }

        let changeColorLikes, changeColorRetweets;
        if(this.liked) {
            changeColorLikes = this.state.likesColor;
            this.liked = false;
        }
        this.liked = true;

        if(this.retweeted) {
            changeColorRetweets = this.state.retweetsColor;
            this.retweeted = false;
        }
        this.retweeted = true;

        const {
            author,
            text,
            image,
            avatar,
        } = this.props;
        return (
            <div className="tweet">
                <img
                    className="tweetAvatar"
                    src={avatar}
                    alt={author}
                />
                <div className="tweetBody">
                    <a
                        className="tweetAuthor"
                        href={`https://twitter.com/franzkafka_`}
                        target="_blank"
                    >
                        <h3 className="authorName">{author}</h3>
                        @{author}
                    </a>
                    <p className="tweetText" style={{fontSize: this.state.fontSize}}>{text}</p>
                    <img
                        className="tweetImage"
                        src={image}
                        alt={author}
                    />

                    <div className="tweetStats">
                        <div className="tweetRetweets" onClick={this.handleIncrementRetweets} style={{color: changeColorRetweets}}>
                            <i className="tweetIconRetw fa fa-retweet" style={{color: changeColorRetweets}}/>
                            {this.state.retweets}
                        </div>

                        <div className="tweetLikes" onClick={this.handleIncrementLikes} style={{color: changeColorLikes}}>
                            <i className="tweetIconsLike fa fa-heart" style={{color: changeColorLikes}}/>
                            {localStorage.getItem('likes')}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render (
    <div>
        <Tweet
            author="franz_kafka"
            text="You do not need to leave your room. Remain sitting at your table and listen. Be unmasked, it has no choice, it will roll in ecstasy at your feet."
            image="https://pictures.abebooks.com/2920229/17185054825.jpg"
            avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kafka1906_cropped.jpg/267px-Kafka1906_cropped.jpg"
            likes={233}
            retweets={512}
        />
    </div>,
    document.getElementById('root')
);

