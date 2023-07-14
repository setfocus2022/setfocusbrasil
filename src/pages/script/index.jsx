import React from 'react';

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "http://writer.zohopublic.com/writer/docroll/804862010/10";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <h1>Exemplo de como implementar um script em React JS</h1>
      </div>
    );
  }
}

export default App;
