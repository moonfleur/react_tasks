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
//             <div onClick={this.handleClick}>
//                 <div>{icon}</div>
//             </div>
//         );
//     }
// });
//
// ReactDOM.render(
//     <MovingCard />,
//     document.getElementById('root')
// );

