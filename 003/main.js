
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


//Перший варіант, не перевіряти
//6
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


//Другий варіант, правильний
//6
//Должна быть форма для создания новой статьи (вводим title и text). При нажатии на кнопку "Опубликовать", статья должна появится в списке статей на странице.
//
// Текст статьи должен поддерживать форматировние Markdown. Для процессинга Markdown используйте одну из библиотек (можно подключить через cdn). Например, [Remarkable](https://github.com/jonschlinkert/remarkable).
//
// Интерфейс на ваше усмотрение (обязательно прикладывайте скриншот, а лучше - ссылочку на рабочее приложение).
//
// *Дополнительно в этом задании:*
//
// ⭐️ - Можете добавить Live Preview для формы создания статьи (лучше сделать вкладками, как на гитхабе).
//
// ⭐️ - Удаление статей
//
// ⭐️ - Кнопка свернуть/развернуть для статьи
//
// ⭐️⭐️ - Редактирование статей
//
// ⭐️⭐️ - Поиск по статьям

(function(){

    let articlesData = [
        {"id" : 0,
            "name" : "Democratic Candidates Woo Silicon Valley for Donations, Then Bash It",
            "description": "Until recently big tech companies were seen as one of the few relatively untainted sources of big-money donations for Democrats. Now, that’s changing."
        },
        {"id" : 1,
            "name" : "Tech Giants Amass a Lobbying Army for an Epic Washington Battle",
            "description": "Amazon, Apple, Facebook and Google, facing the growing possibility of antitrust action and legislation to rein in their power, are spending freely to gain influence and access."
        },
        { "id" : 2,
            "name" : "Election Rules Are an Obstacle to Cybersecurity of Presidential Campaigns",
            "description": "Security experts warn that time is running out for campaigns to create protections against the cyberattacks and disinformation seen in recent elections."
        }
    ];

    if (localStorage.getItem('articlesData') === null){

        localStorage.setItem('articlesData', JSON.stringify(articlesData));

    }


    // var ResipeComponent = React.createClass({
    //     render: function(){
    //         return (<li className="list-group-item">{this.props.component}</li>);
    //     }
    // });

    const Article = React.createClass({
        getInitialState () {
            return {
                visible: false
            }
        },

        handleReadClick(e) {
            e.preventDefault();
            this.setState({ visible: true })
        },

        handleHideClick(e) {
            e.preventDefault();
            this.setState({ visible: false })
        },

        // in: "in",
        // openPanel (e){
        //     let element = e.target.parentElement;
        //     while (element.classList.item(0) !== "articleContainer"){
        //         element = element.parentElement;
        //     }
        //     if (this.in){
        //         element.lastChild.classList.add("in");
        //         this.in = "";
        //     } else {
        //         element.lastChild.classList.remove("in");
        //         this.in="in";
        //     }
        // },
        removeArticle (e){
            let dataToRemove = JSON.parse(localStorage.getItem('articlesData'));

            for (let i = 0; i < dataToRemove.length; i++){
                if (dataToRemove[i].id === this.props.id){
                    dataToRemove.splice(i, 1);
                }
            }
            for (let i = 0; i < dataToRemove.length; i++){
                dataToRemove[i].id = i;
            }

            this.openPanel(e);
            localStorage.setItem('articlesData', JSON.stringify(dataToRemove));
            renderDom(<ArticleBox data={dataToRemove}/>, 'content');
        },
        editArticle (e){
            document.getElementById("articleName").value=this.props.name;
            //document.getElementById("components").value=this.props.components;
            document.getElementById("description").value=this.props.description;
        },
        render (){
            const { visible } = this.state;
            return (
                <div className="panel panel-default" id={"panelTest" + this.props.id}>
                    <div className="articleContainer panel panel-default">
                        <div className={"panel-heading panel" + this.props.id}>
                            <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="accordion" href={"#collapse" + this.props.id} id={"name" + this.props.id}>
                                    {this.props.name}
                                </a>
                            </h4>
                        </div>
                        <div id={"#collapse" + this.props.id}>
                            {
                                !visible &&
                                <div>
                                    <button onClick={this.handleReadClick} className='btn btnshow'>Read Article</button>
                                </div>
                            }
                            {
                                visible &&
                                <div className="panel-body">
                                    {/*<ul className="list-group">*/}
                                    {/*    {components}*/}
                                    {/*</ul>*/}
                                    <p className="articleDescription">
                                        {this.props.description}
                                    </p>
                                    <div className="controlElements">
                                        <p className="bs-component" id="placeForBtns">
                                            <button data-toggle="modal" data-target="#myModal" className="btn btnprimary" onClick={this.editArticle}>Edit Article</button>
                                            <button className="btn btn-delete" onClick={this.removeArticle}>Delete Article</button>
                                            <button onClick={this.handleHideClick} className='btn btnhide'>Hide Article</button>
                                        </p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            );
        }
    });

    const ArticleList = React.createClass({
        getInitialState() {
            return {
                value: 'Search...'
            }
        },

        searchName(event) {
            this.setState({value: event.target.value});
        },

        render (){
            var articles = this.props.data.map((article)=> {
                    return (
                        <Article name={article.name} description={article.description} key={article.id} id={article.id}/>
                    )
                }
            );
            const lowercasedValue = this.state.value.toLowerCase();
            const filteredData = this.props.data.filter(item => {
                return Object.keys(item).some(key =>
                    typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedValue)
                );
            });
            return(
                <div className="list-group">
                    <div>
                        <input type="text" placeholder={this.state.value} className="inputSearch" onChange={(e) => this.searchName(e)} id="inputs"/>
                    </div>
                    <div className="spacesBetweenSearchAndArticles">
                        {/*<i className="fas fa-search"/>*/}
                        {
                            filteredData.map(member =>
                                <Article
                                    key={member.id}
                                    name={member.name}
                                    description={member.description}
                                />
                            )
                        }
                    </div>
                    <div className="panel-group" id="accordion">
                        {articles}
                    </div>
                </div>
            );
        }
    });

    const ArticleForm = React.createClass({
        getInitialState() {
            return {
                value: ''
            }
        },

        handleChange(e) {
            this.setState({ value: e.target.value });
        },

        getRawMarkup() {
            const md = new Remarkable();
            return { __html: md.render(this.state.value) };
        },

        render (){
            return(
                <form className="form-horizontal">
                    <fieldset>
                        <div className="form-group">
                            <label for="articleName" className="col-lg-2 control-label">Article Title</label>
                            <div className="col-lg-10">
                                <input type="text" className="form-control" id="articleName"/>
                            </div>
                        </div>
                        {/*<div className="form-group">*/}
                        {/*    <label for="components" className="col-lg-2 control-label">Components</label>*/}
                        {/*    <div className="col-lg-10">*/}
                        {/*        <textarea className="form-control" rows="3" id="components"></textarea>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="form-group">
                            <label for="description" className="col-lg-2 control-label">Description</label>
                            <div className="col-lg-10">
                                <textarea
                                    className="form-control"
                                    rows="3" id="description"
                                    onChange={this.handleChange}
                                    defaultValue={this.state.value}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description" className="col-lg-2 control-label">Preview</label>
                            <div className="col-lg-10">
                                <div
                                    className="form-control"
                                    dangerouslySetInnerHTML={this.getRawMarkup()}
                                />
                            </div>
                        </div>
                    </fieldset>
                </form>
            );
        }
    });

    const Modal = React.createClass({
        changeArticleBox (e){
            let dataToUpdate = JSON.parse(localStorage.getItem('articlesData'));
            let id = 0, newRecipe = true;
            for (let i = 0; i < dataToUpdate.length; i++){
                if (dataToUpdate[i].name === document.getElementById("articleName").value){
                    id = dataToUpdate[i].id;
                    newRecipe=false;
                    break;
                } else {
                    id = dataToUpdate.length;
                }
            }

            if (document.getElementById("articleName").value && document.getElementById("description").value){
                if (newRecipe){
                    dataToUpdate.push({});
                    dataToUpdate[dataToUpdate.length-1].id = id;
                }

                dataToUpdate[id].name=document.getElementById("articleName").value;
                // dataToUpdate[id].components=document.getElementById("components").value.split(",");
                dataToUpdate[id].description=document.getElementById("description").value;
            }
            localStorage.setItem('articlesData', JSON.stringify(dataToUpdate));
            renderDom(<ArticleBox data={dataToUpdate}/>, 'content');
        },
        render (){
            return(
                <div id="myModal" className="modal fade" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                <h4 className="modal-title" id="myModalLabel">Article</h4>
                            </div>
                            <div className="modal-body">
                                <div className="well bs-component" id="testForm">
                                    <ArticleForm />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btndefault" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btnprimary" data-dismiss="modal" onClick={this.changeArticleBox}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });

    const ArticleBox = React.createClass({
        addNewArticle (){
            document.getElementById("articleName").value="";
            // document.getElementById("components").value="";
            document.getElementById("description").value="";
        },

        render (){
            return(
                <div className="container">
                    <h1 className="mainTitle">Articles</h1>
                    <ArticleList data={this.props.data}/>
                    <button className="buttonAddArticle" data-toggle="modal" data-target="#myModal" onClick={this.addNewArticle}>Create New Article</button>
                </div>
            )
        }
    });

    function renderDom(element, id){
        ReactDOM.render(element, document.getElementById(id));
    }

    renderDom(<Modal />, 'source-modal');
    renderDom(<ArticleBox data={JSON.parse(localStorage.getItem('articlesData'))}/>, 'content');
    //renderDom(<SearchBox/>, 'root');
})();







