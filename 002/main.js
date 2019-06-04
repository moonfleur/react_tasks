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

//4.1, 4.2
// const Tweet = React.createClass({
//     getInitialState() {
//         return {
//             likes: 233,
//             retweets: 100,
//             liked: false,
//             retweeted: false,
//             likesColor: "red",
//             retweetsColor: "green",
//             fontSize: 21
//         }
//     },
//
//     handleIncrementLikes () {
//         this.setState({ likes: this.state.likes + 1 });
//         this.setState({ liked: true});
//
//         if(this.liked) {
//             this.setState({ likesColor: 'red'});
//         }
//     },
//
//     handleIncrementRetweets () {
//         this.setState({ retweets: this.state.retweets + 1 });
//         this.setState({ retweeted: true});
//
//         if(this.retweeted) {
//             this.setState({ retweetsColor: 'green'});
//         }
//     },
//
//     changeTextSize () {
//         const popularity = this.state.likes + this.state.retweets;
//         if(popularity < 100){
//             this.setState({ fontSize: 16})
//         }
//         if(popularity < 1000){
//             this.setState({ fontSize: 18})
//         }
//         if(popularity > 1000){
//             this.setState({ fontSize: 22})
//         }
//     },
//
//     componentDidMount() {
//         this.changeTextSize();
//     },
//
//     render(){
//         const {
//             author,
//             text,
//             image,
//             avatar,
//         } = this.props;
//         return (
//             <div className="tweet">
//                 <img
//                     className="tweetAvatar"
//                     src={avatar}
//                     alt={author}
//                 />
//                 <div className="tweetBody">
//                     <a
//                         className="tweetAuthor"
//                         href={`https://twitter.com/franzkafka_`}
//                         target="_blank"
//                     >
//                         <h3 className="authorName">{author}</h3>
//                         @{author}
//                     </a>
//                     <p className="tweetText" style={{fontSize: this.state.fontSize}}>{text}</p>
//                     <img
//                         className="tweetImage"
//                         src={image}
//                         alt={author}
//                     />
//
//                     <div className="tweetStats">
//                         <div className="tweetRetweets" onClick={this.handleIncrementRetweets} style={{color: this.state.retweeted?this.state.retweetsColor:"tweetRetweets"}}>
//                             <i className="tweetIconRetw fa fa-retweet" style={{color: this.state.retweeted?this.state.retweetsColor:"tweetRetweets"}}/>
//                             {this.state.retweets}
//                         </div>
//
//                         <div className={this.state.liked?"changeColorLikes":"tweetLikes"} onClick={this.handleIncrementLikes} style={{color: this.state.liked?this.state.likesColor:"tweetLikes"}}>
//                             <i className="tweetIconsLike fa fa-heart" />
//                             {this.state.likes}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// });
//
// ReactDOM.render (
//     <div>
//         <Tweet
//             author="franz_kafka"
//             text="You do not need to leave your room. Remain sitting at your table and listen. Be unmasked, it has no choice, it will roll in ecstasy at your feet."
//             image="https://pictures.abebooks.com/2920229/17185054825.jpg"
//             avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Kafka1906_cropped.jpg/267px-Kafka1906_cropped.jpg"
//             likes={233}
//             retweets={512}
//         />
//     </div>,
//     document.getElementById('root')
// );

//5
// const MEMBERS = [
//     {
//         id: 1,
//         author: 'Василий Пупкин',
//         avatar: 'https://advokat-spb.org/wp-content/uploads/2014/10/3dfc3f46ca8c3c8a1951307894b50dcf_images-for-profile-silhouette-unknown-person-clipart_1280-1024.jpeg',
//         city: 'Киев'
//     },
//     {
//         id: 2,
//         author: 'Петр Петров',
//         avatar: 'https://advokat-spb.org/wp-content/uploads/2014/10/3dfc3f46ca8c3c8a1951307894b50dcf_images-for-profile-silhouette-unknown-person-clipart_1280-1024.jpeg',
//         city: 'Львов'
//     },
//     {
//         id: 3,
//         author: 'Анастасия Адвокатова',
//         avatar: 'https://advokat-spb.org/wp-content/uploads/2014/10/3dfc3f46ca8c3c8a1951307894b50dcf_images-for-profile-silhouette-unknown-person-clipart_1280-1024.jpeg',
//         city: 'Сумы'
//     },
//     {
//         id: 4,
//         author: 'Анна Морозова',
//         avatar: 'https://advokat-spb.org/wp-content/uploads/2014/10/3dfc3f46ca8c3c8a1951307894b50dcf_images-for-profile-silhouette-unknown-person-clipart_1280-1024.jpeg',
//         city: 'Днепр'
//     },
// ];
//
// const GroupList = React.createClass({
//     render() {
//         const {
//             avatar,
//             author,
//             city
//         } = this.props;
//
//         return (
//             <div className="list">
//                 <img className="list-avatar" src={avatar} />
//
//                 <div className="list-body">
//                     <p>{author}</p>
//
//                     <i className="fas fa-map-marker-alt"/>
//                     <span className="list-city">{city}</span>
//
//                     <div className="list-stats">
//                         <div className="list-icons">
//                             <a
//                                 className="list-author"
//                                 href={'https://facebook.com/'}
//                                 target="blank"
//                             >
//                                 <i className="fab fa-facebook-square"/>
//                             </a>
//                         </div>
//                         <div className="list-icons">
//                             <a
//                                 className="list-author"
//                                 href={'https://github.com/'}
//                                 target="blank"
//                             >
//                                 <i className="fab fa-github-square"/>
//                             </a>
//                         </div>
//                         <div className="list-icons">
//                             <a
//                                 className="list-author"
//                                 href={'https://mail.google.com/'}
//                                 target="blank"
//                             >
//                                 <i className="fas fa-envelope-square"/>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// });
//
// const Feed = React.createClass({
//     render() {
//         return (
//             <div>
//                 <h1 className="list-header">Meet React Course Members</h1>
//                 {
//                     MEMBERS.map(member =>
//                         <GroupList
//                             key={member.id}
//                             author={member.author}
//                             city={member.city}
//                             avatar={member.avatar}
//                         />
//                     )
//                 }
//             </div>
//         );
//     }
// });
//
// ReactDOM.render(
//     <Feed />,
//     document.getElementById('root')
// );

