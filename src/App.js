import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Clock from './components/Clock';
import './index.css';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header title='Timeline' />
                <Clock />
                <Content content={[
                    {
                      timestamp: new Date().getTime(),
                      text: "Ate lunch",
                      user: {
                        id: 1, name: 'Nate',
                        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                      },
                      comments: [{ from: 'Ari', text: 'Me too!' }]
                    },
                    {
                      timestamp: new Date().getTime(),
                      text: "Woke up early for a beautiful run",
                      user: {
                        id: 2, name: 'Ari',
                        avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
                      },
                      comments: [{ from: 'Nate', text: 'I am so jealous' }]
                    },
                  ]}/>
            </div>
        );
    }
}

export default App;
