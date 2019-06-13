
//1
// Работать должно так. Вначале по центру экрана маленький круг (цвет на ваше усмотрение). При каждом клике на него, он увеличивается в размере. Так пока не достигнет максимального. Потом сначала.
// Используйте только только inline-стили в этом задании.
// const ViewCircle = React.createClass({
//     getInitialState() {
//         return {
//             width: 20,
//             height: 20,
//             borderRadius: 10,
//             marginTop: 471
//         }
//     },
//
//     changeCircleSize() {
//         this.setState({
//             width: this.state.width + 20,
//             height: this.state.height + 20,
//             borderRadius: this.state.borderRadius + 10,
//             marginTop: this.state.marginTop - 10,
//         });
//         if (this.state.width > 900) {
//             this.setState({
//                 width: 20,
//                 height: 20,
//                 borderRadius: 10,
//                 marginTop: 471
//             })
//         }
//     },
//
//     render() {
//         let drawCircle = {
//             width: this.state.width,
//             height: this.state.height,
//             borderRadius: this.state.borderRadius,
//             backgroundColor: 'black',
//             marginTop: this.state.marginTop,
//             marginRight: 'auto',
//             marginLeft: 'auto'
//         };
//
//         return (
//             <div style={drawCircle} onClick={this.changeCircleSize}/>
//         )
//     }
// });
//
// ReactDOM.render(
//     <ViewCircle />,
//     document.getElementById('root')
// );

//2
// Используйте уже написанные компоненты и добавьте в него поиск по имени.
// Поиск должен работать моментально: по мере ввода текста в поле для поиска, должен фильтроваться список.
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
//     getInitialState() {
//         return {
//             value: 'Поиск...'
//         }
//     },
//
//     searchName(event) {
//       this.setState({value: event.target.value});
//     },
//
//     render() {
//         const lowercasedValue = this.state.value.toLowerCase();
//         const filteredData = MEMBERS.filter(item => {
//             return Object.keys(item).some(key =>
//                 typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedValue)
//             );
//         });
//         return (
//             <div>
//                 <h1 className="list-header">Meet React Course Members</h1>
//                 <div className="searchWrap">
//                     <i className="fas fa-search"/>
//                     <input type="text" placeholder={this.state.value} className="searchInput" onChange={(e) => this.searchName(e)} id="inputs"/>
//                 </div>
//                 {
//                     filteredData.map(member =>
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

//3
//1
// Работать должно так. Вначале по центру экрана маленький круг (цвет на ваше усмотрение). При каждом клике на него, он увеличивается в размере. Так пока не достигнет максимального. Потом сначала.
// Используйте только только inline-стили в этом задании.
// const ViewCircle = React.createClass({
//     getInitialState() {
//         return {
//             width: 20,
//             height: 20,
//             borderRadius: 10,
//             marginTop: 471
//         }
//     },
//
//     changeCircleSize() {
//         this.setState({
//             width: this.state.width + 20,
//             height: this.state.height + 20,
//             borderRadius: this.state.borderRadius + 10,
//             marginTop: this.state.marginTop - 10,
//         });
//         if (this.state.width > 900) {
//             this.setState({
//                 width: 20,
//                 height: 20,
//                 borderRadius: 10,
//                 marginTop: 471
//             })
//         }
//     },
//
//     render() {
//         let drawCircle = {
//             width: this.state.width,
//             height: this.state.height,
//             borderRadius: this.state.borderRadius,
//             backgroundColor: 'black',
//             marginTop: this.state.marginTop,
//             marginRight: 'auto',
//             marginLeft: 'auto'
//         };
//
//         return (
//             <div style={drawCircle} onClick={this.changeCircleSize}/>
//         )
//     }
// });
//
// ReactDOM.render(
//     <ViewCircle />,
//     document.getElementById('root')
// );


//4
// Используйте уже написанные компоненты и добавьте в него поиск по имени.
// Поиск должен работать моментально: по мере ввода текста в поле для поиска, должен фильтроваться список.
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
//     getInitialState() {
//         return {
//             value: 'Поиск...'
//         }
//     },
//
//     searchName(event) {
//       this.setState({value: event.target.value});
//     },
//
//     render() {
//         const lowercasedValue = this.state.value.toLowerCase();
//         const filteredData = MEMBERS.filter(item => {
//             return Object.keys(item).some(key =>
//                 typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedValue)
//             );
//         });
//         return (
//             <div>
//                 <h1 className="list-header">Meet React Course Members</h1>
//                 <div className="searchWrap">
//                     <i className="fas fa-search"/>
//                     <input type="text" placeholder={this.state.value} className="searchInput" onChange={(e) => this.searchName(e)} id="inputs"/>
//                 </div>
//                 {
//                     filteredData.map(member =>
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

//5
// const Note = React.createClass ({
//     handleDelete() {
//         this.props.onDelete(this.props.id);
//     },
//
//     render (){
//         const {
//             color,
//             children
//         } = this.props;
//
//         return (
//             <div className="note" style={{backgroundColor: color}}>
//                 <div>
//                     <span className="delete_note" onClick={this.handleDelete}> x </span>
//                 </div>
//                 { children }
//             </div>
//         )
//     },
// });
//
// const NoteColors = React.createClass({
//     render() {
//         let colors = ['#E63462', '#FE5F55', '#8bef54', '#008536', '#00B4A6', '#007DB6', '#9c00ff'];
//         return (
//             <div className="colors-list">
//                 {
//                     colors.map((el, i) => {
//                         return (
//                             <div key={i} style={{backgroundColor: el}}>
//                                 <input
//                                     className="radio-custom"
//                                     id={el}
//                                     type="radio"
//                                     name="color"
//                                     onChange={(e)=>this.props.onColorChanged(e, el)}
//                                 />
//                                 <label className="radio-custom-label" htmlFor={el}/>
//                             </div>
//                         );
//                     })
//                 }
//             </div>
//         );
//     }
// });
//
// const NoteEditor = React.createClass ({
//     getInitialState() {
//         this._hadleColorChange = this.hadleColorChange.bind(this);
//
//         return {
//             text: '',
//             color: '',
//             checked: false
//         }
//     },
//
//     handleTextChange(e) {
//         this.setState({
//             text: e.target.value
//         });
//     },
//
//     handleKeyPress(target) {
//         if(target.charCode === 13){
//             const newNote = {
//                 text: this.state.text,
//                 id: Date.now(),
//                 color: this.state.color
//             };
//             this.props.onNoteAdd(newNote);
//
//             this.resetState();
//         }
//     },
//
//     handleNoteAdd() {
//         const newNote = {
//             text: this.state.text,
//             id: Date.now(),
//             color: this.state.color
//         };
//         this.props.onNoteAdd(newNote);
//
//         if(this.state.checked)
//             this.input.checked = false;
//
//         this.resetState();
//     },
//
//     hadleColorChange(e, color) {
//         this.input = e.target;
//         this.setState({
//             color: color,
//             checked: e.target.checked
//         })
//     },
//
//     resetState() {
//         this.setState({
//             text: '',
//         });
//     },
//
//     render (){
//         return (
//             <div className="editor">
//                 <textarea
//                     rows={5}
//                     placeholder="Enter your note here..."
//                     className="editor_textarea"
//                     value={this.state.text}
//                     onChange={this.handleTextChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//
//                 <div className="controls">
//                     <NoteColors onColorChanged={this._hadleColorChange}/>
//                 </div>
//
//                 {
//                     // this.state.text
//                     // &&
//                     <button
//                         className="editor_button"
//                         onClick={this.handleNoteAdd}
//                     >
//                         Add
//                     </button>
//                 }
//             </div>
//         )
//     },
// });
//
// const NoteGrid = React.createClass ({
//     componentDidMount() {
//         this.msnry = new Masonry(this.grid, {
//             columnWidth: 300,
//             gutter: 10,
//             isFitWidth: true
//         })
//     },
//
//     componentDidUpdate(prevProps) {
//         if(prevProps.notes !== this.props.notes){
//             this.msnry.reloadItems();
//             this.msnry.layout();
//         }
//     },
//
//     render (){
//         const {
//             notes,
//             onNoteDelete
//         } = this.props;
//
//         return (
//             <div className="grid" ref={c => this.grid = c}>
//                 {
//                     notes.map(note =>
//                         <Note
//                             key={note.id}
//                             id={note.id}
//                             color={note.color}
//                             onDelete={onNoteDelete}
//                         >
//                             {note.text}
//                         </Note>
//                     )
//                 }
//             </div>
//         )
//     },
// });
//
// const NotesApp = React.createClass ({
//     getInitialState() {
//         return {
//             notes: []
//         }
//     },
//
//     componentDidMount() {
//         const savedNotes = JSON.parse(localStorage.getItem('notes'));
//
//         if(savedNotes) {
//             this.setState({ notes: savedNotes})
//         }
//     },
//
//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.notes !== this.state.notes) {
//             this.saveToLocalStorage();
//         }
//     },
//
//     handleNoteAdd(newNote) {
//         this.setState({
//             notes: [newNote, ...this.state.notes]
//         });
//     },
//
//     handleNoteDelete(noteId) {
//         this.setState({
//             notes: this.state.notes.filter(note => note.id !== noteId)
//         })
//     },
//
//     saveToLocalStorage() {
//         const notes = JSON.stringify(this.state.notes);
//
//         localStorage.setItem('notes', notes)
//     },
//
//     render (){
//         return (
//             <div style={{textAlign: 'center'}} className="app">
//                 <h1 className="app_header">NoteApp</h1>
//
//                 <NoteEditor onNoteAdd={this.handleNoteAdd}/>
//
//                 <NoteGrid
//                     notes={this.state.notes}
//                     onNoteDelete={this.handleNoteDelete}
//                 />
//             </div>
//         )
//     },
// });
//
// ReactDOM.render (
//     <NotesApp />,
//     document.getElementById('root')
// );

//5
// let md = new Remarkable('full', {
//     html: true,
//     linkify: true,
//     typographer: true,
// });
//
// md.core.ruler.enable([ 'replacements', 'smartquotes' ]);
// md.block.ruler.enable([
//     'footnote',
//     'deflist'
// ]);
// md.inline.ruler.enable([
//     'footnote_inline',
//     'ins',
//     'mark',
//     'sub',
//     'sup'
// ]);

// const News = React.createClass ({
//     renderNews() {
//         const { data, onNoteDelete } = this.props;
//         let newsTemplate = null;
//
//         if (data.length) {
//             newsTemplate = data.map((item) =>
//                 <Article
//                     key={item.id}
//                     title={item.title}
//                     bigText={item.bigText}
//                     onDelete={onNoteDelete}
//                     data={item}
//                 />
//                 )
//         } else {
//             newsTemplate =
//                 <div className="wrapperPar">
//                     <p className="newsArticle">No fresh articles</p>
//                 </div>
//         }
//
//         return newsTemplate
//     },
//
//     render() {
//         const { data } = this.props;
//
//         return (
//             <div className='articles'>
//                 <h1 className="mainTitle">Latest articles</h1>
//                 {this.renderNews()}
//                 {
//                     data.length ? <h6 className={'articlesCount'}>Article quantity: {data.length}</h6> : null
//                 }
//             </div>
//         );
//     }
// });
//
// const Article = React.createClass({
//     getInitialState() {
//       return {
//           visible: false,
//           isEditing: false,
//           value: '',
//           title: this.props.data
//       }
//     },
//
//     handleReadMoreClick(e) {
//         e.preventDefault();
//         this.setState({ visible: true })
//     },
//
//     handleHideClick(e) {
//         e.preventDefault();
//         this.setState({ visible: false })
//     },
//
//     handleDelete() {
//         this.props.onDelete(this.props.id);
//     },
//
//     startEditing() {
//         this.setState({ isEditing: true });
//     },
//
//     render() {
//         const { title, bigText } = this.props.data;
//         const { visible, value, isEditing } = this.state;
//
//         if (isEditing) {
//
//         } else {
//             return (
//                 <div className='article'>
//                     <p className='articlesTitle'>{title}</p>
//                     {
//                         !visible &&
//                         <div>
//                             <a onClick={this.handleReadMoreClick} href="#" className='articleRead'>Read</a>
//                             <a onClick={this.handleDelete} href="#" className='articleRead'>Delete</a>
//                             <a onClick={this.startEditing} href="#" className='articleRead'>Edit</a>
//                         </div>
//                     }
//                     {
//                         visible &&
//                         <div>
//                             <p className='article__big-text'>{bigText}</p>
//                             <a onClick={this.handleHideClick} href="#" className='articleRead'>Hide</a>
//                             <a onClick={this.handleDelete} href="#" className='articleRead'>Delete</a>
//                         </div>
//                     }
//                 </div>
//             )
//         }
//     }
// });
//
// const CreateArticle = React.createClass( {
//     getInitialState() {
//         return {
//             value: '',
//             title: '',
//             bigText: ''
//         }
//     },
//
//     onBtnClickHandler (e) {
//         e.preventDefault();
//         const { title, bigText, value } = this.state;
//         this.props.onAddNews({
//             id: +new Date(),
//             title: title,
//             bigText,
//             value
//         });
//
//         this.resetState();
//     },
//
//     resetState() {
//         this.setState({
//             title: '',
//             bigText: ''
//         });
//     },
//
//     handleChange(e) {
//         const { id, value } = e.currentTarget;
//         this.setState({ [id]: e.currentTarget.value })
//     },
//
//     render() {
//         const { title, bigText } = this.state;
//         return (
//             <form className='add'>
//                 <h1 className="mainTitle">Create article</h1>
//                 <input
//                     id='title'
//                     className="articleTitle"
//                     type="text"
//                     onChange={this.handleChange}
//                     value={title}
//                     placeholder="Enter article title"
//                 />
//                 <textarea
//                     id='bigText'
//                     className="articleText"
//                     onChange={this.handleChange}
//                     value={bigText}
//                     placeholder="Enter article text"
//                 />
//                 <button
//                     className="buttonAddArticle"
//                     onClick={this.onBtnClickHandler}
//                 >
//                     Add new article
//                 </button>
//                 <div className="articles">
//                     <h1 className="mainTitle">Article preview</h1>
//                     <div className="article">
//                         <p className="articlesTitle">{title}</p>
//                         <p className="article__big-text">{bigText}</p>
//                     </div>
//                 </div>
//             </form>
//         )
//     }
// });
//
// // Add.propTypes = {
// //     onAddNews: PropTypes.func.isRequired,
// // };
//
// const ViewArticles = React.createClass ({
//     getInitialState() {
//         return {
//             value: '',
//             news: [],
//             title: '',
//             bigText: ''
//         }
//     },
//
//     handleArticleDelete(articleId) {
//         this.setState({
//             news: this.state.news.filter(article => article.id !== articleId)
//         })
//     },
//
//     componentDidMount() {
//         const savedArticles = JSON.parse(localStorage.getItem('articles'));
//
//         this.setState({ news: savedArticles})
//
//     },
//
//     componentDidUpdate(prevProps, prevState) {
//         if(prevState.news !== this.state.news) {
//             this.saveToLocalStorage();
//         }
//     },
//
//    saveToLocalStorage() {
//         const articles = JSON.stringify(this.state.news);
//
//         localStorage.setItem('articles', articles)
//     },
//
//     handleAddNews(data) {
//         const nextNews = [data, ...this.state.news];
//         this.setState({ news: nextNews })
//     },
//
//     render (){
//         // const {onNoteDelete, news} = this.props;
//         return (
//             <div className="wrapperArticle">
//                 <CreateArticle
//                     onAddNews={this.handleAddNews}
//                 />
//                 <News
//                     data={this.state.news}
//                     onNoteDelete={this.handleArticleDelete}
//                 />
//             </div>
//         )
//     },
// });
// ReactDOM.render (
//     <ViewArticles />,
//     document.getElementById('root')
// );

// class AddFormData extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { textName: '', textArea: '' };
//         this.onFormSubmit = this.onFormSubmit.bind(this);
//         this.textNameChange = this.textNameChange.bind(this);
//         this.textDescChange = this.textDescChange.bind(this);
//         this.cancelUpd = this.cancelUpd.bind(this);
//     }
//
//     componentWillReceiveProps(nextProps){
//         if (nextProps.upd.id) {
//             this.setState({
//                 textName: nextProps.upd.name,
//                 textArea: nextProps.upd.desc
//             });
//         }else{
//             this.setState({ textName:'', textArea: '' });
//         }
//     }
//
//     textNameChange(e){ this.setState({ textName: e.target.value }) }
//     textDescChange(e){ this.setState({ textArea: e.target.value }) }
//
//     onFormSubmit(e) {
//         e.preventDefault();
//         if (this.props.upd.id) {
//             // update component
//             this.props.propUpd({
//                 id: this.props.upd.id,
//                 name: this.state.textName,
//                 desc: this.state.textArea
//             });
//         } else {
//             var formVal = {
//                 name: this.state.textName,
//                 area: this.state.textArea
//             };
//             this.props.onAdd(formVal);
//         }
//         this.setState({ textName:'', textArea: '' });
//     }
//     cancelUpd() {
//         this.props.updcan();
//         this.setState({ textName:'', textArea: '' });
//     }
//
//     render() {
//         return (
//             <form onSubmit={ this.onFormSubmit } className='well'>
//                 <h1 className="mainTitle">{ this.props.upd.id ? 'Edit article':'Create article' }</h1>
//                 <div className='form-group'>
//                     <label>Title</label>
//                     <input type='text' className='form-control'
//                            onChange={ this.textNameChange }
//                            value={ this.state.textName  } />
//                 </div>
//                 <div className='form-group'>
//                     <label>Article text</label>
//                     <textarea className="form-control" rows="3"
//                               onChange={ this.textDescChange }
//                               value={ this.state.textArea }
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-success">
//                     { this.props.upd.id ? 'Save changes': 'Create' }
//                 </button>&nbsp;
//                 {
//                     this.props.upd.id ?
//                         (<button type="button"
//                                  onClick={ this.cancelUpd }
//                                  className="btn btn-default" >Cancel</button>
//                         ):null
//                 }
//             </form>
//         );
//     }
// }
//
// class TableBody extends React.Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state = { isToggleOn: false };
//         this.updateBtn = this.updateBtn.bind(this);
//         this.handleCbox = this.handleCbox.bind(this);
//     }
//
//     updateBtn(e) {
//         this.props.onUpd( e.target.dataset.item );
//     }
//
//     handleCbox() {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//         var cnt = $('#tableSample').find('input:checkbox[name=cbox]:checked');
//         if (cnt.length) {
//             $('#del_rowBtn').show();
//         }else{
//             $('#del_rowBtn').hide();
//         }
//         this.props.canHan();
//     }
//
//     render() {
//         const divStyle = {
//             margin: 0,
//         };
//
//         return (
//             <tr id={'tr-'+ this.props.TRs.id.toString() } >
//                 <td>
//                     <div className="checkbox" style={ divStyle } >
//                         <label>
//                             <input name='cbox' onChange={ this.handleCbox }
//                                    type="checkbox"
//                                    id={ 'check_bx'+ this.props.TRs.id }
//                                    value={this.props.TRs.id} />
//                             &nbsp;{ this.props.TRs.id }</label>
//                     </div>
//                 </td>
//                 <td>{ this.props.TRs.name }</td>
//                 <td>{ this.props.TRs.desc }</td>
//                 <td>
//                     { this.state.isToggleOn ? (
//                         <button disabled className="btn btn-xs btn-default" >Edit</button>
//                     ):(
//                         <button onClick={ this.updateBtn }
//                                 data-item={ this.props.TRs.id }
//                                 className="btn btn-xs btn-default"
//                         >
//                             Edit
//                         </button>
//                     )
//                     }
//                 </td>
//             </tr>
//         );
//     }
// }
//
// class SampleTable extends React.Component {
//     constructor(props, context) {
//         super(props);
//
//         this.state = {
//             TRs: [
//                 {
//                     id: 1,
//                     name: 'rock',
//                     desc: 'A form of solid matter that can break the head whoever hits'
//                 }
//             ],
//             UPD:[]
//         };
//         this.deleteRow = this.deleteRow.bind(this);
//         this.onAddForm = this.onAddForm.bind(this);
//         this.delNrow = this.delNrow.bind(this);
//         this.updateRow = this.updateRow.bind(this);
//         this.cancelUpd = this.cancelUpd.bind(this);
//         this.propcessUpd = this.propcessUpd.bind(this);
//     }
//     // delete multiple data
//     deleteRow(z) {
//         var array = this.state.TRs;
//         var index = array.findIndex(e => e.id == z)
//         array.splice(index, 1);
//         this.setState({ TRs: array });
//     }
//
//     delNrow() {
//         var cof = confirm('Are you sure?');
//         if (cof) {
//             const tbox = $('#tableSample').find('input:checkbox[name=cbox]:checked');
//             var arr = [];
//             tbox.each(function(){
//                 arr.push(parseInt($(this).val()));
//             });
//             for (var i = 0; i < arr.length; i++) {
//                 this.deleteRow(arr[i]);
//             }
//             $('#del_rowBtn').hide();
//         }
//     } // end of delete function
//
//     // add form data
//     onAddForm(formVal) {
//         var ctr = this.state.TRs.length + 1;
//         var Ndata = {
//             id: ctr,
//             name: formVal.name,
//             desc: formVal.area
//         };
//         this.setState({ TRs: this.state.TRs.concat([Ndata]), UPD: {} })
//     } // end add form function
//
//     updateRow(x) {
//         var array = this.state.TRs;
//         var index = array.findIndex(e => e.id == x);
//         this.setState({
//             UPD: this.state.TRs[index]
//         });
//     }
//
//     cancelUpd() {
//         this.setState({ UPD: [] });
//     }
//
//     propcessUpd(formVal) {
//         var obj = this.state.TRs;
//         var index = obj.findIndex(e => e.id == formVal.id)
//         obj[index] = formVal;
//         this.setState({ TRs: obj, UPD: [] });
//     }
//
//     componentDidMount(){
//         // this.setState({ TRs: this.props.tableRow })
//     }
//     render() {
//         const display = {
//             display: 'none'
//         };
//         const tRow = this.state.TRs.map(tr => (
//             <TableBody onUpd={this.updateRow} TRs={ tr } key={tr.id} canHan={ this.cancelUpd } />
//         ));
//
//         return (
//             <div className='row margin-top'>
//                 <div className='col-md-12'>
//                     <AddFormData onAdd={ this.onAddForm }
//                                  upd={ this.state.UPD }
//                                  updcan={ this.cancelUpd }
//                                  propUpd= { this.propcessUpd } />
//                 </div>
//                 <div className='col-md-12'>
//                     <div className='row h35'>
//                         <div className='col-md-6'>
//                             <button onClick={ this.delNrow } id='del_rowBtn'
//                                     className='btn btn-xs btn-default'
//                                     style={display}>Delete in Row
//                             </button>
//                         </div>
//                         <div className='col-md-offset-2 col-md-4'>
//                         </div>
//                     </div>
//                     <table className="table table-hover table-striped table-bordered" id='tableSample' style={{marginTop: 20}}>
//                         <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Desc</th>
//                             <th>Options</th>
//                         </tr>
//                         </thead>
//                         <tbody>{ tRow }</tbody>
//                     </table>
//                 </div>
//             </div>
//         );
//     }
// }
//
// var Mydata = function(){
//     var obj = [];
//     $.ajax({
//         async: false,
//         global: false,
//         dataType: 'json',
//         type:'GET',
//         url: 'http://jsonplaceholder.typicode.com/posts',
//         success:function(data){
//             for (var i = 0; i < 3; i++) {
//                 obj[i] = {
//                     'id': i+1,
//                     'name': data[i].title,
//                     'desc': data[i].body
//                 };
//             }
//         }
//     });
//     return obj;
// }();
//
// ReactDOM.render(
//     <SampleTable tableRow={Mydata} />,
//     document.getElementById('displayTable')
// );


(function(){

    var recipeData = [
        {   "id" : 0,
            "name" : "Democratic Candidates Woo Silicon Valley for Donations, Then Bash It",
            "components" : ["5 chicken eggs", "2 glasses of sugar", "200g of butter", "2 glasses of white flour", "2 table-spoon of cacao powder", "1 tea- spoon of baking-soda"],
            "description": "Amazon, Apple, Facebook and Google, facing the growing possibility of antitrust action and legislation to rein in their power, are spending freely to gain influence and access."
        },
        {   "id" : 1,
            "name" : "Tech Giants Amass a Lobbying Army for an Epic Washington Battle",
            "components" : ["600g of pumkins", "2 garlic", "thyme", "olive oil", "1 table-spoon of balsamic vinegar", "1 onion", "water", "salt"],
            "description": "I will add some info here soon"
        },
        {   "id" : 2,
            "name" : "Election Rules Are an Obstacle to Cybersecurity of Presidential Campaigns",
            "components" : ["3 chicken eggs", "15g of butter", "50g of cheese", "1 table-spoon of olive oil", "salt", "pepper"],
            "description": "The images were meant to exonerate Richard Liu, the e-commerce mogul. They have also helped fuel a nascent #NoPerfectVictim movement."
        }
    ];

    if (localStorage.getItem('recipeData') === null){

        localStorage.setItem('recipeData', JSON.stringify(recipeData));

    }




    var Recipe = React.createClass({
        in: "in",
        openPanel: function(e){
            var element = e.target.parentElement;
            while (element.classList.item(0) !== "resipeContainer"){
                element = element.parentElement;
            }
            if (this.in){
                element.lastChild.classList.add("in");
                this.in = "";
            } else {
                element.lastChild.classList.remove("in");
                this.in="in";
            }
        },
        removeRecipe: function(e){
            var dataToRemove = JSON.parse(localStorage.getItem('recipeData'));

            for (var i=0; i<dataToRemove.length; i++){
                if (dataToRemove[i].id === this.props.id){
                    dataToRemove.splice(i, 1);
                }
            }
            for (var i=0; i<dataToRemove.length; i++){
                dataToRemove[i].id = i;
            }

            this.openPanel(e);
            localStorage.setItem('recipeData', JSON.stringify(dataToRemove));
            renderDom(<RecipeBox data={dataToRemove}/>, 'content');
        },
        editRecipe: function(e){
            document.getElementById("recipeName").value=this.props.name;
            document.getElementById("components").value=this.props.components;
            document.getElementById("description").value=this.props.description;
        },
        render: function(){
            var components = this.props.components.map(function(component, item){
                return components;
            });
            return (
                <div className="panel panel-default" id={"panelTest" + this.props.id}>
                    <div className="resipeContainer panel panel-default">
                        <div className={"panel-heading panel" + this.props.id} onClick={this.openPanel}>
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="accordion" href={"#collapse" + this.props.id} id={"name" + this.props.id}>
                                    {this.props.name}
                                </a>
                            </h4>
                        </div>
                        <div id={"#collapse" + this.props.id} className="panel-collapse collapse">
                            <div className="panel-body">
                                <ul className="list-group">
                                    {components}
                                </ul>
                                <p className="recipeDescription">
                                    {this.props.description}
                                </p>
                            </div>
                            <div className="controlElements">
                                <p className="bs-component" id="placeForBtns">
                                    <button href="#" data-toggle="modal" data-target="#myModal" className="btn btn-primary" onClick={this.editRecipe}>Edit Article</button>
                                    <button href="#" className="btn btn-danger" onClick={this.removeRecipe}>Delete Article</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });

    var RecipeList = React.createClass({
        render: function(){
            var recipes = this.props.data.map(
                function(recipe){
                    return(
                        <Recipe name={recipe.name} description={recipe.description} components={recipe.components} key={recipe.id} id={recipe.id} ></Recipe>
                    );
                }
            );
            return(
                <div className="list-group">
                    <div className="panel-group" id="accordion">
                        {recipes}
                    </div>
                </div>
            );
        }
    });

    var FormRecipe = React.createClass({
        render: function(){
            return(
                <form className="form-horizontal">
                    <fieldset>
                        <div className="form-group">
                            <label for="recipeName" className="col-lg-2 control-label">Title</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="recipeName"/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="description" className="col-lg-2 control-label">Article text</label>
                            <div className="col-lg-10">
                                <textarea className="form-control" rows="3" id="description"></textarea>
                            </div>
                        </div>
                    </fieldset>
                </form>
            );
        }
    });

    var Modal = React.createClass({
        changeRecipeBox: function(e){
            var dataToUpdate = JSON.parse(localStorage.getItem('recipeData'));
            var id=0, newRecipe=true;
            for (var i=0; i<dataToUpdate.length; i++){
                if (dataToUpdate[i].name === document.getElementById("recipeName").value){
                    id = dataToUpdate[i].id;
                    newRecipe=false;
                    break;
                } else {
                    id = dataToUpdate.length;
                }
            }

            if (document.getElementById("recipeName").value && document.getElementById("components").value && document.getElementById("description").value){
                if (newRecipe){
                    dataToUpdate.push({});
                    dataToUpdate[dataToUpdate.length-1].id=id;
                }

                dataToUpdate[id].name=document.getElementById("recipeName").value;
                dataToUpdate[id].components=document.getElementById("components").value.split(",");
                dataToUpdate[id].description=document.getElementById("description").value;
            }
            localStorage.setItem('recipeData', JSON.stringify(dataToUpdate));
            renderDom(<RecipeBox data={dataToUpdate}/>, 'content');
        },
        render: function(){
            return(
                <div id="myModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 className="modal-title" id="myModalLabel">Article</h4>
                            </div>
                            <div className="modal-body">
                                <div className="well bs-component" id="testForm">
                                    <FormRecipe />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.changeRecipeBox}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });

    var RecipeBox = React.createClass({
        addNewRecipe(){
            document.getElementById("recipeName").value="";
            document.getElementById("components").value="";
            document.getElementById("description").value="";
        },
        clearLocalStorage(){
            localStorage.clear();
            // location.reload();
        },
        render(){
            return(
                <div className="container">
                    <h1 className="mainTitle">Articles</h1>
                    <RecipeList data={this.props.data}/>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.addNewRecipe}>Create New Article</button>
                    <button className="btn btn-default" onClick={this.clearLocalStorage}>Clear LocalStorage</button>
                </div>
            )
        }
    });

    function renderDom(element, id){
        ReactDOM.render(element, document.getElementById(id));
    };

    renderDom(<Modal />, 'source-modal');
    renderDom(<RecipeBox data={JSON.parse(localStorage.getItem('recipeData'))}/>, 'content');


})();

