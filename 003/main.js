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

//4
const Note = React.createClass ({
    handleDelete() {
        this.props.onDelete(this.props.id);
    },

    render (){
        const {
            color,
            children
        } = this.props;

        return (
            <div className="note" style={{backgroundColor: color}}>
                <div>
                    <span className="delete_note" onClick={this.handleDelete}> x </span>
                </div>
                { children }
            </div>
        )
    },
});

const NoteSearch = React.createClass({
    render() {
        return (
            <input className="noteSearch" type="search" placeholder="Search..." onChange={this.props.onSearch}/>
        );
    }
});

const NoteColors = React.createClass({
    render() {
        let colors = ['#E63462', '#FE5F55', '#8bef54', '#008536', '#00B4A6', '#007DB6', '#9c00ff'];
        return (
            <div className="colors-list">
                {
                    colors.map((el, i) => {
                        return (
                            <div key={i} style={{backgroundColor: el}}>
                                <input
                                    className="radio-custom"
                                    id={el}
                                    type="radio"
                                    name="color"
                                    onChange={(e)=>this.props.onColorChanged(e, el)}
                                />
                                <label className="radio-custom-label" htmlFor={el}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
});

const NoteEditor = React.createClass ({
    getInitialState() {
        this._hadleColorChange = this.hadleColorChange.bind(this);

        return {
            text: '',
            color: '',
            checked: false
        }
    },

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    },

    handleNoteAdd() {
        const newNote = {
            text: this.state.text,
            id: Date.now(),
            color: this.state.color
        };
        this.props.onNoteAdd(newNote);

        if(this.state.checked)
            this.input.checked = false;

        this.resetState();
    },

    hadleColorChange(e, color) {
        this.input = e.target;
        this.setState({
            color: color,
            checked: e.target.checked
        })
    },

    resetState() {
        this.setState({
            text: '',
        });
    },

    render (){
        return (
            <div className="editor">
                <textarea
                    rows={5}
                    placeholder="Enter your note here..."
                    className="editor_textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />

                <div className="controls">
                    <NoteColors onColorChanged={this._hadleColorChange}/>
                </div>

                {
                    // this.state.text
                    // &&
                    <button
                        className="editor_button"
                        onClick={this.handleNoteAdd}
                    >
                        Add
                    </button>
                }
            </div>
        )
    },
});

const NoteGrid = React.createClass ({
    componentDidMount() {
        this.msnry = new Masonry(this.grid, {
            columnWidth: 300,
            gutter: 10,
            isFitWidth: true
        })
    },

    componentDidUpdate(prevProps) {
        if(prevProps.notes !== this.props.notes){
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    render (){
        const {
            notes,
            onNoteDelete
        } = this.props;

        return (
            <div className="grid" ref={c => this.grid = c}>
                {
                    notes.map(note =>
                        <Note
                            key={note.id}
                            id={note.id}
                            color={note.color}
                            onDelete={onNoteDelete}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </div>
        )
    },
});

const NotesApp = React.createClass ({
    getInitialState() {
        return {
            notes: []
        }
    },

    componentDidMount() {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));

        if(savedNotes) {
            this.setState({ notes: savedNotes})
        }
    },

    componentDidUpdate(prevProps, prevState) {
        if(prevState.notes !== this.state.notes) {
            this.saveToLocalStorage();
        }
    },

    handleNoteAdd(newNote) {
        this.setState({
            notes: [newNote, ...this.state.notes]
        });
    },

    handleNoteDelete(noteId) {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        })
    },

    saveToLocalStorage() {
        const notes = JSON.stringify(this.state.notes);

        localStorage.setItem('notes', notes)
    },

    render (){
        return (
            <div style={{textAlign: 'center'}} className="app">
                <h1 className="app_header">NoteApp</h1>

                <NoteEditor onNoteAdd={this.handleNoteAdd}/>

                <NoteGrid
                    notes={this.state.notes}
                    onNoteDelete={this.handleNoteDelete}
                />
            </div>
        )
    },
});

ReactDOM.render (
    <NotesApp />,
    document.getElementById('root')
);











    // render() {
    //     let searchQuery = this.state.value.toLowerCase();
    //     let displayedNotes = !this.state.value ? this.props.notes : this.props.notes.filter(function(item) {
    //         let searchValue = item.about.toLowerCase();
    //         return searchValue.indexOf(searchQuery) !== -1;
    //     });
    //     console.log(displayedNotes);
    //     return (
    //         <div>
    //             <NoteSearch onSearch={this.handleSearch}/>
    //             <div ref={(div) => this.grid = div} className="notes-grid">
    //                 {
    //                     displayedNotes.map((note) => {
    //                         return (
    //                             <Note
    //                                 key={note.id}
    //                                 color={note.color}
    //                                 onDelete={this.props.onNoteDelete.bind(null, note)}
    //                             >{note.about}</Note>
    //                         );
    //                     })
    //                 }
    //             </div>
    //         </div>
    //     );
    // }




