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
const MEMBERS = [
    {
        id: 1,
        name: 'Василий',
        surname: 'Пупкин',
        // author: 'Василий Пупкин',
        avatar: 'https://advokat-spb.org/wp-content/uploads/2014/10/3dfc3f46ca8c3c8a1951307894b50dcf_images-for-profile-silhouette-unknown-person-clipart_1280-1024.jpeg',
        city: 'Киев'
    },
    {
        id: 2,
        name: 'Петр',
        surname: 'Петров',
        //author: 'Петр Петров',
        avatar: 'https://advokat-spb.org/wp-content/uploads/2014/10/3dfc3f46ca8c3c8a1951307894b50dcf_images-for-profile-silhouette-unknown-person-clipart_1280-1024.jpeg',
        city: 'Львов'
    },
    {
        id: 3,
        name: 'Анастасия',
        surname: 'Адвокатова',
        //author: 'Анастасия Адвокатова',
        avatar: 'https://advokat-spb.org/wp-content/uploads/2014/10/3dfc3f46ca8c3c8a1951307894b50dcf_images-for-profile-silhouette-unknown-person-clipart_1280-1024.jpeg',
        city: 'Сумы'
    },
    {
        id: 4,
        name: 'Анна',
        surname: 'Морозова',
        //author: 'Анна Морозова',
        avatar: 'https://advokat-spb.org/wp-content/uploads/2014/10/3dfc3f46ca8c3c8a1951307894b50dcf_images-for-profile-silhouette-unknown-person-clipart_1280-1024.jpeg',
        city: 'Днепр'
    },
];

const GroupList = React.createClass({
    render() {
        const {
            avatar,
            //author,
            city,
            name,
            surname
        } = this.props;

        return (
            <div className="list">
                <img className="list-avatar" src={avatar} />

                <div className="list-body">
                    <p>{name}</p>
                    <p>{surname}</p>

                    <i className="fas fa-map-marker-alt"/>
                    <span className="list-city">{city}</span>

                    <div className="list-stats">
                        <div className="list-icons">
                            <a
                                className="list-author"
                                href={'https://facebook.com/'}
                                target="blank"
                            >
                                <i className="fab fa-facebook-square"/>
                            </a>
                        </div>
                        <div className="list-icons">
                            <a
                                className="list-author"
                                href={'https://github.com/'}
                                target="blank"
                            >
                                <i className="fab fa-github-square"/>
                            </a>
                        </div>
                        <div className="list-icons">
                            <a
                                className="list-author"
                                href={'https://mail.google.com/'}
                                target="blank"
                            >
                                <i className="fas fa-envelope-square"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

const Feed = React.createClass({
    getInitialState() {
        return {
            value: 'Поиск...'
        }
    },

    searchName(event) {
      this.setState({value: event.target.value.toLowerCase()});
      let matches = MEMBERS.filter((value) => {return value.name.indexOf(this.state.value) !== -1});
      console.log(matches);
    },

    render() {
        return (
            <div>
                <h1 className="list-header">Meet React Course Members</h1>
                <div className="searchWrap">
                    <i className="fas fa-search"/>
                    <input type="text" placeholder={this.state.value} className="searchInput" onChange={(e) => this.searchName(e)} id="inputs"/>
                </div>
                {
                    MEMBERS.map(member =>
                        <GroupList
                            key={member.id}
                            // author={member.author}
                            name={member.name}
                            surnname={member.surname}
                            city={member.city}
                            avatar={member.avatar}
                        />
                    )
                }
            </div>
        );
    }
});

ReactDOM.render(
    <Feed />,
    document.getElementById('root')
);

